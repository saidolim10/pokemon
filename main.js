import pokemons from "./pokemons.js";

let mainCard = document.querySelector('.main-wrapper');
let inputFilter = document.querySelector('.input');
let form = document.querySelector('.form');
let select = document.querySelector('#select');

function read() {

    let types = new Set(pokemons.flatMap(item => item.type));
    types.forEach(type => {
        let option = document.createElement('option');
        option.textContent = type;
        select.append(option);
    });
}

read();

form.addEventListener('submit', (e) => {

    e.preventDefault();
});

function pakomRender(cards) {
    mainCard.innerHTML = '';
    cards.forEach(pokemon => {
        let card = document.createElement('div');
        card.className = 'pokemonsCard';
        card.innerHTML = `
            <p class="uptext">${pokemon.num}</p>
            <div class="incard">
                <h1 class="header-text">${pokemon.name}</h1>
                <img src="${pokemon.img}" alt="" />
                <h2 class="descrip">${pokemon.type.join(', ')}</h2>
                <p class="candy"><b>Candy count:</b> ${pokemon.candy_count || 'N/A'}</p>
                <p class="kg">${pokemon.weight}</p>
                <b class="psixik">${pokemon.weaknesses.join(', ')}</b>
            </div>
            <h1 class="spawn-time">${pokemon.spawn_time}</h1>
        `;
        mainCard.append(card);
    });
}

pakomRender(pokemons);


// 

select.addEventListener('change', () => {
    let selectedType = select.value;
    if (selectedType === "") {
        pakomRender(pokemons);
    } else {
        const filteredByType = pokemons.filter(pokemon =>
            pokemon.type.includes(selectedType)
        );
        pakomRender(filteredByType);
    }
});
