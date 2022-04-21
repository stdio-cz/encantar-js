/*
 * MARTINS.js Free Edition
 * GPU-accelerated Augmented Reality for the web
 * Copyright (C) 2022  Alexandre Martins <alemartf(at)gmail.com>
 * https://github.com/alemart/martins-js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * viewer-pose.ts
 * The pose of a virtual camera in 3D world space at a moment in time
 */

import Speedy from 'speedy-vision';
import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
import { Pose } from './pose';
import { RigidTransform } from './transform';
import { CameraModel } from './camera-model';



/**
 * The pose of a virtual camera in 3D world space at a moment in time
 */
export class ViewerPose extends Pose
{
    /** The view matrix */
    private readonly _viewMatrix: SpeedyMatrix;



    /**
     * Constructor
     * @param camera camera model
     */
    constructor(camera: CameraModel)
    {
        // compute the view matrix and its inverse in AR screen space
        const viewMatrix = ViewerPose._computeViewMatrix(camera);
        const viewMatrixInverse = RigidTransform.fromMatrix(viewMatrix).inverse.matrix;

        // perform a change of coordinates
        const M = camera.denormalizer();
        const W = camera.denormalizerInverse();
        const myViewMatrix = Speedy.Matrix(viewMatrix.times(M));
        const myViewMatrixInverse = Speedy.Matrix(W.times(viewMatrixInverse));

        // create the viewer pose
        super(RigidTransform.fromMatrix(myViewMatrixInverse));
        this._viewMatrix = myViewMatrix;
    }

    /**
     * This 4x4 matrix moves 3D points from world space to viewer space. We
     * assume that the camera is looking in the direction of the negative
     * z-axis (WebGL-friendly)
     */
    get viewMatrix(): SpeedyMatrix
    {
        return this._viewMatrix;
    }

    /**
     * Compute the view matrix in AR screen space, measured in pixels
     * @param camera
     * @returns a 4x4 matrix describing a rotation and a translation
     */
    private static _computeViewMatrix(camera: CameraModel): SpeedyMatrix
    {
        /*

        // this is the view matrix in AR screen space, measured in pixels
        // we augment the extrinsics matrix, making it 4x4 by adding a
        // [ 0  0  0  1 ] row. Below, E is a 3x4 extrinsics matrix
        const V = Speedy.Matrix(4, 4, [
            E[0], E[1], E[2], 0,
            E[3], E[4], E[5], 0,
            E[6], E[7], E[8], 0,
            E[9], E[10], E[11], 1
        ]);

        // we premultiply V by F, which performs a rotation around the
        // x-axis by 180 degrees, so that we get the 3D objects in front
        // of the camera pointing in the direction of the negative z-axis
        const F = Speedy.Matrix(4, 4, [
            1, 0, 0, 0,
            0,-1, 0, 0,
            0, 0,-1, 0,
            0, 0, 0, 1
        ]);

        Matrix F * V is matrix V with the second and third rows negated

        */

        const E = camera.extrinsics;
        return Speedy.Matrix(4, 4, [
            E[0],-E[1],-E[2], 0,
            E[3],-E[4],-E[5], 0,
            E[6],-E[7],-E[8], 0,
            E[9],-E[10],-E[11], 1
        ]);
    }
}