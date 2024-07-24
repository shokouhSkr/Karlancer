import http from "@/features/shared/services/httpService";

export const getOtpApi = async (data: { phoneNumber: string }) => {
	const response = await http.post("/user/get-otp", data);
	return response.data.data;
};

export const checkOtpApi = async (data: { phoneNumber: string; otp: string }) => {
	const response = await http.post("/user/check-otp", data);
	return response.data.data;
};

export const completeProfileApi = async (data: { name: string; email: string; role: string }) => {
	const response = await http.post("/user/complete-profile", data);
	return response.data.data;
};

export const getUserApi = async () => {
	const response = await http.get("/user/profile");
	return response.data.data;
};
