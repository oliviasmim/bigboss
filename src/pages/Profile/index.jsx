import PageLayout from "../../components/PageLayout";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import AccountProfile from "../../components/Account/AccountProfile";
import AccountProfileDetails from "../../components/Account/AccountProfileDetails";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up('sm')]: {
            flexDirection: "row",
            alignItems: "normal",
        }
    },
}));

//mock
const user = {
    email: 'johndoe@mail.com',
    name: 'John Doe',
  };

const Profile = () => {
    const classes = useStyles();

    return (
        <PageLayout>
            <Box className={classes.container}>
                <AccountProfile name={user.name} email={user.email} />
                <AccountProfileDetails user={user}/>
            </Box>
        </PageLayout>
    )
}

export default Profile;