let handler = async(m, { conn, text, usedPrefix, command }) => {
        let images = `https://api-xcoders.xyz/api/random/darkjoke?apikey=xcoders`
        let caption = `*⎔┉━「 Random darkjoke 」━┉⎔*
🤠 *Query* : ${command}`
        await conn.sendButton(m.chat, caption, wm, images, [['darkjoke', '/darkjoke']], m)
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i

export default handler