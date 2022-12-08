import type { ChildrenProps } from "@utils/index";
import type { FC } from "react";

type InternalButtonProps = {
	children: ChildrenProps;
};

export const Button: FC<InternalButtonProps> = ({ children }) => (
	<button className="select-none h-8 text-sm w-full relative flex items-center justify-center text-white bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-600 hover:dark:bg-zinc-500 rounded transition-colors">
		{children}
	</button>
);
