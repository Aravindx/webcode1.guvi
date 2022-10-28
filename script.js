var h=document.createElement("h1")
h.innerHTML="Pokemon Cards"
var div=document.createElement("div")
div.setAttribute("id","poke_container")
div.setAttribute("class","poke-container")

document.body.append(h,div)
const poke_container=document.getElementById("poke_container");
const pokemons_number=50;

const fetchpockemons=async ()=>{
    for(var i=1;i<=pokemons_number;i++){
        await getPokemon(i);
    }
}

const getPokemon=async id =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res=await fetch(url);
    const pokemon=await res.json();
    createPokemonCard(pokemon)
    


}
fetchpockemons();
function createPokemonCard(pokemon){
     const pokemonE1=document.createElement("div");
     pokemonE1.classList.add("pokemon");
      
     pokemonE1.innerHTML=`<div class="card" style="width: 18rem;">
     <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-ID">Pokemon ID : ${pokemon.id}</h5>
       <h5 class="card-name">Name: ${pokemon.name.toUpperCase()}</h5>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">weight:${pokemon.weight}kg</li>
       <li class="list-group-item">Moves: ${pokemon.moves[0].move.name}</li>
       <li class="list-group-item">Ability: ${pokemon.abilities[0].ability.name}</li>
     </ul>

   </div>`

     
     poke_container.appendChild(pokemonE1)
}
