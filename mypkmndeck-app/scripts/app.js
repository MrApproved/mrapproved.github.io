const apiUrl = 'https://mypkmncards-api.azurewebsites.net/';

const deckBuilder = Object.create(DeckBuilder);
deckBuilder.initialise(apiUrl);
const filter = Object.create(Filter);
filter.initialise(apiUrl, deckBuilder);

const popup = Object.create(Popup);
popup.initialise();
popup.render("Welcome", 
    `<h4>V1</h4>
    <div>
    <p>Welcome to Pokémon Deck Builder. Here you can search the entire Pokémon card database, 
    add & remove cards from your deck, name your deck and export & import your deck 
    for later use or for sharing.</p>
    <h4>Resources</h4>
    <ul>
        <li>Code Repository</l1>
        <li>Blog Post</l1>
        <li>WebApi URL</li>
        <li>Create by Ben Watts - LinkedIn</li>
        <li>pkmncard.com</li>
        <li>Pokemontcg.com</li>
    </ul>
    </div>`
);