import type { ChildrenProps } from "@utils/index";
import type { FC } from "react";

type InternalLinkProps = {
	href: string;
	label: string;
	className?: string;
	children: ChildrenProps;
};

export const Link: FC<InternalLinkProps> = ({ href, className, label, children }) => (
	<a aria-label={label} className={className} href={href} rel="noopener noreferrer" target="_blank" title={label}>
		{children}
	</a>
);
