import { fastify } from 'fastify';
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

server.get('/', () => {
    return 'Olá Mundo';
});

server.post('/livro', (request, reply) => {
    const { titulo, autor, npaginas } = request.body;
    database.create({
        titulo,
        autor,
        npaginas
    });
    reply.status(201).send();
});

server.get('/livro', (request) => {
    const search = request.query.search;
    const livros = database.list(search);
    return livros;
});

server.put('/livro/:id', (request, reply) => {
    const livroId = request.params.id;
    const { titulo, autor, npaginas } = request.body;
    database.update(livroId, {
        titulo,
        autor,
        npaginas,
    });
    reply.status(204).send();
});

server.delete('/livro/:id', (request, reply) => {
    const livroId = request.params.id;
    database.delete(livroId);
    reply.status(204).send();
});

server.listen({
    port: 3333,
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando em: ${address}`);
});
