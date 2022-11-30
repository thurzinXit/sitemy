import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetUno({ dark: "class" }),
		presetWebFonts({
			provider: "bunny",
			fonts: {
				Whitney: ["400", "500", "600", "700"],
			},
		}),
		presetIcons(),
	],
});
