import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGitMerge24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M3.5 6.5a3.5 3.5 0 114.096 3.45c.102.41.284.886.551 1.406a11.743 11.743 0 001.81 2.54c1.35 1.456 3.014 2.56 4.635 2.804a3.502 3.502 0 016.908.8 3.5 3.5 0 01-6.928.71c-2.178-.252-4.217-1.677-5.716-3.294A13.885 13.885 0 017.5 13.202v7.548a.75.75 0 01-1.5 0V9.855A3.502 3.502 0 013.5 6.5zm3.5-2a2 2 0 100 4 2 2 0 000-4zm9 13a2 2 0 104 0 2 2 0 00-4 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
