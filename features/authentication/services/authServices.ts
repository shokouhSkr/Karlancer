import http from "@/features/shared/services/httpService";

export const getOtpApi = (data: { phoneNumber: string }) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtpApi = (data: { phoneNumber: string; otp: string }) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};
