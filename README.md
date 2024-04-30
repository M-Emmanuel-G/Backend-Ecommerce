# Backend-Ecommerce / Controle-Estoque

## Feito por

Márcio Emmanuel Gonçalves

## Funcionalidades

  * Cadastro de novos clientes
  * Login de usuários
  * Entrada de estoque
  * Saída de estoque
  * CRUD de produtos
  * CRUD de usuários
  * CRUD de clientes
  * CRUD de fornecedores
  * Histórico de toda operação realizada

## Tecnologias e conceitos

   * NodeJS
   * Postgrees
   * TypeScript
   * Express
   * UUID
   * Autenticação e autorização
   * Router
   * Prisma
   * Supabase
   * MomentJS
  
## Links

   * Link dos endpoints - https://ecommerce-backend-dpon.onrender.com
   * []()

## Endpoints

   ### USERS
   * https://ecommerce-backend-dpon.onrender.com/Users/getAllUsers                                                - GET    - Retorna todos os usuários
     
   * https://ecommerce-backend-dpon.onrender.com/Users/getUser/:userID                                            - GET    - Retorna um usuario específico pelo ID

     userID: params
     
   * https://ecommerce-backend-dpon.onrender.com/Users/create                                                     - POST   - Adiciona novo usuários

     {
       "name":string,
       "address":string,
       "email":string,
       "contact":string,
     }
   
   * https://ecommerce-backend-dpon.onrender.com/Users/update/:userID                                             - PATCH  - Atualiza informações do usuário

     userID: params
     
     {
      "name":string,
      "address":string,
      "email":string,
      "contact":string,
      "available":boolean

    }
   * https://ecommerce-backend-dpon.onrender.com/Users/update/role/userID/:userID/adminID/:adminID                - PATCH  - Atualiza autorização do usuário

     userID, adminID = params

     {
        "available":boolean
     }
    
   * https://ecommerce-backend-dpon.onrender.com/Users/delete/userID/:userID                                     - DELETE - Exclui usuário

     userID = params

## Objetivo do projeto

   Realizado para clientes conseguirem realizar compras online, entregando uma experiência unica e simples aos nossos clientes.

   Outro objetivo, é o gerenciamento dos produtos atraves de um controle de estoque!

## Observações
   
   O projeto pode demorar um pouco para ser executado devido ao uso gratuito da hospedagem.

## Acessando o projeto

   * Clone o repositorio em sua maquina;
   * Com o repositorio aberto na sua IDE, rode o comando "npm install";
   * Execute o comando "npm run dev" para iniciar o projeto localmente;

