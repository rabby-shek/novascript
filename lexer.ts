enum TokenType {
  Number,
  String,
  Identifier,
  ArithmeticOperator,
  AssignmentOperator,
  Keyword,
  Punctuation,
  Whitespace,
  Comment,
}

interface Token {
  type: TokenType;
  value: string;
}
function token(value = "", type: TokenType): Token {
  return { value, type };
}
function isAlpha(src: string): boolean {
  return src.toLowerCase() !== src.toUpperCase();
}
function tokenize(sourceCode: string): Token[] {
  const tokens: Token[] = [];
  const src = sourceCode.split("");
  console.log(src);
  // build tokens until we run out of characters
  while (src.length > 0) {
    if (
      src[0] === "+" ||
      src[0] === "-" ||
      src[0] === "*" ||
      src[0] === "/" ||
      src[0] === "%"
    ) {
      tokens.push(token(src.shift(), TokenType.ArithmeticOperator));
    } else if (src[0] === "=") {
      tokens.push(token(src.shift(), TokenType.AssignmentOperator));
    }
  }
  return tokens;
}

const code = "++=";
const tokens = tokenize(code);
console.log(tokens);

// document.getElementById("run")?.addEventListener("click", () => {
//   const code = (document.getElementById("codeEditor") as HTMLTextAreaElement)
//     .value;
//   const tokens = tokenize(code);
//   document.getElementById("output")!.innerText = JSON.stringify(
//     tokens,
//     null,
//     2
//   );
// });
