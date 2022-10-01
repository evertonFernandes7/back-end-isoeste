import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Tool from '../models/Tool';

const models = [Tool];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
