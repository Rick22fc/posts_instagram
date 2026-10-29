import { instagram_repositories } from "../repositories/post.repositore";

class InstagramRepositories{
    async getAll(){
        const post = await instagram_repositories()
        return post 
    }
    async getByID(id) {
            const veiculos = await veiculosRepositore.getByID(id)
            return veiculos
        }


    async create(data) {
        const veiculos = await veiculosRepositore.create(data)
        return veiculos
    }
     async delete(id) {
        const veiculos = await veiculosRepositore.delete (id)
        return veiculos
    }
     async updatePut(id, data) {
        const veiculos = await veiculosRepositore.updatePut(id,data)
        return veiculos 
    }

}