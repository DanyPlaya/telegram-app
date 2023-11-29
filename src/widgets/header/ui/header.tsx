import { Button } from "@/shared/ui";
import "./header.css";
import { useTelegram } from "@/shared/hooks";
export const Header = () => {
  const { onClose, user } = useTelegram();
  return (
    <header className={"header"}>
      //@ts-ignore
      <span className={"username"}>{user?.username}</span>
      <Button className="header__button" onClick={onClose}>
        Закрыть
      </Button>
    </header>
  );
};
