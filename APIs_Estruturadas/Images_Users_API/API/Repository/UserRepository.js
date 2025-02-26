const User = require("../service/DatabaseService").User;

class UserRepository {
  async listarUsuarios() {
    return await User.findAll();
  }

  async createUser(user) {
    return await User.create(user);
  }

  async getUser(id) {
    return await User.findByPk(id);
  }

  async updateUser(id, user) {
    return await User.update(user, { where: { id } });
  }

  async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }
}

module.exports = new UserRepository();
