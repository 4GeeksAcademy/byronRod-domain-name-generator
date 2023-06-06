/* eslint-disable */
import "bootstrap";
import "./style.css";

let adj = ["cool", "hipster", "epic", "supreme"];
let words = ["tech", "coding", "javascript", "geeks"];
let extension = [".com", ".edu", ".net", ".org"];

for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
  for (let indexWords = 0; indexWords < words.length; indexWords++) {
    for (let indexExt = 0; indexExt < words.length; indexExt++) {
      let domainName = adj[indexAdj] + words[indexWords] + extension[indexExt];
      console.log(domainName);
    }
  }
}
