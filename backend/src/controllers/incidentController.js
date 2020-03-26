const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //buscando dados da pagina 1

        const [count] = await connection('incidents').count();
        

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //trazendo os dados da ong relacionado ao incidente
            .limit(5) //limitando os dados para 5 incidents
            .offset((page - 1) * 5) //pulando 5 incidentes por paginas()
            .select([
                'incidents.*', 
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]); //listagem de todos incidents

        response.header('X-Total-Count', count['count(*)']); //retornando o total de incidents
        

        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body; //cadastrando incidents
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params; //incidente que quer ser deletado
        const ong_id = request.headers.authorization; //id da ong logada

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted' });
        }

        await connection('incidents').where('id', id).delete(); //deletando o registro de dento do incidents

        return response.status(204).send(); //enviando resposta sem corpo/vazia
    }
};