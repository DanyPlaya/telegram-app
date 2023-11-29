import { useEffect } from "react";
import "./globalStyles.css";
const tg = Telegram.WebApp;
export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};
