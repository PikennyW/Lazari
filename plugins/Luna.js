let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Sweet Child O' Mine.mp3', '', '(texto)', m)

}

handler.customPrefix = /^(Luna)$/i

handler.command = new RegExp

handler.fail = null

handler.exp = 100

module.exports = handler
