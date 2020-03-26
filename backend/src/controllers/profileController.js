const connection = require('../database/connection'); //conexao com o banco

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id) //buscando todos incidents que esse ong /\ cirou 
            .select('*'); // buscando todos campos dos incidents

        return response.json(incidents);
    }
}