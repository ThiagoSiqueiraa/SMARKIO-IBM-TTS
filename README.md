<h1 align="center">Smarkio IBM TTS</h1>
<p align="center">Projeto desenvolvido para o teste técnico proposto pela Smarkio</p>

<p align="center">
 <a href="#objetivo">Reproduzir ambiente desenvolvido</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#licenc-a">Licença</a> • 
 <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	🚧  Smarkio - IBM TTS Finalizado..  🚧
</h4>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/get-started), [Docker Compose](https://docs.docker.com/compose/install/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🧨 LEIA IMPORTANTE
```bash
# Siga os seguintes passos para evitar futuros erros

# Clone este repositório
$ git clone https://github.com/ThiagoSiqueiraa/SMARKIO-IBM-TTS.git

# Acesse a pasta do backend

# Abra o arquivo entrypoint.sh e também o wait-for-it.sh (preferencialmente com VSCODE), siga os passos da imagem e siga para a proxima seção


```
![alt text](https://i.stack.imgur.com/sb1pU.png)

### 🎲 Rodando o Backend (servidor)

```bash


# Acesse a pasta do projeto no terminal/cmd
$ cd SMARKIO-IBM-TTS

# Vá para a pasta backend
$ cd backend

# Execute os seguintes comandos na ordem
$ docker build -t thiagosiqueira/dockersmarkio .
$ docker-compose up

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🎲 Rodando os testes (opcional)

```bash
# Clone este repositório
$ git clone <https://github.com/ThiagoSiqueiraa/SMARKIO-IBM-TTS.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd SMARKIO-IBM-TTS

# Na pasta backend com o(s) container(s) ainda em execução, digite o seguinte comando
$ docker-compose exec smarkio_app sh -c "npm run test"

# Caso você queira visualizar os testes mais detalhados, uma pasta coverage será gerada em backend.
```

### 🎲 Rodando o frontend

```bash

# Basta abrir o arquivo index.html em um navegador, de prefêrencia o Google Chrome (browers moderno)

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [IBM Watson](https://github.com/watson-developer-cloud/text-to-speech-nodejs/)
- [TypeORM](https://typeorm.io/)
- [uuidv4](https://www.npmjs.com/package/uuidv4)
- [TypeScript](https://www.typescriptlang.org/)

### Autor
---

<a href="https://www.linkedin.com/in/thiago-siqueira-258482195/">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/42821686?s=460&u=f6bbcde26e001e2f5ab0c9129db41cdf9dd1d976&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Siqueira</b></sub></a> 


Feito com ❤️ por Thiago Siqueira 👋🏽 Entre em contato!

