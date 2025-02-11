# 🚀 Sistema de Arrecadação para Manutenção das Bombas de Irrigação - Projeto Zé Preá  

Este projeto foi desenvolvido para facilitar a arrecadação de dinheiro destinado à manutenção das bombas que puxam a água para os lotes na comunidade agrícola do **Projeto de Irrigação Brígida**, recentemente renomeado para **Projeto Zé Preá**.  

Atualmente, essa arrecadação é feita manualmente, utilizando diversas planilhas para organização, o que torna o processo trabalhoso e pouco transparente. Este sistema foi criado para tornar a coleta dos valores mais prática e garantir mais transparência para todos os contribuintes, que incluem **donos e adquirentes de lotes** do projeto de irrigação.  

## 🛠 Tecnologias Utilizadas  

- ⚡ **[Next.js](https://nextjs.org/)** - Framework React para a construção da interface web.  
- 🐳 **[Docker](https://www.docker.com/)** & **[Docker Compose](https://docs.docker.com/compose/)** - Facilita o deploy e gerenciamento da aplicação.  
- 🎯 **[BiomeJS](https://biomejs.dev/)** - Linter e formatador para manter o código padronizado e otimizado.  
- 🗄 **[Drizzle ORM](https://orm.drizzle.team/)** - ORM para comunicação eficiente com o banco de dados.  
- 🗃 **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados utilizado para armazenar todas as informações do sistema.  
- 🧠 **[Google Gemini API](https://ai.google.dev/)** - Utilizado para análise automática dos comprovantes de pagamento.  

---

## 🚀 Como Executar o Projeto  

### 📌 Banco de Dados PostgreSQL  

Este projeto **requer um banco de dados PostgreSQL** para funcionar. Você pode optar por:  

1. **Rodar um container PostgreSQL via Docker**  
2. **Utilizar um banco PostgreSQL online (ex: Supabase, Railway, Neon, ElephantSQL)**  
3. **Instalar o PostgreSQL localmente na sua máquina**  

#### 1️⃣ **Rodando o PostgreSQL via Docker**  

Se você quiser rodar o PostgreSQL localmente com Docker, execute este comando:  

```sh
docker run --name postgres_container -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=projeto_ze_prea -p 5432:5432 -d postgres
```

Isso criará um banco de dados chamado `projeto_ze_prea` acessível na porta `5432`, com usuário `admin` e senha `admin`.  

#### 2️⃣ **Banco de Dados Online**

Caso prefira um banco PostgreSQL hospedado, utilize serviços como:  
- 🌐 [Supabase](https://supabase.com/)  
- 🌐 [Railway](https://railway.app/)  
- 🌐 [Neon](https://neon.tech/)  
- 🌐 [ElephantSQL](https://www.elephantsql.com/)  

Basta copiar a **string de conexão** e adicioná-la no arquivo `.env` na variável `DATABASE_URL`.  

#### 3️⃣ **Instalação Local do PostgreSQL**  

Caso queira rodar o PostgreSQL diretamente na sua máquina, siga as instruções oficiais:  
- 🔗 [Download PostgreSQL](https://www.postgresql.org/download/)  

Após instalar, crie o banco de dados manualmente:  

```sh
psql -U postgres -c "CREATE DATABASE projeto_ze_prea;"
```  

---

## 🔥 Executando a Aplicação  

### 📌 Opção 1: Usando **Docker** (Recomendado)  

1. **Clone o repositório:**  
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```  

2. **Crie o arquivo de ambiente (`.env`)** baseado no `.env.example` e configure as variáveis, incluindo a conexão com o PostgreSQL.  

3. **Suba os containers com Docker Compose:**  
   ```sh
   docker-compose up -d
   ```  

4. **Acesse a aplicação no navegador:**  
   ```
   http://localhost:3000
   ```

---

### 📌 Opção 2: Rodando **Sem Docker**  

1. **Clone o repositório:**  
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```  

2. **Instale as dependências:**  
   ```sh
   npm install
   ```  

3. **Configure o ambiente**  
   - Copie o arquivo `.env.example` para `.env`  
   - Configure a variável `DATABASE_URL` com a conexão ao PostgreSQL  

4. **Execute as migrações do banco de dados:**  
   ```sh
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```  

5. **Inicie o servidor de desenvolvimento:**  
   ```sh
   npm run dev
   ```  

6. **Acesse a aplicação no navegador:**  
   ```
   http://localhost:3000
   ```

---

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
