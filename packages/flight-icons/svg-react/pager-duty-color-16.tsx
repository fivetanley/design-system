import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPagerDutyColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill="#048A24">
                    <path d="M10.888 1.709C9.795 1.099 9.03 1 7.234 1H3.189v8.747h4.03c1.595 0 2.792-.099 3.845-.824 1.149-.783 1.747-2.094 1.747-3.611 0-1.633-.734-2.943-1.923-3.603zm-3.2 6.208H5.24V2.871l2.314-.016c2.106-.017 3.16.742 3.16 2.482 0 1.871-1.309 2.58-3.024 2.58zM4.938 11.497H3.19v3.499h1.75v-3.5z" />
                </g>
            </svg>
        );
    }
);
