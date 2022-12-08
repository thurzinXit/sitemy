import type { ChildrenProps } from "@utils/index";
import type { FC } from "react";

type InternalSectionProps = {
	title: string;
	selectable?: boolean;
	img?: string;
	children: ChildrenProps;
};

export const Section: FC<InternalSectionProps> = ({ title, selectable, img, children }) => (
	<div className={selectable ? "mb-3" : "mb-3 select-none"}>
		{img ? (
			<div className="justify-between flex flex-row items-center select-none">
				<div className="text-center">
					<h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Listening to Spotify</h2>
				</div>
				<img src="/assets/icons/spotify-icon.svg" />
			</div>
		) : (
			<h2 className="text-zinc-700 dark:text-slate-300 font-bold text-xs leading-4 mb-2 uppercase select-none">
				{title}
			</h2>
		)}

		{children}
	</div>
);
