import ILOTRApi from "../core/base/ibase-lotr";
import LOTREndpoint from "../core/constants/lotr-endpoints";
import IBaseApiRes from "../core/dtos/base-api-response";
import ApiCaller from "../core/services/api-caller.service";


export default class MovieAPIService implements ILOTRApi {
    
    readonly GENERIC_ERROR_MESSAGE = 'Request failed with some errors!'
    readonly API_KEY: string;

    constructor(apiKey: string) {
        this.API_KEY = apiKey;
    }

    getHeader() {
        return {
            'Authorization': 'Bearer ' + this.API_KEY,
            'Accept': '*'
        }
    }

    private async _tryCatchResult<T>(apiCall: Promise<any>): Promise<IBaseApiRes<T>> {
        let result: IBaseApiRes<T> = { success: false, message: this.GENERIC_ERROR_MESSAGE }
        try {
            const rawResult = await apiCall
            const jsonRes = await rawResult.json()
            if (rawResult.status > 199 && rawResult.status < 300) {
                result.data = jsonRes
                result.success = true
                result.message = jsonRes.message
            } else {
                result.message = jsonRes.message
            }
        } catch (error) {
            result.message = error.message
        }
        return result
    }

    async getMovies(): Promise<IBaseApiRes<any>> {
        return this._tryCatchResult(ApiCaller.get(LOTREndpoint.getMovieEndpoint(), this.getHeader()))
    }

    async getMovie(movieId: string): Promise<IBaseApiRes<any>> {
        return this._tryCatchResult(ApiCaller.get(LOTREndpoint.getMovieEndpoint(movieId), this.getHeader()))
    }

    async getMovieQuotes(movieId: string, quoteId?: string): Promise<IBaseApiRes<any>> {
        return this._tryCatchResult(ApiCaller.get(LOTREndpoint.getMovieQuoteEndpoint(movieId, quoteId), this.getHeader()))
    }
}