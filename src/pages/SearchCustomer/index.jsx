import api from "../../services/api"
import { useEffect, useState } from "react"
import PageLayout from "../../components/PageLayout";
import {useHistory} from "react-router-dom";
import { Button } from "@material-ui/core";
import {Add} from "@material-ui/icons"

const SearchCustomer = () => {
    const [clientsList, setClientsList] = useState([]);
    const history = useHistory();
    //moked:
    const userId = 1;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpcnN0QG1haWwuY29tIiwiaWF0IjoxNjMxNTA4OTI0LCJleHAiOjE2MzE1OTUzMjQsInN1YiI6IjEifQ.nbfX7ZzbzaeAsiad79xhjry0xaohz6IQQkuI-kAKzy4"
    
    
    //Puxar dados:
    useEffect(() => {
        api.get(`/clients/user/${userId}`, {
			headers: {
				Authorization:
					`Bearer ${token}`,
			},
		}).then((res) => setClientsList(res.data));
    },[])

    return (
		<PageLayout>
			<Button variant="text" color="secondary" startIcon={<Add/>} onClick={()=> history.push("/customer/register")}>Novo</Button>
            <div>
				{clientsList.map((item) => (
					<li key={item.id} onClick={()=>history.push(`/customer/id/${item.id}`)}>{item.name}</li>
				))}
			</div>
		</PageLayout>
	);
}

export default SearchCustomer;