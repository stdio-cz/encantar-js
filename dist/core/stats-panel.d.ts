import { Viewport } from './viewport';
import { Tracker } from '../trackers/tracker';
import { Source } from '../sources/source';
/**
 * Stats panel used for development purposes
 */
export declare class StatsPanel {
    /** The viewport associated to this panel */
    private readonly _viewport;
    /** A container for the panel */
    private readonly _container;
    /** Time of last update, in milliseconds */
    private _lastUpdate;
    /**
     * Constructor
     * @param parent parent element of the panel
     */
    constructor(viewport: Viewport);
    /**
     * Release the panel
     */
    release(): void;
    /**
     * A method to be called in the update loop
     * @param time current time in ms
     * @param trackers the trackers attached to the session
     * @param sources the sources of media linked to the session
     * @param gpu GPU cycles per second
     * @param fps frames per second
     */
    update(time: DOMHighResTimeStamp, trackers: Tracker[], sources: Source[], gpu: number, fps: number): void;
    /**
     * Visibility of the panel
     */
    get visible(): boolean;
    /**
     * Visibility of the panel
     */
    set visible(visible: boolean);
    /**
     * Update the contents of the panel
     * @param trackers the trackers attached to the session
     * @param sources the sources of media linked to the session
     * @param fps frames per second
     * @param gpu GPU cycles per second
     */
    private _update;
    /**
     * Get a label of the panel
     * @param className
     * @returns the HTML element, or null if it doesn't exist
     */
    private _label;
    /**
     * Associate a color to a frequency number
     * @param f frequency given in cycles per second
     * @returns colorized number (HTML)
     */
    private _color;
    /**
     * Create the container for the panel
     * @returns a container
     */
    private _createContainer;
    /**
     * Create a title
     * @returns a title
     */
    private _createTitle;
    /**
     * Create a content container
     * @returns a content container
     */
    private _createContent;
    /**
     * Create a fullscreen toggle
     * @returns a fullscreen toggle
     */
    private _createFullscreenToggle;
}
//# sourceMappingURL=stats-panel.d.ts.map