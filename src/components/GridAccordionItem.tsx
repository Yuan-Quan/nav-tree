import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GridPapers } from "./GridPapers";
import { AccordionContext } from "./GridAccordions";

interface IAccordionItemProps {
    title: string;
    secondary?: string;
}

export const GridAccordionItem = (props: IAccordionItemProps) => {
    const {expanded, setExpanded} = React.useContext(AccordionContext);
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === props.title} onChange={handleChange(props.title)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {props.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props.secondary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <GridPapers/>
        </AccordionDetails>
      </Accordion>
    )
}