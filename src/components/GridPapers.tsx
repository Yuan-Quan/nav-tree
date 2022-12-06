import { Box, Paper } from "@mui/material"

export const GridPapers = () => {
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
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
      <Paper />
    </Box>
    )
}