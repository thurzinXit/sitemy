import type { ChildrenProps } from "@utils/index";
import type { FC } from "react";

type InternalSectionProps = {
	title: string;
	selectable?: boolean;
	id: string;
	img?: string;
	children: ChildrenProps;
};

export const Section: FC<InternalSectionProps> = ({ title, selectable, img, id, children }) => (
	<section className={selectable ? "mb-3" : "mb-3 select-none"} id={id}>
		{img ? (
			<div className="justify-between flex flex-row items-center select-none">
				<div className="text-center">
					<h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">{title}</h2>
				</div>
				<img src={img} draggable="false" />
			</div>
		) : (
			<h2 className="text-zinc-700 dark:text-slate-300 font-bold text-xs leading-4 mb-2 uppercase select-none">
				{title}
			</h2>
		)}

		{children}
	</section>
);
