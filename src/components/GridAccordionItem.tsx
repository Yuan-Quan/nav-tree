import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GridPapers } from "./GridPapers";

interface IAccordionItemProps {
    expanded: string;
    title: string;
    secondary: string;
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const GridAccordionItem = (props: IAccordionItemProps) => {
    return (
        <Accordion expanded={props.expanded === 'panel1'} onChange={()=>{props.handleChange('panel1')}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            props.title
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props.secondary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <GridPapers/>
        </AccordionDetails>
      </Accordion>
    )
}