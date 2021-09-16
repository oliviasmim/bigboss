import PageLayout from "../../components/PageLayout";
import LastProjectsTable from "../../components/LastProjectsTable"

const Contracts = () => {
    

    return (
		<PageLayout>
			<div>
				<LastProjectsTable maxRows={10}/>
			</div>
		</PageLayout>
	);
}

export default Contracts;