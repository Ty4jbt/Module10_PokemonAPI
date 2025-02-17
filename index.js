
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

function searchPokemon() {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    if (!pokemonName) {
        alert('Please enter a Pokemon name or ID.');
        return;
    }
    
    fetch(apiUrl + pokemonName)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokemon not found!');
            }

            return response.json();
        })
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            document.getElementById('pokemonData').innerHTML = `<p class="text-danger">${error.message}</p>`;
        });
}

function displayPokemon(data) {
    document.getElementById("pokemonResult").innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${data.name.toUpperCase()}</h5>
                <p class="card-text"><strong>ID:</strong> ${data.id}</p>
                <p class="card-text"><strong>Type:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
                <a href="details.html?name=${data.name}" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;
}