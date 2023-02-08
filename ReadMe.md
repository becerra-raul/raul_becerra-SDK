# Open APIs

- The Lord Of The Rings

## SDK description

This Library is provide a service to access different open APIs like Lord of the rings API.

## How to install

Run `npm i @becerra-raul/open-apis-sdk`

## How to use

All Services already injected in SDK root. You need to declare an instance in your component constructor.
Example

```js
import SDK from '@becerra-raul/open-apis-sdk';

const sdk = new SDK();
const lotrApiService = sdk.getLOTRApiService({ apiKey: API_KEY })
const movies = await lotrApiService.movie.getMovies()
console.log(movies);
```

## What data can be obtained using this SDK?

> List of all the movies

- await lotrApiService.movie.getMovies()

> List of specific movie quotes

- await lotrApiService.movie.getMovieQuotes()

> Specific movie details

- await lotrApiService.movie.getMovie()

## Keywords

- Open APIs
- SDK
- LOTR
