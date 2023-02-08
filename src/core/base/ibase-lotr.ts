export default interface ILOTRApi {
    readonly GENERIC_ERROR_MESSAGE: string
    readonly API_KEY: string
    getHeader: () => Record<string, any>
}