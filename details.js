
const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get("name");

if (pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => displayDetails(data))
        .catch(error => console.error("Error fetching details:", error));
}

function displayDetails(data) {
    document.getElementById("pokemonDetails").innerHTML = `
        <div class="card mx-auto" style="width: 20rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${data.name.toUpperCase()}</h5>
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Type:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
                <p><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(', ')}</p>
                <p><strong>Stats:</strong></p>
                <ul class="list-group">
                    ${data.stats.map(s => `<li class="list-group-item">${s.stat.name}: ${s.base_stat}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}