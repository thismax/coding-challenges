const chai = require('chai');
const assert = chai.assert;

/*                                      
                       _   _             
                      | | (_)            
  __ _ _   _  ___  ___| |_ _  ___  _ __  
 / _` | | | |/ _ \/ __| __| |/ _ \| '_ \ 
| (_| | |_| |  __/\__ \ |_| | (_) | | | |
 \__, |\__,_|\___||___/\__|_|\___/|_| |_|
    | |                                  
    |_|       
 
Given a positive integer n, return its digits reversed.
DO NOT CONVERT n INTO A STRING OR ARRAY.
Only use integers and math in your solution.

*/

const reverseInteger = n => {
  var result = 0;
  while (Math.floor(n)) {
    result = result * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return result;
};

/*
 _            _   
| |          | |  
| |_ ___  ___| |_ 
| __/ _ \/ __| __|
| ||  __/\__ \ |_ 
 \__\___||___/\__|
                  
*/

it('should reverse integers', function() {
  assert.equal(1234, reverseInteger(4321));
});
