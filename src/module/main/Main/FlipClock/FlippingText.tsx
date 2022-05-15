import React from "react";

type Size = "small" | "medium";

interface Props {
    digit: string;
    size?: Size;
}

export const FlippingText = React.memo(({ digit, size = "medium" }: Props) => {
    const [currentValue, setCurrentValue] = React.useState(digit);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const onTransitionEnd = () => {
        setIsAnimating(false);
        setCurrentValue(digit);
    };

    React.useEffect(() => {
        if (currentValue !== digit) {
            setIsAnimating(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only listen to props
    }, [digit]);

    const textStyle: React.CSSProperties =
        size === "medium"
            ? {}
            : {
                  fontSize: "calc(20rem * 0.6)",
              };

    return (
        <div className="flip-digit">
            <div className="container">
                <div className="line-through" />
                <div className="digit-container">
                    <div className="next digit top">
                        <div style={textStyle}>{digit}</div>
                    </div>
                    <div className="current digit bottom">
                        <div style={textStyle}>{currentValue}</div>
                    </div>
                </div>
                <div className="digit-container animated">
                    <div className={`current digit top ${isAnimating ? "animate" : ""}`}>
                        <div style={textStyle}>{currentValue}</div>
                    </div>
                    <div
                        onTransitionEnd={onTransitionEnd}
                        className={`next digit bottom ${isAnimating ? "animate" : ""}`}
                    >
                        <div style={textStyle}>{digit}</div>
                    </div>
                </div>
            </div>
        </div>
    );
});
