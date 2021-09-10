import {
        NavLink as RouterLink,
        matchPath,
        useLocation
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        display: 'flex',
        py: 0,
        width: '100%',
    },
    nav: {
        color: '#EEEEEE',
        fontWeight: 'medium',
        justifyContent: 'flex-start',
        letterSpacing: 0,
        py: 1.25,
        textTransform: 'none',
        width: '100%',
        "& svg": {
            marginRight: "16px",
        }
    }
}));

const NavItem = ({ href, icon: Icon, title, ...rest }) => {
    const location = useLocation();
    const classes = useStyles();
    const active = href ? !!matchPath({
      path: href,
      end: false
    }, location.pathname) : false;
  
    return (
      <ListItem disableGutters className={classes.list} {...rest} >
        <Button
          component={RouterLink}
          className={classes.nav}
          sx={{ ...(active && { color: '#ffffff'})}}
          to={href}
        >
          {Icon && (
            <Icon size="20" />
          )}
          <span>
            {title}
          </span>
        </Button>
      </ListItem>
    );
};
  
NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string
};
  
export default NavItem;
  