const Divider = ({ text }: { text: string }) => {
	return (
		<p className="flex items-center justify-center my-4">
			<span className="border-t border-gray-300 w-full"></span>
			<span className="mx-4 text-gray-500">{text}</span>
			<span className="border-t border-gray-300 w-full"></span>
		</p>
	);
};

export default Divider;
