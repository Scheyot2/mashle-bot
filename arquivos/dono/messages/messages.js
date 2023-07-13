const colors = require("colors");
const fs = require('fs-extra');

//menu
exports.menu = (prefixobot, hr, pushname) => {
return`
╭───────╯•╰───────╮
│ [ *Informações* ]
│╭───•
││Prefixo: [ ${prefixobot} ]
││Hora: ${hr}
││Nome: ${pushname}
│╰───•
│
│ [ *Comandos* ]
│╭───•
││${prefixobot}Menulogos [ Banner ]
││${prefixobot}Menugp [ Grupo ]
││${prefixobot}Menuporno [ Premium ]
││${prefixobot}Brincadeira [ Grupo ]
│╰───•
│
│ [ *Criador* ]
│╭───•
││${prefixobot}Ping [ Dono ]
││${prefixobot}Limpar-pasta [ Dono ]
││${prefixobot}Prefixo-bot [ Dono ]
││${prefixobot}Reviver-qr [ Dono ]
│╰───•
│
│ [ *Principal* ]
│╭───•
││${prefixobot}Perfil [ Seus status ]
││${prefixobot}Status [ Ativar | Desativar ]
││${prefixobot}Atividades
││${prefixobot}Bug [ Problema ]
││${prefixobot}Sugestão [ Problema ]
││${prefixobot}Convite [ Link do grupo ]
│╰───•
│
│ [ *Pesquisas* ]
│╭───•
││${prefixobot}Clima [ Nome ]
││${prefixobot}Chatgpt [ Texto ]
││${prefixobot}Play [ Nome do vídeo ]
││${prefixobot}Play2 [ Nome do áudio ]
││${prefixobot}Playlist [ Nome do cantor ]
││${prefixobot}Playdoc [ Nome do documento ]
││${prefixobot}Tenor [ Nome ]
││${prefixobot}Pinterest [ Nome do imagem ]
│╰───•
│
│ [ *Geradores* ]
│╭───•
││${prefixobot}Link [ Gerar link ]
││${prefixobot}Nickname [ Gerar Nick ]
│╰───•
│
│ [ *Downloads* ]
│╭───•
││${prefixobot}Instagram_foto [ Cadê o link ]
││${prefixobot}Facebook_foto [ Cadê o link ]
││${prefixobot}Kwai [ Cadê o link ]
││${prefixobot}Down_v [ Cadê o link ]
││${prefixobot}Down_a [ Cadê o link ]
││${prefixobot}Mediafire [ Cadê o link ]
││${prefixobot}Soundcloud [ Cadê o link ]
│╰───•
│
│ [ *Diversão* ]
│╭───•
││${prefixobot}Dado [ Girar dados ]
││${prefixobot}Legends [ Capturar Legends ]
│╰───•
│
│ [ *Uploader* ]
│╭───•
││${prefixobot}Gif [ Tag de Figurinha ]
││${prefixobot}Toimg [ Tag de figurinha ]
│╰───•
│
│ [ *Emojis* ]
│╭───•
││${prefixobot}Emoji [ Emoji+Emoji ]
││${prefixobot}Emoji2 [ Emoji ]
││${prefixobot}Semoji [ Emoji | joypixels ]
│╰───•
│
│ [ *Stickers* ]
│╭───•
││${prefixobot}Qc [ Mensagem desejada ]
││${prefixobot}Exif [ Tag de figurinha ]
││${prefixobot}Stmy [ Tag de figurinha ]
││${prefixobot}Sticker [ Tag de imagem ]
││${prefixobot}Rename [ Tag o figurinha txt ]
│╰───•
╰───────╮•╭───────╯
`
}

