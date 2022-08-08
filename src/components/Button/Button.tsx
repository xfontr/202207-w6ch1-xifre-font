import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "submit" | "button";
  text: string;
  action: () => void;
}

const Button = ({ type, text, action }: ButtonProps): JSX.Element => {
  const buttonAction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    action();
  };

  return (
    <ButtonStyled
      type={type}
      onClick={(event) => {
        buttonAction(event);
      }}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
