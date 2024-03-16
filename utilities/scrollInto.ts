import React from 'react';

export const scrollInto = ({e, selector}: { e?: React.MouseEvent<HTMLAnchorElement>, selector: string }) => {
    if (e) e.preventDefault()
    const element = document.querySelector(selector)
    if (!element) return
    element.scrollIntoView({
        behavior: 'smooth',
    })
}