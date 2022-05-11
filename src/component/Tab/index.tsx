import React from "react";
import "./index.less";

export type TabContent = {
    label: string;
    content: React.ReactNode;
};

export type TypedTabMap<T extends string> = Record<T, TabContent>;

export interface Props<T extends string> {
    content: TypedTabMap<T>;
    activeKey: T;
    onChange: (tab: T) => void;
}

export class Tab<T extends string> extends React.PureComponent<Props<T>> {
    renderTabs = () => {
        const { content, onChange, activeKey } = this.props;
        return Object.entries<TabContent>(content).map(([key, { label }]) => {
            return (
                <button
                    type="button"
                    key={key}
                    onClick={() => onChange(key as T)}
                    className={activeKey === key ? "active" : ""}
                >
                    {label}
                </button>
            );
        });
    };

    override render() {
        const { activeKey, content } = this.props;
        const tab = content[activeKey].content;

        return (
            <div className="g-tab">
                <div className="tabs">{this.renderTabs()}</div>
                <div className="tab-content">{tab}</div>
            </div>
        );
    }
}
