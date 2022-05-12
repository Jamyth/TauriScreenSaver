import React from "react";

type Size = "small" | "medium";

export interface Props {
    digit: string;
    size?: Size;
}

export const ScrollingDigit = React.memo(({ digit, size = "medium" }: Props) => {
    const [currentValue, setCurrentValue] = React.useState(digit);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const animationStyle: React.CSSProperties = {
        transform: `translateY(0)`,
        transitionDuration: "500ms",
    };

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

    return (
        <div className={`scroll-container ${size}`}>
            <div
                className="scrolling"
                style={isAnimating ? animationStyle : undefined}
                onTransitionEnd={onTransitionEnd}
            >
                <div className="digit">{digit}</div>
                <div className="digit">{currentValue}</div>
            </div>
        </div>
    );
});
