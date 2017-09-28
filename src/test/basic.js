var assert          = require('chai').assert,
    request         = require('supertest'),
    app             = require('../server.js').app;

describe('Basic tests', function(){
    
    describe('GET /', function() {
        it('respond with HTTP status 200', function(done) {
            request(app)
            .get('/')
            .expect(200, done);
        });
    });
});
