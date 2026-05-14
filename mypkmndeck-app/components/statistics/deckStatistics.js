const DeckStatistics = {
 statisticsElement: HTMLElement,
 statisticsToggleElement: HTMLElement,
 statisticsContentElement: HTMLElement,
 statisticListElements: [],
 deck: Deck,
 initialise(deck) {
  this.deck = deck;
  this.statisticsElement = document.createElement("div");
  this.statisticsElement.id = "statistics";
  this.statisticsElement.className = "expanded";
  let title = document.createElement("h1");
  title.innerText = "Statistics";
  this.statisticsContentElement = document.createElement("ul");
  this.statisticsToggleElement = document.createElement("div");
  this.statisticsToggleElement.className = "toggle";

  let expander = document.createElement("div");
  this.statisticsToggleElement.innerHTML = `
<div title="Hide statistics" class="shrink"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V12.9726L9.56944 11.0119C9.29988 10.6974 8.8264 10.661 8.51191 10.9306C8.19741 11.2001 8.16099 11.6736 8.43056 11.9881L11.4306 15.4881C11.573 15.6543 11.7811 15.75 12 15.75C12.2189 15.75 12.427 15.6543 12.5694 15.4881L15.5694 11.9881C15.839 11.6736 15.8026 11.2001 15.4881 10.9306C15.1736 10.661 14.7001 10.6974 14.4306 11.0119L12.75 12.9726L12.75 2C12.75 1.58579 12.4142 1.25 12 1.25Z" fill="currentColor"/>
<path d="M14.25 9V9.37828C14.9836 9.11973 15.8312 9.2491 16.4642 9.79167C17.4077 10.6004 17.517 12.0208 16.7083 12.9643L13.7083 16.4643C13.2808 16.963 12.6568 17.25 12 17.25C11.3431 17.25 10.7191 16.963 10.2916 16.4643L7.29163 12.9643C6.48293 12.0208 6.5922 10.6004 7.53568 9.79167C8.16868 9.2491 9.01637 9.11973 9.74996 9.37828V9H8C5.17157 9 3.75736 9 2.87868 9.87868C2 10.7574 2 12.1716 2 15V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 7.99999 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V15C22 12.1716 22 10.7574 21.1213 9.87868C20.2426 9 18.8284 9 16 9H14.25Z" fill="currentColor"/>
</svg></div>
<div title="Show statistics" class="expand"><svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V4.02744L14.4306 5.98809C14.7001 6.30259 15.1736 6.33901 15.4881 6.06944C15.8026 5.79988 15.839 5.3264 15.5694 5.01191L12.5694 1.51191C12.427 1.34567 12.2189 1.25 12 1.25C11.7811 1.25 11.573 1.34567 11.4306 1.51191L8.43056 5.01191C8.16099 5.3264 8.19741 5.79988 8.51191 6.06944C8.8264 6.33901 9.29988 6.30259 9.56944 5.98809L11.25 4.02744L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z" fill="currentColor"/>
<path d="M16 9C15.2978 9 14.9467 9 14.6945 9.16851C14.5853 9.24148 14.4915 9.33525 14.4186 9.44446C14.25 9.69667 14.25 10.0478 14.25 10.75L14.25 15C14.25 16.2426 13.2427 17.25 12 17.25C10.7574 17.25 9.75004 16.2426 9.75004 15L9.75004 10.75C9.75004 10.0478 9.75004 9.69664 9.58149 9.4444C9.50854 9.33523 9.41481 9.2415 9.30564 9.16855C9.05341 9 8.70227 9 8 9C5.17157 9 3.75736 9 2.87868 9.87868C2 10.7574 2 12.1714 2 14.9998V15.9998C2 18.8282 2 20.2424 2.87868 21.1211C3.75736 21.9998 5.17157 21.9998 8 21.9998H16C18.8284 21.9998 20.2426 21.9998 21.1213 21.1211C22 20.2424 22 18.8282 22 15.9998V14.9998C22 12.1714 22 10.7574 21.1213 9.87868C20.2426 9 18.8284 9 16 9Z" fill="currentColor"/>
</svg></div>`;

  //this.statisticsToggleElement.appendChild(expander);

  this.statisticsToggleElement.addEventListener("click", (e) => {
   if (this.statisticsElement.className == "expanded")
    this.statisticsElement.className = "";
   else this.statisticsElement.className = "expanded";
  });

  this.statisticListElements = [];

  this.statisticsElement.appendChild(title);
  this.statisticsElement.appendChild(this.statisticsContentElement);
  this.statisticsElement.appendChild(this.statisticsToggleElement);
  document.getElementsByTagName("body")[0].appendChild(this.statisticsElement);

  let percentageOfPokemon = Object.create(Statistic);
  percentageOfPokemon.messageTemplate = "% of Pokémon: ";
  percentageOfPokemon.calculate = () => {
   return this.calculatePercentageByFilter(
    this.deck.cards.filter((c) => c.type === "Pokémon").length,
   );
  };
  percentageOfPokemon.setup(true);
  this.statisticListElements.push(percentageOfPokemon);

  let percentageOfTrainers = Object.create(Statistic);
  percentageOfTrainers.messageTemplate = "% of Trainers: ";
  percentageOfTrainers.calculate = () => {
   return this.calculatePercentageByFilter(
    this.deck.cards.filter((c) => c.type === "Trainer").length,
   );
  };
  percentageOfTrainers.setup(true);
  this.statisticListElements.push(percentageOfTrainers);

  let percentageOfEnergies = Object.create(Statistic);
  percentageOfEnergies.messageTemplate = "% of Energies: ";
  percentageOfEnergies.calculate = () => {
   return this.calculatePercentageByFilter(
    this.deck.cards.filter((c) => c.type === "Energy").length,
   );
  };
  percentageOfEnergies.setup(true);
  this.statisticListElements.push(percentageOfEnergies);

  let percentageOfBasicPokemon = Object.create(Statistic);
  percentageOfBasicPokemon.messageTemplate = "% of Basic Pokémon: ";
  percentageOfBasicPokemon.calculate = () => {
   return this.calculatePercentageByFilter(
    this.deck.cards.filter((c) => c.type === "Pokémon" && c.stage === "Basic")
     .length,
   );
  };
  percentageOfBasicPokemon.setup(true);
  this.statisticListElements.push(percentageOfBasicPokemon);

  let percentageOfStage1Pokemon = Object.create(Statistic);
  percentageOfStage1Pokemon.messageTemplate = "% of Stage 1 Pokémon: ";
  percentageOfStage1Pokemon.calculate = () => {
   return this.calculatePercentageByFilter(
    this.deck.cards.filter((c) => c.type === "Pokémon" && c.stage === "Stage 1")
     .length,
   );
  };
  percentageOfStage1Pokemon.setup(true);
  this.statisticListElements.push(percentageOfStage1Pokemon);

  let percentageOfStage2Pokemon = Object.create(Statistic);
  percentageOfStage2Pokemon.messageTemplate = "% of Stage 2 Pokémon: ";
  percentageOfStage2Pokemon.calculate = () => {
   return this.calculatePercentageByFilter(
    this.deck.cards.filter((c) => c.type === "Pokémon" && c.stage === "Stage 2")
     .length,
   );
  };
  percentageOfStage2Pokemon.setup(false);
  this.statisticListElements.push(percentageOfStage2Pokemon);

  this.statisticListElements.forEach((s) => {
   this.statisticsContentElement.appendChild(s.element);
  });
 },
 update() {
  this.statisticListElements.forEach((e) => {
   e.update();
  });
 },
 calculatePercentageByFilter(cards) {
  return (100 / this.deck.cards.length) * cards;
 },
 addStatisticsToCollection(statistic, label) {
  let [variableName] = Object.keys({ percentageOfPokemon });
  let li = document.createElement("li");
  li.className = variableName;
  li.innerText = `${label}${percentageOfPokemon}`;
  this.statisticListElements.push(li);
 },
};
