//remember - we're testing code that has an EXTERNAL DEPENDENCY - in this case, we're calling information from an API. And because our login is a function, we're going to use SPY to stop our code from being 'flaky'. 

//we also need to make sure our Spy returns the same type of value that the original function returns, in this case its a promise. 

//Part 1 - testing the 'HAPPY' path - when the API returns back a `token` and no `error`. 
describe('login', () => {
    describe('when the user logs in successfully', () => {
        it('should resolve a token', () => {
            const response = { token: '123' }; 
            const loginValue = new Promise((resolve, reject) => {
                resolve(response);
            });
            spyOn(Api, 'login').and.returnValue(loginValue);

            return expectAsync(login('test', 'test')).toBeResolvedTo(response.token); 
        });
    });

//Part 2 - When the Api.login() function resolves with an error (for incorrect email)
    describe('when the user uses an incorrect email', () => {
        it('should reject with an error message', () => {
            const response = { error: 'user not found' }; 
            const loginValue = new Promise((resolve, reject) => {
                resolve(response);
            });
            spyOn(Api, 'login').and.returnValue(loginValue);

            return expectAsync(login('test', 'test')).toBeRejectedWithError('Oops! Incorrect username or password. Check your details and try again.');
        });
    });

//Part 3 - When the Api.login() function resolves with an error (for password not entered)
    describe('when the user does not enter a password', () => {
        it('should reject with an error message', () => {
            const response = { error: 'Missing password' };
            const loginValue = new Promise((resolve, reject) => {
                resolve(response); 
            });
            spyOn(Api, 'login').and.returnValue(loginValue);

            return expectAsync(login('test')).toBeRejectedWithError('Oops! Missing password, make sure to fill in your password and try again.'); 
        });
    });
});