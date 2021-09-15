import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useUserContracts } from "../../providers/userContracts";
import {getLettersAvatarSrc} from "../../services/avatarLetters"

const useStyles = makeStyles((theme) => ({
  root: {
    //height: 300,
    width: "100%",
    // marginLeft: "10%",
    //marginTop: 0,
    display: "flex",

    backgroundColor: "white",

    // [theme.breakpoints.up(768)]: {
    //   marginTop: 35,
    //   marginLeft: "40%",
    // },

    // [theme.breakpoints.up(1024)]: {
    //   marginLeft: "15%",
    // },
  },
}));

const columns = [
	// {
	// 	field: "name",
	// 	headerName: "ava",
	// 	width: 220,
	// 	renderCell: (params) => {
	// 		return (
	// 			<>
	// 				<img
	// 					src={getOneLetterAvatarSrc(params.row.client.name)}
	// 					alt="avatar"
	// 				/>
	// 				<span>&nbsp;{params.row.client.name}</span>
	// 			</>
	// 		);
	// 	},
	// },
	{
		field: "name",
		headerName: "Cliente",
		renderCell: (params) => {
			return (
				<>
					<img
						src={getLettersAvatarSrc(params.row.client.name)}
						alt="avatar"
                        style={{width: "40px", borderRadius: "100%"}}
					/>
					<span>&nbsp;{params.row.client.name}</span>
				</>
			);
		},
		width: 200,
		// valueFormatter: (params) => {
		// 	return params.row.client.name;
		// },
	},
	{
		field: "client",
		headerName: "CPF/CNPJ",
		width: 160,
		valueFormatter: (params) => {
			return params.row.client.cpf;
		},
	},
	{
		field: "service",
		headerName: "Serviço",
		width: 130,
		editable: true,
		valueFormatter: (params) => {
			return params.row.service.title;
		},
	},

	{
		field: "startDate",
		headerName: "Data de Início",
		headerAlign: "left",
		align: "left",
		type: "date",
		width: 168,
		editable: true,
		valueFormatter: (params) => {
			const date = new Date(params.value);
			const options = {
				day: "numeric",
				month: "numeric",
				year: "numeric",
			};
			return date.toLocaleDateString(options);
		},
	},
	{
		field: "finishDate",
		headerName: "Data de Conclusão",
		headerAlign: "left",
		align: "left",
		type: "date",
		width: 205,
		editable: true,
		valueFormatter: (params) => {
			const date = new Date(params.value);
			const options = {
				day: "numeric",
				month: "numeric",
				year: "numeric",
			};
			return date.toLocaleDateString(options);
		},
	},
	{
		field: "status",
		headerName: "Status",
		headerAlign: "left",
		align: "left",
		width: 150,
		editable: true,
	},
];

// const rows = [
//   {
//     id: 1,
//     customer: "Lannister",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.05.2021",
//     FinishDate: "25.07.2021",
//     status: "Concluído",
//   },
//   {
//     id: 2,
//     customer: "Marcos Silva",
//     cpf: "032.853.527-22",
//     service: "Web-Page",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Pendente",
//   },
//   {
//     id: 3,
//     customer: "Carlos Roberto",
//     cpf: "032.853.527-22",
//     service: "Game",
//     StartDate: "25.03.2021",
//     FinishDate: "25.04.2021",
//     status: "Concluído",
//   },
//   {
//     id: 4,
//     customer: "Ricardo Santos Silva",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Concluído",
//   },
//   {
//     id: 5,
//     customer: "José ricardo Santos",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Pendente",
//   },
//   {
//     id: 6,
//     customer: "Lannister",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Pendente",
//   },
//   {
//     id: 7,
//     customer: "Lannister",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Pendente",
//   },
//   {
//     id: 8,
//     customer: "Fabiane Carina Santos",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Pendente",
//   },
//   {
//     id: 9,
//     customer: "João Roberto Barroso",
//     cpf: "032.853.527-22",
//     service: "APP",
//     StartDate: "25.02.2021",
//     FinishDate: "25.04.2021",
//     status: "Concluído",
//   },
// ];


const LastProjectsTable = ({maxRows, hideFooter}) => {
    const { userContracts } = useUserContracts()
    
    const classes = useStyles();
  return (
		<div className={classes.root}>
			{userContracts.length && (
				<DataGrid
					rows={userContracts}
					columns={columns}
					pageSize={maxRows}
					autoPageSize
					autoHeight
					hideFooterPagination = {hideFooter}
					// checkboxSelection
					disableSelectionOnClick
				/>
			)}
		</div>
  );
};

export default LastProjectsTable;
