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

export const deleteBot = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/${botId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return true;
  } catch (error) {
    console.error("Error deleting bot:", error);
    throw error;
  }
};
export const addBotToArmy = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/${botId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ botId }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return true;
  } catch (error) {
    console.error("Error adding bot to army:", error);
    throw error;
  }
};
export const removeBotFromArmy = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/${botId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return true;
  } catch (error) {
    console.error("Error removing bot from army:", error);
    throw error;
  }
};
