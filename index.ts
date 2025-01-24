import { Bot } from "grammy";

const bot = new Bot("7865859030:AAFqVPMR_JNdBYBYv0sFWuUJh_tadxBGLXg");

bot.on("message", (ctx) => ctx.reply("Hi there, welcome to Soneium Bridger!"));

bot.start();