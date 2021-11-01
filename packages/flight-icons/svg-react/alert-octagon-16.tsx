import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAlertOctagon16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M7 11a1 1 0 011-1h.007a1 1 0 110 2H8a1 1 0 01-1-1zM8.75 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                    <path
                        fillRule="evenodd"
                        d="M3.882.805A2.75 2.75 0 015.827 0h4.346c.73 0 1.429.29 1.945.805l3.076 3.077A2.75 2.75 0 0116 5.827v4.346c0 .73-.29 1.429-.806 1.945l-3.076 3.076a2.75 2.75 0 01-1.945.806H5.827a2.75 2.75 0 01-1.945-.806L.805 12.118A2.75 2.75 0 010 10.173V5.827c0-.73.29-1.429.805-1.945L3.882.805zm1.945.695c-.332 0-.65.132-.884.366L1.866 4.943a1.25 1.25 0 00-.366.884v4.346c0 .332.132.65.366.884l3.077 3.077c.234.234.552.366.884.366h4.346c.332 0 .65-.132.884-.366l3.077-3.077a1.25 1.25 0 00.366-.884V5.827c0-.332-.132-.65-.366-.884l-3.077-3.077a1.25 1.25 0 00-.884-.366H5.827z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
