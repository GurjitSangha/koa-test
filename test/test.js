var expect = require('chai').expect;
var request = require('request');

describe('API', function(){
  describe('/', function(){
    it('should return hello world string', function(){
      request('http://localhost:3000/', function(err, res, body){
        expect(body).to.equal('Hello World');
      });
    });

    it('should return status 200', function(){
      request('http://localhost:3000/', function(err, res, body){
        expect(res.statusCode).to.equal(200);
      })
    })
  });
});
