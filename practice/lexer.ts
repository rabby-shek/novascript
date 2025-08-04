export enum TokenType {
  Number,
  Identifier,
  Equal,
  OpenParenthesis,
  CloseParenthesis,
  Let,
  BinaryOperators,
}
export interface Token {
  value: string;
  type: TokenType;
}
function token(value: string, type: TokenType): Token {
  return { value, type };
}

function isAlpha(src: string) {
  return /^[A-Za-z]$/.test(src);
}

function isInt(src: string) {
  return /^\d$/.test(src);
}

export function tokenize(sourceCode: string): Token[] {
  const tokens = new Array<Token>();
  const src = sourceCode.split("");

  //parse string until the end of the length
  while (src.length > 0) {
    const char = src[0];
    if (char == "(") {
      tokens.push(token(src.shift(), TokenType.OpenParenthesis));
    } else if (char == ")") {
      tokens.push(token(src.shift(), TokenType.CloseParenthesis));
    } else if ("+-*/".includes(char)) {
      tokens.push(token(src.shift(), TokenType.BinaryOperators));
    } else if (char == "=") {
      tokens.push(token(src.shift(), TokenType.Equal));
    } else {
     throw new Error(`Unrecognized character found: '${char}'`)
    }
  }
  return tokens;
}

const tokenizedValues = tokenize("(34)");
console.log(tokenizedValues);
