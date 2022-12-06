import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GridAccordionItem } from './GridAccordionItem';

interface IAccordionContext {
  expanded: string | false;
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
}

export const AccordionContext = React.createContext<IAccordionContext>(null!);

export function GridAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);



  return (
    <div>
      <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <GridAccordionItem expanded={expanded} title="test" />
      <GridAccordionItem expanded={expanded} title="test1" />
      </AccordionContext.Provider>
    </div>
  );
}