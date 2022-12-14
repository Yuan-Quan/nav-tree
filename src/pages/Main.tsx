import { Box, Typography } from "@mui/material"
import ColorTabs from "../components/ColoredTabs"
import { PinnedItems } from "../components/PinnedItems"
import { SearchBar } from "../components/SearchBar"
import TreeDisplay from "../components/TreeDisplay"
import './Main.css'

export const Main = () => {
    return (
        <Box className="mainPage">
            <Typography variant="h4" align="left"> 三.全过程造价咨询管理 </Typography>
            <Typography align="left" variant="h6" mt={2}> 导航选单 </Typography>
            <Box className="sectionSearchPin">
                <SearchBar />
                <PinnedItems />
            </Box>
            <ColorTabs/>
        </Box>
    )
}