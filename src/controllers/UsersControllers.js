
const connection = require('../database/connection');

module.exports = {
    async index(request, response ) {

        const { page } = request.query;

        const [count] = await connection('users').count();
        

        const user = await connection('users')
            .limit(5)
            .offset(( page - 1) * 5)
            .select([
                'users.*'
            ]);

            response.header('X-Total-count', count['count(*)'])

        return response.json(user);
    },

    async create(request, response) {
        const {name, phone, email, plan } = request.body;

        const [id] = await connection('users').insert({
            name, 
            phone, 
            email,
            plan,
        })

        return response.json( { id });
    },

    async delete(request, response ) {
        const {id} = request.params;


        await connection('users').where('id',id).delete();
        return response.status(204).send('Usuário deletado com sucesso')
    }
}