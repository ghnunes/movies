const knex = require("../src/database/knex")

class UserController {
    
    async create(request, response){
        const {name} = request.body;

        const user = await knex("users").insert({
            name
        });

        return response.json(user);
    }

    async show(request, response){
        const {id} = request.params;

        const user = await knex("users").where({id}).first();

        return response.json(user);

    }

    
}

module.exports = UserController;