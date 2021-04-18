let handler = async m => m.reply(`
*⺀ REGLAS DE USO ⺀*


*1:* No envies *SPAM* a *Lazari*. 


*2* No llames a *Lazari*


*○ 3:* No satures a *Lazari*. 



*4:* Nada de insultos hacia *Lazari*.



*5:* No Escribas Al Privado De *Lazari*


*6:* No Invites A Grupos A *Lazari*


*«SANCION PERMANENTE SIN DERECHO A APELACIÓN POR CUALQUIER INCUMPLIMIENTO DE LAS REGLAS»*

*Créditos Al Dios Poker Por Las Reglas*
                                        
`.trim()) 
handler.help = ['reglas']
handler.tags = ['info']
handler.command = /^reglas$/i

module.exports = handler
