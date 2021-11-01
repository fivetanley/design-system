import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconThumbsUp24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M11.23 2.516L7.5 10.909V21.5h10.98a1.25 1.25 0 001.237-1.062l1.442-9.5A1.25 1.25 0 0019.923 9.5H14.75A1.75 1.75 0 0113 7.75V4.525a2.025 2.025 0 00-1.77-2.01zM6 21.5v-10H3.75c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25H6zM6.263 10l3.71-8.349A1.097 1.097 0 0110.975 1 3.525 3.525 0 0114.5 4.525V7.75c0 .138.112.25.25.25h5.173a2.75 2.75 0 012.72 3.163l-1.443 9.5A2.75 2.75 0 0118.48 23H3.75A2.75 2.75 0 011 20.25v-7.5A2.75 2.75 0 013.75 10h2.513z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
