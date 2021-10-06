const AnswerRespository = require('../repositories/AnswerRespository');
const AsksRepository = require('../repositories/AsksRepository');

class AsksController {
  async index(req, res) {
    const allAsks = await AsksRepository.findAll();

    res.render('pages/index', {
      perguntas: allAsks,
    });
  }

  async store(req, res) {
    const { title, content } = req.body;

    const newAsk = await AsksRepository.create({ title, content });
    res.redirect('/');
  }

  async show(req, res) {
    const { id } = req.params;

    const ask = await AsksRepository.findById({ id });

    const answers = await AnswerRespository.findById({ id });

    res.render('pages/ask', { pergunta: ask, respostas: answers });
  }
}

module.exports = new AsksController();
