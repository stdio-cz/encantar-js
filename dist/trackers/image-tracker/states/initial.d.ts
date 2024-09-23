import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyPipeline, SpeedyPipelineOutput } from 'speedy-vision/types/core/pipeline/pipeline';
import { ImageTracker } from '../image-tracker';
import { ImageTrackerState, ImageTrackerStateOutput } from './state';
/**
 * The purpose of the initial state of the Image Tracker
 * is to initialize the training state using the state machine
 */
export declare class ImageTrackerInitialState extends ImageTrackerState {
    /**
     * Constructor
     * @param imageTracker
     */
    constructor(imageTracker: ImageTracker);
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
     * Create & setup the pipeline
     * @returns pipeline
     */
    protected _createPipeline(): SpeedyPipeline;
}
//# sourceMappingURL=initial.d.ts.map