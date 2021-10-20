export default class SwapiService {

    apiBase = 'https://swapi.dev/api';
  
    async getResource(url) {
      const res = await fetch(`${this.apiBase}${url}`);
        if(!res.ok) {
          throw new Error(`Could not fetch ${url}` + 
            `, received ${res.status}`)
        }
  
    return await res.json();
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
  
    getPlanet(id) {
      return this.getResource(`/planet/${id}`);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    getStarship(id) {
      return this.getResource(`/starships/${id}`);
    }
  
  }
  
  const swapi = new SwapiService();
  
  // swapi.getAllPeople().then((people) => {
  //   people.forEach((person) => {
  //     console.log(person.name);
  //   })
  // });
  
  swapi.getAllStarships().then((p) => {
      console.log(p);
    
  });
  
  // getResource('https://swapi.dev/api/people/1/')
  //   .then((body) => {
  //     console.log(body);
  //   })
  //   .catch((err) => {
  //     console.error('Could not fetch', err);
  //   });
  