const Filter = {
 cards: [],
 element: HTMLElement,
 formElement: HTMLElement,
 nameElement: HTMLElement,
 nameInputElement: HTMLElement,
 seriesElement: HTMLElement,
 seriesSelectElement: HTMLElement,
 typesElement: HTMLElement,
 typesSelectElement: HTMLElement,
 coloursElement: HTMLElement,
 coloursSelectElement: HTMLElement,
 stagesElement: HTMLElement,
 stagesSelectElement: HTMLElement,
 searchElement: HTMLElement,
 toggleElement: HTMLElement,
 deckBuilder: DeckBuilder,
 cardsRepository: CardsRepository,

 async initialise(cardsRepository, deckBuilder) {
  this.cardsRepository = cardsRepository;
  this.deckBuilder = deckBuilder;

  this.element = document.createElement("div");
  this.element.id = "card-search-container";
  this.element.className = "expanded";

  let loadingDiv = document.createElement("div");
  loadingDiv.innerText = "Loading...";
  this.element.appendChild(loadingDiv);

  document.getElementsByTagName("body")[0].appendChild(this.element);

  this.element.removeChild(loadingDiv);

  this.formElement = document.createElement("form");
  this.formElement.id = "card-search";

  this.nameElement = document.createElement("div");
  let nameLabel = document.createElement("label");
  nameLabel.innerText = "Name:";
  this.nameInputElement = document.createElement("input");
  this.nameInputElement.setAttribute("placeholder", "Filter by name");

  this.nameElement.appendChild(nameLabel);
  this.nameElement.appendChild(this.nameInputElement);

  this.seriesElement = document.createElement("div");
  let seriesLabel = document.createElement("label");
  seriesLabel.innerText = "Series";
  this.seriesSelectElement = document.createElement("select");
  this.seriesSelectElement.className = "series";
  this.seriesSelectElement.setAttribute("multiple", "");

  this.cardsRepository.series.forEach((s) => {
   let optionElement = document.createElement("option");
   optionElement.text = s.name;
   optionElement.value = s.name;
   optionElement.title = s.name;
   this.seriesSelectElement.append(optionElement);
   s.sets.forEach((set) => {
    let optionElement = document.createElement("option");
    optionElement.text = set;
    optionElement.value = set;
    optionElement.title = set;
    optionElement.className = "set";
    optionElement.setAttribute("series", s.name);
    this.seriesSelectElement.append(optionElement);
   });
  });

  this.seriesElement.appendChild(seriesLabel);
  this.seriesElement.appendChild(this.seriesSelectElement);

  this.typesElement = document.createElement("div");
  let typesLabel = document.createElement("label");
  typesLabel.innerText = "Types";

  this.typesSelectElement = document.createElement("select");
  this.typesSelectElement.setAttribute("multiple", "");
  this.cardsRepository.types.forEach((t) => {
   var optionElement = document.createElement("option");
   optionElement.text = t;
   optionElement.value = t;
   optionElement.title = t;
   this.typesSelectElement.append(optionElement);
  });

  this.typesElement.appendChild(typesLabel);
  this.typesElement.appendChild(this.typesSelectElement);

  this.coloursElement = document.createElement("div");
  let coloursLabel = document.createElement("label");
  coloursLabel.innerText = "Colours";

  this.coloursSelectElement = document.createElement("select");
  this.coloursSelectElement.setAttribute("multiple", "");
  this.cardsRepository.colours.forEach((t) => {
   var optionElement = document.createElement("option");
   optionElement.text = t;
   optionElement.value = t;
   optionElement.title = t;
   this.coloursSelectElement.append(optionElement);
  });

  this.coloursElement.appendChild(coloursLabel);
  this.coloursElement.appendChild(this.coloursSelectElement);

  this.stagesElement = document.createElement("div");
  let stagesLabel = document.createElement("label");
  stagesLabel.innerText = "Stages";

  this.stagesSelectElement = document.createElement("select");
  this.stagesSelectElement.setAttribute("multiple", "");
  let stagesElement = document.getElementsByClassName("stages")[0];
  this.cardsRepository.stages.forEach((t) => {
   var optionElement = document.createElement("option");
   optionElement.text = t;
   optionElement.value = t;
   optionElement.title = t;
   this.stagesSelectElement.append(optionElement);
  });

  this.stagesElement.appendChild(stagesLabel);
  this.stagesElement.appendChild(this.stagesSelectElement);

  this.searchElement = document.createElement("button");
  this.searchElement.className = "primary";
  this.searchElement.setAttribute("type", "submit");
  this.searchElement.innerText = "Search";

  this.formElement.appendChild(this.nameElement);
  this.formElement.appendChild(this.seriesElement);
  this.formElement.appendChild(this.typesElement);
  this.formElement.appendChild(this.coloursElement);
  this.formElement.appendChild(this.stagesElement);
  this.formElement.appendChild(this.searchElement);

  this.toggleElement = document.createElement("div");
  this.toggleElement.className = "toggle noselect";
  let svgContainer = document.createElement("div");
  svgContainer.innerHTML = `<svg class="expand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75L13.3476 12.75L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43056C12.0486 8.16099 11.5751 8.19741 11.3056 8.51191C11.036 8.8264 11.0724 9.29988 11.3869 9.56944L13.3476 11.25L2.375 11.25C1.96079 11.25 1.625 11.5858 1.625 12Z"
                          fill="currentColor" />
                      <path
                          d="M9.375 9.75004L9.75328 9.75004C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25L9.375 14.25L9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22L16.375 22C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16L22.375 8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2L15.375 2C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8L9.375 9.75004Z"
                          fill="currentColor" />
                  </svg>
                  <svg class="shrink" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M16.125 12C16.125 11.5858 15.7892 11.25 15.375 11.25L4.40244 11.25L6.36309 9.56944C6.67759 9.29988 6.71401 8.8264 6.44444 8.51191C6.17488 8.19741 5.7014 8.16099 5.38691 8.43056L1.88691 11.4306C1.72067 11.573 1.625 11.7811 1.625 12C1.625 12.2189 1.72067 12.427 1.88691 12.5694L5.38691 15.5694C5.7014 15.839 6.17488 15.8026 6.44444 15.4881C6.71401 15.1736 6.67759 14.7001 6.36309 14.4306L4.40244 12.75L15.375 12.75C15.7892 12.75 16.125 12.4142 16.125 12Z"
                          fill="currentColor" />
                      <path
                          d="M9.375 8C9.375 8.70219 9.375 9.05329 9.54351 9.3055C9.61648 9.41471 9.71025 9.50848 9.81946 9.58145C10.0717 9.74996 10.4228 9.74996 11.125 9.74996L15.375 9.74996C16.6176 9.74996 17.625 10.7573 17.625 12C17.625 13.2426 16.6176 14.25 15.375 14.25L11.125 14.25C10.4228 14.25 10.0716 14.25 9.8194 14.4185C9.71023 14.4915 9.6165 14.5852 9.54355 14.6944C9.375 14.9466 9.375 15.2977 9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5464 22 15.3748 22L16.3748 22C19.2032 22 20.6174 22 21.4961 21.1213C22.3748 20.2426 22.3748 18.8284 22.3748 16L22.3748 8C22.3748 5.17158 22.3748 3.75736 21.4961 2.87868C20.6174 2 19.2032 2 16.3748 2L15.3748 2C12.5464 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8Z"
                          fill="currentColor" />
                  </svg>`;
  svgContainer.className = "expander";
  this.toggleElement.appendChild(svgContainer);

  this.element.appendChild(this.toggleElement);
  this.element.appendChild(this.formElement);

  this.setupToggle();
  this.setupForm();
 },

 setupToggle() {
  this.toggleElement.addEventListener("click", (e) => {
   if (this.element.className == "expanded") this.element.className = "";
   else this.element.className = "expanded";
  });
 },

 setupForm() {
  this.formElement.addEventListener("submit", (event) => {
   this.handleFormSubmit();
   event.preventDefault();
  });
 },

 async handleFormSubmit() {
  let seriesFilter = this.getMultipleSelectedValuesWithoutAttribute(
   this.seriesSelectElement,
  );
  let setsFilter = this.getMultipleSelectedValuesWithAttribute(
   this.seriesSelectElement,
  );
  let typesFilter = this.getMultipleSelectedValues(this.typesSelectElement);
  let coloursFilter = this.getMultipleSelectedValues(this.coloursSelectElement);
  let stagesFilter = this.getMultipleSelectedValues(this.stagesSelectElement);
  this.cards = this.cardsRepository.filterCards(
   this.nameInputElement.value,
   seriesFilter,
   setsFilter,
   typesFilter,
   coloursFilter,
   stagesFilter,
  );
  this.drawCards();
 },

 drawCards() {
  let cardLibrary = document.getElementById("card-library");
  cardLibrary.innerHTML = "";

  this.cards.forEach((c) => {
   var img = document.createElement("img");
   console.log(c.imageSrc);
   img.src = this.cardsRepository.resource(c.imageSrc);
   img.addEventListener("click", (e) => {
    this.deckBuilder.addCard(c);
   });
   cardLibrary.appendChild(img);
  });
 },

 getMultipleSelectedValues(select) {
  let values = [];
  [...select.options].forEach((o) => {
   if (o.selected) values.push(o.value);
  });
  return values;
 },

 getMultipleSelectedValuesWithoutAttribute(select) {
  let values = [];
  [...select.options].forEach((o) => {
   if (o.selected && o.getAttribute("series") == undefined)
    values.push(o.value);
  });
  return values;
 },

 getMultipleSelectedValuesWithAttribute(select) {
  let values = [];
  [...select.options].forEach((o) => {
   if (o.selected && o.getAttribute("series") !== null)
    values.push(`${o.value}`);
  });
  return values;
 },
};
