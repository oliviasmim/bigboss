import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useUserContracts } from "../../providers/userContracts";
import { getLettersAvatarSrc } from "../../services/avatarLetters";

<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
    margin: 20,
    height: 450,
    backgroundColor: "white",

    [theme.breakpoints.up(1534)]: {
      width: 1228,
    },
  },
}));

const columns = [
  {
    field: "name",
    headerName: "Cliente",
    renderCell: (params) => {
      return (
        <>
          <img
            src={getLettersAvatarSrc(params.row.client.name)}
            alt="avatar"
            style={{ width: "40px", borderRadius: "100%" }}
          />
          <span>&nbsp;{params.row.client.name}</span>
        </>
      );
    },
    width: 220,
  },
  {
    field: "client",
    headerName: "CPF/CNPJ",
    width: 180,
    valueFormatter: (params) => {
      return params.row.client.cpf;
    },
  },
  {
    field: "service",
    headerName: "Serviço",
    width: 150,
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
    width: 190,
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
    width: 200,
    editable: true,
  },
];

const LastProjectsTable = ({ maxRows, hideFooter, newRows }) => {
  const { userContracts } = useUserContracts();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {userContracts.length && (
        <DataGrid
          rows={newRows || userContracts}
          columns={columns}
          pageSize={5}
          autoPageSize
          autoHeight
          hideFooterPagination={hideFooter}
          disableSelectionOnClick
        />
      )}
    </div>
  );
=======

const useStyles = makeStyles((theme) => ({
	root: {
		display: "block",
        flex: "auto",
        textAlign: "center",
		// width: 900,
		// [theme.breakpoints.up(1534)]: {
		//   display: "block",
		//   width: 1228,
		//   height: 450,
		//   backgroundColor: "white",
		//   margin: 20,
		// },
	},
}));

const columns = [
	{
		field: "name",
		headerName: "Cliente",
		renderCell: (params) => {
			return (
				<>
					<img
						src={getLettersAvatarSrc(params.row.client.name)}
						alt="avatar"
						style={{ width: "40px", borderRadius: "100%" }}
					/>
					<span>&nbsp;{params.row.client.name}</span>
				</>
			);
		},
		width: 200,
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

const LastProjectsTable = ({ maxRows, hideFooter, newRows }) => {
	const { userContracts } = useUserContracts();
    
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{userContracts.length && (
				<DataGrid
					rows={newRows || userContracts}
					columns={columns}
					pageSize={maxRows}
					autoPageSize
					autoHeight
					hideFooterPagination={hideFooter}
					disableSelectionOnClick
				/>
			)}
		</div>
	);
>>>>>>> 29deb3bc8184766ca697d7565311d8e166911d49
};

export default LastProjectsTable;
