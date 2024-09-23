import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyPipeline, SpeedyPipelineOutput } from 'speedy-vision/types/core/pipeline/pipeline';
import { ImageTracker } from '../image-tracker';
import { ImageTrackerState, ImageTrackerStateOutput } from './state';
/**
 * The tracking state of the Image Tracker tracks
 * keypoints of the image target and updates the
 * rectification matrix
 */
export declare class ImageTrackerTrackingState extends ImageTrackerState {
    /** tracked image */
    private _referenceImage;
    /** current homography (for warping) */
    private _warpHomography;
    /** current homography (for computing the pose) */
    private _poseHomography;
    /** initial homography (i.e., the homography we found when we first started tracking) */
    private _initialHomography;
    /** initial keypoints (i.e., the keypoints we found when we first started tracking) */
    private _initialKeypoints;
    /** a helper */
    private _counter;
    /** camera model */
    private _camera;
    /** predicted keypoints */
    private _predictedKeypoints;
    /** last pipeline output */
    private _lastPipelineOutput;
    /** a helper */
    private _pipelineCounter;
    /** last output */
    private _lastOutput;
    /** the number of consecutive frames in which we have lost the tracking */
    private _lostCounter;
    /**
     * Constructor
     * @param imageTracker
     */
    constructor(imageTracker: ImageTracker);
    /**
     * Called as soon as this becomes the active state, just before update() runs for the first time
     * @param settings
     */
    onEnterState(settings: Record<string, any>): void;
    /**
     * Called when leaving the state
     */
    onLeaveState(): void;
    /**
     * Called just before the GPU processing
     * @returns promise
     */
    protected _beforeUpdate(): SpeedyPromise<void>;
    /**
     * GPU processing
     * @returns promise with the pipeline results
     */
    protected _gpuUpdate(): SpeedyPromise<SpeedyPipelineOutput>;
    /**
     * Post processing that takes place just after the GPU processing
     * @param result pipeline results
     * @returns state output
     */
    protected _afterUpdate(result: SpeedyPipelineOutput): SpeedyPromise<ImageTrackerStateOutput>;
    /**
     * Find quality matches between two sets of keypoints
     * @param currKeypoints keypoints of the current frame
     * @param prevKeypoints keypoints of the previous frame
     * @returns quality matches
     */
    private _findQualityMatches;
    /**
     * Find a better spatial distribution of the input matches
     * @param matches quality matches
     * @returns refined quality matches
     */
    private _refineQualityMatches;
    /**
     * Spatially distribute keypoints over a grid
     * @param keypoints keypoints to be distributed
     * @param gridCells number of grid elements in each axis
     * @returns a list of indices of keypoints[]
     */
    private _distributeKeypoints;
    /**
     * Normalize points to [0,1)^2
     * @param points 2 x n matrix of points in column-major format
     * @returns points
     */
    private _normalizePoints;
    /**
     * Find a matrix with the coordinates of quality matches
     * @param matches n quality matches
     * @returns a 2 x 2n matrix split into two 2 x n blocks [ prevKeypoints | currKeypoints ]
     */
    private _findMatrixOfMatches;
    /**
     * Preprocess keypoint matches
     * @param currKeypoints keypoints of the current frame
     * @param prevKeypoints keypoints of the previous frame
     * @returns a promise that is rejected if there are not enough "good" matches, or that is resolved to a
     *          2 x 2n matrix split into two 2 x n blocks [ source x,y coordinates | dest x,y coordinates ]
     */
    private _preprocessMatches;
    /**
     * Find an affine motion model of the target image
     * @param preprocessedMatches 2 x 2n matrix split into two 2 x n blocks [ src | dest ]
     * @returns a promise that resolves to a 3x3 affine motion model (last row is [ 0  0  1 ])
     */
    private _findAffineMotion;
    /**
     * Find a perspective motion model of the target image
     * @param preprocessedMatches 2 x 2n matrix split into two 2 x n blocks [ src | dest ]
     * @returns a promise that resolves to a 3x3 perspective motion model
     */
    private _findPerspectiveMotion;
    /**
     * Find a rectification matrix to be applied to the target image
     * @param homography maps a reference image to the AR screen
     * @param media target
     * @param screenSize AR screen
     * @returns promise that resolves to a rectification matrix
     */
    private _findImageWarp;
    /**
     * Find a warp to be applied to the keypoints
     * @returns affine transform
     */
    private _findKeypointWarp;
    /**
     * Predict the keypoints without actually looking at the image
     * @param curr keypoints at time t (will modify the contents)
     * @param initial keypoints at time t-1 (not just t = 0)
     * @returns keypoints at time t+1
     */
    private _predictKeypoints;
    /**
     * Create & setup the pipeline
     * @returns pipeline
     */
    protected _createPipeline(): SpeedyPipeline;
}
//# sourceMappingURL=tracking.d.ts.map