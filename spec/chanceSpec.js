describe('headsOrTails', () => {
  describe('when the coin flip is true', () => {
    it('should return heads', () => {
      spyOn(coin, 'flip').and.returnValue(true);

      const result = headsOrTails();

      expect(result).toBe('heads');
    });
  });

  describe('when the coin flip is false', () => {
    it('should return tails', () => {
      spyOn(coin, 'flip').and.returnValue(false);

      const result = headsOrTails();
      
      expect(result).toBe('tails');
    });
  });
});

//this exercise introduces us to 'flaky tests' 
//so we use a spyOn, where we can modify the external dependency - spyOn(object, 'method') (we're spying on the name of the OBJECT, and affecting the method - which is always expressed as a 'string' (because this is what jasmine requires)). remember - we're not using spy to control the outcome of the function headsOrTails (we're testing this), but we ARE controlling the otucome of the coin flip. 