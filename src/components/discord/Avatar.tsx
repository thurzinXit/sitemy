import type { Status } from "@plugins/lanyard-user";

const statusClasses = {
	online: "fill-green-600",
	idle: "fill-amber-400",
	dnd: "fill-red-500",
	offline: "fill-slate-500",
};

type InternalAvatarProps = {
	data: Status;
};

export default function Avatar({ data }: InternalAvatarProps) {
	return (
		<div
			role="img"
			aria-label="niskii, avatar"
			aria-hidden="false"
			className="w-[92px] h-[92px] border-6 relative rounded-full border-white dark:border-zinc-900 select-none"
		>
			<svg width="92" height="80" viewBox="0 0 92 80" className="absolute">
				<defs>
					<mask id="avatar-mask">
						<circle cx="40" cy="40" r="40" fill="white" />
						<circle cx="68" cy="68" r="14" fill="black" />
					</mask>
					<mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
						<circle fill="white" cx="0.5" cy="0.5" r="0.5" />
						<rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125" />
					</mask>
					<mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
						<circle fill="white" cx="0.5" cy="0.5" r="0.5" />
						<circle fill="black" cx="0.25" cy="0.25" r="0.375" />
					</mask>
					<mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
						<circle fill="white" cx="0.5" cy="0.5" r="0.5" />
						<circle fill="black" cx="0.5" cy="0.5" r="0.25" />
					</mask>
				</defs>
				<foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
					<div className="grid w-full h-full">
						<picture>
							<source
								src-set="/images/avatar-128.webp 1x, /images/avatar-256.webp 2x, /images/avatar-384.webp 3x, /images/avatar-512.webp 4x"
								type="image/webp"
							/>
							<source
								src-set="/images/avatar-128.png 1x, /images/avatar-256.png 2x, /images/avatar-384.png 3x, /images/avatar-512.png 4x"
								type="image/png"
							/>
							<img
								src="/images/avatar-512.webp"
								alt="discord-avatar"
								width="80"
								height="80"
								aria-hidden="true"
								draggable="false"
								className="block"
							/>
						</picture>
					</div>
				</foreignObject>
				<circle cx="68" cy="68" r="8" className={statusClasses[data]} mask={`url(#svg-mask-status-${data})`} />;
			</svg>
		</div>
	);
}
