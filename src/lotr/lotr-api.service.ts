import MovieAPIService from "./movie-api.service";

export default class LOTRApiService {
    constructor(apikey: string) {
        this.movie = new MovieAPIService(apikey)
    }
    readonly movie: MovieAPIService
}