//QUESTION: in the calculator test exercise, the calculator class was instantiated every time we wanted to run a spec on it. So how come we don't do the same for our coin test? the coin flip class is only instantiated once, before the headsOrTails function is called?

//ANSWER: because in this exercise the coin is instantiated by the code itself, we're not testing the coin, we're testing the headsOrTails function. This coin class here COULD be included in the file index.js, so its all in one spot, but for the purposes of this exercise was moved to this file to be seperate from that, because its not code we're testing. This class here is an EXTERNAL DEPENDENCY of our code(which for the purposes of testing, we've 'controlled' the outcome of using the function spyOn). 


class Coin {
  flip() {
    return Math.random() > 0.5;
  }
}