import ApiService from './ApiService';

export default class SchedulingApiService extends ApiService {
    
    constructor() {
        super('/scheduling')
    }

    create(object) {
        return this.post('', object);
    }

    update(id, object) {
        return this.put(`/${id}`, object);
    }

    delete(id) {
        return super.delete(`/${id}`);
    }

    find(id) {
        return this.get(`/${id}`);
    }

    /* se usarmos filtros. Por hora pegamos apenas os objetos existentes no banco ou por ID.
    find(params) {
        return this.get(`${params}`);
    }
    */
}