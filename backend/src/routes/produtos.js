import express from 'express';
import { listarProdutos } from "../models/produtosModel.js";

const router = express.Router();

router.get("/", listarProdutos);

export default router;