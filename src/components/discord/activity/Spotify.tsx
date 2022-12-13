import { Button } from "@components/Button";
import Icon from "@components/Icon";
import { Link } from "@components/Link";
import { Section } from "@components/Section";
import { useTime } from "@hooks/useTime";
import type { Spotify } from "@plugins/lanyard-user";
import { ProgressBar } from "../../ProgressBar";

type InternalActivityProps = {
	data: Spotify;
};

export default function Spotify({ data }: InternalActivityProps) {
	const time = useTime(data.timestamps);

	return (
		<Section title="Listening to Spotify" img="/assets/icons/spotify-icon.svg" id="spotifycard">
			<div className="items-center flex flex-row select-none">
				<img src={data.album_art_url} alt={data.album} width="60" height="60" draggable="false" className="self-start" />

				<div className="ml-2.5 overflow-hidden">
					<Link
						href={`https://open.spotify.com/track/${data.track_id}`}
						className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden text-sm font-semibold hover:underline underline-offset-2"
						label={data.song}
					>
						{data.song}
					</Link>

					<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
						by {data.artist.replaceAll("; ", ", ")}
					</div>

					<div className="text-zinc-700 dark:text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden">
						on {data.album}
					</div>
				</div>
			</div>

			<div className="mt-3 select-none">
				<ProgressBar time={time} />
				<div className="flex flex-row items-center gap-3 justify-between">
					{time && time.start && <span className="text-xs font-normal">{time.start}</span>}
					{time && time.end && <span className="text-xs font-normal">{time.end}</span>}
				</div>
			</div>

			<div className="mt-1">
				<div className="flex mt-3 flex-col flex-wrap justify-center items-stretch">
					<Link href={`https://open.spotify.com/track/${data.track_id}`} label="Play on Spotify">
						<Button>
							<div className="flex items-center justify-center gap-1">
								<Icon className="text-4" icon="i-fa6-brands-spotify" />
								<div className="block whitespace-nowrap text-ellipsis overflow-hidden">Play on Spotify</div>
							</div>
						</Button>
					</Link>
				</div>
			</div>
		</Section>
	);
}
