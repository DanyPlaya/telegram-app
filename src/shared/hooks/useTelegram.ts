const tg = Telegram.WebApp;
export const useTelegram = () => {
    const onClose = () => {
        tg.close();
    };
    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    return {
        onToggleButton,
        tg,
        user: tg.initDataUnsafe.user,
        onClose
    }
}