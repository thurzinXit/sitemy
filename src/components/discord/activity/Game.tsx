import { useTime } from "@hooks/useTime";
import type { GatewayActivity } from "discord-api-types/v10";
import { getAssetUrl } from "../../../utils";
import Button from "../Button";

type InternalActivityProps = {
	data: GatewayActivity;
};

export default function Game({ data }: InternalActivityProps) {
	const time = useTime(data.timestamps!);

	return (
		<div className="mb-3">
			<h2 className="text-zinc-700 dark:text-slate-300 font-bold text-xs leading-4 mb-2 uppercase">Playing a game</h2>

			<div className="items-center flex">
				<div className="relative self-start">
					<img
						src={getAssetUrl(data.application_id, data.assets?.large_image)}
						width="60"
						height="60"
						className={"block object-cover rounded-lg"}
					/>

					{data.assets && data.assets.small_image && data.assets.large_image && (
						<img
							src={getAssetUrl(data.application_id, data.assets?.small_image)}
							width="20"
							height="20"
							className="rounded-full absolute -bottom-1 -right-1"
						/>
					)}
				</div>

				<div className="flex-auto overflow-hidden ml-2.5">
					<div className="text-zinc-700 dark:text-slate-300 font-semibold block whitespace-nowrap text-ellipsis overflow-hidden text-sm">
						{data.name}
					</div>

					{data.details && (
						<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
							{data.details}
						</div>
					)}

					{data.state && (
						<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
							{data.state}
						</div>
					)}

					{data.timestamps && (
						<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
							{time && time.start && !time.end ? `${time.start} elapsed` : `${time!.end} left`}
						</div>
					)}
				</div>
			</div>

			<div className="flex mt-3 flex-col flex-wrap space-y-2 justify-center items-stretch">
				{data.buttons?.map((button) => (
					<Button text={button.toString()} />
				))}
			</div>
		</div>
	);
}
