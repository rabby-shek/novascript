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
  Let,
}
const KEYWORDS: Record<string, TokenType> = {
  let: TokenType.Let,
};

interface Token {
  type: TokenType;
  value: string;
}
//  create a token
function token(value = "", type: TokenType): Token {
  return { value, type };
}
// check if a character is a letter
function isAlpha(src: string): boolean {
  return src.toLowerCase() !== src.toUpperCase();
}
// check if a character is a digit
function isInt(src: string): boolean {
  const c = src.charCodeAt(0);
  const bounds = ["0".charCodeAt(0), "9".charCodeAt(0)];
  return c >= bounds[0] && c <= bounds[1];
}

function isSkipAble(src: string): boolean {
  return src === " " || src === "\n" || src === "\t";
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
    } else {
      // handle multi character tokens

      // build number token
      if (isInt(src[0])) {
        let num = "";
        while (src.length > 0 && isInt(src[0])) {
          num += src.shift();
        }
        tokens.push(token(num, TokenType.Number));
      } else if (isAlpha(src[0])) {
        let Identifier = "";
        while (src.length > 0 && isAlpha(src[0])) {
          Identifier += src.shift();
        }
        // check if the identifier is a keyword
        if (KEYWORDS[Identifier] === undefined) {
          tokens.push(token(Identifier, TokenType.Identifier));
        } else {
          tokens.push(token(Identifier, KEYWORDS[Identifier]));
        }
      } else if (isSkipAble(src[0])) {
        src.shift();
      } else {
        console.log("Unknown token", src[0]);
        process.exit(1);
      }
    }
  }
  return tokens;
}

const code = "let x = 55";
const tokens = tokenize(code);
console.log("tokenized values : ", tokens);
