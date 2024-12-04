const userRepository = require('../repository/userRepository');

class UserService {
  async getUsers() {
    return await userRepository.listarUsuarios();
  }

  async createUser(user) {
    return await userRepository.createUser(user);
  }

  async getUser(id) {
    return await userRepository.getUser(id);
  }

  async updateUser(id, user) {
    return await userRepository.updateUser(id, user);
  }

  async deleteUser(id) {
    return await userRepository.deleteUser(id);
  }
}

module.exports = new UserService();