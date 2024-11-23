import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts() {
  return conexao.db("postapp-project").collection("posts").find().toArray();
}

export async function criarPost(novoPost) {
  return conexao.db("postapp-project").collection("posts").insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const objectId = ObjectId.createFromHexString(id);
  return conexao
    .db("postapp-project")
    .collection("posts")
    .updateOne({ _id: new ObjectId(objectId) }, { $set: novoPost });
}
