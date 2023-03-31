class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
}

class BinaryTreeNode {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const binaryTreeNode = new BinaryTreeNode('Destiny')
const binaryTreeNode2 = new BinaryTreeNode('Carlos')
const binaryTreeNode3 = new BinaryTreeNode('JD')


const binaryTreeNode4 = new BinaryTreeNode('Juan')
const binaryTreeNode5 = new BinaryTreeNode('Yianna')
const binaryTreeNode6 = new BinaryTreeNode('Becky')

binaryTreeNode.left = binaryTreeNode2
binaryTreeNode.right = binaryTreeNode3

// console.log(binaryTreeNode)

class Tree {
    constructor(root = null) {
        this.root = root;
    }
}

const juanTree = new Tree(binaryTreeNode4)
juanTree.root.left = binaryTreeNode
juanTree.left = binaryTreeNode5

console.log(juanTree)

// const matt = new TreeNode("Matt");
// const joe = new TreeNode("Joe");
// const opal = new TreeNode("Opal");
// matt.children.push(joe, opal);

// const tree = new Tree();
// tree.root = matt
// tree.root = null
// console.log(tree)