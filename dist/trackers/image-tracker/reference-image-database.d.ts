import { SpeedyMedia } from 'speedy-vision/types/core/speedy-media';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { ReferenceImage } from './reference-image';
/**
 * A collection of Reference Images
 */
export declare class ReferenceImageDatabase implements Iterable<ReferenceImage> {
    /** Image database */
    private _database;
    /** Maximum number of entries */
    private _capacity;
    /** Is the database locked? */
    private _locked;
    /**
     * Constructor
     */
    constructor();
    /**
     * The number of reference images stored in this database
     */
    get count(): number;
    /**
     * Maximum number of elements
     */
    get capacity(): number;
    /**
     * Maximum number of elements
     * Increasing the capacity is considered experimental
     */
    set capacity(value: number);
    /**
     * Iterates over the collection
     */
    [Symbol.iterator](): Iterator<ReferenceImage>;
    /**
     * Add reference images to this database
     * Add only the images you actually need to track!
     * (each image take up storage space)
     * @param referenceImages one or more reference images with unique names (a unique name will
     *                        be generated automatically if you don't specify one)
     * @returns a promise that resolves as soon as the images are loaded and added to this database
     */
    add(referenceImages: ReferenceImage[]): SpeedyPromise<void>;
    /**
     * Lock the database, so that new reference images can no longer be added to it
     * @internal
     */
    _lock(): void;
    /**
     * Get the media object associated to a reference image
     * @param name reference image name
     * @returns media
     * @internal
     */
    _findMedia(name: string): SpeedyMedia;
}
//# sourceMappingURL=reference-image-database.d.ts.map