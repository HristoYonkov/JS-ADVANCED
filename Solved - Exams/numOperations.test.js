const { numberChecker } = require('./numOperations');
const numberOperations = require('./numOperations');
const assert = require('chai').assert;

describe("Tests …", function() {

    describe("powNumber Testing", function() {
        it("number", function() {
            assert(numberOperations.powNumber(5) === 25);
        });
    });


    describe("numberChecker Testing", function() {
        it("string", function() {
            assert.throws(() => numberOperations.numberChecker('str'), 'The input is not a number!');
        });
        it("string", function() {
            assert(numberOperations.numberChecker(0) ==='The number is lower than 100!');
        });
        it("number", function() {
            assert(numberOperations.numberChecker(100) === 'The number is greater or equal to 100!');
        });
        it("number", function() {
            assert(numberOperations.numberChecker(101) === 'The number is greater or equal to 100!');
        });
    });



     describe("sumArrays Testing", function() {
        it("Ne-znam", function() {
            assert.deepEqual(numberOperations.sumArrays([2, 4, 6], [2, 4, 6]), [ 4, 8, 12 ])
        });
        it("Ne-znam", function() {
            assert.deepEqual(numberOperations.sumArrays([2, 4, 6, 5], [2, 4, 6]), [ 4, 8, 12, 5])
        });
    });
     
});
