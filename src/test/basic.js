var assert = require('chai').assert;
var request = require('supertest');

request = request("http://" + process.env.IP + ":" + process.env.PORT);

describe('GET /', function() {
  it('respond with HTTP status 200', function(done) {
    request
      .get('/')
      .expect(200, done);
  });
});