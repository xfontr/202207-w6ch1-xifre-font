const removalEffect = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const article = event.target.parentElement as HTMLElement;
  const list = article.parentElement as HTMLElement;

  let rotation = 10;

  setInterval(() => {
    rotation += 2;

    list.setAttribute(
      "style",
      `transform: scale(${rotation * 0.022}) rotateY(${rotation}deg) rotateX(${
        rotation / 70
      }deg) rotateZ(-${rotation / 15}deg);`
    );
  }, 10);
};

export default removalEffect;
