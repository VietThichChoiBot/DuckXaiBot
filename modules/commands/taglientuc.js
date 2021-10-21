module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 90,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "Ra đây chơi em" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Địt mẹ mày ra đây chơi" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "Mả cha mày ra bố bảo" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "Lồn cụ mày ra không tao địt cả lò mày giờ" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "Con cặc ra lẹ" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "Ra anh cho bú cặc" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Ra lẹ đi chửi rát họng rồi" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "Mệt" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "Đéo" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "Kêu" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "Nữa" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "Không ra tý tao díp facebook." + " " + name, mentions: arraytag})} , 10000);
 }