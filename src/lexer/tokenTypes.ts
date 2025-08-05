export enum TokenType {
  Number,
  Identifier,
  Equals,
  Let,
  ArithMeticOperators,
  OpenParen,
  CloseParen,
}
export interface Token {
  value: string;
  type: TokenType;
}
