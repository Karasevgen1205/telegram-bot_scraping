// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const {BOT_TOKEN, SERVER_URL} = process.env
// const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`
// const URL = `/webhook/${BOT_TOKEN}`
// const WEBHOOK_URL = SERVER_URL+URL

// const app = express()
// app.use(bodyParser.json())

// const init = async () => {
//     const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
//     console.log(res.data)
// }

// app.post(URL, async (req, res) => {
//     console.log(req.body)

//     const chatId = req.body.message.chat.id 
//     const text = req.body.message.text

//     await axios.post(`${TELEGRAM_API}/sendMessage`, {
//         chat_id: chatId,
//         text: text
//     })
//     return res.send()
// })

// app.listen(process.env.PORT || 5000, async () => {
//     console.log(`app running on post`, process.env || 5000)
//     await init()
// })

// /////////////////////////////////////////////////////////////////////////
// // require('dotenv').config();
// // const channel = "@ebanoe_IT_for_testing";
// // // const BOT_TOKEN = "2030772552:AAEuxJ1pNCBU4k6vKNNLJ3wXNr_hksfTz2E";
// // const {Telegraf} = require('telegraf');
// // // const {axios} = require('axios');

// // // const startBot = () => {

// //     const bot = new Telegraf(process.env.BOT_TOKEN)
// //     bot.start(ctx => ctx.reply('Fuck you!'))
// //     bot.help(ctx => ctx.reply("Otsosi"))
// //     bot.hears("hi", (ctx) => {
// //         ctx.reply('Hello!');
// //     })
// //     bot.command("hi", (ctx) => {
// //         ctx.reply('Pidor!');
// //         getAndPost(ctx);
// //     })  
// //     bot.launch();

// //     const getAndPost = (ctx) => {

// //         fetch('https://jsonplaceholder.typicode.com/todos/1')
// //             .then(response => response.json())
// //             .then(json => console.log(json))
// //         // axios.get('https://jsonplaceholder.typicode.com/todos/1')
// //         // .then((res) => {
// //         //     const data = res.data.data;

// //         //     postToChannel(data, ctx);
// //         // })
// //         // .catch((err) => console.log(err));
// //     }

// //     // const postToChannel = (posts, ctx) => {
// //     //     posts.children.map((post, i) => {
// //     //         ctx.telegram.sendPhotot(channel, posts.data.url)
// //     //     })
// //     // }
// // }

// // startBot();


// /////////////////////////////////////////////////////////////////////////
// // require('dotenv').config();

// // const { Telegraf } = require('telegraf');
// // const covidApi = require('covid19-api');
// // const COUNTRIES_LIST = require('./const')
// // const bot = new Telegraf(process.env.BOT_TOKEN);

// // bot.start( ctx => ctx.reply(`
// //    Привет ${ctx.from.first_name}!
// //    Узнай статистику по Коронавирусу.
// //    Введи страну на английском языке и получи статистику.
// //    Получить весь список стран можно по команде /help."
// // `))
// // bot.help( ctx => ctx.reply(COUNTRIES_LIST))
// // bot.on('text', async (ctx) => {
// //    try {
// //        const userText = ctx.message.text
// //        const covidData = await covidApi.getReportsByCountries(userText)
// //        const countryData = covidData[0][0]
// //        const formatData = `
// //            Страна: ${countryData.country},
// //            Случаи: ${countryData.cases},
// //            Смерти: ${countryData.deaths},
// //            Выздоровело: ${countryData.recovered}`
// //        ctx.reply(formatData)
// //    } catch(e) {
// //        ctx.reply('Такой страны не существует, для получения списка стран используй команду /help')
// //    }
// // })
// // bot.launch()


