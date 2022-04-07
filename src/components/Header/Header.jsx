import * as React from "react";
import { useState } from "react";
// importing material UI components
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import { Drawer, Divider } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




export default function Header() {
	const [open, setState] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
		//changes the function state according to the value of open
		setState(open);
	  };

return (
	<AppBar position="static">
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="open drawer"
			onClick={toggleDrawer(true)}
			sx={{ mr: 2 ,
				display: {
					xs: 'block',
					sm: 'none',
				  }
			}}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
		
		<Drawer
		//from which side the drawer slides in
		anchor="left"
		//if open is true --> drawer is shown
		open={open}
		//function that is called when the drawer should close
		onClose={toggleDrawer(false)}
		//function that is called when the drawer should open
		onOpen={toggleDrawer(true)} 
		>
			
			 <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#dbc8ff",
                }}>
					<IconButton sx={{mb: 2}}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </IconButton>

                  <Divider sx={{mb: 2}} />

                  <Box sx={{mb: 2}} >
				    
					<List>
				   <Button > 
                    <ListItem>
                      <Link to ='./components/Pages/Home.js' >Home</Link> 
                    </ListItem>
					</Button>
					</List>
					
					
					
					<List>
					<Button>
                    <ListItem>
					<Link to ='./components/BlogFolder/Topic1.jsx' >Topic1</Link>
                    </ListItem>
					</Button>
					</List>
					

					<List>
					<Button>
                    <ListItem>  
                      <ListItemText primary="Other" />
                    </ListItem>
					</Button>
					</List>
					

				</Box>
				</Box>
				
		</Drawer>
		
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Blogger
		</Typography>
		
		</Toolbar>
	</AppBar>
);
}


