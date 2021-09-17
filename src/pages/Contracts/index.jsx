import PageLayout from "../../components/PageLayout";
import LastProjectsTable from "../../components/LastProjectsTable"
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	PageTitle: {
		display: "flex",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 30,
	},
}));
const Contracts = () => {
    const classes = useStyles();

    return (
		<PageLayout>
			<Typography className={classes.PageTitle}>Contratos</Typography>
            <div style={{ display: "flex"}}>
				<LastProjectsTable maxRows={10} style={{width: "100%"}}/>
			</div>
		</PageLayout>
	);
}

export default Contracts;