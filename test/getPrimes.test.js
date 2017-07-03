var assert = require('chai').assert;

const {checkprimenum} = require("../src/getPrimes");

describe('getPrimes()', function(){
     it('should return an array for prime numbers', function(){
                 assert.equal(Array.isArray(checkprimenum(2)), true );
           })    
     })

describe('getPrimes()', function(){
     it('should return boolean for numbers greater less than 2', function(){
                 assert.typeOf(checkprimenum(1),'boolean');
           })    
     })

describe('getPrimes()', function(){
     it('should return boolean for numbers greater less than 2', function(){
                 assert.typeOf(checkprimenum(1),'boolean');
           })    
     })

     
 describe('getPrimes()', function(){
         describe('Array', function(){
     it('should return -1 for list of return array containing numbers less than 2', function(){
                 assert.typeOf(checkprimenum(1), 'boolean');
           })    
        })

    })

