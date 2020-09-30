describe('Who can buy beer', () => {
    describe('#canBuyBeer', () => {
        describe('when age > 17', () => {
            it('should return true', () => {
                expect(canBuyBeer(18)).toBe(true);
            });
        });

        describe('when age <= 17', () => {
            it('should return false', () => {
                expect(canBuyBeer(17)).toBe(false);
            });
        });
    });
});

describe('#Can Greg buy Beer', () => {
    describe('If he is 18', () => {
        it('should return "Greg is 18, he can buy beer!"', () => {
            const originalAge = greg.age; 
            greg.age = 18 //NOTE THAT greg.age IS ALSO AN EXTERNAL DEPENDENCY that is influencing our code, whcih makes our tests unpredictable - because greg.age is a random number! So to make our test PREDICTABLE (less flakey), this spec uses a 'mock object' to complete this unit test, after declaring 'originalAge' a new variable, which is the value of greg.age (which is a random number as determined in the class Person), we are setting greg.age explicitly to 18 for the purpose of this spec. A spy is not needed here (as spies are generally used for functions, whereas greg.age here is just an object). 

            const result = canGregBuyBeer();

            expect(result).toBe('Greg is 18, he can buy beer!'); 
            greg.age = originalAge; //now we're setting greg.age back to originalAge to not break further tests. 
        })
    });

    describe('If he is younger than 18', () => {
        it('should return "Greg is younger than 18, he can\'t buy beer \:\("', () => {
            const originalAge = greg.age; 
            greg.age = 13

            const result = canGregBuyBeer(); 

            expect(result).toBe('Greg is 13, he can\'t buy beer \:\('); 
            greg.age = originalAge; 
        })
    });
});