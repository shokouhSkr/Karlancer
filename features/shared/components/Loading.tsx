import { PulseLoader } from "react-spinners";

const Loading = ({ color = "#4a66df", size = 8 }: { color?: string; size?: number }) => {
	return <PulseLoader color={color} size={size} />;
};

export default Loading;
