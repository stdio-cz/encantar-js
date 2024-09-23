import { SpeedySize } from 'speedy-vision/types/core/speedy-size';
import { SpeedyMatrix } from 'speedy-vision/types/core/speedy-matrix';
import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
import { SpeedyKeypoint } from 'speedy-vision/types/core/speedy-keypoint';
import { Tracker, TrackerOutput, TrackerResult, Trackable } from '../tracker';
import { Session } from '../../core/session';
import { Resolution } from '../../utils/resolution';
import { ReferenceImage } from './reference-image';
import { ReferenceImageDatabase } from './reference-image-database';
import { Nullable } from '../../utils/utils';
import { AREventTarget } from '../../utils/ar-events';
import { ImageTrackerEventType } from './image-tracker-event';
import { SpeedyPoint2 } from 'speedy-vision/types/core/speedy-point';
import { Viewer } from '../../geometry/viewer';
import { Pose } from '../../geometry/pose';
/** A trackable target */
export interface TrackableImage extends Trackable {
    /** the pose of the target */
    readonly pose: Pose;
    /** the reference image linked to the target */
    readonly referenceImage: ReferenceImage;
}
/** Image Tracker result to be consumed by the user */
export interface ImageTrackerResult extends TrackerResult {
    /** tracker */
    readonly tracker: ImageTracker;
    /** trackable targets */
    readonly trackables: TrackableImage[];
    /** 3D virtual camera */
    readonly viewer: Viewer;
}
/** Image Tracker output */
export interface ImageTrackerOutput extends TrackerOutput {
    /** tracker result to be consumed by the user */
    readonly exports?: ImageTrackerResult;
    /** size of the AR screen space, in pixels */
    readonly screenSize?: SpeedySize;
    /** optional keypoints */
    readonly keypoints?: SpeedyKeypoint[];
    /** optional polyline for testing */
    readonly polyline?: SpeedyPoint2[];
    /** optional 3x4 camera matrix in AR screen space */
    readonly cameraMatrix?: SpeedyMatrix;
    /** 3x3 homography in AR screen space */
    homography?: SpeedyMatrix;
}
/** All possible states of an Image Tracker */
export type ImageTrackerStateName = 'initial' | 'training' | 'scanning' | 'pre-tracking' | 'tracking';
/**
 * The ImageTracker tracks an image (one at a time)
 */
export declare class ImageTracker extends AREventTarget<ImageTrackerEventType> implements Tracker {
    /** session */
    private _session;
    /** all states */
    private readonly _state;
    /** name of the active state */
    private _activeStateName;
    /** last emitted output of the tracker */
    private _lastOutput;
    /** reference image database */
    private readonly _database;
    /** the AR resolution size, used in GPU processing, defines the AR screen space */
    private _resolution;
    /**
     * Constructor
     */
    constructor();
    /**
     * The type of the tracker
     */
    get type(): string;
    /**
     * Current state name
     */
    get state(): ImageTrackerStateName;
    /**
     * Reference Image Database
     * Must be configured before training the tracker
     */
    get database(): ReferenceImageDatabase;
    /**
     * Resolution of the AR screen space
     */
    get resolution(): Resolution;
    /**
     * Resolution of the AR screen space
     */
    set resolution(resolution: Resolution);
    /**
     * Size of the AR screen space, in pixels
     * @internal
     */
    get screenSize(): SpeedySize;
    /**
     * Last emitted output
     * @internal
     */
    get _output(): ImageTrackerOutput;
    /**
     * Stats related to this tracker
     * @internal
     */
    get _stats(): string;
    /**
     * Initialize this tracker
     * @param session
     * @returns promise that resolves after the tracker has been initialized
     * @internal
     */
    _init(session: Session): SpeedyPromise<void>;
    /**
     * Release this tracker
     * @returns promise that resolves after the tracker has been released
     * @internal
     */
    _release(): SpeedyPromise<void>;
    /**
     * Update the tracker
     * @returns promise
     * @internal
     */
    _update(): SpeedyPromise<void>;
    /**
     * Get reference image
     * @param keypointIndex -1 if not found
     * @returns reference image
     * @internal
     */
    _referenceImageOfKeypoint(keypointIndex: number): Nullable<ReferenceImage>;
    /**
     * Get reference image index
     * @param keypointIndex -1 if not found
     * @returns reference image index, or -1 if not found
     * @internal
     */
    _referenceImageIndexOfKeypoint(keypointIndex: number): number;
    /**
     * Get a keypoint of the trained set
     * @param keypointIndex
     * @returns a keypoint
     * @internal
     */
    _referenceKeypoint(keypointIndex: number): Nullable<SpeedyKeypoint>;
}
//# sourceMappingURL=image-tracker.d.ts.map