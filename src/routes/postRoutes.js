import express from "express";
import { listarPosts } from "../controllers/postControllers.js";

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());
    // Rota GET para a URL /posts
    app.get("/posts",listarPosts);
}

export default routes;
