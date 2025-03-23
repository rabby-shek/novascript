export enum TokenType {
    Number,
    String,
    Identifier,
    ArithmeticOperator,
    AssignmentOperator,
    LogicalOperator,
    ComparisonOperator,
    BitwiseOperator,
    Keyword,
    Punctuation,
    Whitespace,
    Comment,
    Let,
    Const,
    Var,
    Function,
    Return,
    If,
    Else,
    While,
    For,
    Do,
    Switch,
    Case,
    Default,
    Break,
    Continue,
    New,
    Try,
    Catch,
    Finally,
    Throw,
    Class,
    Extends,
    Super,
    This,
    Import,
    Export,
    From,
    Async,
    Await,
    Semicolon,
    CurlyBracket,
    SquareBracket,
    Parenthesis,
    Dot // Added token for dot operator
  }
  
  export const KEYWORDS: Record<string, TokenType> = {
    let: TokenType.Let,
    const: TokenType.Const,
    var: TokenType.Var,
    function: TokenType.Function,
    return: TokenType.Return,
    if: TokenType.If,
    else: TokenType.Else,
    while: TokenType.While,
    for: TokenType.For,
    do: TokenType.Do,
    switch: TokenType.Switch,
    case: TokenType.Case,
    default: TokenType.Default,
    break: TokenType.Break,
    continue: TokenType.Continue,
    new: TokenType.New,
    try: TokenType.Try,
    catch: TokenType.Catch,
    finally: TokenType.Finally,
    throw: TokenType.Throw,
    class: TokenType.Class,
    extends: TokenType.Extends,
    super: TokenType.Super,
    this: TokenType.This,
    import: TokenType.Import,
    export: TokenType.Export,
    from: TokenType.From,
    async: TokenType.Async,
    await: TokenType.Await,
  };