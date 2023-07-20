const nome = "Guido Cerqueira";

function generatNickname(name) {
  const lowercaseName = name.toLowerCase();
  const trimmedName = lowercaseName.replace(/\s/g, "");
  const limitedName = trimmedName.substring(0, 13);

  const nickname = `@${limitedName}`;

  return nickname;
}
console.log(generatNickname(nome));
