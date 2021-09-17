import { useUserClients } from "../../providers/userClients";
import { useUserContracts } from "../../providers/userContracts";
import { useUserServices } from "../../providers/userServices";
import excel from "exceljs";
import fileDownload from "js-file-download";
import flat from "flat";
import PageLayout from "../../components/PageLayout";
import { Button } from "@material-ui/core";

const Reports = () => {
	const { Workbook } = excel;
	const { userClients } = useUserClients();
	const { userServices } = useUserServices();
	const { userContracts } = useUserContracts();

	const handleClientsReport = async () => {
		let workbook = new Workbook();
		let worksheet = workbook.addWorksheet("dados");
        worksheet.columns = [
			{ header: "Nome", key: "name", width: 30,},
			{ header: "CPF", key: "cpf", width: 20 },
			{ header: "E-mail", key: "email", width: 20 },
			{ header: "Telefone", key: "tel", width: 20 },
			{ header: "Celular", key: "cel", width: 20 },
			{ header: "Cep", key: "postalCode", width: 20 },
			{ header: "Logradouro", key: "street", width: 20 },
			{ header: "Número", key: "number", width: 10 },
			{ header: "Cidade", key: "city", width: 20 },
			{ header: "Estado", key: "state", width: 10 },
			{ header: "Bairro", key: "district", width: 20 },
			{ header: "Setor", key: "profInfo", width: 20 },
			{ header: "Cadastrado", key: "clientSince", width: 25 },
			{ header: "Último Contato", key: "lastContact", width: 25 },
			{ header: "Observações", key: "onservations", width: 30 },
		];

		userClients.forEach((item) => worksheet.addRow(item));
		const buffer = await workbook.xlsx.writeBuffer();
		const blob = new Blob([buffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});
		fileDownload(blob, "file.xlsx");
	};
	const handleServicesReport = async () => {
        let workbook = new Workbook();
		let worksheet = workbook.addWorksheet("dados");
		worksheet.columns = [
			{ header: "Título", key: "title", width: 30,},
			{ header: "Descrição", key: "description", width: 30 },
			{ header: "Linguagem", key: "language", width: 20 },
			{ header: "Orçamento", key: "budget", width: 20 },
			{ header: "Fechamento", key: "finalValue", width: 20 },
		];

		userServices.forEach((item) => worksheet.addRow(item));
		const buffer = await workbook.xlsx.writeBuffer();
		const blob = new Blob([buffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});
		fileDownload(blob, "file.xlsx");
	};
	const handleContractsReport = async () => {
        let workbook = new Workbook();
		let worksheet = workbook.addWorksheet("dados");
		worksheet.columns = [
			{ header: "Serviço", key: "service.title", width: 30,},
			{ header: "Orçamento", key: "service.budget", width: 20 },
			{ header: "Linguagem", key: "service.language", width: 20 },
			{ header: "Inicio", key: "startDate", width: 30 },
			{ header: "Previsão", key: "finishDate", width: 30 },
			{ header: "Cliente", key: "client.name", width: 20 },
			{ header: "Status", key: "status", width: 20 },
		];

		userContracts.forEach((item) => worksheet.addRow(flat(item)));
		const buffer = await workbook.xlsx.writeBuffer();
		const blob = new Blob([buffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});
		fileDownload(blob, "file.xlsx");
	};
	return (
		<PageLayout>
			<h3>Escolha o tipo de relatório abaixo:</h3>
			<div style={{display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "20px"}}>
				<Button
					variant="contained"
					color="primary"
					onClick={handleClientsReport}
				>
					Clientes
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleServicesReport}
				>
					Serviços
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleContractsReport}
				>
					Contratos
				</Button>
			</div>
		</PageLayout>
	);
};

export default Reports;
