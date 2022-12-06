import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GridAccordionItem } from './GridAccordionItem';
import { treeDataRoot } from '../assets/TreeData';
import { Icon, IconButton } from '@mui/material';

interface IAccordionContext {
  expanded: string | false;
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
}

export const AccordionContext = React.createContext<IAccordionContext>(null!);

export function GridAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  
  const renderAccordionItems = () => {
    return treeDataRoot.nodes.map((node) => {
      // why bother rendering an accordion item if there are no nodes?
      if (Array.isArray(node.nodes)) {
        return (
          <GridAccordionItem title={node.label} secondary={node.nodetype} root={node}/> 
        )
      }
    })
  }

  return (
    <div>
      <AccordionContext.Provider value={{ expanded, setExpanded }}>
        {renderAccordionItems()}
      </AccordionContext.Provider>
    </div>
  );
}