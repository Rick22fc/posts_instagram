import { knex } from "../database/knex.js";

class InstagramRepositories{
    async getALL(){
        const post = await knex("posts").select("*").returning('*')
        return post
    }
    async getByID(id){
        const post = await knex("posts").select("*").where({id}).returning("*");
        return post
    }
    async create(data){
        const [postCriado] = await knex("posts").insert({data}).returning("*")
        return postCriado
    }
    async delete(id){
        const [postDeletado] = await knex("posts").delete({id}).returning("*")
        return postDeletado
    }
    async updatePut(id,data){
        const [postAtualizado] = await knex("posts").update({id, data}).returning("*")
        return postAtualizado
    }
}
export const instagram_repositories = InstagramRepositories();