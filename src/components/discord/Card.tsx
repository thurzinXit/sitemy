import { Lanyard, useUser } from "@plugins/lanyard-user";
import { motion } from "framer-motion";
import { useEffect } from "react";
import About from "./About";
import Game from "./activity/Game";
import Spotify from "./activity/Spotify";
import Avatar from "./Avatar";
import Badges from "./Badges";
import Dates from "./Dates";

export default function Card() {
	const lanyard = new Lanyard("847865068657836033");

	const [user, setUser] = useUser();

	useEffect(() => lanyard.connect(setUser), []);

	const game = user.activities.find(x => x.type === 0);
	const { spotify } = user;

	return (
		<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
			<section className="w-[300px] dark:text-slate-200 drop-shadow-xl" id="card">
				<div className="h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-900">
					<div className="relative">
						<picture>
							<source type="image/webp" srcSet="/images/banner.webp" />
							<source type="image/gif" srcSet="/images/banner.gif" />
							<img
								src="/images/banner.gif"
								alt="niskii-discord-banner"
								width="300"
								height="120"
								aria-hidden="true"
								draggable="false"
								className="block select-none"
							/>
						</picture>

						<div className="absolute top-[76px] left-[16px]">
							<div className="rounded-full">
								<Avatar data={user.discord_status} />
							</div>
						</div>

						<div className="pt-16 pb-3 px-4">
							<div className="text-xl font-semibold leading-6">
								<span className="text-zinc-900 dark:text-slate-50">Niskii</span>
								<span className="dark:text-slate-300">#0001</span>
							</div>

							<Badges />
						</div>

						<div className="px-4 pb-3.5 flex-initial text-sm">
							<div className="pb-2.5">
								<img
									src="https://cdn.discordapp.com/emojis/1037061490664022127.webp?size=44&quality=lossless"
									iara-label=":twice:"
									alt="twice"
									draggable="false"
									className="-my-px mr-1 select-none"
								/>
							</div>

							<div className="w-full h-[1px] bg-slate-200 dark:bg-zinc-800 mb-3"></div>
							<About />
							<Dates />

							{game && <Game data={game} />}
							{spotify && !game && <Spotify data={spotify} />}
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
}
