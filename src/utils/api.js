import axios from "axios";

const api = async (route = "/", payload = null, method = "GET") => {
  try {
    const config = {
      method,
      url: `https://api.marineroute.in/${route}`, // Replace with your base URL
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Attach payload to appropriate place
    if (method === "GET" && payload) {
      config.params = payload;
    } else if (payload) {
      config.data = payload;
    }

    const response = await axios(config);
    return response; // Return only the data portion
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    throw error?.response?.data || error;
  }
};

export default api;
