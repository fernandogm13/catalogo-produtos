import { pool } from "./src/db.js";

async function inicializarBanco() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS produtos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        descricao TEXT,
        preco NUMERIC(10,2),
        imagem TEXT
      );
    `);

    console.log("✅ Tabela 'produtos' criada com sucesso!");

    await pool.query(`
      INSERT INTO produtos (nome, descricao, preco, imagem)
      VALUES
        ('Camiseta', 'Camiseta 100% algodão', 59.90, 'https://via.placeholder.com/150'),
        ('Tênis', 'Tênis esportivo leve', 199.90, 'https://via.placeholder.com/150')
      ON CONFLICT DO NOTHING;
    `);

    console.log("🧩 Produtos de exemplo inseridos!");
  } catch (err) {
    console.error("❌ Erro ao criar tabela:", err);
  } finally {
    pool.end();
  }
}

inicializarBanco();
