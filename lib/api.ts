import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "/api", // Uses Next.js proxy
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

// ✅ Manually fetch CSRF cookie if missing
let csrfFetched = false;

async function fetchCsrfCookie() {
  if (!csrfFetched && !Cookies.get("XSRF-TOKEN")) {
    try {
      await axios.get("/api/sanctum/csrf-cookie", {
        withCredentials: true,
        headers: { Accept: "application/json" },
      });
      csrfFetched = true;
    } catch (err) {
      console.error("❌ Failed to fetch CSRF cookie:", err);
    }
  }
}

// ✅ Manually attach token to header before each request
api.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    await fetchCsrfCookie();

    const token = Cookies.get("XSRF-TOKEN");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers["X-XSRF-TOKEN"] = decodeURIComponent(token);
    }

    return config;
  }
);

export default api;
