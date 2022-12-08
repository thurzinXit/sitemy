export const getAssetUrl = ({ applicationId, asset }: AssetOptions) => {
	if (!asset && applicationId) return `https://dcdn.dstn.to/app-icons/${applicationId}`;
	if (asset && asset.startsWith("mp:external")) return `https://media.discordapp.net/${asset.replace("mp:", "")}`;
	if (asset) return `https://cdn.discordapp.com/app-assets/${applicationId}/${asset}.webp`;

	return undefined;
};

export type ChildrenProps = JSX.Element | JSX.Element[] | string | string[];

export type AssetOptions = { applicationId: string | undefined; asset: string | undefined };