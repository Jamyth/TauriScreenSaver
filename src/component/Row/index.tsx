import React from "react";
import "./index.less";

export interface Props {
    children: React.ReactNode;
    label?: string;
}

export class Row extends React.PureComponent<Props> {
    override render() {
        const { label, children } = this.props;
        return (
            <div className="g-row">
                {label && <div className="label">{label}</div>}
                <div className="content">{children}</div>
            </div>
        );
    }
}
