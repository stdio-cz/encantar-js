import { StandardTransform } from './transform';
/**
 * A pose represents a position and an orientation in a 3D space
 * (and sometimes a scale, too...)
 */
export declare class Pose {
    /** A transform in 3D world space */
    private _transform;
    /**
     * Constructor
     * @param transform usually a rigid transform in a 3D space (e.g., world space, viewer space or other)
     */
    constructor(transform: StandardTransform);
    /**
     * A transform describing the position and the orientation
     * of the pose relative to the 3D space to which it belongs
     */
    get transform(): StandardTransform;
}
//# sourceMappingURL=pose.d.ts.map