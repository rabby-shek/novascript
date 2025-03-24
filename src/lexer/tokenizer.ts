import { TokenType } from "./tokenTypes";
import { KEYWORDS } from "./tokenTypes";

type Token = {
  type: TokenType;
  value: string;
};

const token = (value: string = "", type: TokenType): Token => {
  return { value, type };
};
function isAlpha(src: string): boolean {
  return /^[a-zA-Z_]$/.test(src);
}

function isInt(src: string): boolean {
  return /^[0-9]$/.test(src);
}

function isWhitespace(src: string): boolean {
  return /\s/.test(src);
}
export function tokenize(sourceCode: string): Token[] {
  const tokens: Token[] = [];
  const src = sourceCode.split("");

  while (src.length > 0) {
    const char = src[0];

    if ("+-*/%".includes(char)) {
      tokens.push(token(src.shift()!, TokenType.ArithmeticOperator));
    } else if ("&|^~".includes(char)) {
      tokens.push(token(src.shift()!, TokenType.BitwiseOperator));
    } else if (char === "=") {
      tokens.push(token(src.shift()!, TokenType.AssignmentOperator));
    } else if ("!<>".includes(char)) {
      tokens.push(token(src.shift()!, TokenType.ComparisonOperator));
    } else if (char === "(") {
      tokens.push(token(src.shift()!, TokenType.Parenthesis));
    } else if (char === ")") {
      tokens.push(token(src.shift()!, TokenType.Parenthesis));
    } else if (char === "{") {
      tokens.push(token(src.shift()!, TokenType.CurlyBracket));
    } else if (char === "}") {
      tokens.push(token(src.shift()!, TokenType.CurlyBracket));
    } else if (char === "[") {
      tokens.push(token(src.shift()!, TokenType.SquareBracket));
    } else if (char === "]") {
      tokens.push(token(src.shift()!, TokenType.SquareBracket));
    } else if (char === ";") {
      tokens.push(token(src.shift()!, TokenType.Semicolon));
    } else if (char === ".") {
      // Dot operator
      tokens.push(token(src.shift()!, TokenType.Dot));
    } else if (isInt(char)) {
      let num = "";
      while (src.length > 0 && isInt(src[0])) {
        num += src.shift();
      }
      tokens.push(token(num, TokenType.Number));
    } else if (isAlpha(char)) {
      let identifier = "";
      while (src.length > 0 && isAlpha(src[0])) {
        identifier += src.shift();
      }
      if (KEYWORDS[identifier] !== undefined) {
        tokens.push(token(identifier, KEYWORDS[identifier]));
      } else {
        tokens.push(token(identifier, TokenType.Identifier));
      }
    } else if (isWhitespace(char)) {
      src.shift();
    } else if (char === '"' || char === "'") {
      let str = "";
      const quote = src.shift();
      while (src.length > 0 && src[0] !== quote) {
        str += src.shift();
      }
      src.shift();
      tokens.push(token(str, TokenType.String));
    } else if (char === "/" && src[1] === "/") {
      let comment = "";
      while (src.length > 0 && src[0] !== "\n") {
        comment += src.shift();
      }
      tokens.push(token(comment, TokenType.Comment));
    } else {
      console.error("Unknown token", char);
      process.exit(1);
    }
  }
  return tokens;
}
