import { useEffect } from "react";
import "./globalStyles.css";
import { Header } from "@/widgets";
import { useTelegram } from "@/shared/hooks";

export const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="layout">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
};
