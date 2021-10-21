 const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "...",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["chào bạn tôi là bot của Vịt ", "bạn kêu tôi có việc gì?", "tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Vợ gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "Yêu sen nhất", "chị ấy là bae của HChong", "Yêu thương admin nhất", "Anh ấy là phụ trợ của admin", "Sao thế công chúa", "Đừng làm em đau ~~~~", "Rên với em nhé a á á á", "Tuyển phi công nè ạ", "Làm đĩ ko ạ? dui lắm", "Cậu cô đơn ko?", "Chịch ko ạ vã quá!!!", "Được của ló :)))", "Em dthw như chủ của em ạ", "Đừng khen em ngại quá hí hí" ,"Làm chồng em ko ạ?", "Đừng spam em nha :<<, cậu chủ em mệt lắm ời", "Cút ra", "Đừng đè em mạnh!!!", "Đút tutu thôi em đau :'(", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Có thể bạn chưa biết..\nBạn rất ngu :3", "Yêu em ko?", "Chồng em đây rồi"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot cặc")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "bot lồn")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "đĩ bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot gà")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "con bot lol")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot ngu lol")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "đm bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
    if ((event.body.toLowerCase() == "đmm bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "đb bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot điên")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot dở")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot khùng")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot paylac rồi")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "con bot lòn")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "clap bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot ncc")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot oc")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
    if ((event.body.toLowerCase() == "bot óc")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot tiki")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "lozz bottt")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "lol bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "loz bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "lồn bot")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
    if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot cac")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot nhu lon")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot như cc")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot như bìu")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot sida")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot fake")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot shoppee")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot đểu")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if ((event.body.toLowerCase() == "bot dỡm")) {
    return api.sendMessage("❌ Vì thành viên box đã chửi Bot nên Bot đã tự động out khỏi nhóm. Riêng con lợn chửi Bot đã bị cấm sử dụng. Chúc mừng em ! 🤡\n\n✨ Liên hệ admin để thêm lại: https://www.facebook.com/Url.PhamMinhViett 😏", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  if (event.body.indexOf("bot ơi") == 0 || (event.body.indexOf("Bot ơi") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
