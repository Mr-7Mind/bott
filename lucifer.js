require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { JSDOM } = require('jsdom')
const primbon = new Primbon()
const { mediafireDl } = require('./lib/mediafire.js')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const cerpen = require('./lib/cerpen')
let footerwm = `Team EvilWhatsApp`
kiminumer = ''
awoktek = ''
jumlahkirim = 1
replybiasater = "Hehhh.. Seperti biasa... yang"

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let susunkata = db.data.game.susunkata = []

module.exports = kimimaru = async (kimimaru, m, chatUpdate, store) => {
try {
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]
const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ?/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await kimimaru.decodeJid(kimimaru.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await kimimaru.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const totalchat = await store.chats.all()
const replyowner = (texxxt) => {
kimimaru.sendMessage(`${global.owner}@s.whatsapp.net`, {text: texxxt}, {quoted: m})
}
const _uptime = process.uptime() * 1000
global.u = clockString(_uptime)
const reply = (tekss) => {
m.reply(tekss)
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
}

} catch (err) {
console.error(err)
}
// Public & Self
if (!kimimaru.public) {
if (!m.key.fromMe && !isCreator) return
}

// Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
const sendFileFromUrl = async (from, url, caption, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return kimimaru.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return kimimaru.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
}
if(mime.split("/")[0] === "image"){
return kimimaru.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return kimimaru.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return kimimaru.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    const week = d.toLocaleDateString(locale, { weekday: 'long' })
    const date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    const time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            kimimaru.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}tebaklagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
       if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}susunkata`, buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}tebakgambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}tebakkata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}caklontong`, buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}tebakkalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: `${prefix}tebaklirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kimimaru.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kimimaru.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: kimimaru.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, kimimaru.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
kimimaru.ev.emit('messages.upsert', msg)
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

if (command) {
 kimimaru.sendPresenceUpdate('recording', m.chat)
}

switch(command) {
case 'gcinfo': {
reply('Group INFO : https://chat.whatsapp.com/Gxjx1zWyqceDtaATwwJuhc')
}
break
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
kimimaru.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
kimimaru.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
kimimaru.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
kimimaru.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
kimimaru.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
kimimaru.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
kimimaru.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
kimimaru.sendMessage(m.chat, reactionMessage)
}
break  
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kimimaru.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await kimimaru.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'setexif': {
   if (!isCreator) throw mess.owner
   if (!text) throw `Example : ${prefix + command} packname|author`
  global.packname = text.split("|")[0]
  global.author = text.split("|")[1]
  reply(`Exif berhasil diubah menjadi\n\n⭓ Packname : ${global.packname}\n⭓ Author : ${global.author}`)
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kimimaru.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(`Success`)).catch((err) => reply(`Error`))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kimimaru.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`Success`)).catch((err) => reply(`Error`))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kimimaru.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(`Success`)).catch((err) => reply(`Error`))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin

let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kimimaru.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(`Success`)).catch((err) => reply(`Error`))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kimimaru.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kimimaru.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'

await kimimaru.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
  case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'

await kimimaru.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
  case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
await kimimaru.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
   case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`

let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
await kimimaru.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
➲ *Pesan : ${q ? q : '-'}*\n`
for (let mem of participants) {
teks += `➤ @${mem.id.split('@')[0]}\n`
}
kimimaru.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'tagall2': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
➲ *Pesan : ${q ? q : '-'}*\n`
for (let mem of participants) {
teks += `➟ @${mem.id.split('@')[0]}\n`
}
kimimaru.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'tagall3': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
➲ *Pesan : ${q ? q : '-'}*\n`
for (let mem of participants) {
teks += `➙ @${mem.id.split('@')[0]}\n`
}
kimimaru.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'tagall4': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
➲ *Pesan : ${q ? q : '-'}*\n`
for (let mem of participants) {
teks += `⬠ @${mem.id.split('@')[0]}\n`
}
kimimaru.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
kimimaru.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'style': case 'styletext': {

let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `⭓ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
   case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){

await kimimaru.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){

await kimimaru.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `Mode Group`, kimimaru.user.name, m)

 }
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
 if (args[0] === 'open'){
await kimimaru.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await kimimaru.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `Mode Edit Info`, kimimaru.user.name, m)

}
}
break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {

if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
reply(`Antilink Aktif !`)
} else if (args[0] === "off") {

if (!db.data.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
reply(`Antilink Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `Mode Antilink`, kimimaru.user.name, m)
}
 }
 break
 case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`${kimimaru.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`${kimimaru.user.name} telah di unmute di group ini !`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `Mute Bot`, kimimaru.user.name, m)
}
 }
 break
case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                kimimaru.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/9eb57e6285bd2b87ef5b1.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⥀➣ 15k Per Group via Dana/Gopay 1 Month\n⥀➣ 18k via pulsa 1 Month\n\n Premium Price Bot\n⥀➣ 8k per User 1 bulan\n\nPayment can be via Dana/Gopay/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/62895422499726 (Owner)\n\nDonate For Me : \n\n⥀➣ Saweria : https://saweria.co/IMAMMRTDHO` }, { quoted: m })
            }
            break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin

let response = await kimimaru.groupInviteCode(m.chat)
kimimaru.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {

await kimimaru.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {

await kimimaru.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'

kimimaru.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await kimimaru.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Group BOT',
url: 'https://chat.whatsapp.com/Kpmbb96E2V0JB7hOKURpuy'
}
}, {
quickReplyButton: {
displayText: 'S P E E D',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'A U T H O R',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'G R U P  I N F O',
id: 'gcinfo'
}
}]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  kimimaru.send5ButImg(i, txt, kimimaru.user.name, global.thumb, btn)
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Group BOT',
url: 'https://chat.whatsapp.com/Kpmbb96E2V0JB7hOKURpuy'
}
}, {
quickReplyButton: {
displayText: 'S T A T U S',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'A U T H O R',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'G R U P  I N F O',
id: 'gcinfo'
}
}]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  kimimaru.send5ButImg(yoi, txt, kimimaru.user.name, global.thumb, btn)
}
reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'

let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭓ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭓ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭓ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
kimimaru.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await kimimaru.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')

