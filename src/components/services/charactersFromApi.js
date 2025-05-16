function charactersFromApi() {
  return fetch("https://dragonball-api.com/api/characters?limit=100")
  .then((response) => response.json())
  .then((data) => {
    const charactersList = data.items.map((character) =>{
        return{
            image: character.image,
            name: character.name, 
            description: character.description,
            ki: character.ki, 
        };
    });
    return charactersList;
  })
  .catch((error) =>{
    console.error("Error:", error);
    return [];
  })
}

export default charactersFromApi