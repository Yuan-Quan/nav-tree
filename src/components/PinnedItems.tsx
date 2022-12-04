import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { AppContext } from '../App';
import { findNode, getNodeBreadcrumb } from './searchTree';
import { treeDataRoot } from '../assets/TreeData';
import { redirectTopLevel } from './TreeDisplay';
import { getNodeIcon } from './TreeItemDisplay';
import { Box, Tooltip } from '@mui/material';

interface ILItemProps {
    node: string
}

export const PinnedItems = () => {
    const {pinnedItems, setPinnedItems} = React.useContext(AppContext);

    React.useEffect(() => {
        // presist pinned items to local storage
        window.localStorage.setItem("pinnedItems", JSON.stringify(pinnedItems));
    }, [pinnedItems]);

    const handleDelete = (key: string) => {
        setPinnedItems(pinnedItems.filter((item) => item !== key));
    }

    const LItem = (props: ILItemProps) => {
        const node = findNode(treeDataRoot, props.node)
        if (node) {
        return (
            <ListItem
              secondaryAction={
                <Tooltip title="从顶部取消固定" placement='right' arrow>
                <IconButton edge="end" aria-label="delete" onClick={() => {handleDelete(props.node)}}>
                  <DeleteIcon />
                </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                {getNodeIcon(node.nodetype)}
              </ListItemAvatar>
              <ListItemText
                primary={node?.label}
                secondary={getNodeBreadcrumb(treeDataRoot, props.node).join(" > ")}
                onClick={() => {redirectTopLevel(node?.url)}}
              />
            </ListItem>
        )
        }
        return(
            <ListItem></ListItem>
        )
    }
    if (pinnedItems.length == 0) {
        return(<div></div>)
    }
    return (
        <div>
            <Box className='pinnedBox'>
            <Typography variant='h6' align='left' mt='1em'>
                固定的项目
            </Typography>
             <List>
                {pinnedItems.map((item, index) => {
                        return (<LItem node={item}/>)
    })}
            </List>
            </Box>
        </div>
    )
}