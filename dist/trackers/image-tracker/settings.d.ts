/** Default tracking resolution */
export declare const DEFAULT_TRACKING_RESOLUTION = "sm+";
/** Maximum number of keypoints to be stored for each reference image when in the training state */
export declare const TRAIN_MAX_KEYPOINTS = 1024;
/** Percentage relative to the screen size adjusted to the aspect ratio of the reference image */
export declare const TRAIN_IMAGE_SCALE = 0.8;
/** Normalized width & height of an image target, in pixels */
export declare const TRAIN_TARGET_NORMALIZED_SIZE = 1024;
/** Used to identify the best maches */
export declare const SCAN_MATCH_RATIO = 0.7;
/** Maximum number of keypoints to be analyzed when in the scanning state */
export declare const SCAN_MAX_KEYPOINTS = 512;
/** Number of pyramid levels to be scanned by the corner detector when in the scanning & training states */
export declare const SCAN_PYRAMID_LEVELS = 4;
/** Scale factor between pyramid levels to be scanned by the corner detector when in the scanning & training states */
export declare const SCAN_PYRAMID_SCALEFACTOR = 1.19;
/** Threshold of the FAST corner detector used in the scanning/training states */
export declare const SCAN_FAST_THRESHOLD = 60;
/** Minimum number of accepted matches for us to move out from the scanning state */
export declare const SCAN_MIN_MATCHES = 20;
/** When in the scanning state, we require the image to be matched during a few consecutive frames before accepting it */
export declare const SCAN_CONSECUTIVE_FRAMES = 30;
/** Reprojection error, in pixels, used when estimating a motion model (scanning state) */
export declare const SCAN_RANSAC_REPROJECTIONERROR = 5;
/** Number of tables used in the LSH-based keypoint matching */
export declare const SCAN_LSH_TABLES = 8;
/** Hash size, in bits, used in the LSH-based keypoint matching */
export declare const SCAN_LSH_HASHSIZE = 15;
/** Use the Nightvision filter when in the scanning/training state? */
export declare const SCAN_WITH_NIGHTVISION = true;
/** Nightvision filter: gain */
export declare const NIGHTVISION_GAIN = 0.3;
/** Nightvision filter: offset */
export declare const NIGHTVISION_OFFSET = 0.5;
/** Nightvision filter: decay */
export declare const NIGHTVISION_DECAY = 0;
/** Nightvision filter: quality level */
export declare const NIGHTVISION_QUALITY = "low";
/** Kernel size (square) of the Gaussian filter applied before computing the ORB descriptors */
export declare const ORB_GAUSSIAN_KSIZE = 9;
/** Sigma of the Gaussian filter applied before computing the ORB descriptors */
export declare const ORB_GAUSSIAN_SIGMA = 2;
/** Kernel size (square) of the Gaussian filter applied before subpixel refinement for noise reduction */
export declare const SUBPIXEL_GAUSSIAN_KSIZE = 5;
/** Sigma of the Gaussian filter applied before subpixel refinement for noise reduction */
export declare const SUBPIXEL_GAUSSIAN_SIGMA = 1;
/** Subpixel refinement method */
export declare const SUBPIXEL_METHOD = "bilinear-upsample";
/** Minimum acceptable number of matched keypoints when in the tracking state */
export declare const TRACK_MIN_MATCHES = 4;
/** Maximum number of keypoints to be analyzed in the tracking state */
export declare const TRACK_MAX_KEYPOINTS = 200;
/** Capacity of the keypoint detector used in the the tracking state */
export declare const TRACK_DETECTOR_CAPACITY = 2048;
/** Quality of the Harris/Shi-Tomasi corner detector */
export declare const TRACK_HARRIS_QUALITY = 0.005;
/** Use the Nightvision filter when in the tracking state? */
export declare const TRACK_WITH_NIGHTVISION = false;
/** Relative size (%) of the (top, right, bottom, left) borders of the rectified image */
export declare const TRACK_RECTIFIED_BORDER = 0.15;
/** Relative size (%) used to clip keypoints from the borders of the rectified image */
export declare const TRACK_CLIPPING_BORDER: number;
/** Number of iterations used to refine the target image before tracking */
export declare const TRACK_REFINEMENT_ITERATIONS = 3;
/** Reprojection error, in pixels, used when estimating a motion model (tracking state) */
export declare const TRACK_RANSAC_REPROJECTIONERROR = 3;
/** We use a N x N grid to spatially distribute the keypoints in order to compute a better homography */
export declare const TRACK_GRID_GRANULARITY = 10;
/** Used to identify the best maches */
export declare const TRACK_MATCH_RATIO = 0.75;
/** Number of consecutive frames in which we tolerate a  "target lost" situation */
export declare const TRACK_LOST_TOLERANCE = 10;
//# sourceMappingURL=settings.d.ts.map