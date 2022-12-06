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

export const getNodeIcon = (type: string) => {
      switch(type) {
        case "category": return <FolderIcon className="treeItemIcon"/>;
        case "file": return <DescriptionIcon className="treeItemIcon"/>;
        case "sheet": return <ListAltIcon className="treeItemIcon"/>;
        default: return <LinkIcon className="treeItemIcon"/>
      }
}

export const TreeItemDisplay = (props: any) => {
    return(
        <Box className="treeItem">
            <Box className="treeItemLable">
                {getNodeIcon(props.type)}
                <a color='red' target="_parent" href={props.url}>{props.label}</a>
            </Box>
            <Tooltip title="固定到顶部" placement="right" arrow>
            <IconButton className="pinButton" onClick={props.onPinClick}>
                <PushPinIcon/>
            </IconButton>
            </Tooltip>
        </Box>
    )
}