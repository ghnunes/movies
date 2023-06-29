const knex = require("../src/database/knex")

class MovieTagController {
    
    async create(request, response){
        const {note_id, user_id, name} = request.body;

        console.log(request.body)
        const movieTag = await knex("movie_tags").insert({
            note_id, user_id,name
        });

        return response.json(movieTag);
    }

    async show(request, response){
        const {id} = request.params;

        const movieTags = await knex("movie_tags").select(["movie_tags.name","movie_notes.title","movie_notes.rating","users.name"]).where("movie_tags.id", id).innerJoin("users","users.id","movie_tags.user_id").innerJoin("movie_notes","movie_notes.id","movie_tags.note_id");



        return response.json(movieTags);

    }

    
}

module.exports = MovieTagController;