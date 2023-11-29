import { Button } from "@/shared/ui";
import "./header.css";
import { useTelegram } from "@/shared/hooks";
export const Header = () => {
  const { onClose, user } = useTelegram();
  return (
    <header className={"header"}>
      <span className={"username"}>{user?.usernames}</span>
      <Button className="header__button" onClick={onClose}>
        Закрыть
      </Button>
    </header>
  );
};
