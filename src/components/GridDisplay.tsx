import { Box, Paper } from "@mui/material"

export const GridDisplay = () => {
    return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper />
      <Paper />
      <Paper />
    </Box>
    )
}