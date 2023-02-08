export default class LOTREndpoint {

    private static readonly BASE_API_URL = "https://the-one-api.dev"
    private static readonly VERSION = "/v2"
    private static readonly MOVIE = "/movie"
    private static readonly QUOTE = "/quote"

    private constructor() {
        // in order to prevent instance creation
    }

    static getMovieEndpoint(movieId?: string) {
        return `${this.BASE_API_URL}/${this.VERSION}/${this.MOVIE}${movieId ? '/' + movieId : ''}`
    }

    static getMovieQuoteEndpoint(movieId: string, quoteId?: string) {
        return `${this.BASE_API_URL}/${this.VERSION}/${this.MOVIE}/${movieId}/${this.QUOTE}/${quoteId ? '/' + quoteId : ''}`
    }

}