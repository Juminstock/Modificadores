import { Bot } from "grammy";

const bot = new Bot("7865859030:AAFqVPMR_JNdBYBYv0sFWuUJh_tadxBGLXg");

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there, welcome to Soneium Bridger!"));

bot.start();