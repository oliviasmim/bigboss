import {
	TitleForm,
	Select,
	Label,
	Form,
	ButtonsContainer,
	InputContainer,
} from "./styles";
import { Button, TextField } from "@material-ui/core";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useUserServices } from "../../providers/userServices";
import { useState } from "react";
import { useParams } from "react-router";
import { useUserClients } from "../../providers/userClients";
import api from "../../services/api";
import { useAuthenticated } from "../../providers/authentication";
import { toast } from "react-toastify";
import { useUserContracts } from "../../providers/userContracts";

const FormNewContract = ({ toClose }) => {
	const { userServices } = useUserServices();
	const { userClients } = useUserClients();
	const { updateUserContracts } = useUserContracts();
	const { token } = useAuthenticated();
	const { useModal, setModal } = toClose;
	const [service, setService] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [finishDate, setFinishDate] = useState(new Date());
	const [status, setStatus] = useState("");
	const { clientId } = useParams();
	const client = userClients.find(
		(item) => Number(item.id) === Number(clientId)
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {};
		data.service = service;
		data.status = status;
		data.startDate = startDate;
		data.finishDate = finishDate;
		data.client = client;
		api.post("/contracts", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => {
			toast.success("Adicionado com sucesso!");
			updateUserContracts();
			setModal(!useModal);
		});
	};
	return (
		<Form onSubmit={handleSubmit}>
			<TitleForm>Adicionar Contrato</TitleForm>
			<InputContainer>
				<Label>Serviço:</Label>
				<Select>
					<option> </option>
					{userServices.map((item) => (
						<option onClick={() => setService(item)}>
							{item.title}
						</option>
					))}
				</Select>
			</InputContainer>
			<InputContainer>
				<Label>Data início:</Label>
				<MuiPickersUtilsProvider
					utils={DateFnsUtils}
					// {...props}
					helperText={null}
				>
					<KeyboardDatePicker
						format="dd/MM/yyyy"
						// {...props}
						label={null}
						InputProps={{
							disableUnderline: true,
						}}
						helperText={null}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
						onChange={(date) => setStartDate(date)}
						value={startDate}
					/>{" "}
				</MuiPickersUtilsProvider>
			</InputContainer>
			<InputContainer>
				<Label>Previsão conclusão:</Label>
				<MuiPickersUtilsProvider
					utils={DateFnsUtils}
					// {...props}
					helperText={null}
				>
					<KeyboardDatePicker
						format="dd/MM/yyyy"
						// {...props}
						label={null}
						InputProps={{
							disableUnderline: true,
						}}
						helperText={null}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
						onChange={(date) => setFinishDate(date)}
						value={finishDate}
					/>{" "}
				</MuiPickersUtilsProvider>
			</InputContainer>
			<InputContainer>
				<Label>Status:</Label>
				<Select onChange={(e) => setStatus(e.target.value)}>
					<option> </option>
					<option>Em andamento</option>
					<option>Atrasado</option>
					<option>Concluído</option>
				</Select>
			</InputContainer>
			<ButtonsContainer>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => setModal(!useModal)}
				>
					Cancelar
				</Button>
				<Button variant="contained" color="primary" type="submit">
					Adicionar
				</Button>
			</ButtonsContainer>
		</Form>
	);
};

export default FormNewContract;
