export default function Badges() {
	return (
		<div className="absolute top-[120px] right-[16px] justify-end select-none gap-2">
			<img
				src="/assets/icons/discord-active-developer.svg"
				alt="active-developer"
				width="22"
				height="22"
				className="inline-block"
				draggable="false"
			/>
			<img
				src="/assets/icons/discord-nitro.svg"
				alt="discord-nitro"
				width="22"
				height="22"
				className="inline-block"
				draggable="false"
			/>
			<img
				src="/assets/icons/discord-booster.svg"
				alt="discord-booster"
				width="22"
				height="22"
				className="inline-block"
				draggable="false"
			/>
		</div>
	);
}
