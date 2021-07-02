let handler = function (m) {

  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)

  this.sendContact(m.chat, '5196653383', '🔥☠️ 𝕻𝖗𝖎𝖓𝖈𝖊 𝕺𝖋 𝕯𝖊𝖘𝖙𝖗𝖚𝖈𝖙𝖎𝖔𝖓 ☠️🔥', m)

}

handler.help = ['owner' 'dueño']

handler.tags = ['info']

handler.command = /^(owner|dueño)$/i

module.exports = handler

