import React, {ReactNode, useState} from 'react';

export const CustomTooltip = ({ children, tooltipText }: { children: ReactNode, tooltipText: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative"
        >
            {showTooltip && (
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: '#31313F',
                        color: 'whitesmoke',
                        padding: '10px',
                        borderRadius: '5px',
                        zIndex: 100,
                        fontSize: "14px",
                        top: '100%',
                        width: "150px",
                        marginTop: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 12,
                        whiteSpace: "pre-line"
                    }}
                >
                    {tooltipText}
                </div>
            )}
            {children}
        </div>
    );
};
