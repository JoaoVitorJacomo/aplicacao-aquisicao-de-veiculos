# aplicacao-aquisicao-de-veiculos

Esse projeto possui a finalidade de ser um sistema em que o usuário cadastre os carros que deseja estar acessando o preço diariamente para que quando os preços ficarem acessíveis ao orçamento do usuário, o usuário tenha a possibilidade de adquirir o veículo quando o preço está dentro do orçamento.

O frontend da aplicação foi desenvolvido com Angular e Bootstrap 4, além disso, todas as páginas são responsivas.

## Endereço de Deploy - GitHub Pages

https://joaovitorjacomo.github.io/aplicacao-aquisicao-de-veiculos/

## Protótipo

https://drive.google.com/file/d/11GFgmuqAbEzsUrZ9qknr8JR3m9pgCYx0/view?usp=drive_link

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop;
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro);
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS;
- [x] Construir páginas web com o conceito de componentes;
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes;
- [x] Mapear componentes à rotas no módulo de rotas;
- [x] Criar navegação entre páginas por meio de rotas;
- [x] Cadastrar uma entidade no JSON Server;
- [x] Build e deploy da aplicação;
- [x] PWA - Progressive Web Application.

## Páginas Desenvolvidas

-[x] Login = app-land-page
-[x] Index = app-home
-[x] Cadastro = app-cadastro-page
-[x] Sobre = app-sobre-page

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`
