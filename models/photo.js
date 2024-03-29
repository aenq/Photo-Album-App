'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.User);
    }
  }
  Photo.init({
    title: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : "Title cannot be empty"
        },
        notEmpty: {
          msg : "Title cannot be an empty string"
        }
      }
    },
    caption: {
      type : DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg : "Caption cannot be empty"
        },
        notEmpty: {
          msg : "Caption cannot be an empty string"
        }
      }
    },
    image_url: {
      type : DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg : "Image URL cannot be empty"
        },
        notEmpty: {
          msg : "Image URL cannot be an empty string"
        },
        isUrl : {
          msg : "Wrong URL format"
        }
      }
    },
    UserId: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg : "User ID cannot be empty"
        },
        notEmpty: {
          msg : "User ID cannot be an empty string"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.caption = `${instance.title.toUpperCase()} ${instance.image_url}`
      }
    },
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};