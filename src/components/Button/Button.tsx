import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "submit" | "button";
  text: string;
}

const Button = ({ type, text }: ButtonProps): JSX.Element => {
  const buttonAction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
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
