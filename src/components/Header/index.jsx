import { AppBar, Toolbar, IconButton, Menu, MenuItem, Fade, Typography, ListItemIcon } from '@material-ui/core';
import { WbSunny, List, NotificationsNone, AccountCircle, ExitToApp, AccountBox } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory } from 'react-router';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		alignItems: "flex-end",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: "0 1rem",
		backgroundColor: "#ffffff",
			[theme.breakpoints.up('sm')]: {
				flexDirection: "column",
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none',
		},
	},
}));

const Header = ({ setMobileOpen, mobileOpen, ...rest }) => {
	const history = useHistory();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

	const handleLogout = () => {
		localStorage.clear();
		window.location.href = '/';	
	}

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<AppBar position="fixed" elevation={1} className={classes.appBar} {...rest}>
				<IconButton
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<List />
				</IconButton>
			<Toolbar>
				<IconButton >
					<WbSunny />
				</IconButton>
				<IconButton >
					<NotificationsNone />
				</IconButton>
				<IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
					<AccountCircle />
				</IconButton>
				<Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={() => history.push("/profile")}> 
						<ListItemIcon>
							<AccountBox />
						</ListItemIcon> 
						<Typography variant="inherit"> Perfil </Typography>
					</MenuItem> 
                    <MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<ExitToApp />
						</ListItemIcon>  
						<Typography variant="inherit"> Sair </Typography>
					</MenuItem>
                </Menu>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
