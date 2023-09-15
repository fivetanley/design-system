import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultSecretsColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#000"
                    d="M11.315 18v-2.493c0-.584.037-1.17.11-1.747l.066-.537-.333.427c-.357.46-.747.903-1.157 1.313l-1.764 1.764-.967-.967 1.764-1.763c.41-.414.854-.8 1.314-1.157l.43-.333-.537.066a13.92 13.92 0 01-1.747.11H6v-1.366h5.318V6h1.367v2.493c0 .584-.037 1.17-.11 1.747l-.066.537.333-.43c.357-.46.747-.9 1.157-1.314l1.764-1.763.967.967L14.966 10c-.414.413-.854.8-1.314 1.157l-.43.333.537-.067c.577-.073 1.167-.11 1.747-.11H18v1.367h-5.318v5.317h-1.367V18zm2.694-3.023v-.967h.967l1.75 1.75-.967.967-1.75-1.75zM9.02 9.99L7.27 8.24l.966-.967 1.75 1.75v.967h-.966z"
                />
                <path
                    fill="#FFD814"
                    fillRule="evenodd"
                    d="M1.25 4A2.75 2.75 0 014 1.25h16A2.75 2.75 0 0122.75 4v16A2.75 2.75 0 0120 22.75H4A2.75 2.75 0 011.25 20V4zM4 2.75c-.69 0-1.25.56-1.25 1.25v16c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25H4z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
