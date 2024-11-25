import express from "express";

const posts = [
    {
        id: 1,
        descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Um lindo pôr do sol na praia",
        imagem: "https://loremflickr.com/320/240/food"
    },
    {
        id: 3,
        descricao: "Meu gato fazendo cara de bravo",
        imagem: "https://loremflickr.com/320/240/food"
    },
    {
        id: 4,
        descricao: "Uma paisagem montanhosa incrível",
        imagem: "https://loremflickr.com/320/240/food"
    },
    {
        id: 5,
        descricao: "Um bolo delicioso que acabei de fazer",
        imagem: "https://loremflickr.com/320/240/food"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
});

function buscarPostsPorID(id){
    return posts.findIndex((post)=>{
        return post.id ===Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorID(req.params.id)
    res.status(200).json(posts[index])
});