import { Section } from "../Section";

export default function About() {
	return (
		<Section title="About Me" selectable={true} id="about">
			<div className="whitespace-pre-line">
				<span className="inline-block">
					<img src="/assets/icons/flag_br.svg" alt="flag_br" className="w-5 h-5 inline-block align-bottom" draggable="false" />
					{' \n programming and technology enthusiast'}
					
				</span>
			</div>
		</Section>
	);
}
