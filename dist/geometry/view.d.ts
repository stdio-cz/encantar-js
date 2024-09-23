import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
import { CameraModel } from './camera-model';
/**
 * A view of the 3D world at a moment in time,
 * featuring the means to project points into clip space
 */
export interface View {
    /** A 4x4 matrix that projects the viewer space into the clip space, i.e., [-1,1]^3 */
    readonly projectionMatrix: SpeedyMatrix;
}
/**
 * A PerspectiveView is a View defining a symmetric frustum around the z-axis
 * (perspective projection)
 */
export declare class PerspectiveView implements View {
    /** A 4x4 matrix that projects the viewer space into the clip space, i.e., [-1,1]^3 */
    private readonly _projectionMatrix;
    /** Tangent of the half of the vertical field-of-view */
    private readonly _tanOfHalfFovy;
    /** Aspect ratio of the frustum */
    private readonly _aspect;
    /** Distance of the near plane to the Z = 0 plane in viewer space */
    private readonly _near;
    /** Distance of the far plane to the Z = 0 plane in viewer space */
    private readonly _far;
    /**
     * Constructor
     * @param camera camera model
     * @param near distance of the near plane
     * @param far distance of the far plane
     */
    constructor(camera: CameraModel, near?: number, far?: number);
    /**
     * A 4x4 projection matrix for WebGL
     */
    get projectionMatrix(): SpeedyMatrix;
    /**
     * Aspect ratio of the frustum
     */
    get aspect(): number;
    /**
     * Vertical field-of-view of the frustum, measured in radians
     */
    get fovy(): number;
    /**
     * Distance of the near plane
     */
    get near(): number;
    /**
     * Distance of the far plane
     */
    get far(): number;
    /**
     * Compute a perspective projection matrix for WebGL
     * @param K camera intrinsics
     * @param near distance of the near plane
     * @param far distance of the far plane
     */
    private static _computeProjectionMatrix;
}
//# sourceMappingURL=view.d.ts.map