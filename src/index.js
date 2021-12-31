const { MainClient } = require('./structs/MainClient');
const config = require('../config.json');

const bot = new MainClient(config)
bot.boot();