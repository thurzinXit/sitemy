import { Section } from "../Section";

export default function About() {
	return (
		<Section title="About Me" selectable={false}>
			<div className="whitespace-pre-line">{" brazilian\nprogramming and technology enthusiast "}</div>
		</Section>
	);
}
