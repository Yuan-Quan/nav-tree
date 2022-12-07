import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GridAccordionItem } from './GridAccordionItem';
import { ITreeDataItem, treeDataRoot } from '../assets/TreeData';
import { Icon, IconButton } from '@mui/material';
import { AppContext } from '../App';
import { getSearchResultTree, getAllNodeKeys } from './searchTree';

interface IAccordionContext {
  expanded: string | boolean;
  setExpanded: React.Dispatch<React.SetStateAction<string | boolean>>;
}

export const AccordionContext = React.createContext<IAccordionContext>(null!);

export function GridAccordions() {
  const [expanded, setExpanded] = React.useState<string | boolean>(false);
  const [displayTree, setDisplayTree] = React.useState<ITreeDataItem>(treeDataRoot)
  const {searchTerm, pinnedItems, setPinnedItems} = React.useContext(AppContext);

  React.useEffect(()=>{
    // when search term changes, update the display tree
    if (searchTerm) {
      setDisplayTree(getSearchResultTree(treeDataRoot, searchTerm.split(" ")));
      setExpanded(true);
    }
    else
    {
      setDisplayTree(treeDataRoot);
    }
  },[searchTerm])  

  const renderAccordionItems = (root: ITreeDataItem) => {
    if (Array.isArray(root.nodes)) {
    return root.nodes.map((node) => {
      // why bother rendering an accordion item if there are no nodes?
      if (Array.isArray(node.nodes)) {
        return (
          <GridAccordionItem title={node.label} secondary={node.nodetype} root={node}/> 
        )
      }
    })
    }
  }

  return (
    <div>
      <AccordionContext.Provider value={{ expanded, setExpanded }}>
        {renderAccordionItems(displayTree)}
      </AccordionContext.Provider>
    </div>
  );
}