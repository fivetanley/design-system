import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHourglass24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 19.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zM11.75 8a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M4.694 4.503C3.69 3.01 4.762 1 6.562 1h10.876c1.8 0 2.871 2.009 1.868 3.503l-4.748 7.08a.75.75 0 000 .835l4.748 7.079C20.31 20.99 19.238 23 17.438 23H6.562c-1.8 0-2.871-2.009-1.868-3.503l4.748-7.08a.75.75 0 000-.835L4.694 4.503zM6.562 2.5a.75.75 0 00-.623 1.168l4.748 7.079a2.25 2.25 0 010 2.506l-4.748 7.08a.75.75 0 00.623 1.167h10.876c.6 0 .957-.67.623-1.168l-4.748-7.079a2.25 2.25 0 010-2.506l4.748-7.08a.75.75 0 00-.623-1.167H6.562z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
