import { useState, useEffect } from 'react';

export const useRealtime = (interval: number = 30000) => {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdate(new Date());
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return lastUpdate;
};

export const generateRealTimeData = () => ({
  timestamp: new Date().toISOString(),
  activeShipments: Math.floor(Math.random() * 50) + 200,
  activeNegotiations: Math.floor(Math.random() * 20) + 8,
  systemAlerts: Math.floor(Math.random() * 10) + 2,
  costSavings: (Math.random() * 2 + 2.5).toFixed(1),
  deliveryRate: (95 + Math.random() * 4).toFixed(1),
  supplierRating: (4.5 + Math.random() * 0.5).toFixed(1),
  operationalHealth: (92 + Math.random() * 6).toFixed(1),
});