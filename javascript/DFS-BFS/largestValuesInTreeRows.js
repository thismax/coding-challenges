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
 
Return an array in which the first element is the largest value in the row with depth 0, the second element is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

Definition for binary tree:

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

    1
  /   \
 2     4
  \   /
   3 5

output => [1, 4, 5]

*/


var largestValuesInTreeRows = function(t) {
// your code here
};


/*
 _            _   
| |          | |  
| |_ ___  ___| |_ 
| __/ _ \/ __| __|
| ||  __/\__ \ |_ 
 \__\___||___/\__|
                  
*/

t = {
  'value': 1,
  'left': {
    'value': 2,
    'left': null,
    'right': {
      'value': 3,
      'left': null,
      'right': null
    }
  },
  'right': {
    'value': 4,
    'left': {
      'value': 5,
      'left': null,
      'right': null
    },
    'right': null
  }
};

it('should return an array containing the largest value in each tree row', function() {
  assert.deepEqual(largestValuesInTreeRows(t), [1, 4, 5]);
});