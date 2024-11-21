import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Foto de teste",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 2,
    descricao: "Paisagem deslumbrante",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 3,
    descricao: "Meu pet adorável",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 4,
    descricao: "Viagem inesquecível",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 5,
    descricao: "Receita deliciosa",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 6,
    descricao: "Citação inspiradora",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 7,
    descricao: "Meme engraçado",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 8,
    descricao: "Arte digital incrível",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 9,
    descricao: "Vídeo divertido",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
  {
    id: 10,
    descricao: "Produto em destaque",
    imagem:
      "https://i.pinimg.com/736x/55/2b/0a/552b0a2c32a1a814c4c3077b52df3242.jpg",
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Running...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function searchPostPerId(id) {
  return posts.findIndex((post) => post.id === Number(id));
}

app.get("/posts/:id", (req, res) => {
  const index = searchPostPerId(req.params.id);
  res.status(200).json(posts[index]);
});
