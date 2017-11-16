// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// 
// For the following tree:
// 
//     1
//   /   \
//  2     4
//   \   /
//    3 5
// 
// output => [1,2,4,3,5]
// 
// 
var traverseTree = function(t) {
  
};


// tests
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

it('should perform a BFS', function() {
  assert.deepEqual(traverseTree(t), [1, 2, 4, 3, 5]);
});