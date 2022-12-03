import { ITreeDataItem, treeDataRoot } from "../assets/TreeData";
import pinyin from "pinyin";

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

const findNode = (root: ITreeDataItem, key: string): ITreeDataItem | undefined => {
    if (root.key === key) {
        return root;
    }
    if (root.nodes) {
        for (const child of root.nodes) {
            const result = findNode(child, key);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
}

// return node's parent node
const findParent = (root: ITreeDataItem, key: string): ITreeDataItem | undefined => {
    if (root.nodes) {
        for (const child of root.nodes) {
            if (child.key === key) {
                return root;
            }
            const result = findParent(child, key);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
}

// return a searchterm string array for the node of given key
// it contains all the parent nodes' labels, and the node's label
export const getNodeSearchTerms = (root: ITreeDataItem, key: string): string[] => {
    const result: string[] = [];
    const node = findNode(root, key);
    if (node) {
        result.push(node.label);
        let parent = findParent(root, node.key);
        while (parent) {
            result.push(parent.label);
            parent = findParent(root, parent.key);
        }
    }
    return result;
}
// it's a recursive call, this is bad, some day I'll fix it
// and this should be cached, now it's recalculated for all nodes when search term changes.
// some day I'll fix it

export const getNodeSearchTerm = (root: ITreeDataItem, key: string): string => {
    const terms = getNodeSearchTerms(root, key);
    const checkChCharReg = new RegExp("[\\u4E00-\\u9FFF]+","g");
    let result = terms.join("_");
    for (const term of terms) {
        if (checkChCharReg.test(term)) {
            result = result + "_" + pinyin(term, { style: pinyin.STYLE_NORMAL }).join("");        
        }
    }
    return result;
}

export const testNodeSearchTerm = (root: ITreeDataItem, key: string, querys: string[]): boolean => {
    const term = getNodeSearchTerm(root, key).toLowerCase(); 
    for (const query of querys) {
        if (term.indexOf(query.toLowerCase()) === -1) {
            return false;
        }
    }
    return true;
}

// return a array of all the keys of the nodes that match the search query
export const getSearchResultKeys = (root: ITreeDataItem, querys: string[]): string[] => {
    const result: string[] = [];
    const allKeys = getAllNodeKeys(root);
    for (const key of allKeys) {
        if (testNodeSearchTerm(root, key, querys)) {
            result.push(key);
        }
    }
    return result;
}

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
export const getSearchResultTree = (root: ITreeDataItem, querys: string[]): ITreeDataItem => {
    // if search term is empty, return the original tree
    if (querys[0] === '') {
        return root;
    }

    const keys = getSearchResultKeys(root, querys);

    // in order to render the search result tree, we need to keep the parent nodes of the search result nodes
    // add the parent nodes' keys to the keys array
    for (const key of keys) {
        keys.push(...getNodeParentKeys(root, key));
    }

    return getFilteredTree(root, keys);
}

