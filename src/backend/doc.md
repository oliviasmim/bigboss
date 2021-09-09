# Rotas e exemplos de resposta

## Usuário:

1. Criação de usuário:
    * POST "/register"
        * Estrutura base: {
            "username": string,
            "email": string,
            "password" string (min 4 characters)
        }

        * Response: {
            "accessToken": string,
            "user" : {
                "email": string,
                "username": string,
                "id": number
            }
        }
    
2. Login:
    * POST "/login"
        * Estrutura base: {
            "email": string,
            "password": string
        }

        * Response: {
            "accessToken": string,
            "user": {
                "email": string,
                "username": string,
                "id": number
            }
        }

3. Update:
    * PATCH "/users/:id"
        * 3 propriedades podem ser alteradas (não precisam estar todas presentes): {
            "email" : string,
            "username" : string,
            "password": string
        }

4. Deletar usuário:
    * DELETE "/users/:id"

5. Buscar dados do usuário:
    * GET "users/:id"

## Clientes:
1. Criar novo cliente:
    * POST "/clients"
        * Estrutura básica: {
            "name": "First Client",
            "cpf": "1234567890",
            "email": "client@mail.com",
            "tel": "4137456321",
            "cel": "41987654321",
            "postalCode": "81526741",
            "street": "Rua Primeira",
            "number": "1",
            "city": "",
            "district": "Primeirão",
            "profInfo": "Coisas primeiras",
            "clientSince": "01/01/0001",
            "lastContact": "01/01/10001",
            "totalSpent": "100000.00",
            "owes": "0.01",
            "observations": "That's it",
            
        }

2. Editar cliente:
    * PATCH "/clients/:clientId"
        * Qualquer propriedade pode ser alterada, individual ou em conjunto

3. Deletar cliente:
    * DELETE "/clients/:clientId"

4. Buscar cliente específico:
    * GET "/clients/:clientId"

5. Buscar todos clientes do usuário:
    * GET "/clients/user/:userId"

## Serviços:

1. Criar novo serviço:
    * POST "/services"
        *Estrututa básica: {
            "title": "Primeiro",
            "description": "The first service",
            "language": "Plankalkül",
            "budget": "100000.01",
            "finalValue": ""
        }

2. Alterar um serviço:
    * PATCH "/services/:serviceId"
        * Qualquer propriedade pode ser alterada, individual ou em conjunto

3. Deletar um serviço:
    * DELETE "/services/:serviceId"

4. Buscar um serviço espacífico:
    * GET "/services/:serviceId"

5. Buscar todos serviços de um usuário:
    * GET "/services/user/:userId"

## Contratos:

1. Criar novo contrato:
    *POST "/contracts"
        *Estrutura básica: {
            "status": "Concluído",
            "serviceId": number,
            "clientId": number,
        }

2. Alterar um contrato:
    *PATCH "/contracts/:contractId"
        * Qualquer propriedade pode ser alterada, individual ou em conjunto

3. Deletar um contrato?
    * DELETE "/contracts/:contractId"

4. Buscar todos contratos do usuário:
    * GET "contracts/user/:userId"

5. Buscar contrados de um cliente:
    * GET "contracts/client/:clientId