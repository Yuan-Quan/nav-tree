import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import PushPinIcon from "@mui/icons-material/PushPin";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import { IconButton, Tooltip } from "@mui/material";
import './TreeItemDisplay.css';
import ListAltIcon from "@mui/icons-material/ListAlt";
import LinkIcon from "@mui/icons-material/Link";

export interface ITreeItemProps {

}

export const TreeItemDisplay = (props: any) => {
    return(
        <Box className="treeItem">
            <Box className="treeItemLable">
                {(() => {
                  switch(props.type) {
                    case "category": return <FolderIcon className="treeItemIcon"/>;
                    case "file": return <DescriptionIcon className="treeItemIcon"/>;
                    case "sheet": return <ListAltIcon className="treeItemIcon"/>;
                    default: return <LinkIcon className="treeItemIcon"/>
                  }
                })()}
            <a target="_top" href={props.url}>{props.label}</a>
            </Box>
            <Box sx={{width: 10}}></Box>
            <Tooltip title="Pin to the Top" placement="right" arrow>
            <IconButton className="pinButton" onClick={props.onPinClick}>
                <PushPinIcon/>
            </IconButton>
            </Tooltip>
        </Box>
    )
}