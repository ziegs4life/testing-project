let should = require('should')
let Calculator = require('../calculator') // First import!

// Create a describe block with a callback
describe('The calculator module', () => {
    // Next declare a variable so that all our other tests
    // can see it.
    let calculator;
    beforeEach(() => {
        // Now assign to that variable inside this callback.
        calculator = new Calculator()
    })

    describe('The function that is being tested', () => {
        it('should return the sum of two numbers', () => {
            // This is where you'll write your test
            calculator.add(7,10).should.eql(17)
        })

        it('should not throw', () =>{
            calculator.add(7,10).should.not.throw();
        });

        it('should return a negative sum of two negative numbers', ()=>{
          calculator.add(-7,-10).should.be.lessThan(0).and.be.exactly(-17);
        });
      })
    })

    describe('exponents', () => {
        it('should throw when given a negative exponoent', () => {
            // This is where you'll write your test
            let fun = ()=>{calculator.power(2,-2); }
            fun.should.throw();
        })

})