await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {

 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 kimimaru.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'listgc': {

 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await kimimaru.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 kimimaru.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'listonline': case 'liston': {
 
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
kimimaru.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭓ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {

let media = await quoted.download()
let encmedia = await kimimaru.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')

let media = await quoted.download()
let encmedia = await kimimaru.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'stickerwm': case 'swm': case 'stikerwm': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} packname|author`
if (!text) throw `Example: ${prefix + command} packname|author`
ppp = `${args.join(' ')}`
let packname2 = ppp.split('|')[0]
let author2 = ppp.split('|')[1]
if (/image/.test(mime)) {

let media = await quoted.download()
let encmedia = await kimimaru.sendImageAsSticker(m.chat, media, m, { packname: packname2, author: author2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')

let media = await quoted.download()
let encmedia = await kimimaru.sendVideoAsSticker(m.chat, media, m, { packname: packname2, author: author2 })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command} packname|author\nDurasi Video 1-9 Detik`
}
}
break
case 'takestick': case 'take': case 'takesticker': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} packname|author`
if (!text) throw `Example: ${prefix + command} packname|author`
ppp = `${args.join(' ')}`
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
if (/webp/.test(mime)) {

let media = await quoted.download()
let encmedia = await kimimaru.sendImageAsSticker(m.chat, media, m, { packname: packname1, author: author1 })
await fs.unlinkSync(encmedia)
} else {
throw `Reply Stiker Dengan Caption ${prefix + command} packname|author\nDurasi Video 1-9 Detik`
}
}
break
case 'ebinary': {
if (!text) throw `Example : ${prefix + command} text`

let { eBinary } = require('./lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
case 'dbinary': {
if (!text) throw `Example : ${prefix + command} text`

let { dBinary } = require('./lib/binary')
let db = await dBinary(text)
reply(db)
}
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {

let encmedia = await kimimaru.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
      case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
let respond = `Kirim/reply image dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await kimimaru.downloadAndSaveMediaMessage(quoted)
let { TelegraPh } = require('./lib/uploader')
let fatGans = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
let FaTiH = await kimimaru.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
   break 
 case 'wasted': case 'passed': case 'jail': case 'comrade': case 'triggered': case 'simpcard': case 'horny': case 'lolice': {
 let respond = `Kirim/reply image dengan caption ${prefix + command}`
if (!/image/.test(mime)) throw respond
 let dwnld = await kimimaru.downloadAndSaveMediaMessage(quoted)
let { TelegraPh } = require('./lib/uploader')
let fatGans = await TelegraPh(dwnld)
let canv = `https://api-kimimaru.herokuapp.com/api/canvas/${command}?apikey=k1mimaru&url=${fatGans}`
let FaTiH = await kimimaru.sendImageAsSticker(m.chat, canv, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
 }
 break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`

let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kimimaru.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`

let { webp2mp4File } = require('./lib/uploader')
let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await kimimaru.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
kimimaru.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
kimimaru.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kimimaru.user.name}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
kimimaru.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`

let { webp2mp4File } = require('./lib/uploader')
let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await kimimaru.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {

let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {

let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`

let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await kimimaru.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
remobg.removeBackgroundFromImageFile({
  path: localFile,
  apiKey: apinobg,
  size: "regular",
  type: "auto",
  scale: "100%",
  outputFile 
}).then(async result => {
kimimaru.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`

let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭓ No : ${no++}\n⭓ Type : ${i.type}\n⭓ Video ID : ${i.videoId}\n⭓ Title : ${i.title}\n⭓ Views : ${i.views}\n⭓ Duration : ${i.timestamp}\n⭓ Upload At : ${i.ago}\n⭓ Author : ${i.author.name}\n⭓ Url : ${i.url}\n\n─────────────────\n\n`
}
kimimaru.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭓ *Title* : ${g.title}\n`
teks += `⭓ *Description* : ${g.snippet}\n`
teks += `⭓ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'gimage': {
if (!text) throw `Example : ${prefix + command} kaori cicak`

let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: kimimaru.user.name,
buttons: buttons,
headerType: 4
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`

let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'A U D I O'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'V I D E O'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭓ Title : ${anu.title}
⭓ Ext : Search
⭓ ID : ${anu.videoId}
⭓ Duration : ${anu.timestamp}
⭓ Viewers : ${anu.views}
⭓ Upload At : ${anu.ago}
⭓ Author : ${anu.author.name}
⭓ Channel : ${anu.author.url}
⭓ Description : ${anu.description}
⭓ Url : ${anu.url}`,
footer: kimimaru.user.name,
buttons: buttons,
headerType: 4
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`

let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 1000000) return reply('File Melebihi Batas '+util.format(media))
kimimaru.sendImage(m.chat, media.thumb, `⭓ Title : ${media.title}\n⭓ File Size : ${media.filesizeF}\n⭓ Url : ${isUrl(text)}\n⭓ Ext : MP3\n⭓ Resolusi : ${args[1] || '128kbps'}`, m)
kimimaru.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`

let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kimimaru.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭓ Title : ${media.title}\n⭓ File Size : ${media.filesizeF}\n⭓ Url : ${isUrl(text)}\n⭓ Ext : MP3\n⭓ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kimimaru.sendImage(m.chat, media.thumb, `⭓ Title : ${media.title}\n⭓ File Size : ${media.filesizeF}\n⭓ Url : ${urls[text - 1]}\n⭓ Ext : MP3\n⭓ Resolusi : ${args[1] || '128kbps'}`, m)
kimimaru.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`

let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kimimaru.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭓ Title : ${media.title}\n⭓ File Size : ${media.filesizeF}\n⭓ Url : ${urls[text - 1]}\n⭓ Ext : MP3\n⭓ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'pinterest': {
try {
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
kimimaru.sendMessage(m.chat, { image: { url: result }, caption: '⭓ Media Url : '+result }, { quoted: m })
} catch (e) {
m.reply(e)
}
}
break
case 'couple': {

let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kimimaru.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
kimimaru.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffe': case 'kopi': {

let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: kimimaru.user.name,
buttons: buttons,
headerType: 4
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wallpaper': {
if (!text) throw 'Masukkan Query Title'

let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭓ Title : ${result.title}\n⭓ Category : ${result.type}\n⭓ Detail : ${result.source}\n⭓ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: kimimaru.user.name,
buttons: buttons,
headerType: 4
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': {
if (!text) throw 'Masukkan Query Title'

let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭓ Title : ${result.title}\n⭓ Source : ${result.source}\n⭓ Media Url : ${result.image}`,
footer: kimimaru.user.name,
buttons: buttons,
headerType: 4
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesanime': case 'quoteanime': {

let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nomor HP :* ${anu.message.nomer_hp}\n⭓ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭓ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭓ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Mimpi :* ${anu.message.mimpi}\n⭓ *Arti :* ${anu.message.arti}\n⭓ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005, Kaguya, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭓ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭓ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭓ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭓ *Hasil :* ${anu.message.result}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005, Kaguya, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭓ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭓ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭓ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭓ *Hasil :* ${anu.message.result}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005, Kaguya, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama Suami :* ${anu.message.suami.nama}\n⭓ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭓ *Nama Istri :* ${anu.message.istri.nama}\n⭓ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭓ *Hasil :* ${anu.message.result}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005, Kaguya, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭓ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭓ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭓ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭓ *Sisi Positif :* ${anu.message.sisi_positif}\n⭓ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + command} Kimimaru Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama :* ${anu.message.nama}\n⭓ *Arti :* ${anu.message.arti}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama :* ${anu.message.nama}\n⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Life Path :* ${anu.message.life_path}\n⭓ *Destiny :* ${anu.message.destiny}\n⭓ *Destiny Desire :* ${anu.message.destiny_desire}\n⭓ *Personality :* ${anu.message.personality}\n⭓ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Kimimaru|Kaguya`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)

kimimaru.sendImage(m.chat,  anu.message.gambar, `⭓ *Nama Anda :* ${anu.message.nama_anda}\n⭓ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭓ *Sisi Positif :* ${anu.message.sisi_positif}\n⭓ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'tiktoknowm': {
if (!text) return reply('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link Invalid!'
var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
})
console.log(res)

yeoii = await getBuffer(`${res.result.nowatermark}`)
kimimaru.sendMessage(m.chat, { video: yeoii, caption: `Nih Banh`}, {quoted: m})
}
break
case 'tt': {
if (!text) return reply('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link Invalid!'
var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
})
console.log(res)

