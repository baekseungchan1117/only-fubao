const user = function (Sequelize, Database) {
  return Sequelize.define(
    "user",
    {
      id: {
        type: Database.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncreament: true,
      },
      password: {
        type: Database.STRING(255),
        allowNull: false,
      },
      username: {
        type: Database.STRING(20),
        allowNull: false,
      },
      nickname: {
        type: Database.STRING(30),
        allowNull: false,
      },
      email: {
        type: Database.STRING(50),
        allowNull: false,
      },
    },
    {
      tablename: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = user;
