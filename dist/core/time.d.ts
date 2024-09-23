/**
 * Time Manager
 */
export declare class Time {
    /** time scale */
    private _scale;
    /** time since the start of the session, in milliseconds */
    private _time;
    /** unscaled time since the start of the session, in milliseconds */
    private _unscaledTime;
    /** elapsed time between the current and the previous frame, in milliseconds */
    private _delta;
    /** time of the first update call, in milliseconds */
    private _firstUpdate;
    /** time of the last update call, in milliseconds */
    private _lastUpdate;
    /**
     * Update the Time Manager
     * @param timestamp in milliseconds
     * @internal
     */
    _update(timestamp: DOMHighResTimeStamp): void;
    /**
     * Elapsed time since the start of the session, measured at the
     * beginning of the current animation frame and given in seconds
     */
    get elapsed(): number;
    /**
     * Elapsed time between the current and the previous animation
     * frame, given in seconds
     */
    get delta(): number;
    /**
     * Time scale (defaults to 1)
     */
    get scale(): number;
    /**
     * Time scale (defaults to 1)
     */
    set scale(scale: number);
    /**
     * Time scale independent elapsed time since the start of the session,
     * measured at the beginning of the current animation frame and given
     * in seconds
     */
    get unscaled(): number;
}
//# sourceMappingURL=time.d.ts.map