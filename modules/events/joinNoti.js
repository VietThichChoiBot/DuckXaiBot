module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event,Threads }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	const data = (await Threads.getData(event.threadID)).data || {};
    const checkban = data.banOut || []
	if  (checkban.includes(checkban[0])) return
	else if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BotMilo <3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(	`🔱 Kết nối thành công với Bot của Việt ! Bot hiện được vận hành và quản lý bởi Phạm Minh Việt. 🎉
👉 Bot vừa vào box sử dụng ${global.config.PREFIX}resend và ${global.config.PREFIX}rankup 2 lần để tránh bot spam dễn đến lag box

🍓 Thông tin cơ bản về bot: 
⚡️ Prefix: ${global.config.PREFIX}
👾 Danh sách lệnh: ${global.config.PREFIX}menu
⚱️ Liên hệ admin: ${global.config.PREFIX}callad
❌ Lưu ý: Không được chửi bot nhé !!

👙 Chúc các bạn sử dụng bot vui vẻ 💚`, threadID)
;	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `chao.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "🎉 Xin chào con vịt {name} 🦆\n\n⚡️ Chào mừng bạn đã đến với chuồng vịt 🦆 {threadName} 🐽\n\n🤩 {name} {type} là con vịt thứ {soThanhVien} của nhóm xàm xí đú này 🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}