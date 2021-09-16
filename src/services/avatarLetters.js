// não é bem uma API:
// https://ui-avatars.com/
// tem algumas opções para variar tamanhos, fonte, etc...
// só importar a função e jogar no src da imagem passando o nome do cliente

export const getLettersAvatarSrc = (name) => {
  return `https://ui-avatars.com/api/?background=random&name=${name}`;
};

export const getOneLetterAvatarSrc = (name) => {
  return `https://ui-avatars.com/api/?background=random&name=${name}&length=1&rounded=true&bold=true`;
};
