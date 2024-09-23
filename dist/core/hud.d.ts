import { Nullable } from "../utils/utils";
/** HUD container */
export type HUDContainer = HTMLDivElement;
/**
 * Heads Up Display: an overlay displayed in front of the augmented scene
 */
export declare class HUD {
    /** Container */
    private _container;
    /** Whether or not we have created our own container */
    private _isOwnContainer;
    /**
     * Constructor
     * @param parent parent of the hud container
     * @param hudContainer an existing hud container (optional)
     */
    constructor(parent: HTMLElement, hudContainer: Nullable<HUDContainer>);
    /**
     * The container of the HUD
     */
    get container(): HUDContainer;
    /**
     * Whether or not the HUD is visible
     */
    get visible(): boolean;
    /**
     * Whether or not the HUD is visible
     */
    set visible(visible: boolean);
    /**
     * Initialize the HUD
     * @param zIndex the z-index of the container
     * @internal
     */
    _init(zIndex: number): void;
    /**
     * Release the HUD
     * @internal
     */
    _release(): void;
    /**
     * Create a HUD container as an immediate child of the input node
     * @param parent parent container
     * @returns HUD container
     */
    private _createContainer;
}
//# sourceMappingURL=hud.d.ts.map