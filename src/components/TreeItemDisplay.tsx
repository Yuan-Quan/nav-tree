import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import PushPinIcon from "@mui/icons-material/PushPin";
import { IconButton, Tooltip } from "@mui/material";
import './TreeItemDisplay.css';

export interface ITreeItemProps {

}

export const TreeItemDisplay = (props: any) => {
    return(
        <Box className="treeItem">
            <a target="_top" href={props.url}>{props.label}</a>
            <Box sx={{width: 10}}></Box>
            <Tooltip title="Pin to the Top" placement="right" arrow>
            <IconButton className="pinButton" onClick={props.onPinClick}>
                <PushPinIcon/>
            </IconButton>
            </Tooltip>
        </Box>
    )
}