//Grupo
exports.menugp = (prefixobot, hr, pushname) => {
return `
╭───────╯•╰───────╮
│ [ *Informações* ]
│╭───•
││Prefixo: [ ${prefixobot} ]
││Hora: ${hr}
││Nome: ${pushname}
│╰───•
│
│ [ *Configurar do grupo* ]
│╭───•
││${prefixobot}Grupo [ A | F ]
││${prefixobot}Abrir-gp [ 1 segundo ]
││${prefixobot}Fechar-gp [ 5 segundo ]
││${prefixobot}Set-desc [ Texto do descrição ]
││${prefixobot}Set-nome [ Texto do gp ]
││${prefixobot}Set-fotogp [ Img do gp ]
│╰───•
│
│ [ *Mensagens do bot pv* ]
│╭───•
││${prefixobot}Antipv_on 
││${prefixobot}Antipv_off 
││${prefixobot}Antipv [ 1 | 0 ]
│╰───•
│
│ [ *Dono* ]
│╭───•
││${prefixobot}Addprem [ Número ]
││${prefixobot}Delprem [ Número ]
││${prefixobot}Reviver [ Tag de msg  ]
││${prefixobot}Bangp [ Msg on ]
││${prefixobot}Unbangp [ Msg off ]
││${prefixobot}Seradm [ Promover ]
││${prefixobot}Sermembro [ Rebaixar ]
││${prefixobot}Listagp [ Dono ]
│╰───•
│
│ [ *Ativações* ]
│╭───•
││${prefixobot}Antidivu [ 1 | 0 ]
││${prefixobot}Antilink [ 1 | 0 ]
││${prefixobot}Antifake [ 1 | 0 ]
││${prefixobot}Bemvindo [ 1 | 0 ]
││${prefixobot}Bemvindo2 [ 1 | 0 ]
││${prefixobot}Modobrincadeira [ 1 | 0 ]
│╰───•
│
│ [ *Administrativo* ]
│╭───•
││${prefixobot}Add [ Número ]
││${prefixobot}Link-gp
││${prefixobot}Link-pv [ Tag ]
││${prefixobot}Limpar [ Limpeza do grupo ]
││${prefixobot}Hidetag [ Texto ]
││${prefixobot}Mute [ Tag ]
││${prefixobot}Delmute [ Tag ]
││${prefixobot}Delrm [ Número ]
││${prefixobot}Listanegra [ Número ]
││${prefixobot}Promover [ Tag ]
││${prefixobot}Rebaixar [ Tag ]
│╰───•
╰───────╮•╭───────╯
`
}

//Grupo
exports.menubrincadeiras = (prefixobot, hr, pushname) => {
return `
╭───────╯•╰───────╮
│ [ *Informações* ]
│╭───•
││Prefixo: [ ${prefixobot} ]
││Hora: ${hr}
││Nome: ${pushname}
│╰───•
│
│ [ *Jogos* ]
│╭───•
││${prefixobot}Batalha
││${prefixobot}Cassino
││${prefixobot}Resetforca
││${prefixobot}Jogodaforca 
│╰───•
│
│ [ *Porcentagem | Brincadeira* ]
│╭───•
││${prefixobot}Feio [ Tag ]
││${prefixobot}Lixo [ Tag ]
││${prefixobot}Gado [ Tag ]
││${prefixobot}Burro [ Tag ]
││${prefixobot}Gordo [ Tag ]
││${prefixobot}Pobre [ Tag ]
││${prefixobot}Bonito [ Tag ]
││${prefixobot}Macaco [ Tag ]
││${prefixobot}Gostoso [ Tag ]
│╰───•
╰───────╮•╭───────╯
`
}

exports.antis = (prefixobot, hr, pushname, isAntiPv, isAntilink, isAntifake, isAntiview, isAntiDivu, isWelcome, isWelcome2, isModobn) => {
return `
╭───────╯•╰───────╮
│ [ *Informações* ]
│╭───•
││Prefixo: [ ${prefixobot} ]
││Hora: ${hr}
││Nome: ${pushname}
│╰───•
│
│ [ *Info | Status* ]
│╭───•
││Antidivu: ${isAntiDivu ? 'Ativar' : 'Desativado'}
││Antipv: ${isAntiPv ? 'Ativar' : 'Desativado'}
││Antiview: ${isAntiview ? 'Ativar' : 'Desativado'}
││Antilink: ${isAntilink ? 'Ativar' : 'Desativado'}
││Antifake: ${isAntifake ? 'Ativar' : 'Desativado'}
││Bemvindo: ${isWelcome ? 'Ativar' : 'Desativado'}
││Bemvindo2: ${isWelcome2 ? 'Ativar' : 'Desativado'}
││Modobrincadeira: ${isModobn ? 'Ativar' : 'Desativado'}
│╰───•
╰───────╮•╭───────╯
`
}

