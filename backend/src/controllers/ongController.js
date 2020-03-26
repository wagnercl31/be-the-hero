const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
    const ongs = await connection('ongs').select('*'); // selecionando todos os campos da tabela ongs
 
    return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body; //evita o usuario mandar algum dado que eu n queria

        const id = crypto.randomBytes(4).toString('HEX'); //gerando 4 bytes do id
    
        await connection('ongs').insert({ //await = espera carregar para retornar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    
    }
};