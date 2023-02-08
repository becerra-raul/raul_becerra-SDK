import fetch from "node-fetch";

export default class ApiCaller {
    private constructor() {

    }

    static async get(url: string, headers?: Record<string, string>) {
        return fetch(url, { method: 'GET', headers })
    }
}