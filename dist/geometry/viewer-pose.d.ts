import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
import { Pose } from './pose';
import { CameraModel } from './camera-model';
/**
 * The pose of a virtual camera in 3D world space at a moment in time
 */
export declare class ViewerPose extends Pose {
    /** The view matrix */
    private readonly _viewMatrix;
    /**
     * Constructor
     * @param camera camera model
     */
    constructor(camera: CameraModel);
    /**
     * This 4x4 matrix moves 3D points from world space to viewer space. We
     * assume that the camera is looking in the direction of the negative
     * z-axis (WebGL-friendly)
     */
    get viewMatrix(): SpeedyMatrix;
    /**
     * Compute the view matrix in AR screen space, measured in pixels
     * @param camera
     * @returns a 4x4 matrix describing a rotation and a translation
     */
    private static _computeViewMatrix;
}
//# sourceMappingURL=viewer-pose.d.ts.map