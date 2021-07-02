let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Sweet Child O' Mine.mp3', '', 'Esta canción va dedicada para la chica más bella de la existencia, que Pikenny ama como a nadie y quiere estar por siempre y para siempre a su lado, Luna. Es la única que fue capaz de conquistar el corazón del Príncipe De La Destrucción luego de que parecía imposible que se volviese a enamorar alguna vez, logró entrar en aquel frío corazón y logró convertirlo en un lugar muy cálido y lleno de amor y pues esta canción va para ella de parte de Pikenny que verdaderamente la ama y quiere pasar el rwsgo de susu vvida aa lalado de ell)$/i

', m)

}

handler.customPrefix = /^(Luna)$/i

handler.command = new RegExp

handler.fail = null

handler.exp = 100

module.exports = handler
