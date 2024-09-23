import { SpeedySize } from 'speedy-vision/types/core/speedy-size';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { Nullable } from '../utils/utils';
import { Resolution } from '../utils/resolution';
import { HUD, HUDContainer } from './hud';
import { AREventTarget } from '../utils/ar-events';
/** Viewport container */
export type ViewportContainer = HTMLDivElement;
/** We admit that the size of the drawing buffer of the background canvas of the viewport may change over time */
type ViewportSizeGetter = () => SpeedySize;
/** All possible event types emitted by a Viewport */
type ViewportEventType = 'resize';
/** Viewport event target */
declare class ViewportEventTarget extends AREventTarget<ViewportEventType> {
}
/** Viewport style (immersive mode) */
type ViewportStyle = 'best-fit' | 'stretch' | 'inline';
/**
 * Viewport constructor settings
 */
export interface ViewportSettings {
    /** Viewport container */
    container: Nullable<ViewportContainer>;
    /** HUD container */
    hudContainer?: Nullable<HUDContainer>;
    /** Resolution of the canvas on which the virtual scene will be drawn */
    resolution?: Resolution;
    /** Viewport style */
    style?: ViewportStyle;
    /** An existing <canvas> on which the virtual scene will be drawn */
    canvas?: Nullable<HTMLCanvasElement>;
}
/**
 * Viewport
 */
export declare class Viewport extends ViewportEventTarget {
    /** Viewport resolution (controls the size of the drawing buffer of the foreground canvas) */
    private readonly _resolution;
    /** The containers */
    private readonly _containers;
    /** An overlay displayed in front of the augmented scene */
    private readonly _hud;
    /** Viewport style */
    private _style;
    /** The canvases of the viewport */
    private readonly _canvases;
    /** Fullscreen utilities */
    private readonly _fullscreen;
    /** Resize helper */
    private readonly _resizer;
    /** The current size of the underlying SpeedyMedia */
    private _mediaSize;
    /**
     * Constructor
     * @param viewportSettings
     */
    constructor(viewportSettings: ViewportSettings);
    /**
     * Viewport container
     */
    get container(): ViewportContainer;
    /**
     * Viewport style
     */
    get style(): ViewportStyle;
    /**
     * Set viewport style
     */
    set style(value: ViewportStyle);
    /**
     * HUD
     */
    get hud(): HUD;
    /**
     * Resolution of the virtual scene
     */
    get resolution(): Resolution;
    /**
     * Size in pixels of the drawing buffer of the canvas
     * on which the virtual scene will be drawn
     */
    get virtualSize(): SpeedySize;
    /**
     * Is the viewport currently being displayed in fullscreen mode?
     */
    get fullscreen(): boolean;
    /**
     * Is the fullscreen mode available in this platform?
     */
    get fullscreenAvailable(): boolean;
    /**
     * The canvas on which the virtual scene will be drawn
     */
    get canvas(): HTMLCanvasElement;
    /**
     * The canvas on which the physical scene will be drawn
     * @internal
     */
    get _backgroundCanvas(): HTMLCanvasElement;
    /**
     * Size of the drawing buffer of the background canvas, in pixels
     * @internal
     */
    get _realSize(): SpeedySize;
    /**
     * Sub-container of the viewport container
     * @internal
     */
    get _subContainer(): HTMLDivElement;
    /**
     * Request fullscreen mode
     * @returns promise
     */
    requestFullscreen(): SpeedyPromise<void>;
    /**
     * Exit fullscreen mode
     * @returns promise
     */
    exitFullscreen(): SpeedyPromise<void>;
    /**
     * Initialize the viewport (when the session starts)
     * @internal
     */
    _init(getMediaSize: ViewportSizeGetter): void;
    /**
     * Release the viewport (when the session ends)
     * @internal
     */
    _release(): void;
}
export {};
//# sourceMappingURL=viewport.d.ts.map