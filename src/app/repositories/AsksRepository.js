const db = require('../database');

class AskRespository {
  async create({ title, content }) {
    const [row] = await db.query(`
      INSERT INTO perguntas(title, content)
      VALUES($1, $2)
      RETURNING *
    `, [title, content]);
    return row;
  }

  async findAll() {
    const rows = await db.query('SELECT * FROM perguntas');
    return rows;
  }

  async findById({ id }) {
    const [row] = await db.query(`
      SELECT *
      FROM perguntas
      WHERE id = $1
    `, [id]);
    return row;
  }
}

module.exports = new AskRespository();
