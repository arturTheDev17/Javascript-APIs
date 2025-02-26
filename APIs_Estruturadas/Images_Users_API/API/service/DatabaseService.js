const Sequelize = require("sequelize");

const sequelizeBefore = new Sequelize("mysql://root:@localhost:3306", {
  dialect: "mysql",
});

sequelizeBefore
  .authenticate()
  .then(() => {
    console.log("Connected to database");
    sequelize
      .query("CREATE DATABASE IF NOT EXISTS db_userImages")
      .then(() => {
        console.log("Database created successfully");
      })
      .catch((error) => {
        console.error("Error creating database:", error);
      });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

const sequelize = new Sequelize("db_userImages", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_criacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Image = sequelize.define("image", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  referencia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extensao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_user: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Tables created successfully");
  })
  .catch((error) => {
    console.error("Error creating tables:", error);
  });

module.exports = { User, Image };
