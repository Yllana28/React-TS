import SuperHeros from "../models/superHeros";

export default class HeroServices {
  // "static" pour appeler la méthode sans l'instancier

  // Get all
  static getHeroes(): Promise<SuperHeros[]> {
    return fetch("http://localhost:3001/superHerosList").then((res) =>
      res.json().catch((error) => this.error(error))
    );
  }

  // Get By Id
  static getHeroById(id: number): Promise<SuperHeros> {
    return fetch(`http://localhost:3001/superHerosList/${id}`).then((res) =>
      res
        .json()
        .then((data) => (this.empty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  // Post
  static createHero(hero: SuperHeros): Promise<SuperHeros> {
    return fetch("http://localhost:3001/superHerosList", {
      method: "POST",
      body: JSON.stringify(hero),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => this.error(error));
  }

  // Put
  static updateHero(hero: SuperHeros): Promise<SuperHeros> {
    return fetch(`http://localhost:3001/superHerosList/${hero.id}`, {
      method: "PUT",
      body: JSON.stringify(hero),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => this.error(error));
  }

  // Delete
  static deleteHero(id: number): Promise<SuperHeros> {
    return fetch(`http://localhost:3001/superHerosList/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => this.error(error));
  }

  // ********************************************

  static empty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static error(error: Error): void {
    console.error(error);
  }
}
