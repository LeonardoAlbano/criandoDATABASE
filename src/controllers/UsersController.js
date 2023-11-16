// Importa a classe "AppError" definida no arquivo "../utils/AppError".
const AppError = require("../utils/AppError");

class UsersController {
  /**
   *  Index - GET para listar vários registros
   *  Show - GET para exibir um registro específico 
   *  Create - POST para criar um registro
   *  Update - PUT para atualizar um registro
   *  Delete - DELETE para remover um registro
   */

  create(request, response) {
    // Extrai os dados do corpo da requisição, que são esperados estar no formato JSON.
    const { name, email, password } = request.body;

    // Verifica se o campo 'name' está presente na requisição.
    if (!name) {
      // Se 'name' não estiver presente, lança um erro utilizando a classe "AppError".
      throw new AppError("Nome é obrigatório!");
    }

    // Retorna os dados recebidos como resposta no formato JSON com status 201 (Created).
    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
