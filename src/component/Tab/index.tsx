import React from "react";

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
    override render() {
        // TODO
        return null;
    }
}
