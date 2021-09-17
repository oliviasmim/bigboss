import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useUserContracts } from "../../providers/userContracts";
import { getLettersAvatarSrc } from "../../services/avatarLetters";
import api from "../../services/api";
import { useAuthenticated } from "../../providers/authentication";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: 20,
    height: 385,
    backgroundColor: "white",

    [theme.breakpoints.up(1534)]: {
      width: 875,
    },
  },
}));

const LastProjectsTable = ({ maxRows = 5, hideFooter, newRows }) => {
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
      width: 210,
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

        return date.toLocaleDateString("pt-BR");
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

        return date.toLocaleDateString("pt-BR");
      },
      renderCell: (params) => {
        return (
          <span
            onClick={() => {
              api
                .delete(`/contracts/${params.id}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(() => {
                  toast.success("Deletado!");
                  updateUserContracts();
                })
                .catch((err) => toast.warning("errooouuu"));
            }}
          >
            {new Date(params.value).toLocaleDateString("pt-BR")}
          </span>
        );
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
  const { updateUserContracts } = useUserContracts();
  const { userContracts } = useUserContracts();
  const { token } = useAuthenticated();
  const classes = useStyles();
  const noRows = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h4>Sem contratos por aqui!</h4>
      </div>
    );
  };
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
          components={{ NoRowsOverlay: noRows }}
        />
      )}
    </div>
  );
};

export default LastProjectsTable;
