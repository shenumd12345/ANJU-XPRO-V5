//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05oamtNdUN4Z2lGcjhxcTNwWlZDU0dFTXVxWmVnZ3lNV0g0WnU1ZXBXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3BZbkJ6WG9UenFDcHUwRmhDVWJyWWk1SkZRQXhxVmdkNXlyeXBJNWhIbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQmtuL1o5SzlzWTZPRDh3NE5mSUFYNllVa2NBWnZOeGNxUGRVVFFlZEZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNGFXdU1tRXhaZ3V3LzhKYTdYejRsUFRTU0F5TldiOUljTWJqSTFwYlY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9NK0VKM2lZeE5CYkZZWHl6R21EbkMwRCtDd1Z2RDdoNlk0SkhWZUlKWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkrSjVrUkxzR0tTV3R4bkF6a3RWbml2QTlNOE5oUUg5ZkZscGZPeUZ4aW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVjSEdZT1hxSHYxUVEyNjNRQVBWMmhsYzhzYzFaOEZ2ZWk1MTA0eXhVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGVEQVNobXNySDRBeEhpVTRUNlBnR3phcHdGQW5OVE5Nc3ZqMkVEQi8yMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY1a0FHcnNBQmVGTWV4QnBMSW96T0lBUFQwSWtEa3JYdDhpZWpmY0kxdWR1N2J2b05aM3lzZUlRZ1ByYUF3SXUwcXZ1NElyY3h1L0syVGJjeEFTUEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiI3S245b1hKT1J0dzhvWm5FeHJ4K0RxenlPanQ0Zm9EcXE4VG5ZV0lhKzZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMdUhicS0yS1JSS2pKVTBLM0hXN0l3IiwicGhvbmVJZCI6ImMyYmRkODljLTBlNzQtNDgyMy05MGE2LTUyZWI0YTA1NDg3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBWStidlYyeU9kL01XNzJwZllhWjZVY3ltWEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnhQeW95d0Q4VnZzN1RFZThRSHVmdmdIM2lVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRBMko5R1JYIiwibWUiOnsiaWQiOiIxNTg3OTk3NDM4NToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCSypzhtIfKnOG0gMqA4bSAIiwibGlkIjoiMTg1MTE5Mjk4NDM3MjA6MTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaWQvY3dERU42U2w4UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4VWhHWWg0bEFRYTdsWFk1UGlJT2lYYklURHNxSEtnMnY3VWZjWTJjSW53PSIsImFjY291bnRTaWduYXR1cmUiOiJsYWY4cW5OdDU2clJaOGtLb2ZXUHRPWXprQkpCMnJuOGFLbUMxZWJsWm9pTHcxT21ZMXA4c0NOb0VMcmpwSXNYd0JZcWxaZTFSdldQSTEzN3ZSaTVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiREZidmgwaS8vVUNkdGprNklPeC9TMEpRa1l4UkU5SUU1MERCWDRsSXE3OS9hT1pSa3pXdENPbWczTmpPa2xGd29mZXZJMVVhMG4vOGVuRGdQK21RQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTg3OTk3NDM4NToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmRklSbUllSlFFR3U1VjJPVDRpRG9sMnlFdzdLaHlvTnIrMUgzR05uQ0o4In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTM1OTgzMTUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjlwIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+1 (587) 997-4385",
  PASSWORD: 
    process.env.PASSWORD || "Shehara@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
