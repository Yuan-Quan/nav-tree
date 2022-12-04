import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import PushPinIcon from "@mui/icons-material/PushPin";
import { IconButton, Tooltip } from "@mui/material";

export interface ITreeItemProps {

}

export const TreeItemDisplay = (props: any) => {
    return(
        <Box>
            <a target="_top" href={props.url}>{props.label}</a>
            <Tooltip title="Pin to the Top" placement="right" arrow>
            <IconButton onClick={props.onPinClick}>
                <PushPinIcon/>
            </IconButton>
            </Tooltip>
        </Box>
    )
}