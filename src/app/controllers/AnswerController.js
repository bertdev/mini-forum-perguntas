const AnswerRespository = require('../repositories/AnswerRespository');
const AsksRepository = require('../repositories/AsksRepository');

class AnswerController {
  async show(req, res) {
    const { id } = req.params;

    const ask = await AsksRepository.findById({ id });

    res.render('pages/answer', { pergunta: ask });
  }

  async store(req, res) {
    const { content } = req.body;
    const { id } = req.params;

    const newAnswer = await AnswerRespository.create({ id, content });
    console.log(newAnswer);

    res.redirect(`/ask/${id}`);
  }
}

module.exports = new AnswerController();
