import { CameraModel } from './camera-model';
import { Pose } from './pose';
import { ViewerPose } from './viewer-pose';
import { View } from './view';
/**
 * A viewer represents a virtual camera in 3D world space
 */
export declare class Viewer {
    /** the pose of the viewer in 3D world space */
    private readonly _pose;
    /** the views of this viewer (1 for monoscopic rendering; 2 for stereoscopic) */
    private readonly _views;
    /**
     * Constructor
     * @param camera camera model
     */
    constructor(camera: CameraModel);
    /**
     * The pose of this viewer
     */
    get pose(): ViewerPose;
    /**
     * The view of this viewer (only for monoscopic rendering)
     */
    get view(): View;
    /**
     * The views of this viewer
     */
    /**
     * Convert a pose from world space to viewer space
     * @param pose a pose in world space
     * @returns a pose in viewer space
     */
    convertToViewerSpace(pose: Pose): Pose;
}
//# sourceMappingURL=viewer.d.ts.map