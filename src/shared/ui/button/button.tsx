import "./button.css";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;
  return (
    <button className={`button ${buttonProps.className}`} {...buttonProps}>
      {children}
    </button>
  );
};
