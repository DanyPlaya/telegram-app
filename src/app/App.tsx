import { useEffect } from "react";
import "./globalStyles.css";
import { Header } from "../widgets";
const tg = Telegram.WebApp;
export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};
