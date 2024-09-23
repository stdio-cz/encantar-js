import { SpeedySize } from 'speedy-vision/types/core/speedy-size';
import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
import { SpeedyPoint2 } from 'speedy-vision/types/core/speedy-point';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
/** Index of the horizontal focal length in the camera intrinsics matrix (column-major format) */
export declare const FX = 0;
/** Index of the vertical focal length in the camera intrinsics matrix */
export declare const FY = 4;
/** Index of the horizontal position of the principal point in the camera intrinsics matrix */
export declare const U0 = 6;
/** Index of the vertical position of the principal point in the camera intrinsics matrix */
export declare const V0 = 7;
/**
 * Camera model
 */
export declare class CameraModel {
    /** size of the image sensor, in pixels */
    private _screenSize;
    /** 3x4 camera matrix */
    private _matrix;
    /** intrinsics matrix, in column-major format */
    private _intrinsics;
    /** extrinsics matrix, in column-major format */
    private _extrinsics;
    /** filter: samples of partial rotation matrix [ r1 | r2 ] */
    private _partialRotationBuffer;
    /** filter: samples of translation vector t */
    private _translationBuffer;
    /**
     * Constructor
     */
    constructor();
    /**
     * Initialize the model
     * @param screenSize
     */
    init(screenSize: SpeedySize): void;
    /**
     * Release the model
     */
    release(): null;
    /**
     * Update the camera model
     * @param homography 3x3 perspective transform
     * @param screenSize may change over time (e.g., when going from portrait to landscape or vice-versa)
     * @returns promise that resolves to a camera matrix
     */
    update(homography: SpeedyMatrix, screenSize: SpeedySize): SpeedyPromise<SpeedyMatrix>;
    /**
     * Reset camera model
     */
    reset(): void;
    /**
     * The camera matrix that maps the 3D normalized space [-1,1]^3 to the
     * 2D AR screen space (measured in pixels)
     * @returns 3x4 camera matrix
     */
    get matrix(): SpeedyMatrix;
    /**
     * Camera intrinsics matrix
     * @returns 3x3 intrinsics matrix in column-major format
     */
    get intrinsics(): number[];
    /**
     * Camera extrinsics matrix
     * @returns 3x4 extrinsics matrix [ R | t ] in column-major format
     */
    get extrinsics(): number[];
    /**
     * Convert coordinates from normalized space [-1,1]^3 to a
     * "3D pixel space" based on the dimensions of the AR screen.
     *
     * We perform a 180-degrees rotation around the x-axis so that
     * it looks nicer (the y-axis grows downwards in image space).
     *
     * The final camera matrix is P = K * [ R | t ] * C, where
     * C is this conversion matrix. The intent behind this is to
     * make tracking independent of target and screen sizes.
     *
     * Reminder: we use a right-handed coordinate system in 3D!
     * In 2D image space the coordinate system is left-handed.
     *
     * @returns 4x4 conversion matrix C
     */
    denormalizer(): SpeedyMatrix;
    /**
     * Size of the AR screen space, in pixels
     * @returns size in pixels
     */
    get screenSize(): SpeedySize;
    /**
     * Focal length in pixel units (projection distance in the pinhole camera model)
     * same as (focal length in mm) * (number of pixels per world unit in pixels/mm)
     * @returns focal length
     */
    get focalLength(): number;
    /**
     * Horizontal field-of-view, given in radians
     * @returns vertical field-of-view
     */
    get fovx(): number;
    /**
     * Vertical field-of-view, given in radians
     * @returns vertical field-of-view
     */
    get fovy(): number;
    /**
     * Principal point
     * @returns principal point, in pixel coordinates
     */
    principalPoint(): SpeedyPoint2;
    /**
     * Reset camera extrinsics
     */
    private _resetExtrinsics;
    /**
     * Reset camera intrinsics
     */
    private _resetIntrinsics;
    /**
     * Compute a normalized homography H^ = K^(-1) * H for an
     * ideal pinhole with f = 1 and principal point = (0,0)
     * @param homography homography H to be normalized
     * @returns normalized homography H^
     */
    private _normalizeHomography;
    /**
     * Estimate [ r1 | r2 | t ], where r1, r2 are orthonormal and t is a translation vector
     * @param normalizedHomography based on the ideal pinhole (where calibration K = I)
     * @returns a 3x3 matrix
     */
    private _estimatePartialPose;
    /**
     * Make two non-zero and non-parallel input vectors, r1 and r2, orthonormal
     * @param rot rotation vectors [ r1 | r2 ] in column-major format
     * @returns a 3x2 matrix R such that R'R = I (column-major format)
     */
    private _refineRotation;
    /**
     * Compute a refined translation vector
     * @param normalizedHomography ideal pinhole K = I
     * @param rot rotation vectors [ r1 | r2 ] in column-major format
     * @param t0 initial estimate for the translation vector
     * @returns 3x1 translation vector in column-major format
     */
    private _refineTranslation;
    /**
     * Apply a smoothing filter to the partial pose
     * @param partialPose 3x3 [ r1 | r2 | t ]
     * @returns filtered partial pose
     */
    private _filterPartialPose;
    /**
     * Estimate extrinsics [ R | t ] given a partial pose [ r1 | r2 | t ]
     * @param partialPose
     * @returns 3x4 matrix
     */
    private _estimateFullPose;
    /**
     * Estimate the pose [ R | t ] given a homography in AR screen space
     * @param homography must be valid
     * @returns 3x4 matrix
     */
    private _estimatePose;
}
//# sourceMappingURL=camera-model.d.ts.map