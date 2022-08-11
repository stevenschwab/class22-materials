//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTvShow {
    constructor(name, type, seasons, description){
        this.name = name;
        this.type = type;
        this.seasons = seasons;
        this.description = description;
    }
    startShow(){
        alert('STARTING SHOW');
    }
    pauseShow(){
        alert('PAUSING SHOW');
    }
    goBack(){
        alert('GOING BACK');
    }
}

let strangerThings = new MakeNetflixTvShow('Stranger Things','Mystery',4,'Friends discover monsters');