import Speedy from 'speedy-vision';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { Settings } from './core/settings';
import { Session, SessionOptions } from './core/session';
import { TrackerFactory } from './trackers/tracker-factory';
import { SourceFactory } from './sources/source-factory';
import { Viewport, ViewportSettings } from './core/viewport';
/**
 * GPU-accelerated Augmented Reality for the web
 */
export default class AR {
    /**
     * Start a new session
     * @param options
     * @returns a promise that resolves to a new session
     */
    static startSession(options?: SessionOptions): SpeedyPromise<Session>;
    /**
     * Trackers
     */
    static get Tracker(): typeof TrackerFactory;
    /**
     * Sources of data
     */
    static get Source(): typeof SourceFactory;
    /**
     * Create a viewport
     * @param settings
     * @returns a new viewport with the specified settings
     */
    static Viewport(settings: ViewportSettings): Viewport;
    /**
     * Global Settings
     */
    static get Settings(): typeof Settings;
    /**
     * Engine version
     */
    static get version(): string;
    /**
     * Speedy Vision
     */
    static get Speedy(): typeof Speedy;
    /**
     * Checks if the engine can be run in the browser the client is using
     * @returns true if the engine is compatible with the browser
     */
    static isSupported(): boolean;
}
//# sourceMappingURL=main.d.ts.map