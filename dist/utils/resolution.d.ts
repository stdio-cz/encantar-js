import { SpeedySize } from 'speedy-vision/types/core/speedy-size';
/** Resolution type */
export type Resolution = 'xs' | 'xs+' | 'sm' | 'sm+' | 'md' | 'md+' | 'lg' | 'lg+';
/**
 * Convert a resolution type to a (width, height) pair
 * @param resolution resolution type
 * @param aspectRatio desired width / height ratio
 * @returns size in pixels
 */
export declare function computeResolution(resolution: Resolution, aspectRatio: number): SpeedySize;
//# sourceMappingURL=resolution.d.ts.map