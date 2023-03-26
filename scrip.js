async function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => {
      const number = data.id;
      const name = data.name;
      const image = data.sprites.front_default;
      const type = data.types[0].type.name;
      const wrapChecker = document.getElementsByTagName("div")[0];

      if (wrapChecker == undefined) {
        //Creating elements
        const body = document.getElementsByTagName("body")[0];
        const wrapper = document.createElement("div");
        const head = document.createElement("h2");
        const img = document.createElement("img");
        const typePokemon = document.createElement("p");

        //Update element content
        wrapper.id = "wrapper";
        head.innerText = `${number}: ${name}`;
        img.src = image;
        typePokemon.innerText = `Type: ${type}`;

        //Add element to wrapper
        body.appendChild(wrapper);
        wrapper.appendChild(head);
        wrapper.appendChild(img);
        wrapper.appendChild(typePokemon);
      }
    });
}
