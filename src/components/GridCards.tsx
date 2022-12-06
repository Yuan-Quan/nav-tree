import { Box, Card, CardActionArea, CardContent, IconButton, Paper, Typography } from "@mui/material"
import { ITreeDataItem } from "../assets/TreeData"

interface IGridPapersProps {
  root: ITreeDataItem
}

export const GridCards = (props: IGridPapersProps) => {

    const renderCards = (root: ITreeDataItem) => {
      if (Array.isArray(root.nodes)) {
        return root.nodes.map((node) => {
            return (
              <Card>
                  <CardActionArea href="https://google.com">
                      <CardContent>
                          <Typography>Click me!</Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
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
      {renderCards(props.root)}
    </Box>
    )
}