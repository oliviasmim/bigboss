import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useModal } from "../../providers/Modal";
import { useUserServices } from "../../providers/userServices";
import { useAuthenticated } from "../../providers/authentication";
import { ToastContainer, toast } from "react-toastify";
import {
	ContainerContent,
	TitleForm,
	ContentColumnLarge,
	ContentColumnLargeFlex,
	FlexOrcamentoVF,
	ButtonsGroup,
	ButtonBox,
} from "./styles";
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			//margin: theme.spacing(1),
			//width: "40ch",
		},
	},
	text: {
		"& .MuiTextField-root": {
			//margin: theme.spacing(1),
			//width: "19ch",
		},
	},
}));

const FormEditService = () => {
	const { handleCloseModalEdit } = useModal();
	const { updateUserServices, currentService } = useUserServices();
	const { token } = useAuthenticated();

	const classes = useStyles();

	const formSchema = yup.object().shape({
		newtitulo: yup
			.string()
			.required("Título Obrigatório")
			.matches(
				/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
				"Somente letras"
			),
		neworcamento: yup.string().required("Orçamento obrigatório"),
		newvalorfinal: yup.string().required("Valor Final Obrigatório"),
		newdescricao: yup.string(),
		newlinguagem: yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const notify = (isSuccess, text) =>
		isSuccess
			? toast.success(text, {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
			  })
			: toast.error(text, {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
			  });

	const handleDataEditService = (data) => {
		const dataApi = {
			title: data.newtitulo,
			description: data.newdescricao,
			language: data.newlinguagem,
			budget: data.neworcamento,
			finalValue: data.newvalorfinal,
		};
		return dataApi;
	};

	const onSubmit = (data) => {
		const apiBody = handleDataEditService(data);
		api.patch(`/services/${currentService.id}`, apiBody, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => {
				updateUserServices();
				handleCloseModalEdit();
				notify(true, "Concluído a Alteração");
			})
			.catch((err) => notify(false, "Erro ao criar o Serviço"));
	};

	return (
		<div className="CardForm">
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
				<ContainerContent>
					<TitleForm>Editar Serviço:</TitleForm>
					<ContentColumnLarge>
						{/* <TitleService>Título: </TitleService> */}
						<TextField
							label="Titulo"
							type="input"
							defaultValue={currentService.title}
							fullWidth
							error={!!errors.newtitulo}
							helperText={errors.newtitulo?.message}
							{...register("newtitulo")}
						/>
					</ContentColumnLarge>
					<FlexOrcamentoVF className={classes.text}>
						<ContentColumnLargeFlex>
							{/* <TitleService>Orçamento: </TitleService> */}
							<TextField
								label="Orçamento"
								type="input"
								defaultValue={currentService.budget}
								fullWidth
								error={!!errors.neworcamento}
								helperText={errors.neworcamento?.message}
								{...register("neworcamento")}
							/>
						</ContentColumnLargeFlex>
						<ContentColumnLargeFlex>
							{/* <TitleService>Valor Final: </TitleService> */}
							<TextField
								label="Valor Final"
								type="input"
								defaultValue={currentService.finalValue}
								fullWidth
								error={!!errors.newvalorfinal}
								helperText={errors.newvalorfinal?.message}
								{...register("newvalorfinal")}
							/>
						</ContentColumnLargeFlex>
					</FlexOrcamentoVF>

					<ContentColumnLarge>
						{/* <TitleService>Descrição: </TitleService> */}
						<TextField
							label="Descrição"
							type="input"
							fullWidth
							multiline
							rows={3}
							defaultValue={currentService.description}
							error={!!errors.newdescricao}
							helperText={errors.newdescricao?.message}
							{...register("newdescricao")}
						/>
					</ContentColumnLarge>
					<ContentColumnLarge>
						{/* <TitleService>Linguagem Utilizada: </TitleService> */}
						<TextField
							label="Linguagem Utilizada"
							type="input"
							fullWidth
							defaultValue={currentService.language}
							error={!!errors.newlinguagem}
							helperText={errors.newlinguagem?.message}
							{...register("newlinguagem")}
						/>
					</ContentColumnLarge>
				</ContainerContent>

				<ButtonsGroup>
					<ButtonBox>
						<Button
							onClick={handleCloseModalEdit}
							variant="contained"
							size="small"
							color="secondary"
						>
							Cancelar
						</Button>
					</ButtonBox>

					<ButtonBox>
						<Button
							type="submit"
							variant="contained"
							size="small"
							color="primary"
						>
							Salvar Edição
						</Button>
					</ButtonBox>
				</ButtonsGroup>
			</form>
		</div>
	);
};

export default FormEditService;
