/* eslint-disable */
import "bootstrap";
import "./style.css";

const extensions = [".com", ".net", ".us", ".org", ".app"];

function generateDomain() {
  let pronoun = [
    "the",
    "our",
    "everthing",
    "few",
    "many",
    "most",
    "his",
    "her"
  ];
  let adj = [
    "great",
    "big",
    "small",
    "adorable",
    "srong",
    "happy",
    "bright",
    "attractive"
  ];
  let noun = [
    "jogger",
    "racoon",
    "jelly",
    "potato",
    "animal",
    "pillow",
    "piano",
    "pencil",
    "paper",
    "stone",
    "cats"
  ];

  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  let randowmExt = extensions[Math.floor(Math.random() * extensions.length)];

  return "www." + randomPronoun + randomAdj + randomNoun + randowmExt;
}

function displayDomain() {
  const domainContainer = document.getElementById("domain-name");
  const domain = generateDomain();
  domainContainer.textContent = domain;
}

const generateButton = document.getElementById("btn-gen");
generateButton.addEventListener("click", displayDomain);

displayDomain();
