const db = require('../database');

class AnswerRepository {
  async create({ id, content }) {
    const [row] = await db.query(`
      INSERT INTO respostas(id, content)
      VALUES($1, $2)
      RETURNING *
    `, [id, content]);
    return row;
  }

  async findById({ id }) {
    const rows = await db.query('SELECT * FROM respostas WHERE id = $1', [id]);
    return rows;
  }
}

module.exports = new AnswerRepository();
