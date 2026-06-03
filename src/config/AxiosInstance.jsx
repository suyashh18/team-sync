import axios from "axios";

export let axiosinstance= axios.create({
    baseURL:'https://api.team-sync.space/api',
    withCredentials:true
})

axiosinstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    let originalReq = error.config;

    if (error.response.status === 401 && !originalReq.retry) {
      originalReq.retry = true;

      try {
        await axiosinstance.get("/auth/get-accessToken");
        return axiosinstance(originalReq);
      } catch (error) {
        window.location.href = "/";
        return Promise.reject(error);
      }
    }
  }
);