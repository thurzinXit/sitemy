import { motion } from "framer-motion";
import Card from "./discord/Card";
import Icon from "./Icon";
import { Link } from "./Link";

export default function Home() {
	return (
		<section className="place-content-center container mx-auto m-auto w-auto grow justify-center flex md:flex-row flex-col items-center" id="home">
			<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start mb-16 md:mb-0 justify-center">
				<div className="flex flex-col xl:flex-row justify-between items-center">
					<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<div className="px-24 select-none">
							<h1 className="text-6xl font-bold leading-tight text-zinc-800 dark:text-white justify-center text-center">
								Hiyu, I'm <span className="text-pink-400">Niskii</span>!
							</h1>
							<h2 className="text-2xl font-light text-zinc-800 dark:text-white justify-center text-center xl:text-start">
								Software Engineer, Fullstack Developer
							</h2>

							<nav className="flex gap-4 mt-4 justify-center xl:justify-start">
								<Link href="mailto:business@niskii.dev" label="Email">
									<Icon className="text-3xl" icon="i-octicon-mail" />
								</Link>
								<Link href="https://github.com/whoisniskii" label="GitHub">
									<Icon className="text-3xl" icon="i-octicon-mark-github-16" />
								</Link>
								<Link href="https://open.spotify.com/user/wu6vyqmi5jig37nh6nkp3wzhg" label="Spotify">
									<Icon className="text-3xl" icon="i-fa6-brands-spotify" />
								</Link>
								<Link href="https://twitter.com/whoisniskii" label="Twitter">
									<Icon className="text-3xl" icon="i-fa6-brands-twitter" />
								</Link>
							</nav>
						</div>
					</motion.div>

					<div className="mt-12">
						<Card />
					</div>
				</div>
			</div>
		</section>
	);
}
