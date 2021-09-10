import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { WbSunny, Menu, NotificationsNone, AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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
	const classes = useStyles();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<AppBar position="fixed" elevation={1} className={classes.appBar} {...rest}>
				<IconButton
					color="#D6D7E3"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<Menu />
				</IconButton>
			<Toolbar>
				<IconButton color="#D6D7E3">
					<WbSunny />
				</IconButton>
				<IconButton color="#D6D7E3">
					<NotificationsNone />
				</IconButton>
				<IconButton color="#D6D7E3">
					<AccountCircle />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
