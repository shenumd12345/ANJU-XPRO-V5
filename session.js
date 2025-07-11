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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhJdFYxamVLSXFqaFMramVXdytNUXE4QjdIQW5YVGVYa3lBSGtJLzNrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWpXZmpMVTRLMmFjTFhOZFBJbkpaZWt5OWV3TzhEMXdjZ2tvS3V2UmV5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T2YzeXlLUmxUSy9vcHV6YnJTSDhyUmFNb3V0YVBkY1lmRytSSWY2TEVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbkphNVp1anZwczg5dGpEdzdWbEZpYjlLNk9SK1IzbzZ3RDZXVkhyQUZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGL2FXaE40T3dpeDRqYk1makQvdkJyS0ZoblhBbVlVR0VONW0vN1JpbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVwTFpHT2lFbVdEQ3N5NW1Db1hwMWo5bmgxWGluMytSZXc5bzNuSTlraHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0UyTDVvdUVUeG9wakhvTGJIQjg0dmlmV20xWVZ4dGo4OGE3TEZ2NEYwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlVsNER3YzhQTkNsSStsVklxRUYvWEVaQ2hNbllMbm1NQ29FYTFRWGQyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEzNlFJQXpBdHZoV0doZHZCRUdTQm1jY0FKb2FPV0VWdjNlWlp2eXRxQTllRm96TEFWVUx3NjhkeUxLOG1NNUJYOWZnZy9GV2E3S1lmYW1nSCtKa0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJSZXBKajQ1VjR5V0c2R01sL1lDTFBVenB5cFM4WnBYMjdNb1NncVo1d1FJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVQWhPYWhjR1FkaXRuMktLZ2x1V09RIiwicGhvbmVJZCI6Ijc0MjdmMTNkLTk2OTEtNDc1Ni05NGViLWM1ZDFhNDg5NmZlOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIYjE3ejFNbUpZamVvTVZqNWl0bXlIYmp0b2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1BrQXBFaDVab09Rb09SRkYyQ1dtV1ZKcEk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVCSjhUWVRMIiwibWUiOnsiaWQiOiI5NDcyMzIwNTgxMjo3MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1NzEzNjIyNzE2ODQyODo3MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PSTVmd0RFTXlRdzhNR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InY3VXljNlpuWVYyczcxMnNoR0xBQzJjVnpPVHNPSGQzOVYveVljd0FHQWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVMOW9Gc0xTQnJidktmYzd2U240K29vUTNsK0RXNlNLOTAybE5TTldENFR1aDVOcmp2bGN6SS9HaWVTS0JQeXVTUXpZUFMrSys3RnpkMEY5dGpOb0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJONnQzTkxmQjZsZXZQTzZHeC8wSE1aa1d4L2VEb0pYdEt2L3lTTWIrWGhxU2JGVCtneERTNHFkd01SZEJlMnl0Q0dkaTlCa1lVdi95cEtycGJJUHhDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIzMjA1ODEyOjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIrMU1uT21aMkZkck85ZHJJUml3QXRuRmN6azdEaDNkL1ZmOG1ITUFCZ0gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjIyMTc4NSwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94723205812",
  PASSWORD: 
    process.env.PASSWORD || "Shehara@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
