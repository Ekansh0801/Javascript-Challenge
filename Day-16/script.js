//Activity - 1
const factorial = (n) => {
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(6));

const fibonacci = (n) => {
    if(n == 1) return 0;
    if(n == 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

for(let i = 1; i <=5; i++){
    console.log(fibonacci(i));
}

//Activity - 2
let arr = [1,2,3,4,5,9];
const arrSum = (arr,i) => {
    if(i == arr.length){
        return 0;
    }
    return arr[i] + arrSum(arr,i + 1);
}

console.log(arrSum(arr,0));

const arrMax = (arr,i) => {
    if(i == arr.length){
        return 0;
    }

    let next = arrMax(arr,i + 1);
    if(arr[i] > next) return arr[i];
    else return next;
}

console.log(arrMax(arr,0));

//Activity - 3
const reverseString = (str,i) => {
    if(i == str.length) return "";

    return reverseString(str,i + 1) + str[i];

}

console.log(reverseString("abcde",0));

const checkPalindrome = (str,i,j) => {
    if(i == j) return true;

    if(str[i] != str[j]) return false;
    return checkPalindrome(str,i + 1,j - 1);
}

const str = "arora";
console.log(checkPalindrome(str,0,str.length - 1));

//Activity - 4
let sarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr, i, j, x) => {
  if (i > j) return -1;
  
  let mid = i + Math.floor((j - i) / 2);

  if (arr[mid] === x) return mid;
  else if (arr[mid] > x) return binarySearch(arr, i, mid - 1, x);
  else return binarySearch(arr, mid + 1, j, x);
}

console.log(binarySearch(sarr, 0, sarr.length - 1, 4));

const search = (arr,i,x) => {
    if(i == arr.length) return 0;

    return (arr[i] == x) + search(arr,i + 1,x);
}
const larr = [1,2,4,3,2,4,5,2,1,2];
console.log(search(larr,0,2));


// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }

//   buildTree() {
//     const data = prompt("Enter node value:");

//     if (data == -1) return null;
//     const node = new TreeNode(parseInt(data));

//     console.log(`Enter Left Side of ${data}`);
//     node.left = this.buildTree();

//     console.log(`Enter Right Side of ${data}`);
//     node.right = this.buildTree();

//     return node;
//   }
// }

// const root = new TreeNode(0);
// root.buildTree();



class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  
    // Manually building the tree
    static buildTree() {
      const root = new TreeNode(1); // Root node
      root.left = new TreeNode(2);  // Left child of root
      root.right = new TreeNode(3); // Right child of root
  
      root.left.left = new TreeNode(4); // Left child of node 2
      root.left.right = new TreeNode(5); // Right child of node 2
  
      root.right.left = new TreeNode(6); // Left child of node 3
      root.right.right = new TreeNode(7); // Right child of node 3
  
      return root;
    }
  }
  
  // Inorder traversal function
  const inorder = (node) => {
    if (node == null) {
      return;
    }
  
    inorder(node.left);
    console.log(node.val);
    inorder(node.right);
  };
  
  // Build the tree and perform inorder traversal
  const root = TreeNode.buildTree(); // Manually building the tree
  console.log("Tree Created");
  inorder(root); // Perform inorder traversal

  
  const depth = (node) => {
    if (node == null) return 0;
  
    const left = depth(node.left);
    const right = depth(node.right);
  
    return 1 + (left > right ? left : right);
  };
  
  console.log(depth(root));