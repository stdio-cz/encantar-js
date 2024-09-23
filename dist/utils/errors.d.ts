/**
 * Base error class
 */
export declare abstract class BaseError extends Error {
    readonly cause: Error | null;
    /**
     * Constructor
     * @param message error message
     * @param cause cause of the error
     */
    constructor(message?: string, cause?: Error | null);
    /**
     * Error name
     */
    abstract get name(): string;
    /**
     * Convert to string
     */
    toString(): string;
}
/**
 * A method has received one or more illegal arguments
 */
export declare class IllegalArgumentError extends BaseError {
    get name(): string;
}
/**
 * The method arguments are valid, but the method can't be called due to the
 * current state of the object
 */
export declare class IllegalOperationError extends BaseError {
    get name(): string;
}
/**
 * The requested operation is not supported
 */
export declare class NotSupportedError extends BaseError {
    get name(): string;
}
/**
 * Access denied
 */
export declare class AccessDeniedError extends BaseError {
    get name(): string;
}
/**
 * Timeout
 */
export declare class TimeoutError extends BaseError {
    get name(): string;
}
/**
 * Assertion error
 */
export declare class AssertionError extends BaseError {
    get name(): string;
}
/**
 * Tracking error
 */
export declare class TrackingError extends BaseError {
    get name(): string;
}
/**
 * Detection error
 */
export declare class DetectionError extends BaseError {
    get name(): string;
}
/**
 * Training error
 */
export declare class TrainingError extends BaseError {
    get name(): string;
}
//# sourceMappingURL=errors.d.ts.map