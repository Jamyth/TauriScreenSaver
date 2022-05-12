import React from "react";
import type { ControlledFormValue } from "@iamyth/util";

export interface Props extends ControlledFormValue<boolean> {}

export const Checkbox = React.memo(({ value, onChange }: Props) => {
    return <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />;
});
