import { Form, InputsContainer, ButtonsContainer } from "./styles";
import { Button } from "@material-ui/core";
import FormInput from "./FormInput";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../services/api";
import { useHistory, useParams } from "react-router-dom";
import { Edit } from "@material-ui/icons";
import { mask as maskSelector } from "remask";

const FormRegisterCustomer = ({ isRegister }) => {
	//Variável para segurar dados do cliente
	const [clientInfo, setClientInfo] = useState({});
	console.log(clientInfo);
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpcnN0QG1haWwuY29tIiwiaWF0IjoxNjMxNTA4OTI0LCJleHAiOjE2MzE1OTUzMjQsInN1YiI6IjEifQ.nbfX7ZzbzaeAsiad79xhjry0xaohz6IQQkuI-kAKzy4";
	//Variáveis input formulário:
	const [numCep, setNumCep] = useState("");
	const [nomeRua, setNomeRua] = useState("");
	const [nomeBairro, setNomeBairro] = useState("");
	const [nomeCidade, setNomeCidade] = useState("");
	const [nomeEstado, setNomeEstado] = useState("");
	const [nomeCliente, setNomeCliente] = useState("");
	const [numCpf, setNumCpf] = useState("");
	const [numTel, setNumTel] = useState("");
	const [numCel, setNumCel] = useState("");
	const [numRua, setNumRua] = useState("");
	const [email, setEmail] = useState("");
	const [profInfo, setProfInfo] = useState("");
	const listaEstados = [
		"",
		"AC",
		"AL",
		"AP",
		"AM",
		"BA",
		"CE",
		"DF",
		"ES",
		"GO",
		"MA",
		"MT",
		"MS",
		"MG",
		"PA",
		"PB",
		"PR",
		"PE",
		"PI",
		"RJ",
		"RN",
		"RS",
		"RO",
		"RR",
		"SC",
		"SP",
		"SE",
		"TO",
	];
	const [sinceDate, setSinceDate] = useState(new Date());
	const [lastContactDate, setLastContactDate] = useState(new Date());
	const [observations, setObservations] = useState("");

	//Varáveis gerais para funcionamento:
	const [areDisabled, setAreDisabled] = useState(false);
	const { clientId } = useParams();
	const history = useHistory();
	const [errors, setErrors] = useState({});
    const patterns = ["999.999.999-99", "99.999.999/9999-99"]
    
	useEffect(() => {
		if (!isRegister) {
			axios
				.get(`http://localhost:3001/clients/${clientId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					setClientInfo(res.data);
					setAreDisabled(true);
					setSinceDate(res.data.clientSince);
					setNumCep(res.data.postalCode);
					setNomeRua(res.data.street);
					setNomeBairro(res.data.district);
					setNomeCidade(res.data.city);
					setNomeEstado(res.data.state);
					setNomeCliente(res.data.name);
					setNumCpf(res.data.cpf);
					setNumTel(res.data.tel);
					setNumCel(res.data.cel);
					setNumRua(res.data.number);
					setEmail(res.data.email);
					setProfInfo(res.data.profInfo);
					setLastContactDate(res.data.lastContact);
					setObservations(res.data.observations);
				})
				.catch((err) => console.log(err.message));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Funções de controle:
	const handleCep = (value) => {
		setNumCep(value);
		if (value[8] !== "_" && numCep !== "") {
			axios
				.get(`https://viacep.com.br/ws/${value}/json/ `)
				.then((res) => {
					if (!res.data.erro) {
						setNomeRua(res.data.logradouro);
						setNomeBairro(res.data.bairro);
						setNomeCidade(res.data.localidade);
						setNomeEstado(res.data.uf);
					}
				})
				.catch((err) => console.log("CEP não será usado"));
		}
	};
	const handleOnlyNumbers = (value, func) => {
		if (isNaN(value)) {
			return;
		}
		func(value);
	};
    const handleCpfMask = (value) => {
        setNumCpf(maskSelector(value.replace(/\D/g, ""), patterns))
    }
	const handleEmail = (value, func) => {
		if (!(value.includes("@") && value.includes("."))) {
			func(value);
			setErrors({ ...errors, email: "E-mail inválido" });
			if (value === "") {
				setErrors({ ...errors, email: "" });
			}
			return;
		}

		setErrors({ ...errors, email: "" });
		func(value);
	};
	const handleEditable = () => {
		setAreDisabled(false);
	};
	const handleReset = () => {
		setSinceDate(new Date());
		setNumCep("");
		setNomeRua("");
		setNomeBairro("");
		setNomeCidade("");
		setNomeEstado("");
		setNomeCliente("");
		setNumCpf("");
		setNumTel("");
		setNumCel("");
		setNumRua("");
		setEmail("");
		setProfInfo("");
		setLastContactDate(new Date());
		setObservations("");
		setErrors({});
	};
	const handleDelete = () => {
		api.delete(`/clients/${clientId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(history.push("/customers"));
	};
	const handleUpdate = (e) => {
		e.preventDefault();
		const data = {};
		data.name = nomeCliente;
		data.cpf = numCpf;
		data.email = email;
		data.tel = numTel;
		data.cel = numCel;
		data.postalCode = numCep;
		data.number = numRua;
		data.profInfo = profInfo;
		data.clientSince = sinceDate;
		data.lastContact = lastContactDate;
		data.observations = observations;
		data.street = nomeRua;
		data.city = nomeCidade;
		data.district = nomeBairro;
		data.state = nomeEstado;
		data.contracts = [];
		api.patch(`/clients/${clientId}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(setAreDisabled(true));
	};
	const onSub = (e) => {
		e.preventDefault();
		const data = {};
		data.name = nomeCliente;
		data.cpf = numCpf;
		data.email = email;
		data.tel = numTel;
		data.cel = numCel;
		data.postalCode = numCep;
		data.number = numRua;
		data.profInfo = profInfo;
		data.clientSince = sinceDate;
		data.lastContact = lastContactDate;
		data.observations = observations;
		data.street = nomeRua;
		data.city = nomeCidade;
		data.district = nomeBairro;
		data.state = nomeEstado;
		data.contracts = [];
		api.post(`/clients`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => history.push(`/customer/id/${res.data.id}`));
	};
	return (
		<>
			<Form noValidate onSubmit={isRegister ? onSub : handleUpdate}>
				{isRegister ? null : (
					<Button
						variant="text"
						color="secondary"
						onClick={handleEditable}
						endIcon={<Edit />}
					>
						Editar
					</Button>
				)}
				<InputsContainer>
					<FormInput
						label="Nome ou Razão Social:"
						disabled={areDisabled}
						size="45ch"
						value={nomeCliente}
						changefunction={setNomeCliente}
					/>
					<FormInput
						label="CPF/CNPJ:"
						size="20ch"
						disabled={areDisabled}
						value={numCpf}
						// changefunction={(value) =>
						// 	handleOnlyNumbers(value, setNumCpf)
						// }
                        changefunction={handleCpfMask}
					/>
					<FormInput
						label="Email:"
						size="35ch"
						disabled={areDisabled}
						value={email}
						changefunction={(value) => handleEmail(value, setEmail)}
						errormessage={errors.email ? errors.email : null}
					/>
					<FormInput
						label="Telefone:"
						size="20ch"
						disabled={areDisabled}
						value={numTel}
						mask="(99) 9999-9999"
						changefunction={setNumTel}
					/>
					<FormInput
						label="Celular:"
						size="20ch"
						disabled={areDisabled}
						value={numCel}
						mask="(99) 9999-99999"
						changefunction={setNumCel}
					/>

					<FormInput
						label="CEP:"
						size="20ch"
						disabled={areDisabled}
						mask="99999-999"
						value={numCep}
						changefunction={handleCep}
					/>
					<FormInput
						label="Endereço/Rua:"
						size="35ch"
						disabled={areDisabled}
						value={nomeRua}
						changefunction={setNomeRua}
					/>
					<FormInput
						label="Número:"
						size="7ch"
						disabled={areDisabled}
						value={numRua}
						changefunction={(value) =>
							handleOnlyNumbers(value, setNumRua)
						}
					/>
					<FormInput
						label="Cidade:"
						size="20ch"
						disabled={areDisabled}
						changefunction={setNomeCidade}
						value={nomeCidade}
					/>
					<FormInput
						label="Estado:"
						options={listaEstados}
						size="10ch"
						disabled={areDisabled}
						changefunction={setNomeEstado}
						value={nomeEstado}
					/>
					<FormInput
						label="Bairro:"
						size="20ch"
						disabled={areDisabled}
						changefunction={setNomeBairro}
						value={nomeBairro}
					/>
					<FormInput
						label="Profissão/Ramo de Atividade::"
						disabled={areDisabled}
						value={profInfo}
						changefunction={setProfInfo}
					/>
					<FormInput
						label="Cliente desde:"
						tipedate
						disabled={areDisabled}
						value={sinceDate}
						changefunction={setSinceDate}
					/>
					<FormInput
						label="Data do último contato:"
						tipedate
						disabled={areDisabled}
						value={lastContactDate}
						changefunction={setLastContactDate}
						size="10ch"
					/>

					{/* <FormInput
						label="Total de compras R$:"
						{...register("totalSpent")}
						errorMessage={errors.totalSpent?.message}
					/>
					<FormInput
						label="Valor de compras em aberto R$:"
						size="33ch"
						{...register("owes")}
					/> */}
				</InputsContainer>
				<FormInput
					label="Observações:"
					multiline
					disabled={areDisabled}
					value={observations}
					changefunction={setObservations}
				/>
				<ButtonsContainer>
					<Button
						variant="contained"
						color="secondary"
						disabled={areDisabled}
						onClick={isRegister ? handleReset : handleDelete}
					>
						{isRegister ? "Limpar" : "Deletar"}
					</Button>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={areDisabled}
					>
						Salvar
					</Button>
				</ButtonsContainer>
			</Form>
		</>
	);
};

export default FormRegisterCustomer;
