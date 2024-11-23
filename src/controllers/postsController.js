import {
  getAllPosts,
  criarPost,
  atualizarPost,
} from "../postsModel.js/postModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

export async function criarNovoPost(req, res) {
  const body = req.body;
  try {
    const postCriado = await criarPost(body);
    res.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imageUrl: req.file.originalname,
    alt: "",
  };
  try {
    const postCriado = await criarPost(novoPost);
    fs.renameSync(req.file.path, `uploads/${postCriado.insertedId}.png`);
    res.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function atualizarNovoPost(req, res) {
  const urlImagem = `http://localhost:3000/${req.params.id}.png`;

  try {
    const imageBuffer = fs.readFileSync(`uploads/${req.params.id}.png`);

    const descricao = await gerarDescricaoComGemini(imageBuffer);
    const post = {
      descricao: descricao,
      imageUrl: urlImagem,
      alt: req.body.alt,
    };

    const postCriado = await atualizarPost(req.params.id, post);

    res.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
