const BASE_URL = "http://localhost:5000/bots";

export const fetchBots = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bots:", error);
    throw error;
  }
};
