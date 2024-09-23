import { SpeedyMedia } from 'speedy-vision/types/core/speedy-media';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { Nullable } from '../utils/utils';
import { Source } from './source';
/**
 * HTMLVideoElement-based source of data
 */
export declare class VideoSource implements Source {
    /** video element */
    private _video;
    /** media source */
    protected _media: Nullable<SpeedyMedia>;
    /**
     * Constructor
     */
    constructor(video: HTMLVideoElement);
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
    /**
     * Handle browser-specific quirks for <video> elements
     * @param video a video element
     * @returns a promise that resolves to the input video
     */
    private _prepareVideo;
    /**
     * Handle browser-specific quirks for videos marked with autoplay
     * @param video a <video> marked with autoplay
     * @returns a promise that resolves to the input video
     */
    private _handleAutoPlay;
    /**
     * Wait for the input video to be playable
     * @param video
     * @returns a promise that resolves to the input video when it can be played
     */
    private _waitUntilPlayable;
}
//# sourceMappingURL=video-source.d.ts.map