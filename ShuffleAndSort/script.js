const cardItems = [
  { card: 1, color: "color1" },
  { card: 2, color: "color2" },
  { card: 3, color: "color3" },
  { card: 4, color: "color2" },
  { card: 5, color: "color3" },
  { card: 6, color: "color4" },
  { card: 7, color: "color4" },
  { card: 8, color: "color1" },
  { card: 9, color: "color3" },
];

onLoad();

function onLoad() {
  document.getElementById("author").innerHTML = "Sreesabari R";
  loadCards();
}

function loadCards() {
  let cards = document.getElementById("card-board");
  cards.innerHTML = "";

  cardItems.forEach(function (cardArray) {
    let element = document.createElement("button");
    cards.append(element);
    element.innerHTML += cardArray.card;
    element.classList.add(cardArray.color);
  });
}

function sortCards() {
  cardItems.sort(function (x, y) {
    if (x.card < y.card) {
      return -1;
    }
    if (x.card > y.card) {
      return 1;
    }
  });
  loadCards();
}

function shuffleCards() {
  cardItems.sort(() => Math.random() - 0.5);
  loadCards();
}
