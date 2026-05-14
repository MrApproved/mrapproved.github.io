const DeckBuilder = {
 deckElement: HTMLElement,
 cardsElement: HTMLElement,
 titleElement: HTMLElement,
 buttonMenuElement: HTMLElement,
 maximiseElement: HTMLElement,
 downloadElement: HTMLElement,
 uploadElement: HTMLElement,
 fileUploadElement: HTMLElement,
 sliderElement: HTMLElement,
 expanderElement: HTMLElement,
 deckSegment: Number,
 totalCards: Number,
 cardsRepository: CardsRepository,
 deckStatistics: DeckStatistics,
 deck: Deck,
 initialise(cardsRepository) {
  this.cardsRepository = cardsRepository;
  this.deckElement = document.createElement("div");
  this.deckElement.id = "deck";
  this.deckElement.className = "expanded";
  this.titleElement = document.createElement("input");
  this.titleElement.placeholder = "Untitled Deck";
  this.buttonMenuElement = document.createElement("div");
  this.buttonMenuElement.className = "menu";
  this.maximiseElement = document.createElement("div");
  this.maximiseElement.id = "maximise";
  this.maximiseElement.title = "Maximise";
  this.maximiseElement.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  this.downloadElement = document.createElement("div");
  this.downloadElement.id = "download";
  this.downloadElement.title = "Download";
  this.downloadElement.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z" fill="currentColor"/>
</svg>`;
  this.downloadElement.addEventListener("click", (e) => {
   let filename = `${deckBuilder.deck.name}.json`;
   let contentType = "application/json;charset=utf-8;";
   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob(JSON.stringify(deckBuilder.deck.export()), {
     type: contentType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
   } else {
    var a = document.createElement("a");
    a.download = filename;
    a.href =
     "data:" + contentType + "," + JSON.stringify(deckBuilder.deck.export());
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
   }
  });
  this.fileUploadElement = document.createElement("input");
  this.fileUploadElement.id = "file";
  this.fileUploadElement.setAttribute("type", "file");
  this.uploadElement = document.createElement("div");
  this.uploadElement.id = "upload";
  this.uploadElement.title = "Upload";
  this.uploadElement.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11.8107L14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303C15.8232 13.2374 15.8232 12.7626 15.5303 12.4697L12.5303 9.46967C12.3897 9.32902 12.1989 9.25 12 9.25C11.8011 9.25 11.6103 9.32902 11.4697 9.46967L8.46967 12.4697C8.17678 12.7626 8.17678 13.2374 8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303L11.25 11.8107V17C11.25 17.4142 11.5858 17.75 12 17.75ZM8 7.75C7.58579 7.75 7.25 7.41421 7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H8Z" fill="currentColor"/>
</svg>`;
  this.fileUploadElement.addEventListener("change", (x) => {
   var files = document.getElementById("file").files;
   if (files.length <= 0) {
    return false;
   }

   var fr = new FileReader();

   fr.onload = function (e) {
    deckBuilder.import(JSON.parse(JSON.parse(e.target.result)));
   };

   fr.readAsText(files.item(0));
  });
  this.uploadElement.onclick = function () {
   document.getElementById("file").value = null;
   document.getElementById("file").click();
  };
  this.buttonMenuElement.appendChild(this.uploadElement);
  this.buttonMenuElement.appendChild(this.fileUploadElement);
  this.buttonMenuElement.appendChild(this.downloadElement);
  this.buttonMenuElement.appendChild(this.maximiseElement);
  this.sliderElement = document.createElement("div");
  this.sliderElement.id = "slider";
  this.sliderElement.className = "expanded";
  this.expanderElement = document.createElement("div");
  this.expanderElement.className = "expander";
  this.expanderElement.innerHTML = `<svg class="shrink" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75L13.3476 12.75L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43056C12.0486 8.16099 11.5751 8.19741 11.3056 8.51191C11.036 8.8264 11.0724 9.29988 11.3869 9.56944L13.3476 11.25L2.375 11.25C1.96079 11.25 1.625 11.5858 1.625 12Z"
        fill="currentColor" />
    <path
        d="M9.375 9.75004L9.75328 9.75004C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25L9.375 14.25L9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22L16.375 22C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16L22.375 8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2L15.375 2C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8L9.375 9.75004Z"
        fill="currentColor" />
</svg>
<svg class="expand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M16.125 12C16.125 11.5858 15.7892 11.25 15.375 11.25L4.40244 11.25L6.36309 9.56944C6.67759 9.29988 6.71401 8.8264 6.44444 8.51191C6.17488 8.19741 5.7014 8.16099 5.38691 8.43056L1.88691 11.4306C1.72067 11.573 1.625 11.7811 1.625 12C1.625 12.2189 1.72067 12.427 1.88691 12.5694L5.38691 15.5694C5.7014 15.839 6.17488 15.8026 6.44444 15.4881C6.71401 15.1736 6.67759 14.7001 6.36309 14.4306L4.40244 12.75L15.375 12.75C15.7892 12.75 16.125 12.4142 16.125 12Z"
        fill="currentColor" />
    <path
        d="M9.375 8C9.375 8.70219 9.375 9.05329 9.54351 9.3055C9.61648 9.41471 9.71025 9.50848 9.81946 9.58145C10.0717 9.74996 10.4228 9.74996 11.125 9.74996L15.375 9.74996C16.6176 9.74996 17.625 10.7573 17.625 12C17.625 13.2426 16.6176 14.25 15.375 14.25L11.125 14.25C10.4228 14.25 10.0716 14.25 9.8194 14.4185C9.71023 14.4915 9.6165 14.5852 9.54355 14.6944C9.375 14.9466 9.375 15.2977 9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5464 22 15.3748 22L16.3748 22C19.2032 22 20.6174 22 21.4961 21.1213C22.3748 20.2426 22.3748 18.8284 22.3748 16L22.3748 8C22.3748 5.17158 22.3748 3.75736 21.4961 2.87868C20.6174 2 19.2032 2 16.3748 2L15.3748 2C12.5464 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8Z"
        fill="currentColor" />
</svg>`;
  this.sliderElement.appendChild(this.expanderElement);

  this.titleElement.addEventListener("change", (e) => {
   this.deck.name = e.target.value;
  });

  this.sliderElement.addEventListener("click", (e) => {
   if (this.deckElement.className == "expanded") {
    this.deckElement.className = "";
   } else {
    this.deckElement.className = "expanded";
   }
  });

  this.maximiseElement.addEventListener("click", (e) => {
   if (this.deckElement.className === "maximised") {
    this.deckElement.className = "expanded";
    this.maximiseElement.title = "Maximise";
   } else {
    this.deckElement.className = "maximised";
    this.maximiseElement.title = "Minimise";
   }
  });

  this.cardsElement = document.createElement("div");
  this.cardsElement.id = "cards";

  this.deckElement.appendChild(this.titleElement);
  this.deckElement.appendChild(this.buttonMenuElement);
  this.deckElement.appendChild(this.sliderElement);
  this.deckElement.appendChild(this.cardsElement);

  this.deckSegment = 45;
  this.deck = Object.create(Deck);
  this.deckStatistics = Object.create(DeckStatistics);
  this.deckStatistics.initialise(this.deck);
  document.getElementsByTagName("body")[0].appendChild(this.deckElement);
 },
 addCard(card) {
  this.deck.addCard(card);
  this.deckStatistics.update();
  this.addCardImage(card);
 },
 addCardImage(card) {
  let cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  let cardIndex = this.cardsElement.getElementsByTagName("img").length;
  let img = document.createElement("img");
  var imgSrc =
   card.imageSrc !== undefined
    ? card.imageSrc
    : `${card.series}/${card.set}/images/${card.cardNumber}.jpg`;
  img.src = this.cardsRepository.resource(imgSrc);
  cardContainer.style.top = cardIndex * this.deckSegment + "px";

  let remove = document.createElement("div");
  remove.className = "delete";
  remove.innerHTML = "X";
  remove.addEventListener("click", (e) => {
   this.removeCard(img.dataset.index);
  });

  cardContainer.appendChild(img);
  cardContainer.appendChild(remove);
  this.cardsElement.appendChild(cardContainer);
  this.updateCardsId();
 },
 removeCard(id) {
  this.deck.removeCard(id);
  this.deckStatistics.update();
  this.deckElement.querySelectorAll(".card-container")[id].remove();
  this.updateCardsId();
 },
 updateCardsId() {
  this.deckElement.querySelectorAll(".card-container").forEach((e, i) => {
   let img = e.querySelectorAll("img")[0];
   img.dataset.index = i;
   e.style.top = i * this.deckSegment + "px";
  });
 },
 import(deck) {
  this.deck.import(deck);
  this.deckStatistics.update();
  this.titleElement.value = this.deck.name;
  this.cardsElement.innerHTML = "";
  this.deck.cards.forEach((c) => {
   this.addCardImage(c);
  });
 },
};
