import PageLayout from "../../components/PageLayout";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import AccountProfile from "../../components/Account/AccountProfile";
import AccountProfileDetails from "../../components/Account/AccountProfileDetails";
import { useUserInfos } from "../../providers/userInfos";

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

const Profile = () => {
    const classes = useStyles();
    const { userInfos } = useUserInfos();

    return (
        <PageLayout>
            <Box className={classes.container}>
                <AccountProfile name={userInfos.firstName + " " + userInfos.lastName} email={userInfos.email} />
                <AccountProfileDetails user={userInfos}/>
            </Box>
        </PageLayout>
    )
}

export default Profile;