import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "submit" | "button";
  text: string;
  action: () => void;
  eventAction?: (event: React.ChangeEvent<any>) => void;
}

const Button = ({
  type,
  text,
  action,
  eventAction = () => {},
}: ButtonProps): JSX.Element => {
  const buttonAction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    action();
    eventAction(event);
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
