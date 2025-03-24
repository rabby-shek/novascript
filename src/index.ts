import * as fs from 'fs';
import { tokenize } from "./lexer/tokenizer";
import path from "path";
const filePath = path.resolve(__dirname, "index.nova");
const code = fs.readFileSync(filePath, "utf-8");
const tokens = tokenize(code);
console.log(tokens);