let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': true,
		'buka': true,
		'on': false,
		'1': false,
		'close': true,
		'tutup': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
contoh:
${usedPrefix + command} tutup
${usedPrefix + command} buka
	`.trim(), watermark, 'Buka', ',grup 1', 'Tutup', ',grup 0')
		throw false
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grup <buka/tutup>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.admin = true
handler.botAdmin = false
module.exports = handler
