import * as React from 'react';
import {useInterval} from "usehooks-ts"
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ITreeDataItem, treeDataRoot } from '../assets/TreeData';
import { AppContext } from '../App';
import { getAllNodeKeys, getNodeSearchTerm, getSearchResultKeys, getSearchResultTree } from './searchTree';
import { TreeItemDisplay } from './TreeItemDisplay';
import { Typography } from '@mui/material';
import './TreeDisplay.css';

// if I use a <a/> tag, href normally, it will redirect the react app instead of the magicflu page
// if specify target="_parent", browser won't allow it because of the same origin policy
// witch should be fine when this app is deployed on the same server as magicflu
// 
// this is a hacky way to redirect to the magicflu page
// however, it will cause the hole page to reload
//
/// SHOULD NEVER USE THIS IN PRODUCTION
//
export const redirectTopLevel = (url: string | undefined) => {

  if (window.top && url) 
  {
      window.top.location.href = url;
  }
}


export default function TreeDisplay() {
  const [expanded, setExpanded] = React.useState<string[]>(()=>{
    // recall the expanded nodes from local storage (if available)
    const expandedNodes = window.localStorage.getItem("expandedNodes");
    return expandedNodes ? JSON.parse(expandedNodes) : [];
  });
  const [selected, setSelected] = React.useState<string[]>([]);
  const [displayTree, setDisplayTree] = React.useState<ITreeDataItem>(treeDataRoot)
  const {searchTerm, pinnedItems, setPinnedItems} = React.useContext(AppContext);
// to contorl the throttle of tree rerendering
const [tickThrottle, setTickThrottle] = React.useState(false);
useInterval(() => {
  setTickThrottle(!tickThrottle);
}, 50);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const handleFocus = (event: React.SyntheticEvent, nodeId: string) => {
  };

  const handleExpandAllClick = () => { setExpanded((oldExpanded) =>
      oldExpanded.length <=1 ? getAllNodeKeys(displayTree) : ['root'],
    );
  };

  const handelPinClick = (key: string) => {
    if (pinnedItems.includes(key)) {
      return
    }
    setPinnedItems([...pinnedItems, key]);
  }
  
  const renderTree = (node: ITreeDataItem) => (
    <TreeItem key={node.key} nodeId={node.key} label={<TreeItemDisplay node={node} onPinClick={() => handelPinClick(node.key)} />}>
      {Array.isArray(node.nodes)
        // it's a recursive call, this is bad, some day I'll fix it
        ? node.nodes.map((child) => renderTree(child))
        : null}
    </TreeItem>
  )
  
  //Throttling with useMemo hook
  const throttledRenderTree = React.useMemo(
    () => {return renderTree(displayTree)},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tickThrottle]
  );

  React.useEffect(()=>{
    // when search term changes, update the display tree
    if (searchTerm) {
      setDisplayTree(getSearchResultTree(treeDataRoot, searchTerm.split(" ")));
    }
    else
    {
      setDisplayTree(treeDataRoot);
      setExpanded(['root'])
    }
    // auto expand all nodes, when search term is not ''
    if (searchTerm !== '') {
      setExpanded(getAllNodeKeys(displayTree));
    }
  },[searchTerm])

  React.useEffect(()=>{
    // presist the expanded state of the tree
    window.localStorage.setItem('expandedNodes', JSON.stringify(expanded));
  },[expanded])

  return (
    <Box>
      <Box className='title'>
        <Typography align='left' variant='h6'>
          导航树
        </Typography>
        <Box className='titleButtons'>
        <Button onClick={handleExpandAllClick}>
          {expanded.length <= 1 ? '展开全部' : '折叠全部'}
        </Button>
        <Button>
          固定选中的项目
        </Button>
        </Box>
      </Box>
      <TreeView
        aria-label="tree-view"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        onNodeFocus={handleFocus}
        multiSelect
      >
        {throttledRenderTree}
      </TreeView>
    </Box>
  )
}