import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ITreeDataItem } from '../assets/TreeData';
import { AppContext } from '../App';

export default function TreeSelection() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);
  const {displayTree, setDisplayTree} = React.useContext(AppContext);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  // return a array of all the keys of the children of the given node
  const getAllNodeKeys = (node: ITreeDataItem): string[] => {
    const result: string[] = [];
    result.push(node.key);
    if (node.nodes) {
        result.push(...node.nodes.flatMap(getAllNodeKeys));
    }
    return result;
  }

  const handleExpandAllClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? getAllNodeKeys(displayTree) : [],
    );
  };

    const renderTree = (node: ITreeDataItem) => (
    <TreeItem key={node.key} nodeId={node.key} label={node.label}>
      {Array.isArray(node.nodes)
        ? node.nodes.map((child) => renderTree(child))
        : null}
    </TreeItem>
  )

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandAllClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
      </Box>
      <TreeView
        aria-label="tree-view"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        {renderTree(displayTree)}
      </TreeView>
    </Box>
  )
}