# MovieFlix
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/moisesguilherme/movieflix/blob/main/LICENSE) 

# Sobre o projeto

MovieFlix é uma aplicação FullStack web e mobile construída durante o **Bootcamp DevSuperior**, curso da escola de programação [DevSuperior](https://devsuperior.com "Site da DevSuperior").


O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário faz o seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for usuário membro, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

Você pode logar na aplicação com os usuários:

email: ana@gmail.com | senha: 123456 (MEMBER)
email: bob@gmail.com | senha: 123456 (VISITOR)

## Layout mobile 
![Mobile 1](https://github.com/moisesguilherme/assets/blob/main/movieflix/mobile01.png) ![Mobile 2](https://github.com/moisesguilherme/assets/blob/main/movieflix/mobile02.png) ![Mobile 3](https://github.com/moisesguilherme/assets/blob/main/movieflix/mobile03.png) ![Mobile_4](https://github.com/moisesguilherme/assets/blob/main/movieflix/mobile04.png)

## Layout web
![Web 1](https://github.com/moisesguilherme/assets/blob/main/movieflix/front-web.png) 
![Web 2](https://github.com/moisesguilherme/assets/blob/main/movieflix/front-web02.png) 
![Web 2](https://github.com/moisesguilherme/assets/blob/main/movieflix/front-web03.png) 

## Modelo conceitual
![Modelo Conceitual](https://github.com/moisesguilherme/assets/blob/main/movieflix/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/moisesguilherme/movieflix

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/moisesguilherme/movieflix

# entrar na pasta do projeto front end web
cd frontend-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```


## Front end mobile
Pré-requisitos: npm / yarn / Expo

```bash
# clonar repositório
git clone https://github.com/moisesguilherme/movieflix

# entrar na pasta do projeto front end web
cd frontend-mobile

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Moisés Guilherme

https://www.linkedin.com/in/moises-guilherme/
