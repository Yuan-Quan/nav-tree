import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import PushPinIcon from "@mui/icons-material/PushPin";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import './TreeItemDisplay.css';
import ListAltIcon from "@mui/icons-material/ListAlt";
import LinkIcon from "@mui/icons-material/Link";
import { red } from "@mui/material/colors";
import { ITreeDataItem } from "../assets/TreeData";

export interface ITreeItemProps {

}

export const getNodeIcon = (node: ITreeDataItem) => {
    if (node) {
    switch(node.nodetype) {
      case "category": return <FolderIcon/>;
      case "file": return <DescriptionIcon/>;
      case "sheet": return <ListAltIcon/>;
      case "link":  return <LinkIcon/>;
      default: return <Avatar sx={{ bgcolor: red[500] }}>t</Avatar>;
    }
    }
}

export const TreeItemDisplay = (props: any) => {
    return(
        <Box className="treeItem">
            <Box className="treeItemLable">
                {getNodeIcon(props.node)}
                <a color='red' target="_parent" href={props.node.url}>{props.node.label}</a>
            </Box>
            <Tooltip title="固定到顶部" placement="right" arrow>
            <IconButton className="pinButton" onClick={props.node.onPinClick}>
                <PushPinIcon/>
            </IconButton>
            </Tooltip>
        </Box>
    )
}