📚 Sobre a Aplicação

Esta aplicação tem como objetivo principal gerenciar e consultar registros de filmes em um banco de dados, utilizando a linguagem JavaScript com Node.js e a biblioteca Prisma ORM para manipulação dos dados.

Ela foi desenvolvida como parte de um trabalho acadêmico 🎓 com foco em:

🎯 Criação de consultas dinâmicas com filtros opcionais (como nome e sinopse); 🔎 Busca de registros por identificador único (ID); 🛡️ Validação de entradas (evitando campos vazios ou inválidos); 📬 Estruturação de respostas padronizadas com mensagens de erro e sucesso; 📁 Práticas de organização e separação de responsabilidades em camadas (Controller, DAO, etc).

O projeto simula um cenário real de uma API de filmes 🎬, permitindo filtrar filmes com base em critérios específicos ou consultar detalhes de um filme por seu ID. As respostas seguem padrões HTTP 🌐 e retornam dados no formato JSON 📦.


====================================================================================================================

🚀 Como Executar o Projeto

1. Clone este repositório

2. Instale as dependências:
    |npm install express 
    |npm install cors
    |npm install prisma
    |npm install @prisma/client

3. Configure o banco de dados MySQL

4. Ajuste o arquivo .env com suas credenciais do banco

5. Execute o Prisma:
    |npx prisma generate

6. Rode o servidor:
    |node app.js