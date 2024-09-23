import { SpeedySize } from 'speedy-vision/types/core/speedy-size';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyMedia } from 'speedy-vision/types/core/speedy-media';
import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
import { SpeedyPoint2 } from 'speedy-vision/types/core/speedy-point';
import { SpeedyPipeline, SpeedyPipelineOutput } from 'speedy-vision/types/core/pipeline/pipeline';
import { ImageTracker, ImageTrackerOutput, ImageTrackerStateName } from '../image-tracker';
/** State output */
export interface ImageTrackerStateOutput {
    readonly trackerOutput: ImageTrackerOutput;
    readonly nextState: ImageTrackerStateName;
    readonly nextStateSettings?: Record<string, any>;
}
/**
 * Abstract state of the Image Tracker
 */
export declare abstract class ImageTrackerState {
    /** image tracker */
    protected readonly _imageTracker: ImageTracker;
    /** state name */
    protected readonly _name: ImageTrackerStateName;
    /** pipeline */
    protected _pipeline: SpeedyPipeline;
    /**
     * Constructor
     * @param name
     * @param imageTracker
     */
    constructor(name: ImageTrackerStateName, imageTracker: ImageTracker);
    /**
     * State name
     */
    get name(): ImageTrackerStateName;
    /**
     * AR screen size
     */
    get screenSize(): SpeedySize;
    /**
     * Initialize the state
     */
    init(): void;
    /**
     * Release resources
     */
    release(): null;
    /**
     * Update the state
     * @param media user media
     * @param screenSize AR screen size for image processing
     * @param state all states
     * @returns promise
     */
    update(media: SpeedyMedia, screenSize: SpeedySize): SpeedyPromise<ImageTrackerStateOutput>;
    /**
     * Called as soon as this becomes the active state, just before update() runs for the first time
     * @param settings
     */
    onEnterState(settings: Record<string, any>): void;
    /**
     * Called when leaving the state, after update()
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
    protected abstract _afterUpdate(result: SpeedyPipelineOutput): SpeedyPromise<ImageTrackerStateOutput>;
    /**
     * Create & setup the pipeline
     * @returns pipeline
     */
    protected abstract _createPipeline(): SpeedyPipeline;
    /**
     * Find the coordinates of a polyline surrounding the target image
     * @param homography maps the target image to the AR screen
     * @param targetSize size of the target space
     * @returns promise that resolves to 4 points in AR screen space
     */
    protected _findPolylineCoordinates(homography: SpeedyMatrix, targetSize: SpeedySize): SpeedyPromise<SpeedyMatrix>;
    /**
     * Find a polyline surrounding the target image
     * @param homography maps the target image to the AR screen
     * @param targetSize size of the target space
     * @returns promise that resolves to 4 points in AR screen space
     */
    protected _findPolyline(homography: SpeedyMatrix, targetSize: SpeedySize): SpeedyPromise<SpeedyPoint2[]>;
    /**
     * Whether or not to rotate the warped image in order to best fit the AR screen
     * @param media media associated with the reference image
     * @param screenSize AR screen
     * @returns boolean
     */
    protected _mustRotateWarpedImage(media: SpeedyMedia, screenSize: SpeedySize): boolean;
    /**
     * Find a rectification matrix to be applied to an image fitting the entire AR screen
     * @param media media associated with the reference image
     * @param screenSize AR screen
     * @returns promise that resolves to a rectification matrix
     */
    protected _findRectificationMatrixOfFullscreenImage(media: SpeedyMedia, screenSize: SpeedySize): SpeedyPromise<SpeedyMatrix>;
    /**
     * Find a rectification matrix to be applied to the target image
     * @param homography maps a reference image to the AR screen
     * @param targetSize size of the target space
     * @param media media associated with the reference image
     * @param screenSize AR screen
     * @returns promise that resolves to a rectification matrix
     */
    protected _findRectificationMatrixOfCameraImage(homography: SpeedyMatrix, targetSize: SpeedySize, media: SpeedyMedia, screenSize: SpeedySize): SpeedyPromise<SpeedyMatrix>;
}
//# sourceMappingURL=state.d.ts.map