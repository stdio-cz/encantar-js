import { SpeedySize } from 'speedy-vision/types/core/speedy-size';
import { Resolution } from './resolution';
/**
 * Nullable type
 */
export type Nullable<T> = T | null;
/**
 * Generic utilities
 */
export declare class Utils {
    /**
     * Log a message
     * @param message
     * @param args optional additional messages
     */
    static log(message: string, ...args: any[]): void;
    /**
     * Display a warning
     * @param message
     * @param args optional additional messages
     */
    static warning(message: string, ...args: any[]): void;
    /**
     * Display an error message
     * @param message
     * @param args optional additional messages
     */
    static error(message: string, ...args: any[]): void;
    /**
     * Assertion
     * @param expr expression
     * @param errorMessage optional error message
     * @throws {AssertionError}
     */
    static assert(expr: boolean, errorMessage?: string): void;
    /**
     * Returns a range [0, 1, ..., n-1]
     * @param n non-negative integer
     * @returns range from 0 to n-1, inclusive
     */
    static range(n: number): number[];
    /**
     * Convert a resolution type to a resolution measured in pixels
     * @param resolution resolution type
     * @param aspectRatio width / height ratio
     * @returns resolution measured in pixels
     */
    static resolution(resolution: Resolution, aspectRatio: number): SpeedySize;
    /**
     * Returns a string containing platform brand information
     * @returns platform brand information
     */
    static platformString(): string;
    /**
     * Checks if we're on iOS
     * @returns true if we're on iOS
     */
    static isIOS(): boolean;
    /**
     * Checks if we're on a WebKit-based browser
     * @returns true if we're on a WebKit-based browser
     */
    static isWebKit(): boolean;
    /**
     * Device-specific information for debugging purposes
     */
    static deviceInfo(): string;
}
//# sourceMappingURL=utils.d.ts.map