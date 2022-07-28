import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSnyk16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M10.936 6.174c.17 1.583.22 2.664.134 2.893-.078.204-.383.637-.64.985l.373 3.546-2.804 2.064L5.85 14.08l.235-2.223a6.168 6.168 0 01-.166-1.28l-.347 3.298-.372-.274.373-3.542c-.259-.349-.568-.788-.645-.993-.087-.229-.037-1.31.133-2.893l.003-.024-.545-1.505v-.03c0-.657.828-2.415 1.317-3.35L6.076.81l.506 3.623.303.512.076-.027a3.3 3.3 0 011.036-.194c.413 0 .829.122 1.04.195l.076.026.304-.512L9.922.81l.24.456c.488.934 1.316 2.692 1.316 3.348v.03l-.544 1.506.002.024zm.113-1.604c-.03-.432-.469-1.467-.886-2.338l-.103.735c.015.12.192 1.439.755 2.25l.234-.647zm-1.48 2.979c.044-.05.422-.49-.083-.49-.458 0-.787.378-.874.49h.957zm-.461.513c.052-.001.097-.04.105-.095a.112.112 0 00-.031-.094c.002 0 .003-.002.005-.004h-.308v.016c0 .226.178.41.399.41.22 0 .4-.184.4-.41v-.016h-.304a.182.182 0 01.08.178.177.177 0 01-.199.155.178.178 0 01-.147-.14zm-.689 4.781a.934.934 0 01-.184-.096.337.337 0 01-.236.07.338.338 0 01-.235-.07.93.93 0 01-.185.096c.101.118.24.178.42.178s.319-.06.42-.178zM6.55 8.062c.052-.001.098-.04.105-.095a.111.111 0 00-.031-.094l.002-.001.003-.003H6.32v.016c0 .226.179.41.4.41.22 0 .399-.184.399-.41v-.016h-.304c.057.037.09.106.08.178a.177.177 0 01-.199.155.178.178 0 01-.147-.14zm-.037-1.003c-.506 0-.128.44-.083.49h.956c-.087-.112-.416-.49-.873-.49zm-.671-4.827c-.418.871-.856 1.906-.886 2.338l.24.663c.52-.737.715-1.906.757-2.204l-.111-.797zm.408 8.221c0 .037.002.92.227 1.551.18.509.586.564.752.564.428 0 .603-.4.61-.417v-.203l-.003-.002s.008-.17-.016-.228c-.043-.101-.136-.077-.21.055l-.003.01a.074.074 0 01-.004.008c-.205-.152-.413-.341-.413-.487 0-.133.163-.367.17-.377l-.111-2.14-.706.826-.45.135c-.288-.387-.55-.766-.603-.89-.037-.177.027-1.346.172-2.68l.012-.105-.078-.215c.214-.25.404-.57.566-.954l.48.809.344-.152c.005-.002.521-.225 1.01-.225H8v-.272h-.002c-.55 0-1.106.243-1.115.247l-.133.059-.486-.82-.071-.508-.135.392c-.194.565-.438 1.008-.724 1.316l-.043.046.113.311-.004.04c-.102.94-.237 2.527-.162 2.793l.003.009c.084.221.641.974.973 1.397l.037.047v.06zm.927 2.453c.046.43.51.589.828.589.313 0 .77-.159.817-.59l-.011.001-.041.002a1.01 1.01 0 01-.108-.006c-.142.28-.4.37-.663.37s-.522-.089-.664-.37a1.01 1.01 0 01-.106.006c-.014 0-.028 0-.041-.002h-.011zm2.571-2.513l.037-.047c.114-.145.254-.328.392-.516l-.722-.217-.705-.825-.11 2.14c.006.01.168.243.168.376 0 .146-.208.335-.413.487l-.003-.008a.08.08 0 00-.005-.01c-.072-.132-.166-.156-.209-.055-.024.057-.016.228-.016.228l-.003.003v.194c.011.026.188.425.61.425.166 0 .572-.055.753-.564.224-.63.226-1.514.226-1.55v-.061z"
                        clipRule="evenodd"
                    />
                    <path d="M7.997 4.452c-.367 0-.726.083-.994.167l-.166-.28-.112-.796c.397-.027.824-.043 1.28-.043.492 0 1.268.042 1.268.042l-.111.797-.167.28a3.46 3.46 0 00-.998-.167zM11.744 4.614c0-.193-.058-.455-.149-.748a8.22 8.22 0 011.09.305v8.041l-1.603 1.18-.348-3.302c.32-.44.517-.752.583-.925.132-.349.013-1.804-.113-2.98l.54-1.491v-.08zM4.682 9.165c-.133-.349-.013-1.804.112-2.98l-.54-1.491v-.08c0-.193.058-.454.149-.747-.709.157-1.089.304-1.089.304v8.042l1.609 1.184.347-3.3c-.324-.443-.523-.758-.588-.932z" />
                </g>
            </svg>
        );
    }
);
