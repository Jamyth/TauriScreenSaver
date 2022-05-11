import React from "react";
import "./index.less";

export interface Props {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
    className?: string;
}

export const Overlay = React.memo(({ children, title, onClose, className = "" }: Props) => {
    return (
        <div className={`g-overlay ${className}`}>
            <button onClick={onClose} type="button">
                &#x2715;
            </button>
            <div className="header">{title}</div>
            <div className="content">{children}</div>
        </div>
    );
});
