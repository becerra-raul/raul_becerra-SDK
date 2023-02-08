const chai = require('chai')
const SDK = require('../dist/index').default
const API_KEY = '9EqmwpCpd20ffNxXWFMJ'

const sdk = new SDK()

describe('Lord Of The Rings SDK', function () {
  const lotrApiService = sdk.getLOTRApiService({ apiKey: API_KEY })
  it('It should get all movies', async function (done) {
    this.timeout(10000)
    const movies = await lotrApiService.movie.getMovies()
    console.log("api res::", movies)
    chai.expect(movies).to.be.an('object')
    chai.expect(movies.success).to.be.an('boolean')
    setTimeout(done, 10000)
  })
})
