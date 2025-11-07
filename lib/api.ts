import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "/api", // ✅ uses Next.js proxy
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  let token = Cookies.get("XSRF-TOKEN");

  if (!token) {
    axios
      .get("/api/sanctum/csrf-cookie", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      })
      .then(() => {
        token = Cookies.get("XSRF-TOKEN");
        if (token) {
          (config.headers as Record<string, string>)["X-XSRF-TOKEN"] =
            decodeURIComponent(token);
        }
      })
      .catch((err) => {
        console.error("❌ Failed to fetch CSRF cookie:", err);
      });
  } else if (token) {
    (config.headers as Record<string, string>)["X-XSRF-TOKEN"] =
      decodeURIComponent(token);
  }

  return config;
});

export default api;
