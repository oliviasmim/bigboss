import { makeStyles } from "@material-ui/styles";
import { Box, Card, Avatar, Typography } from "@material-ui/core";
import { getLettersAvatarSrc } from "../../services/avatarLetters";
import { CardContent } from "../../components/CardCustomer/styles";

const useStyles = makeStyles((theme) => ({
  profile: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 140,
    [theme.breakpoints.up("sm")]: {
      height: 150,
    },
  },
  avatar: {
    height: 80,
    width: 80,
  },
  card: {
    height: 180,
    width: 280,
    marginBottom: 20,
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      height: 200,
    },
  },
  h3: {
    fontSize: "24px",
  },
}));

const AccountProfile = ({ name, email }) => {
  const classes = useStyles();
  const avatarSrc = getLettersAvatarSrc(name);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.profile}>
          <Avatar src={avatarSrc} className={classes.avatar} />
          <Typography
            className={classes.h3}
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountProfile;
