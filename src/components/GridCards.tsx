import { Box } from "@mui/material"
import { ITreeDataItem } from "../assets/TreeData"
import { GridCard } from './GridCard';

interface IGridPapersProps {
  root: ITreeDataItem
}

export const GridCards = (props: IGridPapersProps) => {
    const renderCards = (root: ITreeDataItem) =>{
      if (Array.isArray(root.nodes)) {
        return root.nodes.map((node) => {
            return <GridCard node={node}/>
        })
      }
    }

    return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {renderCards(props.root)}
    </Box>
    )
}