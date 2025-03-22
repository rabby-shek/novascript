var TokenType;
(function (TokenType) {
    TokenType[TokenType["Number"] = 0] = "Number";
    TokenType[TokenType["String"] = 1] = "String";
    TokenType[TokenType["Identifier"] = 2] = "Identifier";
    TokenType[TokenType["ArithmeticOperator"] = 3] = "ArithmeticOperator";
    TokenType[TokenType["AssignmentOperator"] = 4] = "AssignmentOperator";
    TokenType[TokenType["Keyword"] = 5] = "Keyword";
    TokenType[TokenType["Punctuation"] = 6] = "Punctuation";
    TokenType[TokenType["Whitespace"] = 7] = "Whitespace";
    TokenType[TokenType["Comment"] = 8] = "Comment";
    TokenType[TokenType["Let"] = 9] = "Let";
})(TokenType || (TokenType = {}));
var KEYWORDS = {
    let: TokenType.Let,
};
//  create a token
function token(value, type) {
    if (value === void 0) { value = ""; }
    return { value: value, type: type };
}
// check if a character is a letter
function isAlpha(src) {
    return src.toLowerCase() !== src.toUpperCase();
}
// check if a character is a digit
function isInt(src) {
    var c = src.charCodeAt(0);
    var bounds = ["0".charCodeAt(0), "9".charCodeAt(0)];
    return c >= bounds[0] && c <= bounds[1];
}
function isSkipAble(src) {
    return src === " " || src === "\n" || src === "\t";
}
function tokenize(sourceCode) {
    var tokens = [];
    var src = sourceCode.split("");
    console.log(src);
    // build tokens until we run out of characters
    while (src.length > 0) {
        if (src[0] === "+" ||
            src[0] === "-" ||
            src[0] === "*" ||
            src[0] === "/" ||
            src[0] === "%") {
            tokens.push(token(src.shift(), TokenType.ArithmeticOperator));
        }
        else if (src[0] === "=") {
            tokens.push(token(src.shift(), TokenType.AssignmentOperator));
        }
        else {
            // handle multi character tokens
            // build number token
            if (isInt(src[0])) {
                var num = "";
                while (src.length > 0 && isInt(src[0])) {
                    num += src.shift();
                }
                tokens.push(token(num, TokenType.Number));
            }
            else if (isAlpha(src[0])) {
                var Identifier = "";
                while (src.length > 0 && isAlpha(src[0])) {
                    Identifier += src.shift();
                }
                // check if the identifier is a keyword
                if (KEYWORDS[Identifier] === undefined) {
                    tokens.push(token(Identifier, TokenType.Identifier));
                }
                else {
                    tokens.push(token(Identifier, KEYWORDS[Identifier]));
                }
            }
            else if (isSkipAble(src[0])) {
                src.shift();
            }
            else {
                console.log("Unknown token", src[0]);
                process.exit(1);
            }
        }
    }
    return tokens;
}
var code = "let x = 55";
var tokens = tokenize(code);
console.log("tokenized values : ", tokens);