exports.logos = (prefixobot, hr, pushname) => {
return `
╭───────╯•╰───────╮
│ [ *Informações* ]
│╭───•
││Prefixo: [ ${prefixobot} ]
││Hora: ${hr}
││Nome: ${pushname}
│╰───•
│
│ [ *Banner* ]
│╭───•
││${prefixobot}Gfx [ Texto ]
││${prefixobot}Gfx2 [ Texto ]
││${prefixobot}Gfx3 [ Texto | Texto ]
││${prefixobot}Gfx4 [ Texto | Texto ]
││${prefixobot}Gfx5 [ Texto ]
││${prefixobot}Gura [ Texto ]
│╰───•
│
│ [ *Maker* ]
│╭───•
││${prefixobot}Joker [ Texto ]
││${prefixobot}Glitch [ Texto ]
││${prefixobot}Itachi [ Texto ]
││${prefixobot}Izuku [ Texto ]
││${prefixobot}Inosuke [ Texto ]
││${prefixobot}Re-zero [ Texto ]
││${prefixobot}Satoru [ Texto ]
││${prefixobot}Shoto [ Texto ]
││${prefixobot}Shoto2 [ Texto ]
││${prefixobot}Mikey [ Texto ]
││${prefixobot}Kakashi [ Texto ]
││${prefixobot}Komi [ Texto ]
││${prefixobot}Batman [ Texto ]
││${prefixobot}Neon-Devil [ Texto ]
│╰───•
╰───────╮•╭───────╯
`
}

exports.menuporno = (prefixobot, hr, pushname) => {
return `
╭───────╯•╰───────╮
│ [ *Informações* ]
│╭───•
││Prefixo: [ ${prefixobot} ]
││Hora: ${hr}
││Nome: ${pushname}
│╰───•
│
│ [ *Pesquisas* ]
│╭───•
││${prefixobot}Hentaistube [ Nome ]
││${prefixobot}Assistitht [ Nome ]
││${prefixobot}Pornhub [ Nome ]
││${prefixobot}Pornogratis [ Nome ]
││${prefixobot}Hentai_sfm [ Sem Nome ]
││${prefixobot}Xvideos [ Nome ]
│╰───•
╰───────╮•╭───────╯
`
}

exports.dptr = (pushname, groupName, countMessage, ind, indnum, marcando_id, mentionedd, mek) => {
return `
╭───────╯•╰───────╮
│ [ *Perfil* ]
│╭───•
││Nome: ${pushname}
││Número: +${marcando_id.split("@")[0]}
││Grupo: ${groupName}
││Mensagens: ${countMessage[ind].numbers[indnum].messages}
││Comandos usados: ${countMessage[ind].numbers[indnum].cmd_messages}
│╰───•
╰───────╮•╭───────╯
`
}

exports.errado = (sender, prefixobot, comando) => {
return `╭───────╯•╰───────╮
│ [ *404* ]
│╭───•
││Número: @${sender.split("@")[0]}
││O comando: [ *${prefixobot}${comando}* ] não existe
│╰───•
╰───────╮•╭───────╯`
}

exports.pvfala = (banChats) => {
return `infelizmente não é permitido usar a bot no pv entre no nosso grupo:\n\nhttps://chat.whatsapp.com/IwMkpknwdzf2lOUAr4BqSp`
}

exports.bv = (anu) => {
return `Oiá, @${anu.participants[0].split("@")[0]} Seja bem-vindo(a) ao nosso grupo!\nEsperamos que curta o nosso conteúdo e compartilhe conhecimento para que todos no grupo possam aprender mais. Bem-vindo(a) de novo!\n\nAntes de prosseguir, por favor, *certifique-se de ler as regras do grupo* que estão na descrição.\n\nPara verificar o menu de comandos dos bots, utilize o comando: ${prefixobot}menu`
}

