import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import PushPinIcon from "@mui/icons-material/PushPin";

export interface ITreeItemProps {

}

export const TreeItemDisplay = (props: any) => {
    return(
        <Box>
            <a target="_top" href={props.url}>{props.label}</a>
            <PushPinIcon onClick={props.onPinClick}/>
        </Box>
    )
}