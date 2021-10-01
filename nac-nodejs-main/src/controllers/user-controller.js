const repository = require("../repositories/user-repository");

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao buscar usuários!",
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao cadastrar! Revise e valide as informações!" });
  }
};

exports.put = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.headers;
    await repository.udpate(id, body);
    res.status(200).send({ message: "Atualizado!" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao atualizar! Revise e valide as informações!" });
  }
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;

  let response = {
    id: id,
    message: "Removido",
  };

  try {
    await repository.delete(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: "Erro ao deletar!", error });
  }
};
