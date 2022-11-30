import Button from "@components/discord/Button";
import type { Spotify } from "@composables/LanyardUser";
import { useTime } from "@hooks/useTime";
import { ProgressBar } from "./ProgressBar";

type InternalActivityProps = {
	data: Spotify;
};

export default function Spotify({ data }: InternalActivityProps) {
	const time = useTime(data.timestamps);

	return (
		<div className="mb-3">
			<div className="justify-between flex flex-row items-center">
				<div className="text-center">
					<h2 className="text-zinc-700 dark:text-slate-300 font-bold text-xs leading-4 mb-2 uppercase">
						Listening to Spotify
					</h2>
				</div>
				<img src="/assets/icons/spotify-icon.svg" />
			</div>

			<div className="items-center flex flex-row">
				<img src={data.album_art_url} alt={data.album} width="60" height="60" className="self-start" />

				<div className="ml-2.5 overflow-hidden">
					<a
						href={`https://open.spotify.com/track/${data.track_id}`}
						className="
            text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden text-sm font-semibold hover:underline underline-offset-2"
					>
						{data.song}
					</a>

					<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
						by {data.artist.replaceAll("; ", ", ")}
					</div>

					<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
						on {data.album}
					</div>
				</div>
			</div>

			<div className="mt-3">
				<ProgressBar time={time} />
				<div className="flex flex-row items-center gap-3 justify-between">
					{time && time.start && <span className="text-xs font-normal">{time.start}</span>}
					{time && time.end && <span className="text-xs font-normal">{time.end}</span>}
				</div>
			</div>

			<div className="mt-1">
				<div className="flex mt-3 flex-col flex-wrap justify-center items-stretch">
					<a href={`https://open.spotify.com/track/${data.track_id}`}>
						<Button text="Play on Spotify" />
					</a>
				</div>
			</div>
		</div>
	);
}
