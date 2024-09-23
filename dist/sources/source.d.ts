import { SpeedyPromise } from 'speedy-vision/types/core/speedy-promise';
/**
 * Abstract source of data
 */
export interface Source {
    /** @internal type-identifier of the source of data */
    readonly _type: string;
    /** @internal generic data */
    readonly _data: object;
    /** @internal method to initialize the source of data (gets the data ready) */
    _init(): SpeedyPromise<void>;
    /** @internal method to release the source of data */
    _release(): SpeedyPromise<void>;
    /** @internal stats related to this source of data */
    readonly _stats: string;
}
//# sourceMappingURL=source.d.ts.map