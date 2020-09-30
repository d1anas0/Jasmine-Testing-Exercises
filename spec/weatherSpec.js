//EXAMPLE for TEST ONE: when we pass "Sydney" we get back the right temperature. 
//1st Example for test 1: 
describe('getWeatherFor (example 1 using return .then)', () => {
    describe('when passed "Sydney"', () => {
        it('should return 25', () => {
            return getWeatherFor('Sydney') //without 'return' Jasmine won't know that it needs to wait for the promise to `resolve` before it moves on, therefore will run the test successfully, but with 'SPEC HAS NO EXPECTATIONS' even though we gave it an expect (that temp is to be 25). 
                .then((temp) => {
                    expect(temp).toBe(25);
                });
        });
    });
});

//2nd Example for test 1: another way to approach the above test is to use and return the `expectAsync` function, and the `async-matcher` .toBeResolvedTo() - like so: 
describe('getWeatherFor (tests written using expectAsync().toBeResolved())', () => {
    describe('when passed "Sydney"', () => {
        it('should resolve 25', () => { //note the adjustment in terminology to reflect the testing method we're using
            return expectAsync(getWeatherFor('Sydney')).toBeResolvedTo(25); 
        });
    });


//write test case for when we 'pass Melbourne we get back the right temperature'. 
    describe('when passed "Melbourne"', () => {
        it('should resolve 15', () => {
            return expectAsync(getWeatherFor('Melbourne')).toBeResolvedTo(15);
        });
    });


//write test case for when we 'pass any other city we get an error'. 
    describe('when passed any other city', () => {
        it('should reject with an error', () => {
            return expectAsync(getWeatherFor('London')).toBeRejectedWith('City London does not exist in our database'); 
        });
    });
});