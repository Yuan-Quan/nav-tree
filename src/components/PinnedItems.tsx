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
import { findNode } from './searchTree';
import { treeDataRoot } from '../assets/TreeData';

interface ILItemProps {
    node: string
}

export const PinnedItems = () => {
    const {pinnedItems, setPinnedItems} = React.useContext(AppContext);

    const handleDelete = (key: string) => {
        setPinnedItems(pinnedItems.filter((item) => item !== key));
    }

    const LItem = (props: ILItemProps) => {
        console.log(props.node)
        const node = findNode(treeDataRoot, props.node)
        return (
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => {handleDelete(props.node)}}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                  <FolderIcon />
              </ListItemAvatar>
              <ListItemText
                primary={node?.label}
                secondary="test"
              />
            </ListItem>
        )
    }
    return (
        <div>
            <Typography>
                Pinned Items
            </Typography>
             <List>
                {pinnedItems.map((item, index) => {
                        return (<LItem node={item}/>)
    })}
            </List>
        </div>
    )
}