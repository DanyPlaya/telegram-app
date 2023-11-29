import { useEffect } from "react";
import "./globalStyles.css";
const tg = Telegram.WebApp;
export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div></div>;
};
