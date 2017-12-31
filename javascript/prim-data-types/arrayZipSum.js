/*                                      
                       _   _             
                      | | (_)            
  __ _ _   _  ___  ___| |_ _  ___  _ __  
 / _` | | | |/ _ \/ __| __| |/ _ \| '_ \ 
| (_| | |_| |  __/\__ \ |_| | (_) | | | |
 \__, |\__,_|\___||___/\__|_|\___/|_| |_|
    | |                                  
    |_|       
 
Given two arrays of integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their n-th indicies.

*/

const zipSum = (xs, ys) => {
  let len;
  let returnArray = [];

  xs.length < ys.length ? (len = xs.length) : (len = ys.length);

  for (let i = 0; i < len; i++) {
    returnArray.push(xs[i] + ys[i]);
  }

  return returnArray;
};
