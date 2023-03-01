# Movielist

Backend referente a aplicação Movielist.

Você pode acessar por <a href="http://18.206.126.112/">aqui</a>!

## Tecnologias
Algumas das tecnologias utilizadas para desenvolvimento deste projeto:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Como usar
1. Clone este repositório
2. Instale as dependências com o comando:
<code>NPM i</code>
3. Crie um banco de dados PostgreSQL com o nome que você preferir
4. Configure o .env usando o .env.example de exemplo
5. Inicie o projeto com o comando: <code>npm run dev</code>

## Rotas

### Saúde
Confere o funcionamento da aplicação utilizando uma request esperando uma resposta
| Método | Caminho |
| --- | --- |
| <code>GET</code> | /health |

Resposta:
"Oh, hey there, I'm OK!"

### Filmes

<strong>Entidade filme se identifica da seguinte forma:</strong>
```
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/irwQcdjwtjLnaA0iErabab9PrmG.jpg",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 646389,
      "original_language": "en",
      "original_title": "Plane",
      "overview": "O piloto Brodie Torrance salva seus passageiros de um raio pousando em uma ilha. Os moradores rebeldes e perigosos do local fazem a tripulação refém e Torrance procura ajuda de um passageiro acusado de assassinato.",
      "popularity": 2277.913,
      "poster_path": "/zr50kb04fTFcGfZTKFzbKTmQSiZ.jpg",
      "release_date": "2023-01-12",
      "title": "Alerta Máximo",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 683
    },
    {
      "adult": false,
      "backdrop_path": "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
      "genre_ids": [
        16,
        12,
        35
      ],
      "id": 315162,
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas, deixando-o com apenas uma vida restante. Gato parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
      "popularity": 2251.995,
      "poster_path": "/atJxZfCaQ7kXRFSfbm8cqAKkns7.jpg",
      "release_date": "2022-12-07",
      "title": "Gato de Botas 2: O Último Pedido",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 4094
    },
```

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/toptrendig?page |

Retorna um <strong>Array</strong> com os filmes mais comentados da semana.</br>
Obs: É preciso passar a página por QUERY

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/toprated?page |

Retorna um <strong>Array</strong> com os filmes mais populares de todos os tempos.</br>
Obs: É preciso passar a página por QUERY

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/upcoming?page |

Retorna um <strong>Array</strong> com os próximos filmes a caminho.</br>
Obs: É preciso passar a página por QUERY

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/search/:title |

Retorna um <strong>Array</strong> de filmes que começam com os caracteres escritos no title.

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/details/:movieId |

Retorna um os detalhes do filme informado pelo Id.</br>
obs: é necessário usar o Id informado pelo TheMovieDatabase.


| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/collections/:collectionId |

Retorna as informações da coleção ao qual o Id foi informado.</br>
obs: é necessário usar o Id informado pelo TheMovieDatabase.

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /movies/credits/:movieId |

Retorna as informações da equipe técnica e atores do filme qual o Id foi informado.</br>
obs: é necessário usar o Id informado pelo TheMovieDatabase.

### Users

| Método | Caminho |
| --- | --- |
| <code>POST</code> | /users |

Cria um usuário na aplicação.</br>

BODY:
```
{
  email: string,
  password: string,
  username: string,
}
```

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /users/profile?username |

