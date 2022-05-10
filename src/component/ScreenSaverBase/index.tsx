import React from "react";
import "./index.less";

export type Theme = "light" | "dark";

export interface Props {
    children: React.ReactNode;
    className?: string;
    theme?: Theme;
}

export const ScreenSaverBase = React.memo(({ children, className = "", theme = "dark" }: Props) => {
    return <div className={`g-screen-saver-base ${theme} ${className}`}>{children}</div>;
});
