"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
exports.tokenize = tokenize;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Number"] = 0] = "Number";
    TokenType[TokenType["Identifier"] = 1] = "Identifier";
    TokenType[TokenType["Equal"] = 2] = "Equal";
    TokenType[TokenType["OpenParenthesis"] = 3] = "OpenParenthesis";
    TokenType[TokenType["CloseParenthesis"] = 4] = "CloseParenthesis";
    TokenType[TokenType["Let"] = 5] = "Let";
    TokenType[TokenType["BinaryOperators"] = 6] = "BinaryOperators";
})(TokenType || (exports.TokenType = TokenType = {}));
function token(value, type) {
    return { value: value, type: type };
}
function isAlpha(src) {
    return /^[A-Za-z]$/.test(src);
}
function isInt(src) {
    return /^-?\d+]$/.test(src);
}
function tokenize(sourceCode) {
    var tokens = new Array();
    var src = sourceCode.split("");
    //parse string until the end of the length
    while (src.length > 0) {
        if (src[0] == "(") {
            tokens.push(token(src.shift(), TokenType.OpenParenthesis));
        }
        else if (src[0] == ")") {
            tokens.push(token(src.shift(), TokenType.CloseParenthesis));
        }
        else if (src[0] == "+" ||
            src[0] == "-" ||
            src[0] == "*" ||
            src[0] == "/") {
            tokens.push(token(src.shift(), TokenType.BinaryOperators));
        }
        else if (src[0] == "=") {
            tokens.push(token(src.shift(), TokenType.Equal));
        }
        else {
            // Handle multi character token
            // build number tokens
            if (isInt(src[0])) {
                var num = "";
                while (src.length > 0 && isInt(src[0])) {
                    num += src.shift();
                }
                tokens.push(token(num, TokenType.Number));
            }
        }
    }
    return tokens;
}
var tokenizedValues = tokenize("(34)");
console.log(tokenizedValues);
