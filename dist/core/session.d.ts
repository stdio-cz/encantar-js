import { SpeedyMedia } from 'speedy-vision/types/core/speedy-media';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { Nullable } from '../utils/utils';
import { AREventTarget } from '../utils/ar-events';
import { Viewport } from './viewport';
import { Frame } from './frame';
import { Tracker } from '../trackers/tracker';
import { Time } from './time';
import { Gizmos } from './gizmos';
import { Source } from '../sources/source';
/** Session mode */
export type SessionMode = 'immersive' | 'inline';
/** Session options */
export interface SessionOptions {
    /** session mode */
    mode?: SessionMode;
    /** trackers */
    trackers: Tracker[];
    /** sources of data */
    sources: Source[];
    /** viewport */
    viewport: Nullable<Viewport>;
    /** show stats? */
    stats?: boolean;
    /** Render gizmos? */
    gizmos?: boolean;
}
/** requestAnimationFrame callback */
type SessionRequestAnimationFrameCallback = (time: DOMHighResTimeStamp, frame: Frame) => void;
/** requestAnimationFrame callback handle */
type SessionRequestAnimationFrameHandle = symbol;
/** All possible event types emitted by a Session */
type SessionEventType = 'end';
/**
 * A Session represents an intent to display AR content
 * and encapsulates the main loop (update-render cycle)
 */
export declare class Session extends AREventTarget<SessionEventType> {
    /** Number of active sessions */
    private static _count;
    /** Session mode */
    private readonly _mode;
    /** Attached trackers */
    private _trackers;
    /** Sources of data */
    private readonly _sources;
    /** Rendering viewport */
    private readonly _viewport;
    /** Time Manager */
    private _time;
    /** Is the session currently active? */
    private _active;
    /** Whether or not the frame is ready to be rendered */
    private _frameReady;
    /** Request animation frame callback queue */
    private _rafQueue;
    /** Update stats (GPU cycles/s) */
    private _updateStats;
    /** Render stats (FPS) */
    private _renderStats;
    /** Stats panel */
    private _statsPanel;
    /** Gizmos */
    private _gizmos;
    /**
     * Constructor
     * @param sources previously initialized sources of data
     * @param mode session mode
     * @param viewport viewport
     * @param stats render stats panel?
     * @param gizmos render gizmos?
     */
    private constructor();
    /**
     * Checks if the engine can be run in the browser the client is using
     * @returns true if the engine is compatible with the browser
     */
    static isSupported(): boolean;
    /**
     * Instantiate a session
     * @param options options
     * @returns a promise that resolves to a new session
     */
    static instantiate(options?: SessionOptions): SpeedyPromise<Session>;
    /**
     * Number of active sessions
     */
    static get count(): number;
    /**
     * End the session
     * @returns promise that resolves after the session is shut down
     */
    end(): SpeedyPromise<void>;
    /**
     * Analogous to window.requestAnimationFrame()
     * @param callback
     * @returns a handle
     */
    requestAnimationFrame(callback: SessionRequestAnimationFrameCallback): SessionRequestAnimationFrameHandle;
    /**
     * Analogous to window.cancelAnimationFrame()
     * @param handle a handle returned by this.requestAnimationFrame()
     */
    cancelAnimationFrame(handle: SessionRequestAnimationFrameHandle): void;
    /**
     * The underlying media (generally a camera stream)
     * @internal
     */
    get media(): SpeedyMedia;
    /**
     * Session mode
     */
    get mode(): SessionMode;
    /**
     * Rendering viewport
     */
    get viewport(): Viewport;
    /**
     * Time utilities
     */
    get time(): Time;
    /**
     * Visual cues for testing & debugging
     */
    get gizmos(): Gizmos;
    /**
     * Attach a tracker to the session
     * @param tracker
     */
    private _attachTracker;
    /**
     * Render the user media to the background canvas
     */
    private _renderUserMedia;
    /**
     * Setup the update loop
     */
    private _setupUpdateLoop;
    /**
     * The core of the update loop
     */
    private _update;
    /**
     * Setup the render loop
     */
    private _setupRenderLoop;
    /**
     * Render a frame (RAF callback)
     * @param time current time, in ms
     * @param skipUserMedia skip copying the pixels of the user media to the background canvas in order to reduce the processing load (video stream is probably at 30fps?)
     */
    private _render;
}
export {};
//# sourceMappingURL=session.d.ts.map