## Pré requisitos e instalação

> - Instalar Git
	Node js	
	Visual Studio Code

Para verificar as instalações: cmd> git --version && node --version && npm --version

## Aplicação que será testada
https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html

## Procedimento de criação de chave no git, clonagem do projeto e conexão ao desktop

> - Abrir o link abaixo
https://github.com/wlsf82/cypress-do-zero-a-nuvem

> - Ir em "Code">aba SSH e criar uma chave ssh

> - Abrir o git bash e digitar
ssh-keygen -t ed25519 -C "pedroo.h.s@hotmail.com"

> - Criar uma senha e frase de segurança, (se não quiser é só dar enter)
executar o comando cat C:/Users/Pedro/.ssh/id_ed25519.pub

> - Após isso ir no git navegador> Settings>aba SSH and GPG Keys
e colar o conteúdo e criar a chave

> - Dar um fork

> - clonar o projeto com o comando 
git clone git@github.com:Pedrohs92/cypress-do-zero-a-nuvem.git

instalar o cypress
npm install cypress@13.12.0 --save-dev

abrir o cypress
npx cypress open

selecionar teste e2e>continuar
selecionar navegador eléctron

Create new spec>alterar para CAC-TAT.cy.js