exports.bv2 = (anu) => {
return `Adeus, @${anu.participants[0].split("@")[0]} Vamos sentir saudades de você aqui! Desejamos tudo de bom e muito sucesso para você! Boa sorte!`
}

exports.textgp = (res) => {
return` [ Alteração nas configurações do grupo ]\n\nO grupo foi fechado pelo administrador, agora apenas o administrador pode enviar mensagens!`
}

exports.textgp2 = (res) => {
return ` [ Alteração nas configurações do grupo ]\n\nAs informações do grupo foram restritas, agora apenas o administrador pode editar as informações do grupo!`
}

exports.textgp3 = (res) => {
return ` [ Alteração nas configurações do grupo ]\n\nAs informações do grupo foram abertas, agora os participantes pode meditaras informações do grupo!`
}

exports.textgp4 = (res) => {
return ` [ Alteração nas configurações do grupo ]\nA mesa do grupo foi alterada para\n\nNova Descrição: ${res.desc=='undefined'?'':res.desc}`
}

exports.textgp5 = (res) => {
return ` [ Alteração nas configurações do grupo ]\nO link de convite do grupo foi alterado para\n\nNovo código de link de convite:\n\n${res.inviteCode=='undefined'?'':"https://chat.whatsapp.com/"+res.inviteCode}`
}

exports.textgp6 = (res) => {
return ` [ Alteração nas configurações do grupo ]\nO assunto do grupo foi alterado para\n\nNovo grupo de nome: ${res.subject}`
}

exports.textgp7 = (res) => {
return ` [ Alteração nas configurações do grupo ]\nO assunto do grupo foi alterado para\n\nNovo grupo de nome: ${res.subject}`
}

exports.registrou = (registro) => {
return `
╭───────╯•╰───────╮
│ [ *Registro* ]
│╭───•
││Nome: ${registro[s].nome}
││Idade: ${registro[s].idade}
││Grupo: ${registro[s].feito}
││Data: ${registro[s].data}
││Hora: ${registro[s].hora}
│╰───•
╰───────╮•╭───────╯
`
}

exports.playvideo = (res, result) => {
return `
╭───────╯•╰───────╮
│ [ *YouTube* ]
│╭───•
││Título: ${result.title}
││Tramando: ${result.size}
││Tipo: ${result.quality}
││Id: ${result.id}
│╰───•
╰───────╮•╭───────╯
`
}

exports.playaudio = (res, result) => {
return `
╭───────╯•╰───────╮
│ [ *YouTube* ]
│╭───•
││Título: ${result.title}
││Tramando: ${result.size}
││Tipo: ${result.quality}
││Id: ${result.id}
│╰───•
╰───────╮•╭───────╯
`
}

exports.pinng = (NomeDoBot, prefixobot, dono, NickDono, os, r, kyun, uptime, formatp, process, numGroups) => {
return `
╭───────╯•╰───────╮
│ [ *Informações bot* ]
│╭───•
││Prefix do bot: [ ${prefixobot} ]
││Nome do dono: ${NickDono}
││Número do dono: +${dono}
││Ping do bot: ${String(r.toFixed(3))}
││Tempo ativo: 
││${kyun(uptime)}
││Grupos: ${numGroups}
││Memó́ria usada: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
││Plataforma: ${os.platform()}
││Tipo de sistema: ${os.type()}
││Arquitetura do sistema: ${os.arch()}
││Hosting em: ${os.hostname()}
││Ram usada: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
│╰───•
╰───────╮•╭───────╯
`
}

exports.cassino = (cassino11, cassino22, cassino33, cassino44, cassino55, cassino66, cassino77, cassino88, cassino99, pushname, sender) => {
return `
╭───────╯•╰───────╮
│ [ *Usuário* ]
│╭───•
││Nome: ${pushname}
││Número: +${sender.split("@")[0]}
│╰───•
│
│ [ *Cassino* ]
│╭───•
││➧ ${cassino11} │ ${cassino22} │ ${cassino33}
││➧ ${cassino44} │ ${cassino55} │ ${cassino66} 
││➧ ${cassino77} │ ${cassino88} │ ${cassino99}		  				    
│╰───•
╰───────╮•╭───────╯
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})