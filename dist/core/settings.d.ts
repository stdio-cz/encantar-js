/** Power preference (may impact performance x battery life) */
export type PowerPreference = 'default' | 'low-power' | 'high-performance';
/**
 * Global Settings
 */
export declare class Settings {
    private static _powerPreference;
    /**
     * Power preference (may impact performance x battery life)
     */
    static get powerPreference(): PowerPreference;
    /**
     * Power preference (may impact performance x battery life)
     * Note: this setting should be the very first thing you set
     * (before the WebGL context is created by Speedy)
     */
    static set powerPreference(value: PowerPreference);
}
//# sourceMappingURL=settings.d.ts.map