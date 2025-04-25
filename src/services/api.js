const BASE_URL = "https://bot-battlr-backend-my8f.onrender.com";
const BOTS_URL = `${BASE_URL}/bots`;
const ARMY_URL = `${BASE_URL}/army`;

// Fetch all bots
export const fetchBots = async () => {
  try {
    const response = await fetch(BOTS_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch bots");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching bots:", error);
    throw error;
  }
};

// Fetch army
export const fetchArmy = async () => {
  try {
    const response = await fetch(ARMY_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch army");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching army:", error);
    throw error;
  }
};

// Delete a bot (removes from both bots and army)
export const deleteBot = async (botId) => {
  try {
    const response = await fetch(`${BOTS_URL}/${botId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete bot");
    }
    return true;
  } catch (error) {
    console.error("Error deleting bot:", error);
    throw error;
  }
};

// Add bot to army
export const addBotToArmy = async (bot) => {
  try {
    // Check if bot already exists in army
    const armyResponse = await fetch(ARMY_URL);
    const army = await armyResponse.json();

    if (army.some((b) => b.id === bot.id)) {
      throw new Error("Bot already in army");
    }

    const response = await fetch(ARMY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bot),
    });

    if (!response.ok) {
      throw new Error("Failed to add bot to army");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding bot to army:", error);
    throw error;
  }
};

// Remove bot from army
export const removeBotFromArmy = async (botId) => {
  try {
    const response = await fetch(`${ARMY_URL}/${botId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to remove bot from army");
    }
    return true;
  } catch (error) {
    console.error("Error removing bot from army:", error);
    throw error;
  }
};
