import * as fs from 'fs';
import { tokenize } from "./lexer/tokenizer";
import path from "path";
const sourceFile = "./index.nova"; // Main file
const targetFile = "../dist/index.nova"; // File to sync
console.log("path : ", __dirname);
// Watch for changes in source file
// fs.watchFile(sourceFile, () => {
//     fs.copyFile(sourceFile, targetFile, (err) => {
//         if (err) {
//             console.error("Error copying file:", err);
//         } else {
//             console.log(`Updated: ${targetFile}`);
//         }
//     });
// });
const filePath = path.resolve(__dirname, "index.nova");
console.log(filePath);
const code = fs.readFileSync(filePath, "utf-8");
const tokens = tokenize(code);
console.log(tokens);