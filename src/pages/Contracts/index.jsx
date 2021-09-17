import PageLayout from "../../components/PageLayout";
import LastProjectsTable from "../../components/LastProjectsTable";
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
			<div style={{ display: "flex", width: "100%"}}>
				<LastProjectsTable maxRows={6} style={{ width: "100%" }} />
			</div>
			<div style={{height: "30px"}}></div>
		</PageLayout>
	);
};

export default Contracts;
