require('dotenv').config();
const {Telegraf} = require('telegraf');
const axios = require('axios');
const cheerio = require('cheerio');

const channel = "@ebanoe_IT_for_testing";
const url = "https://kinogoo.by/";
const DB = [];

const bot = new Telegraf(process.env.BOT_TOKEN)
getData(url, DB);
bot.start(ctx => ctx.reply('Fuck you!'))
bot.help(ctx => ctx.reply("Otsosi"))
bot.hears("hi", (ctx) => {
    ctx.reply('Hello!');
})
bot.command("hi", (ctx) => {
    ctx.reply('Poshol nax!');
})
bot.launch();

async function getData(url, db) {
    const response = await axios.get(url)
    .then((response) => {
        const $ = cheerio.load(response.data);

        $('.shortstory').each(function (i, e) {
            let title = $(e).find('h2.zagolovki').text();
            let link = $(e).find('h2.zagolovki').find('a').attr('href');
            let srcImg = $(e).find('.shortimg div').find('a:first-of-type').find('img').attr('data-src');
            let image = `https://kinogoo.by${srcImg}`;
            
            db.push({
                title: title,
                link: link,
                img: image,
            });
        })
    }).catch(e => {
        console.log(e);
    });
}

function compare() {
    const newDB = []
    getData(url, newDB);
    setTimeout(() => {
        if(DB[0].title != newDB[0].title) {
            bot.telegram.sendMessage( channel, `${newDB[0].title}\n${newDB[0].link}` )
            bot.telegram.sendPhoto( channel, newDB[0].img );
            getData(url, DB);
        } else {
            bot.telegram.sendMessage( channel, "Ничего нового нет" )
        }
    }, 2000)
}

let timerId = setInterval(compare, 3000);



// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

  
// setTimeout(compare, 3000);
// let timerId = setInterval((compare, 3000, channel)

// let timerId = setInterval(() => bot.telegram.sendMessage( channel, `${DB[0].title}\n${DB[0].link}` ), 3000);
// setTimeout(() => { clearInterval(timerId) }, 20000);

// setTimeout(() => bot.telegram.sendMessage( channel, `${DB[0].title}\n${DB[0].link}` ), 3000);


// bot.on('text', async (ctx) => {
//     try {
        
//     // const response = await axios.get(url)
//     // .then((response) => {
//     //     const data = [];
//     //     const $ = cheerio.load(response.data);

//     //     $('.shortstory').each(function (i, e) {
//     //         let title = $(e).find('h2.zagolovki').text();
//     //         let link = $(e).find('h2.zagolovki').find('a').attr('href');
//     //         let srcImg = $(e).find('.shortimg div').find('a:first-of-type').find('img').attr('data-src');
//     //         let image = `https://kinogoo.by${srcImg}`;
            
//     //         data.push({
//     //             title: title,
//     //             link: link,
//     //             img: image,
//     //         });
        
    
//     //     // ctx.telegram.sendMessage( channel, `${title}\n${link}` );
//     //     // ctx.telegram.sendPhoto( channel, image );
//     //     // ctx.reply(link);
//     //     // console.log(data)
//     //     })


//     //     // $(data).each(function (i, e) {
//     //     //     ctx.telegram.sendMessage( channel, `${e.title}\n${e.link}` );
//     //     //     ctx.telegram.sendPhoto( channel, e.img );
//     //     // })

//         ctx.telegram.sendMessage( channel, `${DB[0].title}\n${DB[0].link}` );


//     //     console.log("NEW FUCKING DATA", data)
//     //     }).catch(e => {
//     //         console.log(e);
//     //     });
//     } catch(e) {
//         console.log(e);
//         ctx.reply('Какая-то неожиданная ошибка')
//     }
// })
