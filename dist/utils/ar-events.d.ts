/**
 * AR Event Type
 */
type AREventType = string;
/**
 * AR Event Listener (callback)
 */
export type AREventListener = EventListener;
/**
 * AR Event
 */
export declare class AREvent<T extends AREventType> extends Event {
    /**
     * Constructor
     * @param type event type
     */
    constructor(type: T);
    /**
     * Event type
     */
    get type(): T;
}
/**
 * AR Event Target
 */
export declare class AREventTarget<T extends AREventType> implements EventTarget {
    /** event target delegate */
    private readonly _delegate;
    /**
     * Constructor
     */
    constructor();
    /**
     * Add event listener
     * @param type event type
     * @param callback
     */
    addEventListener(type: T, callback: AREventListener): void;
    /**
     * Remove event listener
     * @param type event type
     * @param callback
     */
    removeEventListener(type: T, callback: AREventListener): void;
    /**
     * Synchronously trigger an event
     * @param event
     * @returns same value as a standard event target
     * @internal
     */
    dispatchEvent(event: AREvent<T>): boolean;
}
export {};
//# sourceMappingURL=ar-events.d.ts.map