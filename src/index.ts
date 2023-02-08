import LOTRApiService from "./lotr/lotr-api.service"

interface IConfig {
    apiKey: string
}

export default class SDK {
    
    // private _lotrApiService: LOTRApiService  
        

    getLOTRApiService(config: IConfig) {
        // if (this._lotrApiService) return this._lotrApiService
        // else this._lotrApiService = new LOTRApiService(config.apiKey)
        return (new LOTRApiService(config.apiKey))
    }

}