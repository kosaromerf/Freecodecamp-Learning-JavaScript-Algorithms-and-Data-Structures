const input = document.getElementById("search-input");
const search = document.getElementById("search-button");
const pName = document.getElementById("pokemon-name");
const pId = document.getElementById("pokemon-id");
const pWeight = document.getElementById("weight");
const pHeight = document.getElementById("height");
const image = document.getElementById("image");
const pTypes = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const implementData = (name, id, height, weight, sprites, stats, types) => {
  pName.textContent = `${name.toUpperCase()}`;
  pId.textContent = `#${id}`;
  pWeight.textContent = `Weight: ${weight}`;
  pHeight.textContent = `Height: ${height}`;
  hp.textContent = `${stats[0].base_stat}`;
  attack.textContent = `${stats[1].base_stat}`;
  defense.textContent = `${stats[2].base_stat}`;
  spAttack.textContent = `${stats[3].base_stat}`;
  spDefense.textContent = `${stats[4].base_stat}`;
  speed.textContent = `${stats[5].base_stat}`;

  image.innerHTML = `<img src="${sprites.front_default}" id="sprite">`;

  pTypes.innerHTML = "";
  types.forEach((e) => {
    pTypes.innerHTML += `<p>${e.type.name.toUpperCase()}</p>`;
  });
};

const getData = (name) => {
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      const { name, id, height, weight, sprites, stats, types } = data;
      implementData(name, id, height, weight, sprites, stats, types);

      return data;
    })
    .catch((error) => {
      alert("Pokémon not found");
    });
};

search.addEventListener("click", () => getData(input.value.toLowerCase()));
