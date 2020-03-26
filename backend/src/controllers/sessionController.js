const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body; //buscando o id através do corpo da requisição

        const ong = await connection('ongs') //tentando buscar uma ong do BD
            .where('id', id) //verificando o  id
            .select('name') 
            .first();
        
        if(!ong) { //se essa ong não existir...
            return response.status(400).json({ error: 'No ONG found whith ID'});
        }

        return response.json(ong);
    }
}