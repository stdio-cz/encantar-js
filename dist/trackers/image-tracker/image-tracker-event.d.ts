import { ReferenceImage } from './reference-image';
import { AREvent } from '../../utils/ar-events';
/** All possible event types emitted by an Image Tracker */
export type ImageTrackerEventType = 'targetfound' | 'targetlost';
/**
 * An event emitted by an Image Tracker
 */
export declare class ImageTrackerEvent extends AREvent<ImageTrackerEventType> {
    private _referenceImage;
    /**
     * Constructor
     * @param type event type
     * @param referenceImage optional reference image
     */
    constructor(type: ImageTrackerEventType, referenceImage: ReferenceImage);
    /**
     * Reference image
     */
    get referenceImage(): ReferenceImage;
}
//# sourceMappingURL=image-tracker-event.d.ts.map