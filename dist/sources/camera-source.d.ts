import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { Resolution } from '../utils/resolution';
import { VideoSource } from './video-source';
/**
 * Options for spawning a Webcam-based source of data
 */
export interface CameraSourceOptions {
    /** resolution type for the captured images */
    resolution?: Resolution;
    /** a hint for the desired aspect ratio */
    aspectRatio?: number;
    /** additional video constraints to be passed to navigator.mediaDevices.getUserMedia() */
    constraints?: MediaTrackConstraints;
}
/**
 * Webcam-based source of data
 */
export declare class CameraSource extends VideoSource {
    /** Video element */
    private _cameraVideo;
    /** Options of the constructor */
    private _options;
    /**
     * Constructor
     */
    constructor(options: CameraSourceOptions);
    /**
     * Camera resolution
     */
    get resolution(): Resolution;
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
//# sourceMappingURL=camera-source.d.ts.map