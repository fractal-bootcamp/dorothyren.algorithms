//insert a node 

type TreeNode = {
    value: number,
    count?: number,
    left?: TreeNode,
    right?: TreeNode
}

function insertNode(root: TreeNode, value?: number) {

    // if the value exists, stop modifying the tree
    if (!value || value == root.value) { return value };

    if (value < root.value) {
        // if the value you are inserting is less than the root value, 
        // overwrite the value of left, and then insert the value into that
        // node
        const swap = root.left?.value;
        root.left = { ...root.left, value }

        insertNode(root.left, swap);
    } else {
        // otherwise
        // overwrite the value of right, and then insert the value into that
        // node
        const swap = root.right?.value;
        root.right = { ...root.right, value }
        insertNode(root.right, swap);
    }

    // return root
    return root;
}

// console.log(insertNode({ value: 10 }, 15))

const advancedNode = {
    value: 10,
    right: {
        value: 15,
    },
}

// console.log(insertNode(advancedNode, 12))
export { insertNode }