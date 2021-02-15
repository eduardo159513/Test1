const education = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 SOBRE 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostra os detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostra usuários bloqueados
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostra todos os usuários do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostra a velocidade de conexão do bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reporta bugs para o dono
╿
┷┯ *〈 EDUCATION 〉*
   ╽
   ┠≽ *${prefix}wiki* <consulta>
   ┃ *Desc* : Procura de acordo com a Wikipédia [indo]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <consulta>
   ┃ *Desc* : Procura de acordo com a Wikipédia [english]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <text>
   ┃ *Desc* : Escreve um texto no livro
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : Envia uma pergunta aleatória
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : Envia uma pergunta aleatória2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <sonho>
   ┃ *Desc* : Envia uma interpretação do sonho
   ┠──────────────╼
   ┠≽ *${prefix}translate* <idioma>|<text>
   ┃ *Desc* : Traduz um texto
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <name>
   ┃ *Desc* : Interpreta um nome
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.education = education
