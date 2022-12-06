import { Box, Paper } from "@mui/material"
import { ITreeDataItem } from "../assets/TreeData"

interface IGridPapersProps {
  root: ITreeDataItem
}

export const GridPapers = (props: IGridPapersProps) => {

    const renderPapers = (root: ITreeDataItem) => {
      if (Array.isArray(root.nodes)) {
        return root.nodes.map((node) => {
            return (
                <Paper elevation={3} sx={{ p: 2, m: 1, flexGrow: 1 }}>
                    {node.label}
                </Paper>
            )
        })
      }
    }

    return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 256,
          height: 64,
        },
      }}
    >
      {renderPapers(props.root)}
    </Box>
    )
}