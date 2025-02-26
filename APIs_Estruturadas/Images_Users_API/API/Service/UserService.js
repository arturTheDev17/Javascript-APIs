const userRepository = require("../repository/userRepository");
const User = require("../model/User");

class UserService {
  async getUsers() {
    const users = await userRepository.listarUsuarios();
    const usersReturn = users.map((user) => {
      return new User(user.id, user.name, user.data_criacao);
    });
    return usersReturn;
  }

  async createUser(user = {}) {
    const newUser = await userRepository.createUser(
      new User(user.id, user.name, user.data_criacao)
    );
    return new User(newUser.id, newUser.name, newUser.data_criacao);
  }

  async getUser(id) {
    const user = await userRepository.getUser(id);
    const userReturn = !user
      ? null
      : new User(user.id, user.name, user.data_criacao);
    return userReturn;
  }

  async updateUser(id, user) {
    const retorno = await userRepository.updateUser(id, user);
    return retorno >= 1 ? "User updated" : "User not found";
  }

  async deleteUser(id) {
    return await userRepository.deleteUser(id);
  }
}

module.exports = new UserService();
