import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  Assessment,
  Ballot,
  FindInPage,
  AssignmentInd,
  Home,
  ChromeReaderMode,
  AccountBox,
  AssignmentTurnedIn,
} from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../../assets/logo-white.png";
import NavItem from "../NavItem";

const drawerWidth = 240;

const menuItems = [
  {
    href: "/dashboard",
    icon: Home,
    title: "Dashboard",
  },
  {
    href: "/customer",
    icon: AssignmentInd,
    title: "Clientes",
  },
  {
    href: "/services",
    icon: Ballot,
    title: "Serviços",
  },
  {
    href: "/contracts",
    icon: FindInPage,
    title: "Contratos",
  },
  {
    href: "/404", //implementar pós mvp
    icon: Assessment,
    title: "Gestão Financeira",
  },
  {
    href: "/reports", //implementar pós mvp
    icon: ChromeReaderMode,
    title: "Relatórios",
  },
  {
    href: "/404",
    icon: AssignmentTurnedIn,
    title: "To-do",
  },
  {
    href: "/profile",
    icon: AccountBox,
    title: "Perfil",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // para o conteúdo ficar abaixo do appbar
  toolbar: theme.mixins.toolbar,
  flex: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    height: "64px",
  },
  fontLogo: {
    fontWeight: "700",
    fontSize: "20px",
    color: "#ffffff",
    marginLeft: "1rem",
  },
  divider: {
    backgroundColor: "#eeeeee",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#134087",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image: {
    width: "33%",
  },
}));

const MenuSide = (props) => {
  const { window, mobileOpen, setMobileOpen } = props;
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MenuContent = (
    <Box>
      <div className={classes.toolbar}>
        <Box className={classes.flex}>
          <img src={logo} alt="bigboss" className={classes.image} />
          <Typography className={classes.fontLogo}>BigBoss</Typography>
        </Box>
      </div>
      <Divider className={classes.divider} />
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
      <Divider className={classes.divider} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {MenuContent}
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
          {MenuContent}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default MenuSide;
