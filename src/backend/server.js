const cors = require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const jwt_decode = require("jwt-decode");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/600/users$1",
  "/clients*": "/600/clients$1",
  "/services*": "/600/services$1",
  "/contracts*": "/600/contracts$1",
});
app.use(jsonServer.bodyParser);

// Código que fará controle das das Requests:
app.use((req, res, next) => {
  //Bloqueio de PUT:
  if (req.method === "PUT") {
    return res.status(403).jsonp({ error: "PUT requests are not allowed!" });
  }

  //Adicionar userId em clients e services:
  if (
    (req.path === "/services" || req.path === "/clients") &&
    req.method === "POST"
  ) {
    const userId = jwt_decode(req.headers.authorization?.split(" ")[1]).sub;
    req.body = { ...req.body, userId: Number(userId) };
  }

  //Adicionar contracts ao Cliente caso não tenha:
  if (req.path === "/contracts" && req.method === "POST") {
    const userId = jwt_decode(req.headers.authorization?.split(" ")[1]).sub;
    req.body = { ...req.body, userId: Number(userId) };

    if (req.body.serviceId === undefined) {
      return res
        .status(400)
        .jsonp({ error: "Obrigatório ter o id do serviço" });
    }
    if (req.body.clientId === undefined) {
      return res
        .status(400)
        .jsonp({ error: "Obrigatório ter o id do cliente" });
    }
  }

  //erros:
  if (
    (req.path === "/services" ||
      req.path === "/clients" ||
      req.path === "/contracts" ||
      req.path === "/services/" ||
      req.path === "/clients/" ||
      req.path === "/contracts/") &&
    req.method === "GET"
  ) {
    return res.status(403).jsonp({ error: "Não é possível consultas gerais" });
  }
  next();
});

//Rotas específicas
app.use(
  jsonServer.rewriter({
    "/services/user/:userId": "/services?userId=:userId",
    "/clients/user/:userId": "/clients?userId=:userId",
    "/contracts/user/:userId": "/contracts?userId=:userId",
    "/contracts/client/:clientId": "/contracts?clientId=:clientId",
  })
);
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
