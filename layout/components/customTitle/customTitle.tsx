import React, { useState } from 'react';

export const CustomTooltip = ({ children, tooltipText }: { children: React.ReactNode, tooltipText: string }) => {
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
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                    }}
                >
                    {tooltipText}
                </div>
            )}
            {children}
        </div>
    );
};
