const Artisan = sequelize.define("Artisan", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 0,
    validate: {
        min: 0,
        max: 5
    }
  },
  ville: {
    type: DataTypes.STRING,
  },
  a_propos: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING,
  },
  site_web: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  timestamps: false,
  tableName: "artisan",       
  freezeTableName: true       
});
