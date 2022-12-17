for (let number = 1; number <= 30; number++) {
    FizzBuzz(number);
    
   function FizzBuzz(number) {
    if (number %3 == 0 && number %5 == 0) {
      console.log ("Fizz Buzz");
    }
}
    if (number % 3 == 0) {
      console.log ("fizz");
    } else {
      console.log (number);   
    }
    
    if (number % 5 == 0) {
      console.log ("buzz");
    } else {
      console.log (number);
    }
   }