import Element from "./Element.js";
import Card from "./components/Card/index.js";

let card = new Card({content: "This is the card content"});
let element = new Element("div");

element.render(card.render());
