import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCamera24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M7 13a5 5 0 1110 0 5 5 0 01-10 0zm5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                        clipRule="evenodd"
                    />
                    <path d="M5 8a1 1 0 000 2h.01a1 1 0 000-2H5z" />
                    <path
                        fillRule="evenodd"
                        d="M7.557 2.912A1.75 1.75 0 019.094 2h5.812c.64 0 1.23.35 1.537.912l1.014 1.859 2.924.14A2.75 2.75 0 0123 7.656V19.25A2.75 2.75 0 0120.25 22H3.75A2.75 2.75 0 011 19.25V7.657A2.75 2.75 0 013.62 4.91l2.923-.14 1.014-1.858zm1.537.588a.25.25 0 00-.22.13L7.658 5.86a.75.75 0 01-.622.39l-3.345.158A1.25 1.25 0 002.5 7.657V19.25c0 .69.56 1.25 1.25 1.25h16.5c.69 0 1.25-.56 1.25-1.25V7.657a1.25 1.25 0 00-1.19-1.249l-3.346-.159a.75.75 0 01-.622-.39L15.126 3.63a.25.25 0 00-.22-.13H9.094z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
