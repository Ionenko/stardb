class SwapiService {

    _apiBaseUrl = `https://swapi.co/api`;
    _imageBaseUrl = `https://starwars-visualguide.com/assets/img`;

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    getResource = async (url) => {
        const response = await fetch(`${this._apiBaseUrl}${url}`);

        if(!response.ok){
            throw new Error(`Could not fetch ${url} , received ${response.status}`)
        }

        return await response.json();
    };

    getAllPeople = async () => {
        const response = await this.getResource(`/people/`);
        return response.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const response = await this.getResource(`/planets/`);
        return response.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const response = await this.getResource(`/starships/`);
        return response.results.map(this._tranformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._tranformStarship(starship);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBaseUrl}/characters/${id}.jpg`;
    };

    getStarshipImage = ({id}) => {
        return `${this._imageBaseUrl}/starships/${id}.jpg`;
    };

    getPlanetImage = ({id}) => {
        return `${this._imageBaseUrl}/planets/${id}.jpg`;
    };


    _transformPlanet = (planet) =>{
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _tranformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufactured: starship.manufactured,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };

    _transformPerson = (person) =>{
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birth_year: person.birth_year,
            eye_color: person.eye_color
        }
    };

}
export default SwapiService;