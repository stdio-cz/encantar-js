import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
/**
 * A 3D transformation
 */
declare abstract class BaseTransform {
    /** 4x4 matrix describing the transformation */
    protected readonly _matrix: SpeedyMatrix;
    /**
     * Constructor
     * @param matrix a 4x4 matrix
     */
    constructor(matrix: SpeedyMatrix);
    /**
     * The 4x4 transformation matrix (read-only)
     */
    get matrix(): SpeedyMatrix;
}
/**
 * An invertible 3D transformation
 */
declare class InvertibleTransform extends BaseTransform {
    /**
     * Constructor
     * @param matrix a 4x4 matrix
     */
    constructor(matrix: SpeedyMatrix);
    /**
     * The inverse of the transform
     */
    get inverse(): InvertibleTransform;
}
/**
 * A 3D transformation described by translation, rotation and scale
 */
export declare class StandardTransform extends InvertibleTransform {
    /**
     * Constructor
     * @param matrix a 4x4 matrix
     */
    constructor(matrix: SpeedyMatrix);
    /**
     * The inverse of the transform
     */
    get inverse(): StandardTransform;
}
/**
 * A 3D transformation described by position and orientation
 */
export declare class RigidTransform extends StandardTransform {
    /**
     * Constructor
     * @param matrix a 4x4 matrix
     */
    constructor(matrix: SpeedyMatrix);
    /**
     * The inverse of the transform
     */
    get inverse(): RigidTransform;
}
export {};
//# sourceMappingURL=transform.d.ts.map