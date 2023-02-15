import React from "react";
/**
 * @internal
 */
export interface ISimpleSettingWidgetProps {
    title: string;
    currentSettingStatus: string;
    titleTooltip: string;
    helpLinkText?: string;
    helpLinkUrl?: string;
    actionButtonText: string;
    isLoading: boolean;
    onSubmit: () => void;
    onHelpLinkClick?: () => void;
}
/**
 * This widget toggles one setting on/off.
 *
 * @internal
 */
export declare const SimpleSettingWidget: React.FC<ISimpleSettingWidgetProps>;
//# sourceMappingURL=SimpleSettingWidget.d.ts.map