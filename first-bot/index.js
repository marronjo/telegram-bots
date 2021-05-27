require('dotenv').config()

const { Telegraf } = require('telegraf')
const app = new Telegraf(process.env.TOKEN)

app.hears('Hi', (bot) => {
  bot.reply('Hi there, how are you today?')
})

app.startPolling()
