import React from "react";

interface Props {
    digit: string;
    nextDigit: string;
}

export const FlippingText = React.memo(({ digit, nextDigit }: Props) => {
    const [hasAnimation, setHasAnimation] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState(digit);

    const onAnimationEnd = () => {
        setHasAnimation(false);
        setCurrentValue(nextDigit);
    };

    React.useEffect(() => {
        setHasAnimation(true);
    }, [digit]);

    return (
        <div className="flipping-text">
            <div className="flipping-text-container">
                <div className="line-through" />
                <div className="next top">
                    <span>{nextDigit}</span>
                </div>
                <div className="current bottom">
                    <span>{currentValue}</span>
                </div>
                <div className={`current top ${hasAnimation ? "flip" : ""}`}>
                    <span>{currentValue}</span>
                </div>
                <div className={`next bottom ${hasAnimation ? "flip" : ""}`} onAnimationEnd={onAnimationEnd}>
                    <span>{nextDigit}</span>
                </div>
            </div>
        </div>
    );
});
