import React from "react";
import type { ControlledFormValue } from "@iamyth/util";

export interface Props<T extends string | number | boolean> extends ControlledFormValue<T> {
    list: T[];
    translator?: (item: T) => React.ReactNode;
}

export class Select<T extends string | number | boolean> extends React.PureComponent<Props<T>> {
    onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value: T = e.target.value as T;
        if (value === "TRUE" || value === "FALSE") {
            value = (value === "TRUE" ? true : false) as T;
        }
        if (typeof this.props.list[0] === "number") {
            value = parseInt(value as string, 10) as T;
        }
        this.props.onChange(value);
    };

    toValue = (value: T): string => {
        if (typeof value === "boolean") {
            return value === true ? "TRUE" : "FALSE";
        }
        if (typeof value === "number") {
            return value.toString();
        }
        return value;
    };

    override render() {
        const { list, translator = (_) => _, value } = this.props;
        const transformedList = list.map((_) => this.toValue(_));

        return (
            <select className="g-select" onChange={this.onChange} value={this.toValue(value)}>
                {transformedList.map((_, i) => (
                    <option value={_} key={_ + i}>
                        {translator(list[i])}
                    </option>
                ))}
            </select>
        );
    }
}
