import { ITreeDataItem } from "../assets/TreeData";

// return a array of all the keys of the children of the given node
// mainly for expand all function
export const getAllNodeKeys = (node: ITreeDataItem): string[] => {
    const result: string[] = [];
    result.push(node.key);
    if (node.nodes) {
        // it's a recursive call, this is bad, some day I'll fix it
        result.push(...node.nodes.flatMap(getAllNodeKeys));
    }
    return result;
}

// return a searchterm string for the node of given key
// it contains all the parent nodes' labels, and the node's label
// it's a recursive call, this is bad, some day I'll fix it
// and this should be cached, now it's recalculated for all nodes when search term changes.
// some day I'll fix it
export const getNodeSearchTerm = (root: ITreeDataItem, key: string): string => {
    if (root.key === key) {
        return root.label;
    }
    if (root.nodes) {
        for (const node of root.nodes) {
            const result = getNodeSearchTerm(node, key); 
            if (result) {
                return root.label + ' ' + result;
            }
        }
    }
    return '';
}

// return a array of all the keys of the nodes that match the search term
export const getSearchResultKeys = (root: ITreeDataItem, searchTerm: string): string[] => {
    const result: string[] = [];
    if (root.label.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(root.key);
    }
    if (root.nodes) {
        // it's a recursive call, this is bad, some day I'll fix it
        result.push(...root.nodes.flatMap(node => getSearchResultKeys(node, searchTerm)));
    }
    return result;
}
// Github Copilot wrote this, I can't understand why it works
// PLESE DON'T TOUCH IT

// return a new tree contains only have the nodes that match the given keys
export const getFilteredTree = (root: ITreeDataItem, keys: string[]): ITreeDataItem => {
    const result = { ...root };
    if (result.nodes) {
        result.nodes = result.nodes.filter(node => keys.includes(node.key));
        result.nodes = result.nodes.map(node => getFilteredTree(node, keys));
    }
    return result;
}

// return a array of keys of the nodes that are ancestors of the given node
export const getNodeParentKeys = (root: ITreeDataItem, key: string): string[] => {
    const result: string[] = [];
    if (root.nodes) {
        for (const node of root.nodes) {
            if (node.key === key) {
                result.push(root.key);
            } else {
                result.push(...getNodeParentKeys(node, key));
            }
        }
    }
    return result;    
}

// return a new tree contains only have the nodes that match search term
export const getSearchResultTree = (root: ITreeDataItem, searchTerm: string): ITreeDataItem => {
    // if search term is empty, return the original tree
    if (searchTerm === '') {
        return root;
    }
        
    const keys = getSearchResultKeys(root, searchTerm);
    console.log("search result keys: ", keys);

    // in order to render the search result tree, we need to keep the parent nodes of the search result nodes
    // add the parent nodes' keys to the keys array
    for (const key of keys) {
        keys.push(...getNodeParentKeys(root, key));
    }

    return getFilteredTree(root, keys);
}

