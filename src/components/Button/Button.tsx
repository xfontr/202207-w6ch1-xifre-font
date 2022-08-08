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
    <button
      type={type}
      onClick={(event) => {
        buttonAction(event);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
