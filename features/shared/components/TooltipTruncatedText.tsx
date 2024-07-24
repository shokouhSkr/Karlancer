import { truncateText } from "@/utils/truncateText";

const TooltipTruncatedText = ({ text, maxLength }: { text: string; maxLength: number }) => {
	return (
		<div className="group relative inline-block">
			<span>{truncateText(text, maxLength)}</span>

			{text.length > maxLength && (
				<div className="absolute left-0 bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-white border border-gray-200 p-2 rounded-lg shadow-lg z-10 transition-opacity duration-300 ease-in-out">
					{text}
				</div>
			)}
		</div>
	);
};

export default TooltipTruncatedText;
