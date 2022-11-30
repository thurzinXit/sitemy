import type { useTime } from "@hooks/useTime";

type InternalBarProps = {
	time: ReturnType<typeof useTime>;
};

export function ProgressBar({ time }: InternalBarProps) {
	if (!time || !time.completion || !time.start) return null;

	return (
		<div className="w-full rounded-full h-[4px] bg-white dark:bg-gray-700">
			<div className="bg-gray-700 dark:bg-white h-[4px] rounded-full" style={{ width: `${time.completion}%` }} />
		</div>
	);
}