Retorna o perfil de um usuário.</br>
Resposta:
```
{
  id: number,
  userId: number,
  username: string,
  photo_path: string | null,
  backdrop_path: string | null,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

| Método | Caminho |
| --- | --- |
| <code>PUT</code> | /users/profile |

Edita o perfil de um usuário.</br>
obs: essa é uma rota autenticada

BODY:
```
{
  username: string,
  photo_path: string | null,
  backdrop_path: string | null,
}
```

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /users/profile/find?username |

Retorna os usuários que começam com os caracteres escritos em username.</br>
obs: essa é uma rota autenticada

### Auth

| Método | Caminho |
| --- | --- |
| <code>POST</code> | /auth/sign-in |

Usado para fazer login com um usuário.</br>

BODY:
```
{
  email: string,
  password: string,
}
```

Resposta:
```
{
  "user": {
    "id": 2,
    "email": "teste@teste.com",
    "Profile": [
      {
        "username": "Admin",
        "backdrop_path": "https://i.pinimg.com/originals/44/1e/07/441e0768961c66de03094044f20807dc.gif",
        "photo_path": "https://giffiles.alphacoders.com/210/210439.gif"
      }
    ]
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY3NzY3Njg4NH0.Je2qAA0Rbr70U3hINeSYUDKyJMUQ3I7CFnE_V7N_Tng"
}
```

### Filmes Favoritos
| Método | Caminho |
| --- | --- |
| <code>GET</code> | /favorits?movieId |

Faz uma requisição para conferir se o filme é um favorito ou não.</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pelo TheMovieDatabase.

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /favorits/all?tmdbMovieId |

Retorna um Array com os filmes favoritados.</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pela API.


| Método | Caminho |
| --- | --- |
| <code>POST</code> | /favorits/new |

Marca um novo filme como favorito.</br>
obs: Essa é uma rota autenticada.

BODY:
```
{
  tmdbMovieId: number,
  tmdbTitle: number,
  tmdbPoster_path: string
}
```

| Método | Caminho |
| --- | --- |
| <code>DELETE</code> | /favorits?favoritId |

Desfavorita um filme</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pela API.

### Filmes planejados para assistir
| Método | Caminho |
| --- | --- |
| <code>GET</code> | /planning?movieId |

Faz uma requisição para conferir se o filme está marcado como planejado ou não.</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pelo TheMovieDatabase.

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /planning/all?tmdbMovieId |

Retorna um Array com os filmes que planeja assistir.</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pela API.


| Método | Caminho |
| --- | --- |
| <code>POST</code> | /planning/new |

Marca um novo filme como planejo assistir.</br>
obs: Essa é uma rota autenticada.

BODY:
```
{
  tmdbMovieId: number,
  tmdbTitle: number,
  tmdbPoster_path: string
}
```

| Método | Caminho |
| --- | --- |
| <code>DELETE</code> | /planning?favoritId |

Desmaca um filme que estava marcado como planejado</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pela API.

### Filmes assistidos
| Método | Caminho |
| --- | --- |
| <code>GET</code> | /watched?movieId |

Faz uma requisição para conferir se o filme foi assistido ou não.</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pelo TheMovieDatabase.

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /watched/all?tmdbMovieId |

Retorna um Array com os filmes assistidos.</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pela API.


| Método | Caminho |
| --- | --- |
| <code>POST</code> | /watched/new |

Marca um novo filme como assistido.</br>
obs: Essa é uma rota autenticada.

BODY:
```
{
  tmdbMovieId: number,
  tmdbTitle: number,
  tmdbPoster_path: string
}
```

| Método | Caminho |
| --- | --- |
| <code>DELETE</code> | /watched?favoritId |

Desmarca um filme como assistido</br>
obs: Essa é uma rota autenticada.
obs: é necessário usar o Id informado pela API.

### Histórico

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /history?username |

Retorna o histórico de um usuário.</br>

| Método | Caminho |
| --- | --- |
| <code>GET</code> | /history/info?historyId |

Retorna as informações de um card do histórico de um usuário.</br>

Resposta:
```
{
    userId: number;
    Like: Like[];
    id: number;
    type: HistoryType;
    createdAt: Date;
    Comment: {
        id: number;
        createdAt: Date;
        User: User & {
            Profile: Profile[];
        };
        comment: string;
    };
}
```

| Método | Caminho |
| --- | --- |
| <code>POST</code> | /history/comment |

Cria um novo comentário em um card do histórico de um usuário.</br>
obs: Essa é uma rota autenticada.

BODY:
```
{
  comment: string,
  historyId: number
}
```

| Método | Caminho |
| --- | --- |
| <code>POST</code> | /history/like |

Adiciona um like em um card do histórico de um usuário.</br>
obs: Essa é uma rota autenticada.

BODY:
```
{
  historyId: number
}
```

| Método | Caminho |
| --- | --- |
| <code>DELETE</code> | /history/like?likeId |

Deleta um like em um card do histórico de um usuário.</br>
obs: Essa é uma rota autenticada.
obs: é necessário utilizar o ID fornecido pela API.

| Método | Caminho |
| --- | --- |
| <code>DELETE</code> | /history/comment?commentId |

Deleta um comentário em um card do histórico de um usuário.</br>
obs: Essa é uma rota autenticada.
obs: é necessário utilizar o ID fornecido pela API.

### Nota
| Método | Caminho |
| --- | --- |
| <code>GET</code> | /rated?tmdbMovieId |

Pesquisa se existe alguma nota do usuário atríbuida ao filme selecionado.</br>
obs: Essa é uma rota autenticada.
obs: é necessário utilizar o ID fornecido pela API.

| Método | Caminho |
| --- | --- |
| <code>POST</code> | /rated |

Atribúi uma nota do usuário ao filme selecionado.</br>
obs: Essa é uma rota autenticada.

BODY:
```
{
  tmdbMovieId: number,
  rate: number
}
```

| Método | Caminho |
| --- | --- |
| <code>DELETE</code> | /rated?rateId |

Deleta uma nota do usuário atribuída ao filme selecionado.</br>
obs: Essa é uma rota autenticada.
obs: é necessário utilizar o ID fornecido pela API.
