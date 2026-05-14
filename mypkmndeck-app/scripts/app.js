const apiUrl = "https://mypkmncards-api.azurewebsites.net/";

const cardsRepository = Object.create(CardsRepository);
const deckBuilder = Object.create(DeckBuilder);
const filter = Object.create(Filter);

cardsRepository.initialise(() => {
 deckBuilder.initialise(cardsRepository);
 filter.initialise(cardsRepository, deckBuilder);
});

const popup = Object.create(Popup);
popup.initialise();
popup.render(
 "Welcome",
 `<h4>V1</h4>
    <div>
    <p>Welcome to Pokémon Deck Builder. Here you can search the entire Pokémon card database as of 2026/04, 
    add & remove cards from your deck, name your deck and export & import your deck 
    for later use or for sharing.</p>
    <h4>Warning!</h4>
    <p>If you don't select any filtering what so ever, your browser will attempt to load 20k+ images, so it may crash or lock up.</p>
    <h4>Resources</h4>
    <ul>
        <li><a href="https://github.com/MrApproved/mypkmndeck_scrapper" target="_blank">Scrapper Repository</a></li>
        <li><a href="https://github.com/MrApproved/mypkmndeck_api" target="_blank">Express WebApi Repository</a></li>
        <li><a href="https://github.com/MrApproved/mrapproved.github.io/tree/master/mypkmndeck-app" target="_blank">Application Repository</a></li>
        <li><a href="https://medium.com/p/8a650f942663/edit" target="_blank">Blog Post</a></li>
        <li><a href="https://pkmncards.com/" target="_blank">pkmncard.com</a></li>
        <li>Create by Ben Watts - <a href="https://www.linkedin.com/in/ben-watts-66960478/" target="_blank">LinkedIn</a></li>
    </ul>
    </div>`,
);
