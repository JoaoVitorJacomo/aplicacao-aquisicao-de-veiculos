# aplicacao-aquisicao-de-veiculos

Esse projeto possui a finalidade de ser um sistema em que o usuário cadastre os carros que deseja estar acessando o preço diariamente para que quando os preços ficarem acessíveis ao orçamento do usuário, o usuário tenha a possibilidade de adquirir o veículo quando o preço está dentro do orçamento.

# Endereço de Deploy - GitHub Pages

# Protótipo

# Checklist

- Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro).
- Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- Construir páginas web com o conceito de componentes. 
- Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- Mapear componentes à rotas no módulo de rotas.
- Criar navegação entre páginas por meio de rotas.
- Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 
- Validar campos do formulário com REGEX e apresentar os erros.
- Desabilitar o botão de submit enquanto o formulário está inválido.
- Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- Cadastrar uma entidade usando uma API (JSON Server).
- Apresentar uma lista de dados com a diretiva estrutural ngFor.
- Usar a diretiva ngIf
- Formatar a apresentação de dados com Pipes.
- Build e deploy da aplicação.

# Manual de execução

- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando: 
- Comando: `npm run json-server --watch db.json --routes routes.json`
- O comando deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
- Comando: `ng s
