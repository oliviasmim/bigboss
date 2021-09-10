import {
        Avatar,
        Box,
        Button,
        Divider,
        Drawer,
        Hidden,
        List,
        Typography, 
        AppBar,
        CssBaseline,
        Toolbar,
        IconButton
} from '@material-ui/core';
import { 
        Assessment,
        Ballot, 
        FindInPage, 
        AssignmentInd, 
        Home, 
        ChromeReaderMode, 
        AccountBox, 
        AssignmentTurnedIn,
        Menu 
} from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import NavItem from '../NavItem';

const drawerWidth = 240;

const menuItems = [
    {
      href: '/dashboard',
      icon: Home,
      title: 'Dashboard'
    },
    {
      href: '/customer',
      icon: AssignmentInd,
      title: 'Clientes'
    },
    {
      href: '/services',
      icon: Ballot,
      title: 'Serviços'
    },
    {
      href: '/services/search',
      icon: FindInPage,
      title: 'Buscar Serviços'
    },
    {
      href: '/404', //implementar pós mvp
      icon: Assessment,
      title: 'Gestão Financeira'
    },
    {
      href: '/404', //implementar pós mvp
      icon: ChromeReaderMode,
      title: 'Relatórios'
    },
    {
      href: '/register',
      icon: AssignmentTurnedIn,
      title: 'To-do'
    },
    {
      href: '/profile',
      icon: AccountBox,
      title: 'Perfil'
    }
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#134087",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const MenuSide = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MenuContent = (
    <Box >
      <div className={classes.toolbar} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {menuItems.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            { MenuContent }
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            { MenuContent }
          </Drawer>
        </Hidden>

      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
