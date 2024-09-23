import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyPipeline, SpeedyPipelineOutput } from 'speedy-vision/types/core/pipeline/pipeline';
import { ImageTracker } from '../image-tracker';
import { ImageTrackerState, ImageTrackerStateOutput } from './state';
/**
 * The pre-tracking state of the Image Tracker is a new training
 * phase for the particular, actual target we'll be tracking
 */
export declare class ImageTrackerPreTrackingState extends ImageTrackerState {
    /** reference image */
    private _referenceImage;
    /** initial homography mapping the target image space to the AR screen space */
    private _homography;
    /** current step */
    private _step;
    /** stored keypoints of the reference image */
    private _referenceKeypoints;
    /** current number of iterations for warp refinement */
    private _iterations;
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
     * Called just before the GPU processing
     * @returns promise
     */
    protected _beforeUpdate(): SpeedyPromise<void>;
    /**
     * Post processing that takes place just after the GPU processing
     * @param result pipeline results
     * @returns state output
     */
    protected _afterUpdate(result: SpeedyPipelineOutput): SpeedyPromise<ImageTrackerStateOutput>;
    /**
     * Find an adjustment warp between the camera image and the reference image
     * @param dstKeypoints destination
     * @param srcKeypoints source
     * @returns a promise that resolves to a 3x3 homography
     */
    private _findWarp;
    /**
     * Find a warp to be applied to the keypoints
     * @returns affine transform
     */
    private _findKeypointWarp;
    /**
     * Change the space of the homography in order to improve tracking quality
     * @param homography mapping coordinates from normalized target space to AR screen space
     * @param screenSize AR screen size
     * @returns homography mapping coordinates from AR screen space to AR screen space
     */
    private _changeSpace;
    /**
     * Create & setup the pipeline
     * @returns pipeline
     */
    protected _createPipeline(): SpeedyPipeline;
}
//# sourceMappingURL=pre-tracking.d.ts.map