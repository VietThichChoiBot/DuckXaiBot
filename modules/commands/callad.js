module.exports.config = {
  name: "callad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang fix by Jukie",
  description: "Thông báo lỗi của bot đến admin hoặc góp ý",
  commandCategory: "Tiện ích",
  usages: "[lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
  var name = (await Users.getData(event.senderID)).name 
 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
   break;}
    case "calladmin": {
      api.sendMessage({ body: `❮ Thông báo phản hồi ❯\n\n❗ Phản hồi từ admin ${name} đến bạn:\n----------------\n⚠️ Nội dung: ${event.body}\n----------------\n💬 Phản hồi tin nhắn này để tiếp tục gửi báo cáo về admin`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID,
  type: "reply"}), handleReply.messID);
   break;}
     
     }
  
  
};

module.exports.run = async function({ api, event, args, Users }) {
  if (!args[0])
    return api.sendMessage(
      "Bạn chưa nhập nội dung cần báo cáo",
      event.threadID,
      event.messageID
    );
  //var data = await api.getUserInfo(event.senderID); 
  var name = (await Users.getData(event.senderID)).name;
  var idbox = event.threadID;
 // const url = (api.getCurrentUserID(event.senderID));
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var soad = global.config.ADMINBOT.length;
  api.sendMessage(
    "Đã gửi báo cáo của bạn đến các Admin Bot ✅",
    event.threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`❮ Thông báo báo cáo ❯\n\n❗ Báo cáo từ: ${name}\n❄️ UID người gửi: ${event.senderID}\n👻 Box: ${namethread}\n⚡️ ID box: ${idbox}\n----------------\n⚠️ Nội dung: ${args.join(
            " "
          )}\n----------------\n⏰ Thời gian: ${gio}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "calladmin"
            })
        );
    }
    }
  );
};