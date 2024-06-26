//create a binary tree from an array 

import { insertNode } from "./insertNode"

type treeNode = {
    value: number,
    count?: number,
    left?: treeNode,
    right?: treeNode
}

function initTree(array: number[]): treeNode {
    //initialize the root with the first element 
    const firstElement = array.shift()!
    let rootNode: treeNode = { value: firstElement }
    for (let i = 0; i < array.length; i++) {
        insertNode(rootNode, array[i])
    }
    return rootNode
}

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(JSON.stringify(initTree(newArray), undefined, 1))





// let root: treeNode = { value: array[0] };
// for (let i = 1; i < array.length - 1; i++) {
//     insertNode(root, array[i])
// }
// return root;