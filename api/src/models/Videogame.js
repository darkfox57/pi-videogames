const { DataTypes, INTEGER, STRING, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    image: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    launchDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {
    timestamps: false
  });
  sequelize.define('genres', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  }
  )
}

// ,
//     sequelize.define('genresGames', {
//       id: {
//         type: INTEGER,
//         primaryKey: true,
//       },
//       gameId: {
//         type: INTEGER,
//         allowNull: false,
//         references: {
//           model: 'videogames',
//           key: 'id'
//         }
//       },
//       genrerId: {
//         type: INTEGER,
//         allowNull: false,
//         references: {
//           model: 'genres',
//           key: 'id'
//         }
//       },
//     })