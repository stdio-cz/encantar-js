import { VideoSource } from './video-source';
import { CanvasSource } from './canvas-source';
import { CameraSource, CameraSourceOptions } from './camera-source';
/**
 * Factory of sources of data
 */
export declare class SourceFactory {
    /**
     * Create a <video>-based source of data
     * @param video video element
     */
    static Video(video: HTMLVideoElement): VideoSource;
    /**
     * Create a <canvas>-based source of data
     * @param canvas canvas element
     */
    static Canvas(canvas: HTMLCanvasElement): CanvasSource;
    /**
     * Create a Webcam-based source of data
     * @param options optional options object
     */
    static Camera(options?: CameraSourceOptions): CameraSource;
}
//# sourceMappingURL=source-factory.d.ts.map