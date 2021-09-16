import Header from "../Header";
import MenuSide from "../MenuSide";
import Footer from "../Footer";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useAuthenticated } from "../../providers/authentication";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  const { token, setAuthenticated } = useAuthenticated();
  console.log(token);
  const tokenExp = jwt_decode(token).exp;
  const history = useHistory();

  //Isso é só para nos avisar se o JWT expirar, não precisa usar na entrega!
  useEffect(() => {
    if (token) {
      if (Date.now() >= tokenExp * 1000) {
        alert("Sua sessão expirou! Redirecionando para o Login...");
        setAuthenticated(false);
        localStorage.clear();
        history.push("/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MenuSide mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout;