yeoii = await getBuffer(`${res.result.nowatermark}`)
kimimaru.sendMessage(m.chat, { video: yeoii, caption: `Nih Banh`}, {quoted: m})
}
break
case 'tiktok': {
if (!text) return reply('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link Invalid!'
var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
})
console.log(res)

yeoii = await getBuffer(`${res.result.nowatermark}`)
kimimaru.sendMessage(m.chat, { video: yeoii, caption: `Nih Banh`}, {quoted: m})
}
break
case 'tiktokwm': {
if (!text) return reply('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link Invalid!'
var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
})
console.log(res)

yeoi = await getBuffer(`${res.result.watermark}`)
kimimaru.sendMessage(m.chat, { video: yeoi, caption: `Nih Banh`}, {quoted: m})
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭓ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Lahir :* ${anu.message.hari_lahir}\n⭓ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Lahir :* ${anu.message.hari_lahir}\n⭓ *Rezeki :* ${anu.message.rejeki}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Lahir :* ${anu.message.hari_lahir}\n⭓ *Pekerjaan :* ${anu.message.pekerjaan}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Analisa :* ${anu.message.analisa}\n⭓ *Angka Akar :* ${anu.message.angka_akar}\n⭓ *Sifat :* ${anu.message.sifat}\n⭓ *Elemen :* ${anu.message.elemen}\n⭓ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Analisa :* ${anu.message.analisa}\n⭓ *Sektor :* ${anu.message.sektor}\n⭓ *Elemen :* ${anu.message.elemen}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendImage(m.chat, anu.message.image, `⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭓ *Arti :* ${anu.message.arti}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama :* ${anu.message.nama}\n⭓ *Lahir :* ${anu.message.tahun_lahir}\n⭓ *Gender :* ${anu.message.jenis_kelamin}\n⭓ *Angka Kua :* ${anu.message.angka_kua}\n⭓ *Kelompok :* ${anu.message.kelompok}\n⭓ *Karakter :* ${anu.message.karakter}\n⭓ *Sektor Baik :* ${anu.message.sektor_baik}\n⭓ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭓ *Info :* ${anu.message.info}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Hasil :* ${anu.message.result}\n⭓ *Info :* ${anu.message.info}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Hari Lahir :* ${anu.message.hari_lahir}\n⭓ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭓ *Hari Naas :* ${anu.message.hari_naas}\n⭓ *Info :* ${anu.message.catatan}\n⭓ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Hari Lahir :* ${anu.message.hari_lahir}\n⭓ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭓ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Hari Lahir :* ${anu.message.hari_lahir}\n⭓ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭓ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama :* ${anu.message.nama}\n⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭓ *Hasil :* ${anu.message.result}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Tanggal :* ${anu.message.tanggal}\n⭓ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭓ *Watak Hari :* ${anu.message.watak_hari}\n⭓ *Naga Hari :* ${anu.message.naga_hari}\n⭓ *Jam Baik :* ${anu.message.jam_baik}\n⭓ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama :* ${anu.message.nama}\n⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Kimimaru, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Nama :* ${anu.message.nama}\n⭓ *Lahir :* ${anu.message.tgl_lahir}\n⭓ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Tanggal :* ${anu.message.tgl_memancing}\n⭓ *Hasil :* ${anu.message.result}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Hasil :* ${anu.message.result}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Zodiak :* ${anu.message.zodiak}\n⭓ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭓ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭓ *Planet :* ${anu.message.planet_yang_mengitari}\n⭓ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭓ *Warna :* ${anu.message.warna_keberuntungan}\n⭓ *Batu :* ${anu.message.batu_keberuntungan}\n⭓ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭓ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭓ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)

kimimaru.sendText(m.chat, `⭓ *Hasil :* ${anu.message}`, m)
}
break
case 'umma': case 'ummadl': {
if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`

let { umma } = require('./lib/scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `
⭓ Title : ${anu.title}
⭓ Author : ${anu.author.name}
⭓ Like : ${anu.like}
⭓ Caption : ${anu.caption}
⭓ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
footer: kimimaru.user.name,
buttons,
headerType: 4
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
kimimaru.sendMessage(m.chat, { image: { url }, caption: `⭓ Title : ${anu.title}\n⭓ Author : ${anu.author.name}\n⭓ Like : ${anu.like}\n⭓ Caption : ${anu.caption}` }, { quoted: m })
})
}
}
break
case 'ringtone': {
if (!text) throw `Example : ${prefix + command} black rover`

let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
kimimaru.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh

yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
kimimaru.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
}
break
case 'juzamma': {
if (args[0] === 'pdf') {

kimimaru.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {

kimimaru.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {

kimimaru.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {

kimimaru.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case '1917':
case 'abstra':
case 'american':
case 'advanced':
case 'balloon1':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'bear':
case 'blackpink':
case 'biscuit':
case 'bagel':
case 'box':
case 'bokeh':
case 'blood':
case 'blood2':
case 'bread':
case 'berry':
case 'brokenglass':
case 'captainamerika':
case 'chrome':
case 'carbon':
case 'candy':
case 'cake':
case 'circuit':
case 'christmas':
case 'denim':
case 'deluxe':
case 'deluxe2':
case 'decorate':
case 'decorate2':
case 'decorativeglass':
case 'dropwater':
case 'embossed':		
case 'firework':
case 'equalizer':
case 'glossy':
case 'glossy2':
case 'glossy3':
case 'graffiti':
case 'gradient':
case 'gradient2':
case 'glitch':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'gem1':
case 'gem2':
case 'glue':
case 'glass1':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'glass9':
case 'gloss':
case 'hexa':
case 'halloween':
case 'halloween2':
case 'halloween3':
case 'horror':	
case 'horror2':
case 'harrypotter':
case 'holographic':
case 'honey':	
case 'ice':
case 'jewelry1':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'jewelry9':
case 'jewelry10':
case 'jewelry11':
case 'jewelry12':
case 'jewelry13':
case 'jewelry14':
case 'jewelry15':
case 'joker':
case 'juice':
case 'koi':
case 'leaves':
case 'luxury':
case 'lava':
case 'magma':
case 'metallic':
case 'metal1':
case 'metal2':
case 'metal3':
case 'metal4':
case 'metal5':
case 'metal6':
case 'metal7':
case 'metal8':
case 'metal9':
case 'marble':
case 'marble2':
case 'minion':
case 'matrix':
case 'neon1':
case 'neon2':
case 'neon3':
case 'neon4':
case 'neon5':
case 'neon6':
case 'neon7':
case 'pipe':
case 'papercut1':
case 'papercut2':
case 'fabric':
case 'plastic':
case 'rock':
case 'rainbow':
case 'robot':
case 'rusty':
case 'sci-fi':
case 'sci-fi2':
case 'space':
case 'sketch':
case 'science':
case 'stone1':
case 'stone2':
case 'shiny':
case 'strawberry':
case 'skeleton':
case 'steel':
case 'sand1':
case 'sand2':
case 'sand3':
case 'sand4':
case 'snow':
case 'thunder':
case 'thunder2':
case 'transformer':
case 'technology':
case 'toxic':
case 'underwater':
case 'wicker':
case 'watercolor':
case 'wood':
case 'warning':
case 'wall':
case 'xmas': {
if (args.length < 1) return reply(`teksnya mana bruh?`)
reply(mess.wait)
kty = await fetchJson(`https://api-kimimaru.herokuapp.com/api/textpro/${command}?apikey=k1mimaru&text=${text}`)
mmy = await getBuffer(kty.result)
kimimaru.sendMessage(m.chat, { image: mmy, caption: `Success`}, { quoted: m } )
}
break
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'inori':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kaga':
case 'kagura':
case 'kakashi':
case 'kaneki':
case 'kaori':
case 'kotori':
case 'kurumi':
case 'madara':
case 'megumin':
case 'mikasa':
case 'miku':
case 'minato':
case 'naruto':
case 'neko':
case 'nekonime':
case 'nezuko':
case 'onepiece':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'shota':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'waifu':
case 'waifu2':
case 'yotsuba':
case 'yuki':
case 'yumeko':{
reply(mess.wait)
kty = await getBuffer(`https://api-kimimaru.herokuapp.com/api/anime/${command}?apikey=k1mimaru`)
let buttons = [ {buttonId: `${prefix}${command}`, buttonText: {displayText: `Next`}, type: 1}
]
let buttonMessage = {
image: kty,
caption: `Success`,
footer: `${footerwm}`,
buttons: buttons,
headerType: 4,
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'cerpen':{
if (!text) return reply('Masukkan judul cerpen yang tersedia lihat di listcerpen')
tagcerp = ["anak","bahasa daerah","bahasa inggrisKak","bahasa jawa","bahasa sunda","budaya","cinta","cinta islami","cinta pertama","cinta romantis","cinta sedih","cinta segitiga","cinta sejati","galau","galau","gokil","inspiratif","jepang","kehidupan","keluarga","kisah nyata","korea","kristen","liburan","lingkungan","lucu","malaysia","mengharukan","misteri","motivasi","nasihat","nasionalisme","olahraga","patah hati","penantian","pendidikan","pengalaman pribadi","pengorbanan","perjuangan","penyesalan","perpisahan","persahabatan","petualangan","ramadhan","remaja","renungan","rindu","rohani","romantis","sastra","sedih","sejarah","slice of life","terjemahan","thriller"]
if (!tagcerp.includes(text)) return reply('Masukkan judul cerpen yang tersedia lihat di listcerpen')
let cerpe = await cerpen(text)
await reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`

try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
//Fixed Alquran Apikey
let res = await fetchJson(`https://api-kimimaru.herokuapp.com/api/muslim/quran?surah=${args[0]}&ayat=${args[1]}&apikey=k1mimaru`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
kimimaru.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`

let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {

let media = await kimimaru.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
kimimaru.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case 'mediafire': {
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(`Invalid Link!`)

teks = args.join(' ')
res = await mediafireDl(teks)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*Data Berhasil Didapatkan!*
\`\`\`≻  Nama : ${res[0].nama}\`\`\`
\`\`\`≻  Ukuran : ${res[0].size}\`\`\`
\`\`\`≻  Link : ${res[0].link}\`\`\`
`
reply(result)
hasilbuff = await getBuffer(res[0].link)
kimimaru.sendMessage(m.chat, {document: hasilbuff, mimetype: 'application/zip'}, {quoted: m})
  }
break
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`

let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
case 'ebase64': {
if (!text) throw `Teksnya?`
ebas64 = await fetchJson(`https://api-kimimaru.herokuapp.com/api/base?apikey=k1mimaru&type=base64&encode=${text}`)
reply(ebas64.result.encode)
}
break
case 'ebase32': {
if (!text) throw `Teksnya?`
ebas64 = await fetchJson(`https://api-kimimaru.herokuapp.com/api/base?apikey=k1mimaru&type=base32&encode=${text}`)
reply(ebas64.result.encode)
}
break
case 'dbase64': {
if (!text) throw `Teksnya?`
ebas64 = await fetchJson(`https://api-kimimaru.herokuapp.com/api/base?apikey=k1mimaru&type=base64&decode=${text}`)
reply(ebas64.result.string)
}
break
case 'dbase32': {
if (!text) throw `Teksnya?`
ebas64 = await fetchJson(`https://api-kimimaru.herokuapp.com/api/base?apikey=k1mimaru&type=base32&decode=${text}`)
reply(ebas64.result.string)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`

if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'  
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
case 'listcmd': {

let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
kimimaru.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`

let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`

kimimaru.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)

delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'public': {
if (!isCreator) throw mess.owner
kimimaru.public = true
reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator) throw mess.owner
kimimaru.public = false
reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'speed': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_
`.trim()
reply(respon)
}
break
case 'runtime': {
respon = `Runtime : ${runtime(process.uptime())}`.trim()
reply(respon)
}
break
case 'speedtest': {
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python speed.py')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
case 'owner': case 'creator': {
kimimaru.sendContact(m.chat, global.owner, m)
}
break
case 'menu': {
smb = `│`
noy = `⼽`
petik = '```'
anu = `╭══〘 歹𝐵𝑜𝑡 𝑀𝑟-𝟩𝑀𝑖𝑛𝑑 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│Runtime: ${global.u}
│Name: 𝙼𝚛.𝟽𝙼𝚒𝚗𝚍 𝙱𝚘𝚝
│Day: ${week}
│Date: ${date}
│Time: ${time}
│Dateislamic: ${dateIslamic}
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡歹𝐵𝑜𝑡 𝑀𝑟-𝟩𝑀𝑖𝑛𝑑╞══╯
╭─────────────╮
│ *𓆊 DOWNLOADER MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}ytmp3
${smb}${noy} ${prefix}ytmp4
${smb}${noy} ${prefix}getmusic
${smb}${noy} ${prefix}getvideo
${smb}${noy} ${prefix}umma
${smb}${noy} ${prefix}tiktokwm
${smb}${noy} ${prefix}tiktoknowm
${smb}${noy} ${prefix}mediafire
${smb}${noy} ${prefix}play
${smb}${noy} ${prefix}google
${smb}${noy} ${prefix}gimage
${smb}${noy} ${prefix}pinterest
${smb}${noy} ${prefix}wallpaper
${smb}${noy} ${prefix}wikimedia
${smb}${noy} ${prefix}ytsearch
${smb}${noy} ${prefix}ringtone
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊  ANONYMOUS 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}anonymous
${smb}${noy} ${prefix}start
${smb}${noy} ${prefix}next
${smb}${noy} ${prefix}keluar
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 GROUP MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}linkgroup
${smb}${noy} ${prefix}ephemeral
${smb}${noy} ${prefix}setppgc
${smb}${noy} ${prefix}setname
${smb}${noy} ${prefix}setdesc
${smb}${noy} ${prefix}group
${smb}${noy} ${prefix}editinfo
${smb}${noy} ${prefix}add
${smb}${noy} ${prefix}kick
${smb}${noy} ${prefix}hidetag
${smb}${noy} ${prefix}hidetag2
${smb}${noy} ${prefix}hidetag3
${smb}${noy} ${prefix}hidetag4
${smb}${noy} ${prefix}tagall
${smb}${noy} ${prefix}antilink
${smb}${noy} ${prefix}mute
${smb}${noy} ${prefix}promote
${smb}${noy} ${prefix}demote
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 PRIMBON MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}nomorhoki
${smb}${noy} ${prefix}artimimpi
${smb}${noy} ${prefix}artinama
${smb}${noy} ${prefix}ramaljodoh
${smb}${noy} ${prefix}ramaljodohbali
${smb}${noy} ${prefix}suamiistri
${smb}${noy} ${prefix}ramalcinta
${smb}${noy} ${prefix}cocoknama
${smb}${noy} ${prefix}pasangan
${smb}${noy} ${prefix}jadiannikah
${smb}${noy} ${prefix}sifatusaha
${smb}${noy} ${prefix}rezeki
${smb}${noy} ${prefix}pekerjaan
${smb}${noy} ${prefix}nasib
${smb}${noy} ${prefix}penyakit
${smb}${noy} ${prefix}tarot
${smb}${noy} ${prefix}fengshui
${smb}${noy} ${prefix}haribaik
${smb}${noy} ${prefix}harisangar
${smb}${noy} ${prefix}harisial
${smb}${noy} ${prefix}nagahari
${smb}${noy} ${prefix}arahrezeki
${smb}${noy} ${prefix}peruntungan
${smb}${noy} ${prefix}weton
${smb}${noy} ${prefix}karakter
${smb}${noy} ${prefix}keberuntungan
${smb}${noy} ${prefix}memancing
${smb}${noy} ${prefix}masasubur
${smb}${noy} ${prefix}zodiak
${smb}${noy} ${prefix}shio
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 MAIN MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}ping
${smb}${noy} ${prefix}runtime
${smb}${noy} ${prefix}owner
${smb}${noy} ${prefix}menu
${smb}${noy} ${prefix}listpc
${smb}${noy} ${prefix}listgc
${smb}${noy} ${prefix}listonline
${smb}${noy} ${prefix}speedtest
${smb}${noy} ${prefix}delete
${smb}${noy} ${prefix}infochat
${smb}${noy} ${prefix}quoted
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 TOOLS MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}toimage
${smb}${noy} ${prefix}removebg
${smb}${noy} ${prefix}sticker
${smb}${noy} ${prefix}stickerwm
${smb}${noy} ${prefix}take
${smb}${noy} ${prefix}emojimix
${smb}${noy} ${prefix}tovideo
${smb}${noy} ${prefix}togif
${smb}${noy} ${prefix}tourl
${smb}${noy} ${prefix}tovn
${smb}${noy} ${prefix}tomp3
${smb}${noy} ${prefix}toaudio
${smb}${noy} ${prefix}ebinary
${smb}${noy} ${prefix}dbinary
${smb}${noy} ${prefix}ebase64
${smb}${noy} ${prefix}ebase32
${smb}${noy} ${prefix}dbase64
${smb}${noy} ${prefix}dbase32
${smb}${noy} ${prefix}styletext
${smb}${noy} ${prefix}smeme
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 DATABASE MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}setcmd
${smb}${noy} ${prefix}listcmd
${smb}${noy} ${prefix}delcmd
${smb}${noy} ${prefix}lockcmd
${smb}${noy} ${prefix}addmsg
${smb}${noy} ${prefix}listmsg
${smb}${noy} ${prefix}getmsg
${smb}${noy} ${prefix}delmsg
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 ISLAMIC MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}iqra
${smb}${noy} ${prefix}hadist
${smb}${noy} ${prefix}alquran
${smb}${noy} ${prefix}juzamma
${smb}${noy} ${prefix}tafsirsurah
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 AUDIO EFFECTS MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}bass
${smb}${noy} ${prefix}blown
${smb}${noy} ${prefix}deep
${smb}${noy} ${prefix}earrape
${smb}${noy} ${prefix}fast
${smb}${noy} ${prefix}fat
${smb}${noy} ${prefix}nightcore
${smb}${noy} ${prefix}reverse
${smb}${noy} ${prefix}robot
${smb}${noy} ${prefix}slow
${smb}${noy} ${prefix}tupai
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 FUN MENU  𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}halah
${smb}${noy} ${prefix}hilih
${smb}${noy} ${prefix}huluh
${smb}${noy} ${prefix}heleh
${smb}${noy} ${prefix}holoh
${smb}${noy} ${prefix}jadian
${smb}${noy} ${prefix}jodohku
${smb}${noy} ${prefix}susunkata
${smb}${noy} ${prefix}tebaklagu
${smb}${noy} ${prefix}tebakkata
${smb}${noy} ${prefix}tebaklirik
${smb}${noy} ${prefix}tebakkalimat
${smb}${noy} ${prefix}tebakgambar
${smb}${noy} ${prefix}caklontong
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 OWNER MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}react
${smb}${noy} ${prefix}chat
${smb}${noy} ${prefix}join
${smb}${noy} ${prefix}leave
${smb}${noy} ${prefix}block
${smb}${noy} ${prefix}unblock
${smb}${noy} ${prefix}bcgroup
${smb}${noy} ${prefix}bcall
${smb}${noy} ${prefix}setppbot
${smb}${noy} ${prefix}setexif
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 TEXTPRO MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}1917
${smb}${noy} ${prefix}abstra
${smb}${noy} ${prefix}american
${smb}${noy} ${prefix}advanced
${smb}${noy} ${prefix}balloon1
${smb}${noy} ${prefix}balloon2
${smb}${noy} ${prefix}balloon3
${smb}${noy} ${prefix}balloon4
${smb}${noy} ${prefix}balloon5
${smb}${noy} ${prefix}balloon6
${smb}${noy} ${prefix}balloon7
${smb}${noy} ${prefix}bear
${smb}${noy} ${prefix}blackpink
${smb}${noy} ${prefix}biscuit
${smb}${noy} ${prefix}bagel
${smb}${noy} ${prefix}box
${smb}${noy} ${prefix}bokeh
${smb}${noy} ${prefix}blood
${smb}${noy} ${prefix}blood2
${smb}${noy} ${prefix}bread
${smb}${noy} ${prefix}berry
${smb}${noy} ${prefix}brokenglass
${smb}${noy} ${prefix}captainamerika
${smb}${noy} ${prefix}chrome
${smb}${noy} ${prefix}carbon
${smb}${noy} ${prefix}candy
${smb}${noy} ${prefix}cake
${smb}${noy} ${prefix}circuit
${smb}${noy} ${prefix}christmas
${smb}${noy} ${prefix}denim
${smb}${noy} ${prefix}deluxe
${smb}${noy} ${prefix}deluxe2
${smb}${noy} ${prefix}decorate
${smb}${noy} ${prefix}decorate2
${smb}${noy} ${prefix}decorativeglass
${smb}${noy} ${prefix}dropwater
${smb}${noy} ${prefix}embossed
${smb}${noy} ${prefix}firework
${smb}${noy} ${prefix}equalizer
${smb}${noy} ${prefix}glossy
${smb}${noy} ${prefix}glossy2
${smb}${noy} ${prefix}glossy3
${smb}${noy} ${prefix}graffiti
${smb}${noy} ${prefix}gradient
${smb}${noy} ${prefix}gradient2
${smb}${noy} ${prefix}glitch
${smb}${noy} ${prefix}glitter
${smb}${noy} ${prefix}glitter2
${smb}${noy} ${prefix}glitter3
${smb}${noy} ${prefix}glitter4
${smb}${noy} ${prefix}glitter5
${smb}${noy} ${prefix}glitter6
${smb}${noy} ${prefix}glitter7
${smb}${noy} ${prefix}gem1
${smb}${noy} ${prefix}gem2
${smb}${noy} ${prefix}glue
${smb}${noy} ${prefix}glass1
${smb}${noy} ${prefix}glass2
${smb}${noy} ${prefix}glass3
${smb}${noy} ${prefix}glass4
${smb}${noy} ${prefix}glass5
${smb}${noy} ${prefix}glass6
${smb}${noy} ${prefix}glass7
${smb}${noy} ${prefix}glass8
${smb}${noy} ${prefix}glass9
${smb}${noy} ${prefix}gloss
${smb}${noy} ${prefix}hexa
${smb}${noy} ${prefix}halloween
${smb}${noy} ${prefix}halloween2
${smb}${noy} ${prefix}halloween3
${smb}${noy} ${prefix}horror
${smb}${noy} ${prefix}horror2
${smb}${noy} ${prefix}harrypotter
${smb}${noy} ${prefix}holographic
${smb}${noy} ${prefix}honey
${smb}${noy} ${prefix}ice
${smb}${noy} ${prefix}jewelry1
${smb}${noy} ${prefix}jewelry2
${smb}${noy} ${prefix}jewelry3
${smb}${noy} ${prefix}jewelry4
${smb}${noy} ${prefix}jewelry5
${smb}${noy} ${prefix}jewelry6
${smb}${noy} ${prefix}jewelry7
${smb}${noy} ${prefix}jewelry8
${smb}${noy} ${prefix}jewelry9
${smb}${noy} ${prefix}jewelry10
${smb}${noy} ${prefix}jewelry11
${smb}${noy} ${prefix}jewelry12
${smb}${noy} ${prefix}jewelry13
${smb}${noy} ${prefix}jewelry14
${smb}${noy} ${prefix}jewelry15
${smb}${noy} ${prefix}joker
${smb}${noy} ${prefix}juice
${smb}${noy} ${prefix}koi
${smb}${noy} ${prefix}leaves
${smb}${noy} ${prefix}luxury
${smb}${noy} ${prefix}lava
${smb}${noy} ${prefix}magma
${smb}${noy} ${prefix}metallic
${smb}${noy} ${prefix}metal1
${smb}${noy} ${prefix}metal2
${smb}${noy} ${prefix}metal3
${smb}${noy} ${prefix}metal4
${smb}${noy} ${prefix}metal5
${smb}${noy} ${prefix}metal6
${smb}${noy} ${prefix}metal7
${smb}${noy} ${prefix}metal8
${smb}${noy} ${prefix}metal9
${smb}${noy} ${prefix}marble
${smb}${noy} ${prefix}marble2
${smb}${noy} ${prefix}minion
${smb}${noy} ${prefix}matrix
${smb}${noy} ${prefix}neon1
${smb}${noy} ${prefix}neon2
${smb}${noy} ${prefix}neon3
${smb}${noy} ${prefix}neon4
${smb}${noy} ${prefix}neon5
${smb}${noy} ${prefix}neon6
${smb}${noy} ${prefix}neon7
${smb}${noy} ${prefix}pipe
${smb}${noy} ${prefix}papercut1
${smb}${noy} ${prefix}papercut2
${smb}${noy} ${prefix}fabric
${smb}${noy} ${prefix}plastic
${smb}${noy} ${prefix}rock
${smb}${noy} ${prefix}rainbow
${smb}${noy} ${prefix}robot
${smb}${noy} ${prefix}rusty
${smb}${noy} ${prefix}sci-fi
${smb}${noy} ${prefix}sci-fi2
${smb}${noy} ${prefix}space
${smb}${noy} ${prefix}sketch
${smb}${noy} ${prefix}science
${smb}${noy} ${prefix}stone1
${smb}${noy} ${prefix}stone2
${smb}${noy} ${prefix}shiny
${smb}${noy} ${prefix}strawberry
${smb}${noy} ${prefix}skeleton
${smb}${noy} ${prefix}steel
${smb}${noy} ${prefix}sand1
${smb}${noy} ${prefix}sand2
${smb}${noy} ${prefix}sand3
${smb}${noy} ${prefix}sand4
${smb}${noy} ${prefix}snow
${smb}${noy} ${prefix}thunder
${smb}${noy} ${prefix}thunder2
${smb}${noy} ${prefix}transformer
${smb}${noy} ${prefix}technology
${smb}${noy} ${prefix}toxic
${smb}${noy} ${prefix}underwater
${smb}${noy} ${prefix}wicker
${smb}${noy} ${prefix}watercolor
${smb}${noy} ${prefix}wood
${smb}${noy} ${prefix}warning
${smb}${noy} ${prefix}wall
${smb}${noy} ${prefix}xmas
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 CANVAS MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}comrade
${smb}${noy} ${prefix}jail
${smb}${noy} ${prefix}passed
${smb}${noy} ${prefix}wasted
${smb}${noy} ${prefix}lolice
${smb}${noy} ${prefix}horny
${smb}${noy} ${prefix}simpcard
${smb}${noy} ${prefix}triggered
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 CERPEN MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}cerpen anak
${smb}${noy} ${prefix}cerpen bahasa daerah
${smb}${noy} ${prefix}cerpen bahasa inggrisKak
${smb}${noy} ${prefix}cerpen bahasa jawa
${smb}${noy} ${prefix}cerpen bahasa sunda
${smb}${noy} ${prefix}cerpen budaya
${smb}${noy} ${prefix}cerpen cinta
${smb}${noy} ${prefix}cerpen cinta islami
${smb}${noy} ${prefix}cerpen cinta pertama
${smb}${noy} ${prefix}cerpen cinta romantis
${smb}${noy} ${prefix}cerpen cinta sedih
${smb}${noy} ${prefix}cerpen cinta segitiga
${smb}${noy} ${prefix}cerpen cinta sejati
${smb}${noy} ${prefix}cerpen galau
${smb}${noy} ${prefix}cerpen gokil
${smb}${noy} ${prefix}cerpen inspiratif
${smb}${noy} ${prefix}cerpen jepang
${smb}${noy} ${prefix}cerpen kehidupan
${smb}${noy} ${prefix}cerpen keluarga
${smb}${noy} ${prefix}cerpen kisah nyata
${smb}${noy} ${prefix}cerpen korea
${smb}${noy} ${prefix}cerpen kristen
${smb}${noy} ${prefix}cerpen liburan
${smb}${noy} ${prefix}cerpen lingkungan
${smb}${noy} ${prefix}cerpen lucu
${smb}${noy} ${prefix}cerpen malaysia
${smb}${noy} ${prefix}cerpen mengharukan
${smb}${noy} ${prefix}cerpen misteri
${smb}${noy} ${prefix}cerpen motivasi
${smb}${noy} ${prefix}cerpen nasihat
${smb}${noy} ${prefix}cerpen nasionalisme
${smb}${noy} ${prefix}cerpen olahraga
${smb}${noy} ${prefix}cerpen patah hati
${smb}${noy} ${prefix}cerpen penantian
${smb}${noy} ${prefix}cerpen pendidikan
${smb}${noy} ${prefix}cerpen pengalaman pribad
${smb}${noy} ${prefix}cerpen pengorbanan
${smb}${noy} ${prefix}cerpen penyesalan
${smb}${noy} ${prefix}cerpen perjuangan
${smb}${noy} ${prefix}cerpen perpisahan
${smb}${noy} ${prefix}cerpen persahabatan
${smb}${noy} ${prefix}cerpen petualangan
${smb}${noy} ${prefix}cerpen ramadhan
${smb}${noy} ${prefix}cerpen remaja
${smb}${noy} ${prefix}cerpen renungan
${smb}${noy} ${prefix}cerpen rindu
${smb}${noy} ${prefix}cerpen rohani
${smb}${noy} ${prefix}cerpen romantis
${smb}${noy} ${prefix}cerpen sastra
${smb}${noy} ${prefix}cerpen sedih
${smb}${noy} ${prefix}cerpen sejarah
${smb}${noy} ${prefix}cerpen slice of life
${smb}${noy} ${prefix}cerpen terjemahan
${smb}${noy} ${prefix}cerpen thriller
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 ANIME MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}akira
${smb}${noy} ${prefix}akiyama
${smb}${noy} ${prefix}ana
${smb}${noy} ${prefix}asuna
${smb}${noy} ${prefix}ayuzawa
${smb}${noy} ${prefix}boruto
${smb}${noy} ${prefix}chiho
${smb}${noy} ${prefix}chitoge
${smb}${noy} ${prefix}deidara
${smb}${noy} ${prefix}eba
${smb}${noy} ${prefix}elaina
${smb}${noy} ${prefix}emilia
${smb}${noy} ${prefix}erza
${smb}${noy} ${prefix}gremory
${smb}${noy} ${prefix}hestia
${smb}${noy} ${prefix}hinata
${smb}${noy} ${prefix}inori
${smb}${noy} ${prefix}isuzu
${smb}${noy} ${prefix}itachi
${smb}${noy} ${prefix}itori
${smb}${noy} ${prefix}kaga
${smb}${noy} ${prefix}kagura
${smb}${noy} ${prefix}kakashi
${smb}${noy} ${prefix}kaneki
${smb}${noy} ${prefix}kaori
${smb}${noy} ${prefix}kotori
${smb}${noy} ${prefix}kurumi
${smb}${noy} ${prefix}madara
${smb}${noy} ${prefix}megumin
${smb}${noy} ${prefix}mikasa
${smb}${noy} ${prefix}miku
${smb}${noy} ${prefix}minato
${smb}${noy} ${prefix}naruto
${smb}${noy} ${prefix}neko
${smb}${noy} ${prefix}nekonime
${smb}${noy} ${prefix}nezuko
${smb}${noy} ${prefix}onepiece
${smb}${noy} ${prefix}rize
${smb}${noy} ${prefix}sagiri
${smb}${noy} ${prefix}sakura
${smb}${noy} ${prefix}sasuke
${smb}${noy} ${prefix}shina
${smb}${noy} ${prefix}shinka
${smb}${noy} ${prefix}shinomiya
${smb}${noy} ${prefix}shizuka
${smb}${noy} ${prefix}shota
${smb}${noy} ${prefix}tejina
${smb}${noy} ${prefix}toukachan
${smb}${noy} ${prefix}tsunade
${smb}${noy} ${prefix}waifu
${smb}${noy} ${prefix}waifu2
${smb}${noy} ${prefix}yotsuba
${smb}${noy} ${prefix}yuki
${smb}${noy} ${prefix}yumeko
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 AUDIO MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}audio1
${smb}${noy} ${prefix}audio2
${smb}${noy} ${prefix}audio3
${smb}${noy} ${prefix}audio4
${smb}${noy} ${prefix}audio5
${smb}${noy} ${prefix}audio6
${smb}${noy} ${prefix}audio7
${smb}${noy} ${prefix}audio8
${smb}${noy} ${prefix}audio9
${smb}${noy} ${prefix}audio10
${smb}${noy} ${prefix}audio11
${smb}${noy} ${prefix}audio12
${smb}${noy} ${prefix}audio13
${smb}${noy} ${prefix}audio14
${smb}${noy} ${prefix}audio15
${smb}${noy} ${prefix}audio16
${smb}${noy} ${prefix}audio17
${smb}${noy} ${prefix}audio18
${smb}${noy} ${prefix}audio19
${smb}${noy} ${prefix}audio20 
${smb}${noy} ${prefix}audio21
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 RANDOM MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}bapercek
${smb}${noy} ${prefix}sangecek
${smb}${noy} ${prefix}pakgirlcek
${smb}${noy} ${prefix}pakboycek
${smb}${noy} ${prefix}kontolcek
${smb}${noy} ${prefix}haramcek
${smb}${noy} ${prefix}anjingcek
${smb}${noy} ${prefix}jahatcek
${smb}${noy} ${prefix}baikcek
${smb}${noy} ${prefix}bebancek
${smb}${noy} ${prefix}babicek
${smb}${noy} ${prefix}nolepcek
${smb}${noy} ${prefix}jagocek
${smb}${noy} ${prefix}pintarcek
${smb}${noy} ${prefix}begocek
${smb}${noy} ${prefix}goblokcek
${smb}${noy} ${prefix}jelekcek
${smb}${noy} ${prefix}cantikcek
${smb}${noy} ${prefix}gantengcek
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 WALLPAPER MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}aesthetik
${smb}${noy} ${prefix}anime
${smb}${noy} ${prefix}cyber
${smb}${noy} ${prefix}nature
${smb}${noy} ${prefix}teknologi
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 RANDOM IMAGE 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}anjing
${smb}${noy} ${prefix}blackpink
${smb}${noy} ${prefix}boneka
${smb}${noy} ${prefix}cogan
${smb}${noy} ${prefix}cogan2
${smb}${noy} ${prefix}cosplay
${smb}${noy} ${prefix}cosplaysagiri
${smb}${noy} ${prefix}cosplayloli
${smb}${noy} ${prefix}doraemon
${smb}${noy} ${prefix}hekel
${smb}${noy} ${prefix}jeni
${smb}${noy} ${prefix}jiso
${smb}${noy} ${prefix}justina
${smb}${noy} ${prefix}kartun
${smb}${noy} ${prefix}kpop
${smb}${noy} ${prefix}kucing
${smb}${noy} ${prefix}katakata
${smb}${noy} ${prefix}lisa
${smb}${noy} ${prefix}mobil
${smb}${noy} ${prefix}motor
${smb}${noy} ${prefix}pokemon
${smb}${noy} ${prefix}profil
${smb}${noy} ${prefix}pentol
${smb}${noy} ${prefix}pubg
${smb}${noy} ${prefix}rose
${smb}${noy} ${prefix}ryujin
${smb}${noy} ${prefix}satanic
${smb}${noy} ${prefix}wallhp
${smb}${noy} ${prefix}wallhp2
${smb}${noy} ${prefix}yulibocil
${smb}${noy} ${prefix}couple
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
│ *𓆊 CECAN MENU 𓆊*
│≡≡≡≡≡≡≡≡≡≡≡≡≡≡
${smb}${noy} ${prefix}cecan
${smb}${noy} ${prefix}cecan2
${smb}${noy} ${prefix}china
${smb}${noy} ${prefix}indonesia
${smb}${noy} ${prefix}korea
${smb}${noy} ${prefix}japan
${smb}${noy} ${prefix}malaysia
${smb}${noy} ${prefix}vietnam
${smb}${noy} ${prefix}thailand
╰─────────────╯`
let message = await prepareWAMessageMedia({ image: global.menu }, { upload: kimimaru.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: '@Bot Mr-7Mind',
hydratedButtons: [{
urlButton: {
displayText: 'Group BOT',
url: 'https://chat.whatsapp.com/Kpmbb96E2V0JB7hOKURpuy'
}},
{
urlButton: {
displayText: 'Group INFO',
url: 'https://chat.whatsapp.com/Gxjx1zWyqceDtaATwwJuhc'    
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}}]}}
}), { userJid: m.sender, quoted: m });
await kimimaru.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })
 }
break
case 'audio1':
case 'audio2':
case 'audio3':
case 'audio4':
case 'audio5':
case 'audio6':
case 'audio7':
case 'audio8':
case 'audio9':
case 'audio10':
case 'audio11':
case 'audio12':
case 'audio13':
case 'audio14':
case 'audio15':
case 'audio16':
case 'audio17':
case 'audio18':
case 'audio19':
case 'audio20': 
case 'audio21': {
audie = fs.readFileSync(`./audio/${command}.mp3`)
kimimaru.sendMessage(m.chat, { audio: audie, mimetype: 'audio/mpeg', fileName: `${command}.mp3`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType: 'IMAGE',
title: 'aktif selama: ' + global.u,
body: '歹𝐵𝑜𝑡 𝑀𝑟-𝟩𝑀𝑖𝑛𝑑',
thumbnail: global.thumb2,
sourceUrl: 'https://instagram.com/immaammm_/'
}
}}, {quoted: m})
}
break
case 'gantengcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE GANTENG ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break
case 'cantikcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE CANTIK ${randomnay1}${randomnay2}% :v*`
reply(N)
}
break
case 'jelekcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE J3L3K ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'goblokcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE GOBLOK ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'begocek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE BEGO ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'pintercek': 
case 'pintarcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE PINTAR ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'jagocek': { 
N = `*NAME: ${pushname}*\n`,
N += `*RATE JAGO ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'nolepcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE NOLEP ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'babicek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE BABI ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'bebancek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE BEBAN ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'baikcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE BAIK ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'jahatcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE JAHAT ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'anjingcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE ANJING ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break  
case 'haramcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE HARAM ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break  
case 'kontolcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE KOMTOL ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'pakboycek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE PAKBOYZ ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'pakgirlcek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE PAKGIRL ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break 
case 'sangecek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE SANGE ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break
case 'bapercek': {
N = `*NAME: ${pushname}*\n`,
N += `*RATE BAPER ${randomnay1}${randomnay2}%* :v`
reply(N)
}
break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                kimimaru.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await kimimaru.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, kimimaru.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
let buttons = [
    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await kimimaru.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
    { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, kimimaru.user.name, m)
throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
let buttons = [
    { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
    { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await kimimaru.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kimimaru.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await kimimaru.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kimimaru.user.name, m)
                } else {
let id = + new Date
this.anonymous[id] = {
    id,
    a: m.sender,
    b: '',
    state: 'WAITING',
    check: function (who = '') {
        return [this.a, this.b].includes(who)
    },
    other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
    },
}
let buttons = [
    { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, kimimaru.user.name, m)
                }
            }
                break
            
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
let buttons = [
    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
                }
                let other = romeo.other(m.sender)
                if (other) await kimimaru.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
let buttons = [
    { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
    { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await kimimaru.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kimimaru.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await kimimaru.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kimimaru.user.name, m)
                } else {
let id = + new Date
this.anonymous[id] = {
    id,
    a: m.sender,
    b: '',
    state: 'WAITING',
    check: function (who = '') {
        return [this.a, this.b].includes(who)
    },
    other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
    },
}
let buttons = [
    { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await kimimaru.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, kimimaru.user.name, m)
                }
            }
                break
            
case 'aesthetik':
case 'anime':
case 'cyber':
case 'nature':
case 'teknologi': {
reply(mess.wait)
kty = await getBuffer(`https://api-kimimaru.herokuapp.com/api/wallpaper/${command}?apikey=k1mimaru`)
let buttons = [ {buttonId: `${prefix}${command}`, buttonText: {displayText: `Next`}, type: 1}
]
let buttonMessage = {
image: kty,
caption: `Success`,
footer: `${footerwm}`,
buttons: buttons,
headerType: 4,
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
          case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case 'anjing': 
case 'blackpink': 
case 'boneka': 
case 'cecan': 
case 'cecan2': 
case 'cogan': 
case 'cogan2': 
case 'cosplay': 
case 'cosplaysagiri': 
case 'cosplayloli': 
case 'doraemon': 
case 'hekel': 
case 'jeni': 
case 'jiso': 
case 'justina': 
case 'kartun': 
case 'kpop': 
case 'kucing': 
case 'katakata': 
case 'lisa': 
case 'mobil': 
case 'motor': 
case 'pokemon': 
case 'profil': 
case 'pentol': 
case 'pubg': 
case 'rose': 
case 'ryujin': 
case 'satanic': 
case 'wallhp': 
case 'wallhp2': 
case 'yulibocil': {
reply(mess.wait)
kty = await getBuffer(`https://api-kimimaru.herokuapp.com/api/randomimg/${command}?apikey=k1mimaru`)
let buttons = [ {buttonId: `${prefix}${command}`, buttonText: {displayText: `Next`}, type: 1}
]
let buttonMessage = {
image: kty,
caption: `Success`,
footer: `${footerwm}`,
buttons: buttons,
headerType: 4,
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'china': case 'indonesia': case 'korea': case 'japan': case 'malaysia': case 'vietnam': case 'thailand': {
reply(mess.wait)
kty = await getBuffer(`https://api-kimimaru.herokuapp.com/api/cecan/${command}?apikey=k1mimaru`)
let buttons = [ {buttonId: `${prefix}${command}`, buttonText: {displayText: `Next`}, type: 1}
]
let buttonMessage = {
image: kty,
caption: `Success`,
footer: `${footerwm}`,
buttons: buttons,
headerType: 4,
}
kimimaru.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

	if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
    if (/^.*(next|leave|start)/.test(m.text)) return
    if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
    let other = [room.a, room.b].find(user => user !== m.sender)
    m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
        contextInfo: {
            ...m.msg.contextInfo,
            forwardingScore: 0,
            isForwarded: true,
            participant: other
        }
    } : {})
}
return !0
                }

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
kimimaru.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
