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
})(TokenType || (TokenType = {}));
function token(value, type) {
    if (value === void 0) { value = ""; }
    return { value: value, type: type };
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
    }
    return tokens;
}
var code = "++=";
var tokens = tokenize(code);
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
