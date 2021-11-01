import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconChange16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M9.721 8.453c-.27-.087-.658-.324-1.135-.921-.595-.745-1.211-1.21-1.852-1.414a2.434 2.434 0 00-1.743.094c-.472.206-.842.522-1.095.778a5.881 5.881 0 00-.382.427l-.025.029-.024.029a.75.75 0 001.064 1.057c.05-.05.121-.135.17-.193.01-.014.021-.026.03-.036.065-.078.143-.166.233-.257.185-.188.399-.359.627-.458a.936.936 0 01.69-.04c.27.086.658.323 1.135.92.595.745 1.211 1.21 1.852 1.414.656.209 1.254.118 1.743-.094.472-.206.841-.522 1.095-.778.129-.13.235-.252.313-.344l.069-.082a4.562 4.562 0 01.05-.059.75.75 0 00-1.065-1.057 3.29 3.29 0 00-.2.229 4.39 4.39 0 01-.233.257 2.102 2.102 0 01-.627.458.936.936 0 01-.69.04z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
