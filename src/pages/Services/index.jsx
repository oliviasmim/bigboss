import { useUserContracts } from "../../providers/userContracts";
import PageLayout from "../../components/PageLayout";
const Services = () => {
    const { userContracts } = useUserContracts();

    return (
		<PageLayout>
			<div>
				{userContracts.length > 0 &&
					userContracts.map((item) => (
						<li key={item.id}>{JSON.stringify(item)}</li>
					))}
			</div>
		</PageLayout>
	);
}

export default Services;