import React from "react";
import "./index.less";

export interface Props {
    children: React.ReactNode;
}

export const Overlay = React.memo(({ children }: Props) => {
    return <div className="g-overlay">{children}</div>;
});
