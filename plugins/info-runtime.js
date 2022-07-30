import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    conn.sendHydrated(m.chat, 
    `${htjava} *R U N T I M E* ${htjava}\n${muptime}\n`.trim(), 
wm, hwaifu.getRandom(), webs, 'Website', null, null, [
[`ᴏᴡɴᴇʀ`, `${usedPrefix}owner`],
[`ᴅᴏɴᴀᴛᴇ`, `${usedPrefix}donate`]
], m)

}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}