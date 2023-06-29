const knex = require("../src/database/knex")

class MovieController {
    
    async create(request, response){
        const {title, description,rating, user_id} = request.body;

        console.log(request.body)
        const movie = await knex("movie_notes").insert({
            title, description,rating, user_id
        });

        return response.json(movie);
    }

    async show(request, response){
        const {id} = request.params;
        
        const movie = await knex("movie_notes").select(["movie_notes.title","movie_notes.description","movie_notes.rating","users.name"]).where("movie_notes.id", id).innerJoin("users","users.id","movie_notes.user_id");
        
        return response.json(movie);

    }

    
}

module.exports = MovieController;