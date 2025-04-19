import React, { useState, useEffect } from "react";
import { fetchBots } from "../../services/api";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBots();
        setBots(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!bots.length) {
    return <div>No bots available</div>;
  }
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            <img src={bot.image} alt={bot.name} />
            <p>{bot.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
