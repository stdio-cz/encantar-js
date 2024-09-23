import { Viewport } from './viewport';
import { Tracker } from '../trackers/tracker';
/**
 * Visual cues for testing & debugging
 */
export declare class Gizmos {
    /** Should we render the gizmos? */
    private _visible;
    /**
     * Constructor
     */
    constructor();
    /**
     * Whether or not the gizmos will be rendered
     */
    get visible(): boolean;
    /**
     * Whether or not the gizmos will be rendered
     */
    set visible(visible: boolean);
    /**
     * Render gizmos
     * @param viewport
     * @param trackers
     * @internal
     */
    _render(viewport: Viewport, trackers: Tracker[]): void;
    /**
     * Split keypoints in matched/unmatched categories and
     * render them for testing & development purposes
     * @param ctx canvas 2D context
     * @param keypoints keypoints to render
     * @param screenSize AR screen size
     * @param viewportSize viewport size
     * @param size base keypoint rendering size
     */
    private _splitAndRenderKeypoints;
    /**
     * Render keypoints for testing & development purposes
     * @param ctx canvas 2D context
     * @param keypoints keypoints to render
     * @param screenSize AR screen size
     * @param viewportSize viewport size
     * @param color color of the rendered keypoints
     * @param size base keypoint rendering size
     */
    private _renderKeypoints;
    /**
     * Render polyline for testing & development purposes
     * @param ctx canvas 2D context
     * @param polyline vertices
     * @param screenSize AR screen size
     * @param viewportSize viewport size
     * @param color color of the rendered polyline
     * @param lineWidth
     */
    private _renderPolyline;
    /**
     * Render the axes of a 3D coordinate system
     * @param ctx canvas 2D context
     * @param cameraMatrix 3x4 camera matrix that maps normalized coordinates [-1,1]^3 to AR screen space
     * @param screenSize AR screen size
     * @param viewportSize viewport size
     * @param lineWidth
     */
    private _renderAxes;
}
//# sourceMappingURL=gizmos.d.ts.map