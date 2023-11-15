import {getService} from "@/services/http-client";

const getPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const dataService = {
        url: url,
    };

    return getService(dataService);
};

const customPokemon = ({name}: {name: string}) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const dataService = {
        url: url,
    };

    return getService(dataService);
};

export default {getPokemon, customPokemon};
