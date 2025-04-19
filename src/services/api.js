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
export const addBotToArmy = async (bot) => {
  try {
    const response = await fetch("http://localhost:5000/army", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bot), // Send the bot object directly
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json(); // Return the added bot
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
