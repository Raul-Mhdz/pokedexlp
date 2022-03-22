const botonbuscar = document.getElementById('btnbusqueda');
const btnshiny = document.getElementById('shinypokemon');
const inpudname = document.getElementById('pokeName');

const fetchpokemon = () => {

    const pokenameInpud = document.getElementById('pokeName');
    let pokeName = pokenameInpud.value;
    if(typeof pokeName === 'string' || typeof pokeName === 'number'){

        pokeName = pokeName.toLocaleLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url).then((res) => {

            if(res.status != "200"){

                pokeImage("../assets/img/404.png");
                nombres("Error")
            } else {

                return res.json();
            }
        }).then((data) => {

            if(data){

                let nombre = data.name;
                nombrepokemon(nombre);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                let altura = data.height;
                alturapokemon(altura);
                let peso = data.weight;
                pesopokemon(peso);
                let hpp = data.stats[0].base_stat;
                hppokemon(hpp);
                let ataque = data.stats[1].base_stat;
                attackpokemon(ataque);
                let defensa = data.stats[2].base_stat;
                defensapokemon(defensa);
                let ataqueEspecial = data.stats[3].base_stat;
                ataqueEspecialpokemon(ataqueEspecial);
                let defensaEspecial = data.stats[4].base_stat;
                defensaEspecialpokemon(defensaEspecial);
                let velocidad = data.stats[5].base_stat;
                velocidadpokemon(velocidad);
                let tipo = data.types[0].type.name;
                tipopokemon(tipo);
                let id = data.id;
                idpokemon(id);
            }
        });
    }
}

const fetchpokemonshiny = () => {

    const pokenameInpud = document.getElementById('pokeName');
    let pokeName = pokenameInpud.value;
    if(typeof pokeName === 'string' || typeof pokeName === 'number'){

        pokeName = pokeName.toLocaleLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url).then((res) => {

            if(res.status != "200"){

                pokeImage("../assets/img/404.png");
                nombres("Error")
            } else {

                return res.json();
            }
        }).then((data) => {

            if(data){

                let pokeImg = data.sprites.front_shiny;
                shinyimg(pokeImg);
            }
        });
    }

}

const pokeImage = (url) => {

    const pokefoto = document.getElementById('pokeImg');
    pokefoto.src = url;
}

const nombrepokemon = (url) => {

    const nombrepoke = document.getElementById('nombrepantalla');
    nombrepoke.innerHTML = "Name: " + url;
}

const alturapokemon = (url) => {

    const alturaPoke = document.getElementById('height');
    alturaPoke.innerHTML = url + "cm"; 
}

const pesopokemon = (url) => {

    const pesoPoke = document.getElementById('weight');
    pesoPoke.innerHTML = url + "Kg";
}

const hppokemon = (url) => {

    const hppoke = document.getElementById('hp');
    hppoke.innerHTML = url;
}

const attackpokemon = (url) => {

    const attackpoke = document.getElementById('attack');
    attackpoke.innerHTML = url;
}

const defensapokemon = (url) => {

    const defensapoke = document.getElementById('defense');
    defensapoke.innerHTML = url;
}

const ataqueEspecialpokemon = (url) => {

    const ataqueEspecialpoke = document.getElementById('specialattack');
    ataqueEspecialpoke.innerHTML = url;
}

const defensaEspecialpokemon = (url) => {

    const defensaEspecialpoke = document.getElementById('specialdefense');
    defensaEspecialpoke.innerHTML = url;
}

const velocidadpokemon = (url) => {

    const velocidadpoke = document.getElementById('speed');
    velocidadpoke.innerHTML = url;
}

const tipopokemon = (url) => {

    const tipopoke = document.getElementById('tipo');
    tipopoke.innerHTML = "Type: " + url;
}

const idpokemon = (url) => {

    const idpoke = document.getElementById('idpokemon');
    idpoke.innerHTML = "ID: " + url;
}

const shinyimg = (url) => {

    const pokefoto = document.getElementById('pokeImg');
    pokefoto.src = url;
}

botonbuscar.addEventListener("click", fetchpokemon);
btnshiny.addEventListener("click", fetchpokemonshiny);
inpudname.addEventListener("keydown", (event) => event.key === 'Enter' && botonbuscar.click());