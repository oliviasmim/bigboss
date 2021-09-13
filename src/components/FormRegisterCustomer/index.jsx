import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, InputsContainer, ButtonsContainer } from "./styles";
import { Button } from "@material-ui/core";
import FormInput from "./FormInput";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../services/api"
import { useParams } from "react-router";

const FormRegisterCustomer = ({isRegister}) => {
    const [numCep, setNumCep] = useState("");
    const [nomeRua, setNomeRua] = useState("");
    const [nomeBairro, setNomeBairro] = useState("");
    const [nomeCidade, setNomeCidade] = useState("");
    const [nomeEstado, setNomeEstado] = useState("");
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
    const [areDisabled, setAreDisabled] = useState(true);
    const clientId = useParams("clientId") || null;
    useEffect(() => {
        if (numCep[8] !== "_" && numCep !== ""){
            axios.get(`https://viacep.com.br/ws/${numCep}/json/ `).then(res=> {
                if (!res.data.erro){
                    setNomeRua(res.data.logradouro);
                    setNomeBairro(res.data.bairro);
                    setNomeCidade(res.data.localidade);
                    setNomeEstado(res.data.uf);
                }
            });
        }
        
    },[numCep])
    useEffect(() => {
        if (isRegister){
            setAreDisabled(false)
        } else {
            axios.get(`/clients/${clientId}`)
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const handleEdit = () => {
        setAreDisabled(false)
    }
    const handleReset = () => {
        setNomeRua("");
		setNomeBairro("");
		setNomeCidade("");
		setNomeEstado("");
		setNumCep("");
    }
    const handleDelete = () => {
        api.delete(`/clients/${clientId}`)
    }
	const formSchema = yup.object().shape({
		name: yup.string().required("Campo obrigatório!"),
		cpf: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		email: yup.string().email("E-mail inválido!"),
		tel: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		cel: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		postalCode: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		street: yup.string(),
		number: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		city: yup.string(),
		district: yup.string(),
		profInfo: yup.string(),
		clientSince: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		lastContact: yup
			.string()
			.matches(/\d/, { message: "Somente números!", excludeEmptyString: true }),
		observations: yup.string(),
		// totalSpent: ,
		// owes: ,
	});

    
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSub = (data) => {
		data.street = nomeRua;
        data.city = nomeCidade;
        data.district = nomeBairro;
        data.state = nomeEstado;
        console.log(data);
	};
	return (
		<>
			<Form noValidate onSubmit={handleSubmit(onSub)}>
				{isRegister? null : <Button variant="outlined" color="primary" onClick={handleEdit}>
					Editar
				</Button>}
				<InputsContainer>
					<FormInput
						label="Nome ou Razão Social:"
						disabled={areDisabled}
						size="45ch"
						{...register("name")}
						errorMessage={errors.name?.message}
					/>
					<FormInput
						label="CPF/CNPJ:"
						size="20ch"
						disabled={areDisabled}
						{...register("cpf")}
						errorMessage={errors.cpf?.message}
					/>
					<FormInput
						label="Email:"
						size="35ch"
						disabled={areDisabled}
						{...register("email")}
						errorMessage={errors.email?.message}
					/>
					<FormInput
						label="Telefone:"
						size="20ch"
						disabled={areDisabled}
						mask="(99) 9999-9999"
						{...register("tel")}
						errorMessage={errors.tel?.message}
					/>
					<FormInput
						label="Celular:"
						size="20ch"
						disabled={areDisabled}
						mask="(99) 9999-99999"
						{...register("cel")}
						errorMessage={errors.cel?.message}
					/>

					<FormInput
						label="CEP:"
						size="20ch"
						disabled={areDisabled}
						mask="99999-999"
						value={numCep}
						funcCep={setNumCep}
						{...register("postalCode")}
						errorMessage={errors.postalCode?.message}
					/>
					<FormInput
						label="Endereço/Rua:"
						size="35ch"
						disabled={areDisabled}
						value={nomeRua}
						funcRua={setNomeRua}
						{...register("street")}
						errorMessage={errors.street?.message}
					/>
					<FormInput
						label="Número:"
						size="7ch"
						disabled={areDisabled}
						{...register("number")}
						errorMessage={errors.number?.message}
					/>
					<FormInput
						label="Cidade:"
						size="20ch"
						disabled={areDisabled}
						funcCidade={setNomeCidade}
						value={nomeCidade}
						{...register("city")}
						errorMessage={errors.city?.message}
					/>
					<FormInput
						label="Estado:"
						options={listaEstados}
						size="10ch"
						disabled={areDisabled}
						funcEstado={setNomeEstado}
						value={nomeEstado}
						{...register("state")}
						errorMessage={errors.state?.message}
					/>
					<FormInput
						label="Bairro:"
						size="20ch"
						disabled={areDisabled}
						funcBairro={setNomeBairro}
						value={nomeBairro}
						{...register("district")}
						errorMessage={errors.district?.message}
					/>
					<FormInput
						label="Profissão/Ramo de Atividade::"
						{...register("profInfo")}
						disabled={areDisabled}
						errorMessage={errors.profInfo?.message}
					/>
					<FormInput
						label="Cliente desde:"
						type="date"
						disabled={areDisabled}
						{...register("clientSince")}
						errorMessage={errors.clientSince?.message}
					/>
					<FormInput
						label="Data do último contato:"
						type="date"
						disabled={areDisabled}
						pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
						size="10ch"
						{...register("lastContact")}
						errorMessage={errors.lastContact?.message}
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
					{...register("observations")}
				/>
				<ButtonsContainer>
					<Button
						variant="contained"
						color="secondary"
						type="reset"
						disabled={areDisabled}
						onClick={isRegister? handleReset : handleDelete}
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
