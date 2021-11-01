import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWatch24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M12.5 8.25a.75.75 0 00-1.5 0v4.25c0 .284.16.544.415.67l2.5 1.25a.75.75 0 10.67-1.34L12.5 12.036V8.25z" />
                    <path
                        fillRule="evenodd"
                        d="M7.464 2.258A2.75 2.75 0 0110.169 0h3.662a2.75 2.75 0 012.706 2.258l.666 3.665A7.982 7.982 0 0120 12a7.982 7.982 0 01-2.797 6.077l-.666 3.665A2.75 2.75 0 0113.83 24h-3.662a2.75 2.75 0 01-2.705-2.258l-.667-3.665A7.982 7.982 0 014 12a7.982 7.982 0 012.797-6.077l.667-3.665zM8.528 19.21l.411 2.265a1.25 1.25 0 001.23 1.026h3.662a1.25 1.25 0 001.23-1.026l.411-2.265A7.968 7.968 0 0112 20a7.97 7.97 0 01-3.472-.79zM15.06 2.526l.411 2.265A7.968 7.968 0 0012 4a7.968 7.968 0 00-3.472.79l.411-2.264A1.25 1.25 0 0110.17 1.5h3.662a1.25 1.25 0 011.23 1.026zM5.5 12a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
