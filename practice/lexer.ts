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
export function tokenize(sourceCode: string): Token[] {
  const tokens = new Array<Token>();
  const src = sourceCode.split("");

//parse string until the end of the length
  while (src.length > 0) {
    if (src[0] == "(") {
      tokens.push(token(src.shift(), TokenType.OpenParenthesis));
    } else if (src[0] == ")") {
      tokens.push(token(src.shift(), TokenType.CloseParenthesis));
    } else if (
      src[0] == "+" ||
      src[0] == "-" ||
      src[0] == "*" ||
      src[0] == "/"
    ) {
      tokens.push(token(src.shift(), TokenType.BinaryOperators));
    } else if (src[0] == "=") {
      tokens.push(token(src.shift(), TokenType.Equal));
    }else{
        // Handle multi character token
    }
  }
  return tokens;
}

const tokenizedValues = tokenize("(");
console.log(tokenizedValues);
