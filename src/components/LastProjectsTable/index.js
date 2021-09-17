import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useUserContracts } from "../../providers/userContracts";
import { getLettersAvatarSrc } from "../../services/avatarLetters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 260,
    margin: 20,
    height: 450,
    backgroundColor: "white",

    [theme.breakpoints.up(1534)]: {
      width: 880,
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
    width: 180,
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
    width: 170,
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
    width: 200,
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
    width: 190,
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
};

export default LastProjectsTable;
