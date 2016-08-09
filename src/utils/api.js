const api = {

  getRepos(repository){
    repository = repository.toLowerCase().trim();
    let url = `https://api.github.com/search?q=${repository}&type=Repositories`;
    return fetch(url).then((res) => res.json());
  }

};

module.exports = api;
