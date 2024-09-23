import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyPipeline, SpeedyPipelineOutput } from 'speedy-vision/types/core/pipeline/pipeline';
import { ImageTracker } from '../image-tracker';
import { ImageTrackerState, ImageTrackerStateOutput } from './state';
/**
 * Scanning state of the Image Tracker
 */
export declare class ImageTrackerScanningState extends ImageTrackerState {
    /** counts consecutive frames (matching) */
    private _counter;
    /** best homography matrix found so far */
    private _bestHomography;
    /** score related to the number of inliers (for robust homography estimation) */
    private _bestScore;
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
     * Post processing that takes place just after the GPU processing
     * @param result pipeline results
     * @returns state output
     */
    protected _afterUpdate(result: SpeedyPipelineOutput): SpeedyPromise<ImageTrackerStateOutput>;
    /**
     * Find "high quality" matches of a single reference image
     * @param keypoints
     * @returns high quality matches
     */
    private _goodMatches;
    /**
     * Find a homography matrix using matched keypoints
     * @param matchedKeypoints "good" matches only
     * @returns homography from reference image space to AR screen space & homography "quality" score
     */
    private _findHomography;
    /**
     * Create & setup the pipeline
     * @returns pipeline
     */
    protected _createPipeline(): SpeedyPipeline;
}
//# sourceMappingURL=scanning.d.ts.map