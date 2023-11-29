import { Button } from "../../../shared/ui";
import "./header.css";
export const Header = () => {
  const tg = Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <header className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe.user?.usernames}</span>
    </header>
  );
};
