let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '529984907794', '👑Samu330👑', m)
}
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler
