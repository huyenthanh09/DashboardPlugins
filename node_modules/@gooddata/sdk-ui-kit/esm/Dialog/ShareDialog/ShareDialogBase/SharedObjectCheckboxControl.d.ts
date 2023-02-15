import React from "react";
export interface ISharedObjectCheckboxControlProps {
    isChecked: boolean;
    isSupported: boolean;
    onChange: (checked: boolean) => void;
    name: string;
    label: string;
    className?: string;
}
export declare const SharedObjectCheckboxControl: React.FC<ISharedObjectCheckboxControlProps>;
//# sourceMappingURL=SharedObjectCheckboxControl.d.ts.map