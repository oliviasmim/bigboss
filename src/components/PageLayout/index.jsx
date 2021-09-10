import Header from "../Header";
import MenuSide from "../MenuSide";
import { CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
	display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const PageLayout = ({ children }) => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
			<MenuSide mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>

			<main className={classes.content}>
				<div className={classes.toolbar} />
						{ children }
			</main>
		</div>
	);
}

export default PageLayout;