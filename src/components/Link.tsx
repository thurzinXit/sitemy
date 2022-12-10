import type { ChildrenProps } from "@utils/index";
import type { FC } from "react";

type InternalLinkProps = {
	className?: string;
	href: string;
	label: string;
	children: ChildrenProps;
};

export const Link: FC<InternalLinkProps> = ({ className, href, label, children }) => (
	<a rel="noopener noreferrer" target="_blank" className={className} href={href} aria-label={label} title={label}>
		{children}
	</a>
);
