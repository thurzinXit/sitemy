import { clsx } from "clsx";

type InternalIconProps = {
	className: string;
	icon: string;
}

export default function Icon({ className, icon }: InternalIconProps) {
	return <span aria-hidden="true" className={clsx(["inline-block", className, icon])} />;
}
