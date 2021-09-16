import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

import { getLettersAvatarSrc } from "../../services/avatarLetters";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",

    [theme.breakpoints.up(1534)]: {
      display: "block",
      width: 1228,
      height: 450,
      backgroundColor: "white",
      margin: 20,
    },
  },
}));

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerAlign: "left",
    align: "left",
  },

  {
    field: "customer",
    headerName: "Cliente",
    width: 220,
    renderCell: (cellValues) => {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {console.log(cellValues)}
          <img
            src={getLettersAvatarSrc(cellValues.value)}
            alt="asd"
            style={{ borderRadius: "50px", width: "40px" }}
          />
          {cellValues.value}
        </div>
      );
    },
  },
  { field: "cpf", headerName: "CPF/CNPJ", width: 190 },
  {
    field: "service",
    headerName: "Serviço",
    width: 130,
    editable: true,
  },

  {
    field: "StartDate",
    headerName: "Data de Início",
    headerAlign: "left",
    align: "left",
    type: "date",
    width: 170,
    editable: true,
  },
  {
    field: "FinishDate",
    headerName: "Data de Conclusão",
    headerAlign: "left",
    align: "left",
    type: "date",
    width: 210,
    editable: true,
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

const rows = [
  {
    id: 1,
    customer: "Lannister",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.05.2021",
    FinishDate: "25.07.2021",
    status: "Concluído",
  },
  {
    id: 2,
    customer: "Marcos Silva",
    cpf: "032.853.527-22",
    service: "Web-Page",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Pendente",
  },
  {
    id: 3,
    customer: "Carlos Roberto",
    cpf: "032.853.527-22",
    service: "Game",
    StartDate: "25.03.2021",
    FinishDate: "25.04.2021",
    status: "Concluído",
  },
  {
    id: 4,
    customer: "Ricardo Santos Silva",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Concluído",
  },
  {
    id: 5,
    customer: "José ricardo Santos",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Pendente",
  },
  {
    id: 6,
    customer: "Lannister",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Pendente",
  },
  {
    id: 7,
    customer: "Lannister",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Pendente",
  },
  {
    id: 8,
    customer: "Fabiane Carina Santos",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Pendente",
  },
  {
    id: 9,
    customer: "João Roberto Barroso",
    cpf: "032.853.527-22",
    service: "APP",
    StartDate: "25.02.2021",
    FinishDate: "25.04.2021",
    status: "Concluído",
  },
];

const LastProjectsTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default LastProjectsTable;
