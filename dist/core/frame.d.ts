import { Session } from './session';
import { TrackerResult } from '../trackers/tracker';
/**
 * A Frame holds information used to render a single animation frame of a Session
 */
export declare class Frame {
    /** A reference to the session */
    private readonly _session;
    /** Results of all trackers (in the current frame) */
    private readonly _results;
    /**
     * Constructor
     * @param session
     * @param results
     */
    constructor(session: Session, results: TrackerResult[]);
    /**
     * The session of which this frame holds data
     */
    get session(): Session;
    /**
     * The results of all trackers in this frame
     */
    get results(): Iterable<TrackerResult>;
}
//# sourceMappingURL=frame.d.ts.map