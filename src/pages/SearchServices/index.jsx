import { useUserServices } from "../../providers/userServices";
import CardService from "../../components/CardService";
import PageLayout from "../../components/PageLayout";

const SearchServices = () => {
    const { userServices } = useUserServices();

    return (
		<PageLayout>
			<div>
				{userServices.map((item) => (
					<CardService key={item.id} {...item} />
				))}
			</div>
		</PageLayout>
	);
}

export default SearchServices;