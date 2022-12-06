import * as React from 'react';
import { MenuItem, Box, Card, CardActionArea, CardHeader, Avatar, IconButton, Menu } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from "@mui/material/colors"
import { ITreeDataItem } from "../assets/TreeData"
import { getNodeIcon } from './TreeItemDisplay';


export const GridCard = (props: any) => {
    const node = props.node;
    const use_dropdown = Array.isArray(node.nodes) && node.nodes.length > 0;

    function redirect (url: string | undefined) {
      if (window && url) window.location.href = url
      return true;
    }

    const renderMenu = (node: ITreeDataItem) => {
        if (Array.isArray(node.nodes)) {
          return node.nodes.map((child) => {
            return <MenuItem onClick={() => {redirect(child.url)}}>{child.label}</MenuItem>
          })
        }
    } 
      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Box>
        <Card>
            <CardActionArea
              aria-controls={open ? node.label+'-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              {...(use_dropdown ? { onClick: handleClick } : { href: node.url })}
            >
              <CardHeader
                avatar={getNodeIcon(node)}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={node.label}
                subheader={node.nodetype}
              />
            </CardActionArea>
        </Card>
        <Menu
          id={node.label+"-menu"}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {renderMenu(node)}
        </Menu>
        </Box>
    )
}