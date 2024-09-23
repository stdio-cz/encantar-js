import { SpeedyMedia } from 'speedy-vision/types/core/speedy-media';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { Nullable } from '../utils/utils';
import { Source } from './source';
/**
 * HTMLCanvasElement-based source of data
 */
export declare class CanvasSource implements Source {
    /** canvas element */
    private _canvas;
    /** media source */
    protected _media: Nullable<SpeedyMedia>;
    /**
     * Constructor
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * A type-identifier of the source of data
     * @internal
     */
    get _type(): string;
    /**
     * Get media
     * @internal
     */
    get _data(): SpeedyMedia;
    /**
     * Stats related to this source of data
     * @internal
     */
    get _stats(): string;
    /**
     * Initialize this source of data
     * @returns a promise that resolves as soon as this source of data is initialized
     * @internal
     */
    _init(): SpeedyPromise<void>;
    /**
     * Release this source of data
     * @returns a promise that resolves as soon as this source of data is released
     * @internal
     */
    _release(): SpeedyPromise<void>;
}
//# sourceMappingURL=canvas-source.d.ts.map