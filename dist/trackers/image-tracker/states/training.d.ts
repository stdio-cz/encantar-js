import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyPipeline, SpeedyPipelineOutput } from 'speedy-vision/types/core/pipeline/pipeline';
import { SpeedyKeypoint } from 'speedy-vision/types/core/speedy-keypoint';
import { ImageTracker } from '../image-tracker';
import { ImageTrackerState, ImageTrackerStateOutput } from './state';
import { ReferenceImage } from '../reference-image';
import { Nullable } from '../../../utils/utils';
/**
 * Training state of the Image Tracker
 */
export declare class ImageTrackerTrainingState extends ImageTrackerState {
    private _currentImageIndex;
    private _image;
    private _trainingMap;
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
     * Create & setup the pipeline
     * @returns pipeline
     */
    protected _createPipeline(): SpeedyPipeline;
    /**
     * Get reference image
     * @param keypointIndex -1 if not found
     * @returns reference image
     */
    referenceImageOfKeypoint(keypointIndex: number): Nullable<ReferenceImage>;
    /**
     * Get reference image index
     * @param keypointIndex -1 if not found
     * @returns reference image index, or -1 if not found
     */
    referenceImageIndexOfKeypoint(keypointIndex: number): number;
    /**
     * Get keypoint of the trained set
     * @param keypointIndex -1 if not found
     * @returns a keypoint
     */
    referenceKeypoint(keypointIndex: number): Nullable<SpeedyKeypoint>;
}
//# sourceMappingURL=training.d.ts.map