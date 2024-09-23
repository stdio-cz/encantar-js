/**
 * Stats for performance measurements
 */
export declare class Stats {
    private _timeOfLastUpdate;
    private _partialCycleCount;
    private _cyclesPerSecond;
    /**
     * Constructor
     */
    constructor();
    /**
     * Update stats - call every frame
     */
    update(): void;
    /**
     * Reset stats
     */
    reset(): void;
    /**
     * Number of cycles per second
     */
    get cyclesPerSecond(): number;
    /**
     * A measurement of time, in milliseconds
     * @returns time in ms
     */
    private _now;
}
//# sourceMappingURL=stats.d.ts.map