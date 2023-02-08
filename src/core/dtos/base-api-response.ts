export default interface IBaseApiRes<T> {
    success: boolean
    message: string
    data?: T
}