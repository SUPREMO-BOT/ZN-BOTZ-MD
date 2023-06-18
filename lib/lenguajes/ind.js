/**
[ By @NeKosmic || https://gitlab.com/NeKosmic ]
**/
const clave = global.Prefijo,
	masss = String.fromCharCode(8206).repeat(850),
	saltos = "\n".repeat(400);
export default {
	Lengua: () => "id",
	Habla: () => "Bahasa Indo",
	AdLimite: a => `[ ! ] Anda kehabisan batas penggunaan untuk beberapa fungsi T_T\nAnda dapat membeli lebih banyak batas dengan menggunakan perintah ini:\n\n${clave}comprar\n`,
	AdNivel: (a, n) => `[ ! ] Kamu perlu memiliki level *${a}* untuk mulai menggunakan perintah ini\n\nLevel mu saat ini adalah ${n}\n`,
	SpamerNot0: a => `[ ! ] ${a} Tolong jangan membanjiri bot ;-;`,
	SpamerNot1: () => "_Harap tunggu beberapa detik sebelum menggunakan perintah lain..._ ✓",
	ErrorMsj: (a, n, i, e, t, r, u) => `*[ ! ] Kesalahan terdeteksi di bot:*\n\n📜 Plugin: ${a}\n😵 Klien: wa.me/${n}\n🤳 Obrolan: ${i}\n🧩 Perintah: ${e+t} ${r}\n\n\`\`\`${u}\`\`\` \n`,
	RestriN: () => "[ ! ] Tidak dapat menghapus peserta baru, harap aktifkan mode terbatas!",
	AlertList: () => "[ ! ] Hapus angka yang dimulai dengan  '1'  dari global.FakeList di ./config.js ...!!!",
	WlcAdd: (a, i, e, t) => `⚡ *Selamat datang @${a} di grup hebat ini* ${i}\n📆 *Tanggal bergabung | ${e}*\n🍷 _*Saya harap dan Anda senang tinggal di sini, jangan lupa untuk menghormati peserta dan aturan*_ ;)\n\n📜 *Aturan grup saat ini :* \n${masss}\n${t}`,
	WlcRemove: (a, n) => `\`\`\`[!] Kiri: @${a}\`\`\`\n_- Tanggal keberangkatan |  ${n} `,
	Gbay: () => "Sampai jumpa... 🤧",
	WlcPromot: (e, n, f) => ["Seorang admin", `*Selamat @${e}!, @${f} baru saja memberi Anda kekuatan besar, Anda sekarang menjadi admin grup* : _${n}_\n`, `~Saya sekarang memiliki kekuatan mutlak!~\n\n*Maksud saya..., _Terima kasih banyak kepada @${e} karena telah memberikan saya administrasi, saya akan mencoba yang terbaik untuk grup ini!!!_ :D*`],
	WlcDemot: (e, n, f) => ["Administrator", `*@${f} baru saja diturunkan @${e} bukan lagi admin grup* : _${n}_`, "Alangkah sedihnya, saya bukan lagi pengurus unu"],
	GpUp: (a = "") => ["🔒 *[ KELOMPOK TERTUTUP ]* 🔒\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ˢᵉᵐᵘᵃ ᵃᵈᵐᶦⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🔓 *[ GRUP TERBUKA ]* 🔓\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_\n~ᴴᵃʳᵃᵖ ᵇᵉʳʰᵃᵗᶦ⁻ʰᵃᵗᶦ ᵗᵉʳʰᵃᵈᵃᵖ ᵒʳᵃⁿᵍ⁻ᵒʳᵃⁿᵍ ᵈᵉⁿᵍᵃⁿ ᵏᵉᵗᵉʳᵇᵉˡᵃᵏᵃⁿᵍᵃⁿ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ SUBYEK KELOMPOK DIUBAH ]* 🤳\n\nNama baru: _${a}_\n`],
	DelMsj: (a, n, i) => `*[X] Pesan ~dihapus~ [X]*\n\n*🧬 Jenis Pesan :* _${a}_\n*🚮 Pengguna* : _@${n}_\n*📆 Tanggal : * _${i}}\n`,
	CallNot: (a, n) => `\n*[ ! ] @${a} Anda akan diblokir*\n_Alasan: untuk melakukan ${n?"video call":"call"} ke nomor ini tanpa otorisasi!_\n`,
	MsjRowner: () => "*[ ! ]* Perintah ini hanya dapat digunakan *dari bot utama*!",
	MsjOwner: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *pemilik bot*!",
	MsjMods: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *moderator*!",
	MsjPremium: () => "*[ ! ]* Aplikasi ini hanya untuk pengguna *premium*!",
	MsjGroup: () => "*[ ! ]* Perintah ini hanya dapat digunakan di *grup*!",
	MsjPrivate: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *obrolan pribadi*!",
	MsjAdmin: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *administrator grup*!",
	MsjBotAdmin: () => "*[ ! ]* Bot harus *menjadi administrator* untuk menggunakan perintah ini!",
	MsjUnreg: () => `*[ ! ]* Daftar untuk mulai menggunakan fungsi ini\n\nContoh: ${clave}rg name|age\n\n${clave}rg Juanito|15\n`,
	MsjRestrict: () => "[ ! ] Untuk melakukan tindakan penghapusan, pemilik saya harus mengaktifkan mode terbatas!",
	Error0: () => "[ ! ] Kesalahan, coba lagi nanti...",
	Error1: () => "[ ! ] Terjadi kesalahan tak terduga u.u [ ! ]",
	Proces: a => `_Memproses, ${a} harap tunggu..._`,
	Bsqd: a => `_Mencari, ${a} harap tunggu..._`,
	Antlk1: a => ["[ ! ] Gila saya baru saja mengirim tautan, untungnya tautan yang terdeteksi berasal dari grup ini owo", "*[ ! ] Tautan terdeteksi [ ! ]*\n\n_Untungnya saya bukan admin, jadi Aku tidak bisa melakukan apa-apa unu_", `*[ ! ] Tautan terdeteksi [ ! ]*\n_Sekarang jika Anda layak @${a} Selamat tinggal..._\n`],
	Antlk2: a => "*[ ! ] Tautan terdeteksi [ ! ]* " + (a ? "" : "\n\n_Untungnya saya bukan admin jadi tidak bisa apa-apa :v_"),
	Antprv: () => `*[ ! ] Obrolan pribadi dilarang [ ! ]*\nPemilik saya jika Anda memerlukan informasi: wa.me/${OwnerNum}\n\n_Adios..._`,
	Antrb: (a = "", n = "") => [`Admin @${a} baru saja mengirimkan teks berisi banyak karakter -.-!`, "*[ ! ] Sebuah pesan terdeteksi mengandung banyak karakter [ ! ]* " + (a ? "" : `${saltos}\nSaya bukan administrator, saya tidak bisa melakukan apa pun... :/`), `Tandai obrolan sebagai telah dibaca ✓\n${saltos}\n=> Nomor : wa.me/${a}\n=> Nama panggilan ​​: ${n}\n[ ! ] Anda baru saja mengirim teks yang berisi banyak karakter yang dapat menyebabkan kerusakan pada perangkat seluler`],
	Antvwc: a => `${a}\n\n*Pesan multimedia untuk dilihat sekali, diambil ✓*\n`,
	Autinf: (a, n) => `<[ ${NombreDelBot} ]>\nWaktu aktif : ${a}${n?"|| Tidak ada obrolan pribadi":""}`,
	Autlvl: (a = "", n = "", i = "", e = "") => `\nSelamat, ${a} Anda naik level!\n♻️ Level sebelumnya : ${n}\n🪀 Level saat ini : ${i}\n⚔️ Peran : ${e}\n`,
	Fingp: () => "Waktu untuk tetap berada di grup telah habis\n\nDia pergi dengan sangat cepat*",
	Notpre: () => "[ ! ] Waktu premium Anda habis!\n_Saya harap Anda menikmatinya :3_\n",
	Afkpl: (n = "", i = "") => [`📲 *Anda berhenti menjadi AFK setelah ${n}.*\nSelamat datang kembali!!!  :D`, `📴 *Pengguna yang disebutkan saat ini tidak hadir, waktu berlalu ${n}.*\n\n┏⊱ *Alasan* \n┗━⊱ ${i}\n`, `Harap sebutkan alasan Anda untuk tinggalkan AFK\nContoh penggunaan :\n\n${clave+n} Saya akan pergi ke kamar mandi :v`, "[ ! ] Alasannya terlalu singkat", `*Fungsi AFK berhasil diaktifkan*\n\n➸ *Pengguna*: ${n}\n➸ *Alasan*: ${i}`],
	Afrs: (a = "", n = "", i = "") => `\n🎴 Anime : ${a}\n🀄 Karakter : ${n}\n🔖 Frasa : ${i}\n`,
	Animg: (a = "", n = "") => `┏━⊱ Gambar : ${a}\n┗⊱ Diminta oleh : @${n}`,
	Aninf: (n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "", o = "", m = "", $ = "", p = "", h = "", b = "", A = "", _ = "", c = "", y = "", f = "", T = "") => [`Anime apa yang ingin Anda cari?, contoh penggunaan:\n\n${clave+n} nichijou\n`, "Tidak ada hasil yang ditemukan untuk permintaan Anda. Berikan judul anime yang lebih jelas", `\n* 🧬 ID:* ${n}\n* 🟢 Disetujui:* ${e?"Ya":"Tidak"}\n*✍️ Judul:* [ Global: ${t} ], [ Bahasa Inggris: ${r||"-"} ], [ Jepang: ${u||"-"} ]\n*📆 Musim:* ${m||"-"} ${$||"-"}\n*🪄 Jenis : * ${k}\n*🧩 Genre:* ${_}\n*🗃️ Episode:* ${d}\n*🎭 Status:* ${c}\n*⌚ Durasi:* ${y} \n*♻️ Peringkat:* ${f}\n*📈 Skor:* ${s}\n*👍 Dinilai Oleh:* ${l}\n*⚡ Popularitas:* ${g}\n*❤️ Favorit : * ${o}\n*📜 Sinopsis:* ${T}\n*📝 Data:* ${p}\n*🔥 Produser:* ${h}\n*🪀 Dilisensikan oleh:* ${b} \n*🌟Studio:* ${A}\n*📺 Cuplikan:* ${i}\n`],
	Eat: () => `💻 *Jaringan sosial* 📲\n\n${masss+TusRedesSociales}\n\nˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵐᵉᵐᶦⁿᵗᵃ ᵘᵃⁿᵍ⁻ ʰᵃⁿʸᵃ ᵈᵉⁿᵍᵃⁿ ᵈᵘᵏᵘⁿᵍᵃⁿ ᴬⁿᵈᵃ ˢᵃʸᵃ ˢᵉⁿᵃⁿᵍ :³`,
	Boes: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "", o = "", m = "", $ = "", p = "", h = "", b = "", A = "", _ = "") => `${a?`*Grup* : _[ ${n} ]_\n\n*Grup yang dilarang* : _${i?"[✓]":"[X]"}_\n\n*Admin Bot?* : _${e?"[✓]":"[X]"}_`:""}\n\n*Bot Pengguna* : ${NombreDelBot}\n_${"@"+t}_\n\n*Bot* : _${opts.self?"MODE PRIVATE [ ! ]":"MODE PUBLIK [✓]"}_\n\n*Mode Terbatas* : _${r?"ON [✓]":"OFF [X]"}_\n\n*Anti-Pribadi* : _${u?"ON [✓]":"OFF [X]"}_\n\n*Menjadi Sub-Bot* : _${k?"ENABLED [✓]":"DISABLED [X]"}_\n${a?`\n*Mode Admin Saja* : _${d?"Aktif [✓]":"Menganggur [X]"}_\n\n*Selamat Datang* : _${s?"Aktif [✓]":"Menganggur [X]"}_\n\n*Antilink* : _${l?"Aktif [✓]":"Tidak aktif [X]"}_\n\n*Antilink 2* : _${g?"Aktif [✓]":"Tidak aktif [X]"}_\n\n*Anti Orang Asing* : _${o?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Tidak Salah* : _${m?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Tidak Salah 2* : _${$?"Aktif [✓]":"Tidak aktif [X]"}_\n\n*Deteksi* : _${p?"Aktif [✓]":"Nonaktif [X]"}_\n\n*Anti Hapus* : _${h?"Nonaktif [X]":"Aktif [✓]"}_\n\n*Anti-Menabrak* : _${b?"Aktif [✓]":"Tidak aktif [X]"}_\n\n*Bot Obrolan* : _${A?"Aktif [✓]":"Tidak aktif [X]"} _\n\n*Level Otomatis* : _${_?"Aktif [✓]":"Tidak aktif [X]"}_`:""}\n`,
	Binf: (a = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "", o = "", m = "", $ = "", p = "", h = "", b = "", A = "", _ = "", c = "", y = "", f = "", T = "", P = "", M = "", I = "") => ["_Mendapatkan informasi..._", `*~》INFORMASI《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(aktif)_\n➪ *Pemilik saat ini* : _${Propietario}_\n➪ *Waktu Proses* : _${a}._\n➪ *Nama panggilan di WhatsApp* : _${i}._\n➪ *Total grup* : _${e}_ \n➪ *Total pengguna* : _${t}_\n➪ *Grup aktif* : _${r} / ${u}_\n➪ *Obrolan pribadi* : _${k} _\n➪ *Total Obrolan* : _${d} / ${s}_\n➪ *Global Hits* : _${l}_\n➪ *Versi Bot* : _${BotVersion}_ \n➪ *Wa- web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Total plugin* : _${g}_\n➪ *Folder sementara* : _${o}_\n➪ *Database* : _${m}_\n➪ *Versi NodeJs* : _${$}_\n➪ *Kecepatan pemrosesan* : _${p} s_\n➪ *Kecepatan koneksi* : _${h} ms_\n➪ *RAM:* _${b}_\n➪ *Platform* : _${A}_\n➪ *Versi* : _${_}_\n➪ *OS Dasar* : _${c}_\n➪ *Arsitektur* : _${y}_\n➪ *Host* : _${f}_ ${T}\n\n➫ _Penggunaan memori:_\n${P} ${""==M?"":`\n➫ _Total penggunaan CPU:_\n${M}\n➫ _Inti CPU Digunakan_ ${I}`}\n\n┗─━─「 ✵ 」━─━─┛`],
	Bscp: () => [`*🛑Sebelum melanjutkan membaca, perhatikan persyaratan berikut:*\n- _Memiliki 2 perangkat di dekat Anda, sangat penting!_\n- _Memiliki 200MBS penyimpanan gratis di perangkat Anda_\n- _Memiliki Termux.apk terpasang_ \n - _Memiliki koneksi internet yang baik_\n- _Terakhir dan yang paling penting, bersabarlah_ :v\n\n\n*[_>] Perintah untuk dijalankan di termux.apk dari 0* :\n\n*1 .-* cd \n*2.-* termux-setup-storage ~[ Pertama kita memberikan izin ke storage(memori) kita ]~\n*3.-* termux-change-repo ~(Opsional) [ Pilih semua opsi yang muncul di jendela pertama || Pada jendela kedua pilih opsi yang berisi tulisan "termux.mentality.rip" ]~\n\n*[_>] Install 7w7r packs, silahkan kerjakan satu per satu :D*\n\n*1.* apt-get update -y && apt-get upgrade -y\n*2.* pkg instal git\n*3.* pkg instal nodejs\n*4.* pkg instal libwebp -y\n*5.* pkg instal ffmpeg -y\n*6.* pkg instal imagemagick -y\n*7.* pkg instal benang\n*8.* git clone https://gitlab.com/NeKosmic/nk-bot-md\n*9 .* cd nk-bot-md\n*10.* benang\n*11.* npm start\n*12.* Buka ponsel Anda, buka aplikasi WhatsApp, ketuk 3 titik di kanan atas layar Anda dan pilih "perangkat tertaut" lalu "tautkan perangkat", Sekarang kembali ke aplikasi termux.apk, Cukup pindai kode QR yang akan muncul di layar dan hanya itu, Anda dapat menggunakan bot, ingat bahwa Anda harus menggunakan perangkat yang ditunjukkan di awal teks ini ;3\n\n\`\`\`Bot juga dapat dijalankan di host atau mesin virtual...\`\`\`\n\n</Bot script>\n • https://youtu.be/Tk9Pitk1_oM (Baca deskripsinya)\n• https://gitlab.com/NeKosmic/nk-bot-md/-/forks/new (Git)\n• https:// replit .com/@NeKosmic/NK-BOT-MD (Demo)\n• https://github.com/NeKosmic/NK-BOT-MD (Berfungsi)\n\nPerlu bantuan lebih lanjut? Hubungi pembuat saya:`, "Mode Demo Sementara"],
	Bunt: (a = "", n = "") => ["Dan tautan WhatsApp?", "[ ! ] Kesalahan, Tautan tidak berfungsi atau tidak valid", `[ ! ] Jumlah minimum untuk bergabung dengan grup harus *${MinimoDeUsuarios}* peserta`, `${NombreDelBot} bergabung dengan grup ${a} berhasil \n${n?`Untuk ${n} Jam`:""}`],
	Csim: () => ["Tidak ada sistem!", "Tolong, lebih spesifik dalam pesan Anda", "Dan pesannya?"],
	Cimg: (n = "") => [`*Tanggapi stiker menggunakan perintah*:\n\n${clave+n}\n`, "[ ! ] Hanya stiker statis"],
	Cmp3: (n = "") => [`Kirim atau Balas a (rekaman video/audio) ke perintah:\n\n${clave+n}`, "Tidak dapat mengonversi ke audio", "🎞️ Dikonversi ke audio 🎶"],
	Cptt: (n = "") => [`Kirim atau Balas a (video/audio) ke perintah:\n\n${clave+n}`, "Tidak dapat mengonversi ke rekaman", "🎤 Dikonversi ke rekaman 🎶"],
	Ctxt: () => ["Harap berikan teks", "*[_>] Gaya teks untuk:*"],
	Caiu: (n = "") => `Kirim atau balas SMS, contoh penggunaan:\n\n${clave+n} bahasa inklusif\n`,
	Clgs: (n = "", i = "", e = "") => [`*[ ! ] Gunakan format yang benar!* :\n\n🖼️ ~Untuk logo dengan teks bersambung~\n[1] ${clave+n} (efek) (teks...), _Contoh penggunaan:_\n\n ${clave+n} space NeKosmic\n\n🖼️ ~Untuk logo dengan teks dipisahkan oleh garis vertikal~\n[2] ${clave+n} (efek) (text1)|(text2), _Gunakan contoh: _\n\n${clave+n} Pornhub-Style-Logo NK-|BOT\n\n🖌️ Logo apa yang ingin Anda buat?, berikut daftar efeknya:\n\n🎨 ${clave+n} `, `[ ! ] Efek *${n}* tidak ditemukan dalam daftar...`, `[ ! ] Efek *${n}* tidak ditemukan dalam daftar, harap tulis atau gunakan format yang benar...`, `[ ! ] Harap tulis atau gunakan format dengan baik, contoh penggunaan: ${clave+n} ${i}`, `*┏━❪CREATE-LOGOS❫━*\n*┃*\n*┣ Desain* : _ ${n}_\n*┃*\n*┣ Teks* : _${i}_\n*┃*\n*┣ Tanggal Pembuatan* : _${e}_\n*┃*\n *┗ ❪ Teks-Pro ❫━*`],
	Cgod: () => ["Otakus Teknologi", "Pencipta Utama", "Pemilik Saat Ini", "Betapa Seksinya Kamu"],
	Dfbv: (n = "") => ["Dan tautannya...?", "*[ ! ] Dan tautan facebooknya?*", `*[ ! ] Tautan Tidak Valid*\n_Silakan gunakan Tautan Video Facebook yang valid_\n\nContoh penggunaan: ${clave+n} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Kesalahan mungkin tautan tidak valid atau videonya pribadi, coba lagi nanti"],
	Dgit: (n = "") => [`Harap gunakan URL github, contoh:\n${clave+n} https://github.com/adiwajshing/Baileys`, "Akun Github dilarang, harap gunakan URL lain", "[ ! ] URL dari github tidak valid"],
	Dmdf: (a = "", n = "", i = "", e = "", t = "", r = "") => ["*[ ! ] Dan Tautan Mediafire?*", "*[ ! ] Tautan Tidak Valid*\n_Silakan gunakan tautan MediaFire_", `*Nama:* ${a}\n*Ukuran:* ${n}\n *Ekstensi:* ${i}\n*Tanggal Pengunggahan:* ${e}\n*Tipe File:* ${t}\n*Url:* ${r}`],
	Dtkv: (n = "") => ["*[ ! ] Dan Tautan tiktok?*", "*[ ! ] Tautan tidak valid*\n_Harap gunakan tautan yang valid_", `*[ ! ] Tautan tidak valid*\n_Silakan gunakan tautan Tik Tok_\nKeluar: ${clave+n} https://vm.tiktok.com/ZMYmRWCo2/`],
	Dyta: (n = "") => [`Audio apa yang ingin Anda unduh dari Youtube?, Contoh penggunaan: \n\n${clave+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please , gunakan tautan YouTube_\n", "[ ! ] Audio terlalu berat, maaf saya tidak dapat mengirimkannya..."],
	Dyau: (n = "", i = "", e = "", t = "", r = "", u = "", k = "") => [`Audio apa yang ingin Anda unduh dari Youtube?, Contoh penggunaan: \n\n${clave+n} mtc s3rl`, `🔍 Hasil ditemukan untuk: ${n}\n${i?`✍️ Judul: ${i}\n⏳ Durasi: 1:23 ━━━━●───────── ${e}\n👀 Penayangan: ${t}\n📝 Penulis: ${r}\n📜 Deskripsi: ${u}\n⛓️ URL: ${k}\n\n\`\`\`Mengirim audio, harap tunggu...\`\`\``:""}`],
	Dytv: (n = "", i = "") => [`Video apa yang ingin Anda download dari Youtube?, Contoh penggunaan: \n\n${clave+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please , saya menggunakan tautan dari video YouTube_\n", "[ ! ] Video Anda terlalu besar, maaf raja saya tidak dapat mengirimkannya :v", `Judul: ${n}\nUkuran: ${i} \nEkstensi: .mp4`],
	Dylt: () => ["*[ > ] Unduh Audio*", "*[ > ] Unduh Video*", "_Opsi 1_", "_Opsi 2_", "_Opsi 3_", "Pilih opsi"],
	Dpl1: (n = "", i = "", e = "", t = "") => [`Tunjukkan judul audio yang akan diunduh dari youtube, contoh penggunaan: \n\n ${clave+n} mtc s3rl`, ` _Please tunggu ${n} sebelum membuat permintaan lain_ \n~ᵂᵃᵏᵗᵘ ᵗᵘⁿᵍᵍᵘ ᵗᵉʳᵍᵃⁿᵗᵘⁿᵍ ᵖᵃᵈᵃ ᵈᵘʳᵃˢᶦ ᵃᵘᵈᶦᵒ ʸᵃⁿᵍ ᵈᶦᵐᶦⁿᵗᵃ ˢᵉᵇᵉˡᵘᵐⁿʸᵃ~`, `*✍️ Judul:*${n} \n*🎹 penulis:*${i} \n*🗜️ Ukuran:*${e+"Approx."} \n*⏳ Durasi:* ${t}\n\n\n\n _Mengirim audio, harap tunggu..._`, `Terjadi kesalahan, harap gunakan perintah:\n\n${clave}audio ${n}\n`],
	Dpl2: (i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "") => [`Apa yang ingin Anda cari di Youtube?, Contoh penggunaan: \n\n${clave+i} The prophet wanna play?`, "[ ! ] Tidak ada hasil, coba lagi...", `✍️ Judul: ${i}\n⚡ Pengarang : ${e}\n⏰ Durasi : ${t}\n👀 Penayangan : ${r}\n📆 Tanggal upload : ${u}\n📺 Saluran : ${k}\n📃 Keterangan : ${d||"-"}\n🧬 ID : ${s}\n\n🧑‍💻 _Anda dapat menggunakan perintah berikut untuk mengunduh_${masss}\n\n┌ Audio -\n │ ┌ ${clave}ytmp3 ${l}\n└┼ ${clave}yta ${l}\n └ ${clave}ytabochi ${l}\n\n┌ Video -\n│┌ ${clave}ytmp4 ${l}\n└┼ ${clave}ytv ${l}\n └ ${clave}ytvbochi ${l}\n`],
	Efau: (n = "") => `Kirim atau Balas catatan audio/suara, dengan perintah \n\n${clave+n}\n`,
	Eper: (a = "", n = "") => `*┏━> Efek Profil* : _${a}_\n*┗> Diminta untuk* : _@${n}_`,
	Evid: (n = "", i = "") => [`┏━━⊱ ${n} \n┗⊱ Oleh ${i}`, `Kirim atau Balas video, dengan perintah \n\n${clave+n}\n`],
	Excc: () => ["Perintah berisi karakter ilegal", "_Menjalankan..._"],
	Gemx: (n = "") => `Contoh penggunaan : ${clave+n} 🥺+🥵`,
	Gimg: (a = "", n = "", i = "") => ["Untuk apa Anda mencari gambar Google?", "[ ! ] Tidak ada hasil", `*[ GOOGLE-CHAN ] ✓*\n*~> Hasil untuk* : _${a}_\n*~> Ukuran* : _${n} x ${i} PX_`],
	Gtts: (n = "") => ["Maksimum karakter 600", `*[ ! ] Silakan, setelah menggunakan perintah ${n}, Anda harus menambahkan awalan bahasa yang ingin Anda dengarkan audionya* \n`, `Contoh penggunaan:\n\n${clave+n} id halo \n\n-> "id" = Awalan Indonesia\n--\x3e "halo" = teks\n`, `*[ bahasa yang tersedia ]* :${masss}\n\`\`\`\n 'af': 'Afrika',\n 'sq': 'Albania',\n 'ar': 'Arab',\n 'hy': 'Armenia',\n 'ca': 'Catalan',\n 'zh': 'China',\n 'zh-cn': 'China (Mandarin/China)',\n 'zh-tw': 'China (Mandarin/Taiwan)',\n 'zh-yue': 'Tionghoa (Kanton)',\n 'jam': 'Kroasia',\n 'cs': 'Ceko',\n 'da': 'Denmark',\n 'nl': 'Belanda',\n ' en': 'English',\n 'en-au': 'English (Australia)',\n 'en-uk': 'English (United Kingdom)',\n 'en-us': 'English (United Kingdom) Serikat) unidos)',\n 'eo': 'Esperanto',\n 'fi': 'Finlandia',\n 'fr': 'Prancis',\n 'de': 'Jerman',\n 'el ': 'Yunani',\n 'ht': 'Kreol Haiti',\n 'hai': 'Hindia',\n 'hu': 'Hongaria',\n 'adalah': 'Islandia',\n ' id' : 'Bahasa Indonesia',\n 'itu': 'Italia',\n 'ja': 'Jepang',\n 'ko': 'Korea',\n 'la': 'Latin',\n ' lv' : 'Latvia',\n 'mk': 'Makedonia',\n 'no': 'Norwegia',\n 'pl': 'Polandia',\n 'pt': 'Portugis',\n ' pt- br': 'Portugis (Brasil)',\n 'ro': 'Rumania',\n 'ru': 'Rusia',\n 'sr': 'Serbia',\n 'sk': 'Slovakia ', \n 'es': 'Spanyol',\n 'es-es': 'Spanyol (Spanyol)',\n 'es-us': 'Spanyol (Amerika Serikat)',\n 'sw': ' Swahili' ,\n 'sv': 'Swedia',\n 'ta': 'Tamil',\n 'th': 'Thai',\n 'tr': 'Turki',\n 'vi': ' Vietnam' ,\n 'cy': 'Wales'\n \`\`\``],
	Gbqd: (a = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "") => ["Apa yang ingin Anda cari di Google?", "[ ! ] Tidak ada hasil", `〘 *GOOGLE* 〙\n_~> Hasil untuk : ${a}_\n\n🔖 Judul: ${i}\n📜 Deskripsi : ${e}\n⛓️ Url: ${t}\n🖼️ Gambar: ${r+`\n🔍 Penelusuran terkait:\n- ${u}`}\n${k?"":`\n🌐 Informasi lebih lanjut: ${masss+d}`}\n`],
	Gadm: (a = "", n = "") => `*Admin grup* : ${a}\n\n*Total* : \n\n${n}\n`,
	Gbnd: () => ["Obrolan Berhasil Dilarang ✓", "Obrolan Berhasil Dibatalkan ✓"],
	Gpbc: (a = "", n = "") => ["[ ! ] Dan pesan yang ingin Anda siarkan?", `Mengirim siaran ke ${a} grup, sekitar ${n} detik`],
	Gcea: (n = "", i = "") => [`*Kapan Anda ingin menutup grup?*\n\n_Contoh penggunaan_ : \n${clave+n} 10 segundos`, `*Grup akan ditutup dalam ${n}*\n_Action yang dijalankan oleh: @${i}_`],
	Gdes: () => ["*[ ! ] Masukkan teks yang akan digunakan untuk memperbarui deskripsi grup saat ini*", "*[ ! ] Karakter maksimum 512*"],
	Gnme: () => ["*[ ! ] Masukkan subjek/judul/nama panggilan yang akan diperbarui dengan subjek grup saat ini*", "*[ ! ] karakter maksimum adalah 25*"],
	Gtag: (a = "") => `${a||"ˢᵉᵏˢᶦ ˢᶦᵃᵖᵃᵖᵘⁿ ʸᵃⁿᵍ ᴹᵉᵐᵇᵃᶜᵃⁿʸᵃ ⁷ʷ⁷"}`,
	Ginf: (a = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "") => `*Nama grup* : ${a}\n*Dibuat oleh* : _${i||"[ ! ] Jumlah pembuat grup utama tidak ditemukan"}_\n*Tanggal pembuatan* : _${e}_ \n*Total peserta* : _${t}_\n*Total administrator* : _${r}_\n${u}\n*Non-administrator* : _${k}_ \n*Grup ID* : _${d}_\n*Deskripsi* : \n${masss}\n${s||""}\n`,
	Ginv: (a = "", i = "", e = "", t = "") => `*[ ! ] Memanggil anggota party* :\n${a}\n\n*~> Summoner* : _@${i}_\n*~> Pesan* : _${e||"Gak ada :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${t.map((a=>"╠➥ @"+a.replace(/@.+/,""))).join`\n`}\n╚═══════════\n`,
	Glis: (a = "") => ["Di luar grup", "Di dalam grup", `*Grup dengan aktivitas tertinggi ${NombreDelBot} saat ini:*\n\n${a}`],
	Gvts: (i = "", e = "", t = "", r = "") => ["Pemungutan suara berhasil diatur ulang ✓",`*[ ! ] Belum ada suara aktif di grup ini*\n_Untuk membuat suara baru gunakan perintah_ ${clave}votacion`,"*[ ! ] Anda tidak dapat memilih lagi*",`\`\`\`[ PILIH ]\`\`\`\n\n📋 *Alasan:* ${a}\n✍️ *Pemilih:* ${b}\n\n📝\n┣🫂\n┣━⊱ Suara mendukung [✓]\n${c}\n┗━━⊱ Total: ${e}\n\n📝\n┣👥\n┣━⊱ Memberikan suara menentang [X]\n${d}\n┗━━⊱ Total: ${f}\n\n┌ Ya pilih ✔️\n└―  ${clave}sivotar\n\n┌ Tidak memilih ❌\n└―  ${clave}novotar`,`\`\`\`[ SUARA SAAT INI ]\`\`\`\n\n📋 *Alasan:* ${a} <=\n\n📝\n┣🫂\n┣━⊱ Suara mendukung [✓]\n${b}\n┗━━⊱ Total: ${d}\n\n📝\n┣👥\n┣━⊱ Memberikan suara menentang [X]\n${c}\n┗━━⊱ Total: ${e} \n${f?`\nGunakan perintah ${clave}reiniciarvotos untuk memulai kembali pemungutan suara ✓`:""}`,`*[ ! ] Masih ada suara aktif di grup*\n_Gunakan perintah_ : ${clave}reiniciarvotos _untuk membuat suara baru_`,`*Masukkan alasan memilih, contoh:*\n\n${clave+a} apakah manajernya baik?\n`,"Alasan pemungutan suara sangat singkat, jadilah kreatif!",`⚡ ${a} *Memulai pemungutan suara baru di grup:* ${b}\n\n_Cara berpartisipasi dalam pemungutan suara:_${masss}\n\n┏⊱   ${clave}sivotar\n┗━⊱  Untuk memberikan suara positif ✔️\n\n┏⊱   ${clave}novotar \n┗━⊱  Untuk memberikan suara negatif ❌\n\n┏⊱   ${clave}vervotos \n┗━⊱  Untuk memverifikasi suara 👀\n\n┏⊱   ${clave}reiniciarvotos \n┗━⊱  Untuk menghapus suara aktif ♻️`,`\`\`\`[ PILIH ]\`\`\`\n\n📋 *Alasan:* ${a}\n👤 *Pengumpul suara:* ${b}\n\n📝\n┣🫂\n┣━⊱ Suara mendukung [✓]\n┋\n┗━━⊱ Total: ${c}\n\n📝\n┣👥\n┣━⊱ Memberikan suara menentang [X]\n┋\n┗━━⊱ Total: ${d}`],
	Gadd: (a = "") => ["Aktifkan mode terbatas untuk melakukan tindakan ini", `*[ ! ] Kesalahan, tidak dapat menambahkan @${a} ke grup*\n\n_Silakan kirim tautan undangan secara manual wa.me/${a}_\n`],
	Hblt: (a = "", n = "", i = "", e = "", t = "") => [`\n@${a} ${n?"diaktifkan":"dinonaktifkan"} *${i}* berhasil ${e?"untuk bot ini":t?"":"untuk obrolan ini"}\n`, "Ini daftar opsi :3", "Opsi", "Deskripsi:", "Perintah:"],
	Hblr: () => [{
		title: "[ ⬇️ SELAMAT DATANG OTOMATIS ]",
		rows: [{
			title: "[ 🛬 Mengaktifkan ]",
			description: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿʸᵃᵐᵇᵘᵗ ᵖᵉˢᵉʳᵗᵃ ᵇᵃʳᵘ ᵏᵉ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ~",
			rowId: `${clave}encender bienvenida`
		}, {
			title: "[ 🛫 Menonaktifkan ]",
			description: "~ᴾᵉˢᵉʳᵗᵃ ᵇᵃʳᵘ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦᵗᵉʳᶦᵐᵃ~",
			rowId: `${clave}apagar bienvenida`
		}]
	}, {
		title: "[ ⬇️ DETEKSI ]",
		rows: [{
			title: "[ 🌕 Mengaktifkan ]",
			description: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵈᵉᵗᵉᵏˢᶦ ᵖᵉⁿʸᵉˢᵘᵃᶦᵃⁿ ʸᵃⁿᵍ ᵈᶦˡᵃᵏᵘᵏᵃⁿ ᵖᵃᵈᵃ ᵍʳᵘᵖ~",
			rowId: `${clave}encender deteccion`
		}, {
			title: "[ 🌑 Menonaktifkan ]",
			description: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉⁿᵈᵉᵗᵉᵏˢᶦ ᵖᵉⁿʸᵉˢᵘᵃᶦᵃⁿ ʸᵃⁿᵍ ᵈᶦˡᵃᵏᵘᵏᵃⁿ ᵖᵃᵈᵃ ᵍʳᵘᵖ~",
			rowId: `${clave}apagar deteccion`
		}]
	}, {
		title: "[ ⬇️ ANTI - HAPUS ]",
		rows: [{
			title: "[ ♻️ Mengaktifkan ]",
			description: "~ˢᵉᵐᵘᵃ ᵖᵉˢᵃⁿ ʸᵃⁿᵍ ᵈᶦʰᵃᵖᵘˢ ᵃᵏᵃⁿ ᵈᶦᵖᵘˡᶦʰᵏᵃⁿ ˢᵉᶜᵃʳᵃ ᵒᵗᵒᵐᵃᵗᶦˢ~",
			rowId: `${clave}encender antieliminar`
		}, {
			title: "[ 🗑️ Menonaktifkan ]",
			description: "~ᴾᵉˢᵃⁿ ʸᵃⁿᵍ ᵈᶦʰᵃᵖᵘˢ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦᵖᵘˡᶦʰᵏᵃⁿ~",
			rowId: `${clave}encender eliminar`
		}]
	}, {
		title: "[ ⬇️ GUNAKAN - DOKUMEN ]",
		rows: [{
			title: "[ 🗃️ Mengaktifkan ]",
			description: "~ᴾᵉⁿᵍᵍᵘⁿᵃᵃⁿ ᵈᵒᵏᵘᵐᵉⁿ ᵃᵏᵃⁿ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ ᵘⁿᵗᵘᵏ ᵇᵒᵗ~",
			rowId: `${clave}encender document`
		}, {
			title: "[ 🗳️ Menonaktifkan ]",
			description: "~ᴾᵉⁿᵍᵍᵘⁿᵃᵃⁿ ᵈᵒᵏᵘᵐᵉⁿ ʸᵃⁿᵍ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᵘⁿᵗᵘᵏ ᵇᵒᵗ~",
			rowId: `${clave}apagar document`
		}]
	}, {
		title: "[ ⬇️ PETUNJUK PENGGUNAAN ]",
		rows: [{
			title: "[ 🏬 Publik ]",
			description: "~ᴹᵒᵈᵉ ᵖᵘᵇˡᶦᵏ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉⁿᵍᵍᵘⁿᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
			rowId: `${clave}encender publico`
		}, {
			title: "[ 🏡 Pribadi ]",
			description: "~ᴹᵒᵈᵉ ᵖʳᶦᵇᵃᵈᶦ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵖᵉᵐᶦˡᶦᵏ ᵇᵒᵗ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿⁿʸᵃ~",
			rowId: `${clave}apagar publico`
		}]
	}, {
		title: "[ ⬇️ ANTI - ORANG ASING ]",
		rows: [{
			title: "[ 🏳️ Mengaktifkan ]",
			description: "~ᴾᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ˢᵉˡᵃᶦⁿ ᵃʷᵃˡᵃⁿ ᵖᵉᵐᶦˡᶦᵏ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ~\nᴬⁿᵍᵏᵃ ʸᵃⁿᵍ ᵈᶦᵐᵘˡᵃᶦ ᵈᵉⁿᵍᵃⁿ +" + PaisPrefix + " ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦʰᵃᵖᵘˢ",
			rowId: `${clave}encender antiextranjeros`
		}, {
			title: "[ 🏴 Menonaktifkan ]",
			description: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᴬⁿᵗᶦ ᴼʳᵃⁿᵍ ᴬˢᶦⁿᵍ ᵈᶦ ᵍʳᵘᵖ~",
			rowId: `${clave}apagar antiextranjeros`
		}]
	}, {
		title: "[ ⬇️ ANTI-PALSU 1 ]",
		rows: [{
			title: "[ 🛡️ Mengaktifkan ]",
			description: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᵖᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ᴬˢ ⁺¹~",
			rowId: `${clave}encender antifake1`
		}, {
			title: "[ ⚰️ Menonaktifkan ]",
			description: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᵃⁿᵗᶦ⁻ᵖᵃˡˢᵘ ¹ ᵈᶦ ᵍʳᵘᵖ~",
			rowId: `${clave}apagar antifake1`
		}]
	}, {
		title: "[ ⬇️ ANTI-PALSU 2 ]",
		rows: [{
			title: "[ 🛡️ Mengaktifkan ]",
			description: "~ᴾᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ᵃⁿᵉʰ ᵃᵗᵃᵘ ᵐᵉⁿᶜᵘʳᶦᵍᵃᵏᵃⁿ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ~",
			rowId: `${clave}encender antifake2`
		}, {
			title: "[ ⚰️ Menonaktifkan ]",
			description: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᵈᶦ ᵍʳᵘᵖ~",
			rowId: `${clave}apagar antifake2`
		}]
	}, {
		title: "[ ⬇️ ANTI-LINK ]",
		rows: [{
			title: "[ 🗡️ Mengaktifkan ]",
			description: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ʸᵃⁿᵍ ᵐᵉᵐᵖᵒˢᵗᶦⁿᵍ ᵗᵃᵘᵗᵃⁿ ᵈᶦ ᵍʳᵘᵖ~",
			rowId: `${clave}encender antilink`
		}, {
			title: "[ 😴 Menonaktifkan ]",
			description: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉⁿᵍᵃᵐᵇᶦˡ ᵗᶦⁿᵈᵃᵏᵃⁿ ᵃᵖᵃ ᵖᵘⁿ ˢᵃᵃᵗ ᵖᵉˢᵃⁿ ᵈᶦᵏᶦʳᶦᵐ~",
			rowId: `${clave}apagar antilink`
		}]
	}, {
		title: "[ ⬇️ ANTI - LINK 2 ]",
		rows: [{
			title: "[ 🗡️ Mengaktifkan ]",
			description: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ʸᵃⁿᵍ ᵐᵉⁿᵍᶦʳᶦᵐ ˡᶦⁿᵏ⁻ᵘʳˡ~",
			rowId: `${clave}encender antilink2`
		}, {
			title: "[ 😴 Menonaktifkan ]",
			description: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉˡᵃᵏᵘᵏᵃⁿ ᵗᶦⁿᵈᵃᵏᵃⁿ ᵃᵖᵃ ᵖᵘⁿ ˢᵃᵃᵗ ᵗᵃᵘᵗᵃⁿ⁻ᵘʳˡ ᵈᶦᵏᶦʳᶦᵐ~",
			rowId: `${clave}apagar antilink2`
		}]
	}, {
		title: "[ ⬇️ OTOMATIS - TINGKAT ]",
		rows: [{
			title: "[ 👑 Mengaktifkan ]",
			description: "~ᴾᵉⁿᵍᵍᵘⁿᵃ ᵃᵏᵃⁿ ᵈᵃᵖᵃᵗ ⁿᵃᶦᵏ ˡᵉᵛᵉˡ ˢᵉᶜᵃʳᵃ ᵒᵗᵒᵐᵃᵗᶦˢ~",
			rowId: `${clave}encender autolevelup`
		}, {
			title: "[ 🎓 Menonaktifkan ]",
			description: "~ᴾᵉⁿᵍᵍᵘⁿᵃ ᵗᶦᵈᵃᵏ ˡᵃᵍᶦ ᵈᵃᵖᵃᵗ ⁿᵃᶦᵏ ˡᵉᵛᵉˡ ˢᵉᶜᵃʳᵃ ᵒᵗᵒᵐᵃᵗᶦˢ~",
			rowId: `${clave}apagar autolevelup`
		}]
	}, {
		title: "[ ⬇️ MODE TERBATAS ]",
		rows: [{
			title: "[ 🌚 Diaktifkan ]",
			description: "~ᴬᵏᵗᶦᶠᵏᵃⁿ ᶠᵘⁿᵍˢᶦ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ᵈᵃʳᶦ ᵍʳᵘᵖ ⁽ᵈᵉⁿᵍᵃⁿ ʳᶦˢᶦᵏᵒ ᴬⁿᵈᵃ ˢᵉⁿᵈᶦʳᶦ⁾~",
			rowId: `${clave}encender restringir`
		}, {
			title: "[ 🌝 dengan disabilitas ]",
			description: "~ᵀᶦⁿᵈᵃᵏᵃⁿ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵃᵐᵇᵃʰ ᵈᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
			rowId: `${clave}apagar restringir`
		}]
	}, {
		title: "[ ⬇️ TANPA MODE BOT ]",
		rows: [{
			title: "[ 🙈 Mengaktifkan ]",
			description: "~ᴵᵗᵘ ʰᵃⁿʸᵃ ᵐᵉⁿᶜᵉᵗᵃᵏ ᵖᵉˢᵃⁿ ʸᵃⁿᵍ ᵈᶦᵗᵉʳᶦᵐᵃ ᵈᶦ ᵏᵒⁿˢᵒˡ ᵈᵃⁿ ᵐᵉⁿᵃᵐᵇᵃʰᵏᵃⁿ ᵖᵉⁿᵍᵍᵘⁿᵃ ᵏᵉ ᵈᵃᵗᵃᵇᵃˢᵉ~",
			rowId: `${clave}encender atender`
		}, {
			title: "[ 🙉 Menonaktifkan ]",
			description: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵘˡᵃᶦ ᵐᵉᵐᵉⁿᵘʰᶦ ᶠᵘⁿᵍˢᶦ ʸᵃⁿᵍ ᵈᶦᵐᶦⁿᵗᵃ~",
			rowId: `${clave}apagar atender`
		}]
	}, {
		title: "[ ⬇️ OTOMATIS - BACA ]",
		rows: [{
			title: "[ 🤓 Membaca ]",
			description: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵘˡᵃᶦ ᵐᵉⁿᵃⁿᵈᵃᶦ ᵒᵇʳᵒˡᵃⁿ ˢᵉᵇᵃᵍᵃᶦ ᵗᵉˡᵃʰ ᵈᶦᵇᵃᶜᵃ~",
			rowId: `${clave}encender autoleer`
		}, {
			title: "[ 😵 Jangan dibaca ]",
			description: "~ᴮᵒᵗ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵐᵉⁿᵃⁿᵈᵃᶦ ᵒᵇʳᵒˡᵃⁿ ˢᵉᵇᵃᵍᵃᶦ ᵗᵉˡᵃʰ ᵈᶦᵇᵃᶜᵃ~",
			rowId: `${clave}apagar autoleer`
		}]
	}, {
		title: "[ ⬇️ ANTI - SWASTA ]",
		rows: [{
			title: "[ 💔 Mengaktifkan ]",
			description: "~ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵒʳᵃⁿᵍ ʸᵃⁿᵍ ᵇᵉʳᵇᶦᶜᵃʳᵃ ᵈᵉⁿᵍᵃⁿ ᵇᵒᵗ ˢᵉᶜᵃʳᵃ ᵖʳᶦᵇᵃᵈᶦ ᵃᵏᵃⁿ ᵈᶦᵇˡᵒᵏᶦʳ~",
			rowId: `${clave}encender noprivado`
		}, {
			title: "[ ❤️ Menonaktifkan ]",
			description: "~ᴹᵒᵈᵉ ᵃⁿᵗᶦ⁻ᵖʳᶦᵇᵃᵈᶦ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
			rowId: `${clave}apagar noprivado`
		}]
	}, {
		title: "[ ⬇️ ANTI - MENCARA ]",
		rows: [{
			title: "[ 🐸 Mengaktifkan ]",
			description: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᵖᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ᵖᵉˢᵃⁿ ᵐᵒᵍᵒᵏ ᵈᶦ ᵂʰᵃᵗˢᴬᵖᵖ~",
			rowId: `${clave}encender antitraba`
		}, {
			title: "[ 👾 Menonaktifkan ]",
			description: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
			rowId: `${clave}apagar antitraba`
		}]
	}, {
		title: "[ ⬇️ CHAT - BOT ]",
		rows: [{
			title: "[ 🗣️ Mengaktifkan ]",
			description: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᶜʰᵃᵗᵇᵒᵗ ᵈᶦ ᵍʳᵘᵖ ᵂʰᵃᵗˢᴬᵖᵖ~",
			rowId: `${clave}encender chatbot`
		}, {
			title: "[ 👤 Menonaktifkan ]",
			description: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᶜʰᵃᵗᵇᵒᵗ ᵈᶦ ᵍʳᵘᵖ ˢᵃᵃᵗ ᶦⁿᶦ~",
			rowId: `${clave}apagar chatbot`
		}]
	}, {
		title: "[ ⬇️ SUB - BOTS ]",
		rows: [{
			title: "[ 🌳 Mengaktifkan ]",
			description: "~ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉⁿᵍᵍᵘⁿᵃ ᵇᶦˢᵃ ᵐᵉⁿʲᵃᵈᶦ ᵇᵒᵗ ˢᵉᵐᵉⁿᵗᵃʳᵃ~",
			rowId: `${clave}encender yesclabots`
		}, {
			title: "[ 🌱 Menonaktifkan ]",
			description: "~ᴾᵉʳᶦⁿᵗᵃʰ ᵐᵉⁿʲᵃᵈᶦ ᵇᵒᵗ ᵗᶦᵈᵃᵏ ᵇᶦˢᵃ ᵈᶦᵍᵘⁿᵃᵏᵃⁿ~",
			rowId: `${clave}encender noesclabots`
		}]
	}, {
		title: "[ ⬇️ HANYA - ADMIN ]",
		rows: [{
			title: "[ ⭐ Mengaktifkan ]",
			description: "~ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
			rowId: `${clave}encender soloadmins`
		}, {
			title: "[ ✨ Menonaktifkan ]",
			description: "~ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵃᵏᵃⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
			rowId: `${clave}apagar soloadmins`
		}]
	}],
	Hrio: (a="", b="", c="", d="", e="", f="", g="", h="", i="", j="", k="", l="", m="", o="", p="", q="", r="", s="", t="", u="", v="", w="", x="") => `\`\`\`\n「 ZONA-WAKTU 🌎 」\n\n⌚Perú      : ${a}\n⌚Mexico    : ${b}\n⌚Bolivia   : ${c}\n⌚Chile     : ${d}\n⌚Argentina : ${e}\n⌚Colombia  : ${f}\n⌚Ecuador   : ${g}\n⌚Costa_Rica: ${h}\n⌚Cuba      : ${i}\n⌚Guatemala : ${j}\n⌚Honduras  : ${k}\n⌚Nicaragua : ${l}\n⌚Panama    : ${m}\n⌚Uruguay   : ${o}\n⌚Venezuela : ${p}\n⌚Paraguay  : ${q}\n⌚New York  : ${r}\n⌚Brasil    : ${s}\n⌚G.N.Q     : ${t}\n⌚España    : ${u}\n⌚Asia      : ${v}\n\`\`\`\n${masss}\nZona waktu server saat ini:\n[ ${w} ]\n${x}`,
	Hcmd: (n = "") => ["Tidak ditemukan hash!", "[ ! ] Anda tidak memiliki izin untuk menghapus stiker-cmd ini", "Stiker-cmd berhasil dihapus ✓", "*HASH LIST*", "*Identifier*", "Terkunci", " *Fungsi yang dapat dijalankan*", "Balas pesan dari obrolan ini!", "Hash SHA256(stiker) yang hilang", "[ ! ] Hash tidak ditemukan dalam database", "Selesai ✓", `Balas stiker dengan perintah : \n\n*${clave+n}*`, `Contoh penggunaan:\n\n${clave+n} ${clave}menu\n`, "Anda tidak memiliki izin untuk membuat permintaan ini.", "Berhasil diselesaikan ✓"],
	Hnwa: (a="", b="") => [`Harap berikan nomor, Contoh penggunaan:\n\n${clave + a} 51991378xxx\n`, "Silakan tambahkan 'x' pada nomor yang disediakan", "Maksimal 3 'x' yang diperbolehkan! :v", "*[ DAFTAR NOMOR DI WHATSAPP ]*\n\n*🟢 Nomor aktif:*\n" , "\n*🔴Nomor tanpa informasi:*\n", "\n\n🧑‍💻 *Nomor tanpa akun WhatsApp dalam rentang yang Anda berikan:*\n", `*🥏 Nomor:* wa.me/${a}\n*Bio:* Hai! Saya menggunakan whatsapp.\n`, `*🪀 Nomor:* wa.me/${a}\n*Bio:* ${b}\n`],
	Hesc: () => ["Harap berikan teks", "Maksimal karakter 630!"],
	Hfth: () => "Parameter *URL* harus dimulai dengan http:// atau https:// -.-",
	Hrco: (n = "") => [`Kirim atau Balas video atau gambar dengan perintah \n\n${clave+n}\n`, "[ ! ] Tidak dapat mengambil komentar."],
	Hsvf: (n = "") => [`*Dengan nama apa Anda ingin menyimpan file?*\n_Contoh penggunaan_ : \n\n${clave+n} test-plugin.js\n`, "[_>] Harap balas pesan yang berisi benar syntax.. .", `File *${n}* berhasil disimpan ✓`, `Media berhasil disimpan ke *${n}*`],
	Htdr: (n = "") => `Kirim atau balas SMS dengan perintah ${clave+n} <bahasa> [teks], contoh:\n\n${clave+n} id Hello World\n`,
	Hfmp: () => ["Saya masih mengerjakan permintaan yang tertunda, harap tunggu giliran Anda: D", "Sudah selesai di FFmpeg"],
	Iclm: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "") => ["[ ! ] Masukkan nama kota", `[ CUACA ]\n\n📆 Tanggal: ${a}\n🌁 Kota: ${n}\n🗺️ Zona Waktu: ${i}\n📄 Deskripsi : ${e}\n🌡️Suhu: Minimum ${t}ºC / Maksimum ${r}ºC\n🎭 Sensasi: ${u}\n🏞️ Tekanan atmosfer: ${k}milibar\n💦 Kelembapan: ${d}% \n👁️ Visibilitas: ${s}msnm\n🌪️ Angin: Kecepatan ${l}km/j\n☁️ Awan: ${g}%`],
	Igit: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "") => ["[ ! ] Akun kreator utama saya saat ini ditangguhkan, Anda dapat melakukan pencarian lain di github atau mendukungnya di https://gitlab.com/NeKosmic :D", `[ GITHUB-USER-🐱 ]\n\n🧿 ID : ${a}\n⚡ Pengguna: < ${n} />\n🔥 Nama: ${i}\n🫂 Pengikut: ${e}\n🤝 Mengikuti: ${t}\n🧰 Repositori: ${r}\n🏗️ Perusahaan: ${u}\n🧑‍💻 Blog: ${k}\n🌎 Lokasi: ${d}\n📈 Tanggal Pembuatan: ${s}\n📉 Pembaruan Terakhir: ${l}\n📜 Biografi: ${g}`],
	Itkt: (n = "", k = "") => ["*[ ! ] Masukkan nama pengguna yang valid...*", `Harap gunakan nama panggilan saja!\nContoh penggunaan:\n\n${clave+n} nekosmic`, `${n.id?`🌐 ID: ${n.id}\n\n`:k.id?`🌐 ID: ${k.id}\n\n`:""}⚡ Pengguna: ${n.usuario||k.usuario}\n\n🔥 Nama panggilan: ${n.apodo||k.apodo}\n\n📜 Keterangan: ${n.bio||k.bio}${n.verificado?"\n\n🎭 Diverifikasi: "+(n.verificado?"🟢":"🔴"):k.verificado?"\n\n🎭 Diverifikasi: "+(k.verificado?"🟢":"🔴"):""}${n.pais?`\n\n🌎 Negara: ${n.pais}`:k.pais?`\n\n🌎 Negara: ${k.pais}`:""}\n\n👥 Pengikut: ${n.seguidores||k.seguidores}\n\n🤝 Mengikuti: ${n.siguiendo||k.siguiendo}${n.corazones?`\n\n💞 Hati: ${n.corazones}`:k.corazones?`\n\n💞 Hati: ${k.corazones}`:""}${n.videos?`\n\n🎞️ Video: ${n.videos}`:k.videos?`\n\n🎞️ Video: ${k.videos}`:""}\n\n⛓️ Link: https://www.tiktok.com/${n.usuario||k.usuario}\n`],
	Jtli: (n = "", i = "") => ["Anda sudah berada di ruang aktif -.-", `*[ ! ] Masukkan nama untuk membuat kamar baru*\n\nContoh dari penggunaan: \n\n${clave+n} latam\n`, "saingan ditemukan! \nᴾᵉᵐʳᵃᵏᵃʳˢᵃ ʰᵃʳᵘˢ ᵐᵉᵐᵘˡᵃᶦ ᵖᵉʳᵐᵃᶦⁿᵃⁿ ᵈᵉⁿᵍᵃⁿ ᵐᵉⁿᵍᵉᵗᶦᵏᵏᵃⁿ ᵃⁿᵍᵏᵃ ᵈᵃʳᶦ ¹ ˢᵃᵐᵖᵃᶦ ⁹", "Anda harus memulai permainan", "~Ketik :~\n\nrendirse\n\n~untuk menyerah~", `*[ ! ] Menunggu lawan*\nUntuk bergabung dengan permainan gunakan perintah ${clave+n} ${i}\n\n_Reward untuk pemenang +4000 XP_\n`, "Game is over", "Invalid", " Invalid position", "Invalid position", "Win!", "Game over, draw", "Turn for", "*Room 3 online berhasil dihilangkan ✓*"],
	Jcal: (n = "") => [`*[ ! ] Gunakan dengan baik perintah :*\n${clave+n} @tag|message|reply`, `*[ ! ] Tambahkan garis miring di antara setiap kata sekaligus*\n\n_Contoh penggunaan_ : \n${clave+n} @taggeduser|blessme|blessed\n~Jangan lupa gunakan garis miring ini~ : " | "`, "Tanpa teks :v", " gunakan 2 garis miring!!!\n\n@tag|pesan|balasan ✓"],
	Jmts: (n = "", i = "", e = "") => [`*Mode yang tersedia* : \n_${Object.keys(n).join("_\n_")}_\n*Contoh penggunaan* : \n\n${clave+i} kinder\n`, `*[ ! ] Harap gunakan mode yang valid!*\n*Anda dapat menggunakan salah satu mode yang tersedia ini* : \n_${Object.keys(n).join("_\n_")}_\n*`, "[ ! ] Masih ada pertanyaan yang belum terjawab dalam obrolan ini", `¿Apa hasil dari *${n}*?\n\nWaktu yang tersedia: ${i} detik\nHadiah untuk jawaban yang benar: ${e} XP`, `¡Waktu habis!\n\nJawabannya adalah: ${n}\n`, "Pertanyaannya sudah diselesaikan....", `*Jawaban yang benar!*\nInilah upahmu:\n+${n} XP\n`, `*[ ! ] Waktu habis*\nMenjawab: *${n}*`, `*Jawaban yang salah!*\nKamu telah pergi ${n} peluang`],
	Jnij: (a = "") => ["Gunakan nama atau nama panggilan...", `☯️ Nama Ninja untuk _${a}_:`],
	Jprj: (a = "", n = "") => [`❥ *Pasangan yang terbentuk* :\n\n┏─━─━─━∞◆∞━─━─━─┓\n@${a} ❤️ @${n} \n┗─━─━─━∞◆∞━─━─━─┛\n`, `Ini dimungkinkan berkat ${a}`],
	Jqun: (n = "") => [`*[ ! ] Buat subjek*\n_Contoh:_\n\n${clave+n} adalah gay :v?\n`, "*[ ! ] Subjek terlalu pendek*"],
	Jtgy: (a = "", n = "") => ["_Menghitung persentase..._", "Persentase gay Anda adalah ", `@${a} adalah ${n} gay`, "*[ ! ] Batas gay terlampaui [ ! ]*"],
	Jtop: () => ["*[ ! ] Bagian atas mana yang ingin Anda hasilkan?*", "*[ ! ] Teksnya terlalu pendek*"],
	Jtgs: (a = "", n = "", i = "", e = "") => [`*Pemain : @${a}*\n*[ Selamat anda menang!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${n}*\n*┃ ├────────┤ ┃*\n*${i} <==*\n*┃ ├────────┤ ┃*\n*${e}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Upahmu:* \n+50000 uang`, `Pemain : @${a}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${n}\n┃ ├────────┤ ┃\n${i}\n┃ ├────────┤ ┃\n${e}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
	Lpdr: () => "Berhasil membersihkan folder  './tmp'  ✓",
	Menu: () => ["_CONVERTER :_", "_ANIME :_", "_CMDS-KASUAL :_", "_CMDS OWNER :_", "_TOOLS :_", "_PREMIUM :_", "_ADVANCED :_", "_CMDS ADMINS :_ ", "_CMDS GROUPS :_", "_ART AND DESIGN :_", "_SEARCH :_", "_JASA :_", "_XP & LIMIT :_", "_RPG, GAMES :_", "_HOBBY :_", "_MENJADI SUB-BOT :_", "_OTHERS :_", "_Memuat menu..._", "(Terbatas)", "(Premium)", "_COMMANDS_", "Waktu aktif:", "Versi bot:", "Bot Owner:", "Awalan unik:", "Registered:", "Customer:", "Premium:", "Limit Remaining:", "Level:", "Role:", "XP : ", "[ ! ] Terjadi kesalahan pada menu :/", "_SEDERHANA-CRASHER :_", "_DOWNLOADER :_", "_SEARCH :_", "MENU +18"],
	Menp: (a = "") => `Halo @${a}! 👋`,
	Menl: () => [{
		title: "Menu-Sederhana 🌌",
		rows: [{
			title: "Fungsi-Dasar",
			description: "~ᴰᵃᶠᵗᵃʳ ᵖᵉʳᶦⁿᵗᵃʰ ˢᵉᵈᵉʳʰᵃⁿᵃ~",
			rowId: `${clave}menusimple`
		}]
	}, {
		title: "Menu-Internet 🌐",
		rows: [{
			title: "Menu-Acak",
			description: "~ᴰᵃᶠᵗᵃʳ ᴾᵉʳᶦⁿᵗᵃʰ ᴸᵃᶦⁿⁿʸᵃ~",
			rowId: `${clave}randmenu`
		}]
	}, {
		title: "Menu-Artistik 🎨",
		rows: [{
			title: "Buat-Logo",
			description: "~ᴾᵉʳᶦⁿᵗᵃʰ ᵘⁿᵗᵘᵏ ᵐᵉᵐᵇᵘᵃᵗ ˡᵒᵍᵒ ᵈᵃⁿ ˡᵃᶦⁿⁿʸᵃ~",
			rowId: `${clave}logofabrica`
		}]
	}, {
		title: "Menu-Otaku/Anime 🀄",
		rows: [{
			title: "Acak-Anime",
			description: "~ᴮᵉʳᵇᵃᵍᵃᶦ ᵐᵃᶜᵃᵐ ᵖᵉʳᶦⁿᵗᵃʰ ᴼᵗᵃᵏᵘ/ᴬⁿᶦᵐᵉ~",
			rowId: `${clave}mianime`
		}]
	}, {
		title: "Menu-Hentai/Anime 🥵",
		rows: [{
			title: "Kitab-Suci",
			description: "~ᶜᵒᵐᵐᵃⁿᵈᵒˢ ᴴᵉⁿᵗᵃᶦ⁻ᴷᵃʳᵗᵘⁿ ⁺¹⁸~",
			rowId: `${clave}labiblia`
		}]
	}, {
		title: "Menu-Lengkap ♻️",
		rows: [{
			title: "Besar",
			description: "~ᴰᵃᶠᵗᵃʳ ˡᵉⁿᵍᵏᵃᵖ ˢᵉᵐᵘᵃ ᵖᵉʳᶦⁿᵗᵃʰ~",
			rowId: `${clave}menucompleto`
		}]
	}],
	Mlti: (n = "") => ["Perubahan bahasa otomatis", `*[NK-BOT MULTI-LANGUAGE]*\n \n🇵🇪\n*┣⊱ Bahasa yang tersedia Spanyol ☰*\n*┣━⊱* _Bagaimana mengaktifkannya?, Contoh:_ \n *┗━━⊱* ${clave+n} es\n🇺🇸\n*┣⊱ tersedia bahasa Inggris ☰*\n*┣━⊱* _Bagaimana cara mengaktifkan?, Contoh:_\n*┗━━ ⊱* ${clave+n} en\n🇧🇷\n*┣⊱ Tersedia bahasa português ☰*\n*┣━⊱* _Bagaimana cara mengaktifkan?, Contoh:_\n*┗━━⊱* ${clave+n} pt\n🇮🇩\n*┣⊱ Tersedia Bahasa Indonesia ☰*\n*┣━⊱* _Bagaimana cara mengaktifkannya?, Contoh:_\n*┗━━⊱* ${clave+n} id\n🌎\n *┣⊱ Otomatis multi bahasa ☰*\n*┣━⊱* _Bagaimana mengaktifkan?, Contoh:_\n*┗━━⊱* ${clave+n} auto\n\n\`\`\` [CATATAN ] : Ini tidak memengaruhi perintah bot\n\`\`\`\n\n@NeKosmic`],
	Nwqr: (n = "") => [`\n_Apakah Anda ingin membuat kode QR baru?, untuk membuat kode QR baru gunakan perintah_\n\n${clave+n} continuar\n`, "\n_Sesi bot saat ini berhasil dihapus, sekarang Anda dapat membuat kode QR baru dari konsol untuk memindai._\n"],
	Pntr: (a = "") => ["Gambar apa yang ingin Anda cari di pinterest?", `*[ PINTEREST ] ✓*\nHasil untuk: _${a}_`],
	Pstr: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "") => ["Apa yang ingin Anda cari di playstore?", `🔍 Hasil: ${a}\n🧬 Pengenal: ${n}\n⛓️ Tautan: ${i}\n🖼️ Gambar: ${e}\n✍️ Pengembang: ${t}\n📜 Deskripsi: ${r||u}\n💲 Mata uang: ${k}\n🎭 Gratis: ${d}\n💸 Harga: ${s}\n📈 Skor: ${l}`],
	Rpga: (n = "", i = "", e = "", t = "") => [`Gunakan format *${clave+n} [kotak] [nilai]*\nContoh penggunaan: \n\n${clave+n} ordinario 1\n\n📍Daftar kotak:`, `Tipe *kotak Anda ${n+i}* tidak cukup!, Anda memiliki ${e} tipe kotak *${n+i}*\ngunakan perintah:\n\n${clave}comprar ${i} ${t}\n`, `Anda telah membuka *${n}* kotak bertipe ${i+e} dan mendapatkan:`, "Selamat, Anda memiliki barang langka, yaitu:", "Selamat, Anda memiliki item epik, yaitu:"],
	Rpgv: (n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "", o = "", m = "", $ = "", p = "") => [`Membutuhkan setidaknya 80 ❤️Kesehatan untuk berpetualang!!\nsilakan beli ❤️Kesehatan terlebih dahulu, gunakan perintah:\n\n${clave}comprar elixir <jumlah>\n\n lalu:\n\n${clave}sanar < jumlah>\n`, `*[ ! ] Anda sudah berpetualang, harap tunggu*\n🕐${n}...*\n`, "Akhir petualanganmu 🎭", `\n\n🔖 _Anda berada di ${n}, ${i} tetapi Anda memiliki:_\n`, `*[ PETUALANGAN 🌎 ]*\n\n> *Negara:* ${n}\n> *Kode Negara:* ${i}\n> *Nomor Gedung: * ${e} ${t}\n> *Kunci Kota:* ${r}\n> *Akhiran Kota:* ${u}\n> *Komunitas:* ${k}\n> * Lokasi: * ${d}\n> *Id:* ${s}\n> *Negara Bagian:* ${l}\n> *Alamat:* ${g}\n> *Jalan:* ${o}\n> *Street Suffix:* ${m}\n> *Zona Waktu:* ${$}\n> *Kode Pos:* ${p}`],
	Rpge: () => ["kamu tertidur sepanjang hari", "kamu keracunan makanan karena makan di restoran berkualitas buruk", "kamu kehilangan barang-barangmu", "kamu harus melawan naga", "kamu kehilangan barang-barangmu", "kamu diserang oleh geng", "kamu bekerja sebagai petani sepanjang hari", "kamu mengalami serangan di samping kudamu", "kamu masuk penjara karena memfitnah", "kamu membayar pajak", "kamu diserang oleh seorang segerombolan lebah", "satu langkah melewati gempa berkekuatan 10", "Anda tersesat di hutan terdekat selama 24 jam", "Anda ditipu di pameran", "sehari penuh pesta pora", "Anda kalah dalam taruhan ", "melakukan pertempuran berbahaya", "kamu diperbudak"],
	Rpgr: (n = "", i = "", e = "", t = "", r = "") => [`Gunakan format *${clave+n} [type] [halaman]*\ncontoh penggunaan: \n\n${clave+n} nkoins 1\n\n📍Daftar jenis:`, `• *${n} peringkat halaman ${i} dari ${e}* •\nAnda: *${t}* dari *${r}*`],
	Rpgc: (n = "", i = "", e = "", t = "", r = "") => ["Batas Anda penuh", `Anda baru saja melampaui batas yang telah ditentukan ${n} per pengguna, Anda adalah peretas apa :0`, `Anda tidak dapat membeli lebih dari batas ${n}, batas Anda saat ini adalah: ${i} `, `Gunakan format *${clave+n} [item] [jumlah]*\nContoh penggunaan: \n\n${clave+n} elixir 10\n \n📍Daftar item:`, "Biaya", "Nilai", `Anda tidak punya cukup ${n} untuk membeli *${i}* ${e}.  Anda perlu *${t}* ${r} untuk dapat membeli`, `Anda membeli *${n}* ${i} ✓`, `Anda tidak punya cukup *${n}* untuk dijual , Anda hanya memiliki ${i} item`, `Anda menjual *${n}* ${i} ✓`],
	Rpgd: (a = "") => `Anda telah mengklaim hadiah harian Anda! Harap kembali lagi setelahnya *${a}.*`,
	Rpgi: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "") => `Inventaris *${a}*\n\n${n}${i?`\n\n\n*📍Alat*\n${i}`:""}${e?`\n\n\n*📍 Item*\n${e}\n*🎒 Total item:* ${t} item`:""}${r?`\n\n\n*📍 Kotak*\n${r}\n*🎒 Total Kotak:* ${u} Kotak`:""}${k?`\n\n\n*📍 Hewan Piaraan*\n${k}`:""}${d?`\n\n*⌚ Cooldown*\n${d}`:""}\n`,
	Rpgm: (a = "") => `Anda telah mengklaim hadiah bulanan Anda, klaim berikutnya masuk *${a}.*`,
	Rpgs: (n = "", i = "") => ["Silakan berikan jumlah...!", "❤️kesehatan Anda penuh -.-", `🥤elixir Anda tidak cukup, Anda memiliki *${n}*\ngunakan perintah\n\n${clave}comprar elixir ${i}\n`, `Kamu dapat *${n}* 🥤obat mujarab`],
	Rpgt: (n = "", i = "", e = "", t = "") => ["Anda sudah melakukan transfer!", `Gunakan format ${clave+n} [type] [jumlah] [angka]\ncontoh penggunaan:\n\n${clave+n} nkoins 9999 @51991378809\n\n 📍 Transferable Items:`, "Tag pengguna atau masukkan nomornya!!!", `User *${n}* not found in the database -.-`, `Your *${n}${i}* kurang dari *${e}*`, `Anda yakin ingin mentransfer *${n}* ${i}${e} ke *@${t}*\n\n*Jawab :*\nsip \n_untuk mengonfirmasi _\n\n*Balas:*\nnop\n_untuk menolak_\n\n\nAnda memiliki waktu 60 detik`, "Ditolak", `Transfer berhasil *${n}* ${i}${e} a *@${t}*`, `Kesalahan mentransfer *${n}* ${i}${e} ke *@${t}*`, "Waktu habis..."],
	Stke: (n = "") => ["Balas stiker dari obrolan saat ini...", `Kirim atau Balas stiker dengan perintah ${clave+n}`, "Saran, hapus stiker Anda untuk semua orang ;v", "[ ! ] Balas stiker ke dapatkan metadata", "[ ! ] Balas stiker untuk memberikan harga palsu :p", "Balas stiker untuk mengedit EXIF ​​​​dengan cara Anda"],
	Stks: (n = "") => ["*[ ! ] Panjang maksimum video adalah 8 detik!*", `*[ ! ] Silakan Kirim atau Balas video atau gambar menggunakan perintah ${clave+n}*\n_NOTE : durasi video maksimal 1 hingga 8 detik_ ✓`, "[ ! ] Invalid url, try another ;3"],
	Stkf: (n = "", i = "") => [`*Perintah ini untuk mendapatkan stiker dari ${n?"Telegram":"Line"}*\n\nContoh penggunaan:\n${clave+i} anime`, `*Hasil ditemukan untuk ~${n}~, total:* ${i}\n_Mengirim stiker. . ._`],
	Stkw: (n = "") => [`Tambahkan nama paket dan nama penulis, contoh: \n\n${clave+n} package|author\n`, "*[ ! ] Durasi video maksimal 7 detik...! !! *", `*[ ! ] Silakan Kirim atau Balas gambar atau video menggunakan perintah ${clave+n}*`, "[ ! ] Invalid url, try another ;3"],
	Snvl: (a = "", n = "", i = "", e = "", t = "") => [`[ ! ] XP Anda saat ini kurang dari 0, Anda harus ${a} XP untuk melanjutkan naik level...`, `\n🪀 Level Saat Ini *${a} (${n}/${i})*\n 🔥 Anda kehilangan *${e}* XP sebelum Anda dapat naik level ke level berikutnya\n`, `Selamat!  ${a}\nAnda baru saja naik level`, `\`\`\`${a}\`\`\`\n\n♻️ *Level sebelumnya* : ${n}\n🪀 *Level baru* : ${i}\n⚔️ *Peran pelanggan* : ${e}\n📆 *Tanggal* : ${t}\n_Semakin banyak Anda berinteraksi dengan bot, semakin tinggi level Anda_`],
	Uact: (n = "", i = "", e = "") => ["*Peserta mana yang ingin Anda jadikan administrator?*", `Contoh penggunaan:\n\n${clave+n} @+51995...\n`, "Siapa yang ingin Anda blokir?", "[ ! ] Harap tandai pengguna yang ingin Anda blokir", `Pengguna diblokir, ${n} tidak akan lagi dapat menggunakan bot [ !  ]`, "*Admin mana yang ingin Anda batalkan pencekalannya?*", "Siapa yang ingin Anda batalkan pencekalannya?", `Pengguna membatalkan pencekalan, ${n} dapat menggunakan bot lagi [✓]`, `Harap tandai atau sebutkan seseorang !\n\nContoh penggunaan:\n${clave+n} @${i}`, `*${n}* berhenti menjadi premium`, "Harap tunjukkan jumlah hari", `Angka saja!\n \nContoh penggunaan:\n${clave+n} @${i} 51987...`, "[ ! ] Maksimum 7 hari", `*[ PENGGUNA PREMIUM ]*\n🔖 *Nama:* ${n}\n📆 *Hari:* ${i} hari\n📉 *Waktu tersisa:* ${e}MS`],
	Ureg: (n = "", i = "", e = "", t = "", r = "", u = "", k = "") => ["Silakan masukkan kode pendaftaran Anda", "[ ! ] Kode pendaftaran salah", "[✓] Pendaftaran Anda berhasil dihapus dari database 🗑️", `*[ ! ] Anda sudah terdaftar di database saya*\nApakah Anda ingin mendaftar lagi?\nGunakan perintah: \n\n${clave}unreg <Kode Pendaftaran>\n`, "Nama dan umur!?", `*[ ! ] Silakan tambahkan garis miring di antara nama dan umur*\n\n" | "\n`, "*[ ! ] Di usia hanya angka yang diterima -.-*", "*[ ! ] Bruh nama terlalu panjang ._.*", "*[ ! ] Usia maksimal 30 tahun* ", "*[ ! ] Usia minimum 13 tahun*", "Pubescent", "Remaja", "Muda", "Dewasa", "Informasi:", `〘 *PENDAFTARAN* 〙\n \n*❥ Tanggal Pendaftaran* : \n_${n}._\n\n┏─━─━━─━─━━─━\n╠≽️ *Pendaftaran pengguna* : @${i} \n╠≽️ *Nama Terdaftar* : ${e}\n╠≽️ *Tanggal Lahir* : ${t}\n╠≽️ *Menurut usia Anda, Anda adalah a(n)* : ${r}\n╠≽️ *Informasi* : ${u}\n╠≽️ *Nomor* : wa.me/${i}\n┗─━─━━─━─━━─━\n\n_Kode pendaftaran_: ${k}.py \n\nᴬⁿᵈᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿʸᵃˡᶦⁿ ᵏᵒᵈᵉ ᵖᵉⁿᵈᵃᶠᵗᵃʳᵃⁿ ᴬⁿᵈᵃ ᵈᵉⁿᵍᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ³ ᵈᶦᵍᶦᵗ ᵗᵉʳᵃᵏʰᶦʳ`],
	Uban: (a = "", n = "") => ["Apakah kamu membenciku? :,c", `*Peserta @${a} telah dihapus dari grup ✓*\n_Aksi dijalankan oleh ${n}_`, "Pengguna mana yang ingin Anda hapus!?\nHarap beri tag satu"],
	Unvl: (n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "") => [`[ ! ] XP Anda saat ini kurang dari 0, Anda harus ${n} XP untuk terus naik level...`, `┏━━❉ *[ Level ]* ❉━━━\n┣⊱ *User* : @${n}\n┣⊱ *Terdaftar* : ${i?"Ya ("+e+")":"Tidak"} ${t>0?"\n┣⊱ *Klaim terakhir :* "+r:" "}\n┣⊱ *Nama* : <${u}>\n┣⊱ *XP yang diperoleh sejauh ini* : ${k}\n┣⊱ *Level Anda saat ini* : ${d} ${s?` <Kamu bisa naik level sekarang, gunakan perintah ${clave}subirnivel>`:""}\n┣⊱ *Menurut levelnya* : ${l}\n┣⊱ *Level progress* : ${g}\n┗━━━━━━━━━━━━━\n\n_Gunakan perintah ${clave}inventario untuk melihat inventaris RPG Anda_\n`],
	Ulpr: (a = "", n = "", i = "", e = "") => [`*[ LIST - PREMIUM ]*\n\n*🌟 Klien* : @${a}\n${n?"*⏳ Waktu premium* : ∞":i?`*⏳ Waktu premium* : _${e}._`:"*🚫 Bukan lagi pengguna premium!"}`, "*⭐ Pengguna* :", "*⏳ Waktu premium* :", "🚫 Kedaluwarsa ---"],
	Upfl: (a = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "") => ["➢ Kode pendaftaran :", `💻 <[ PROFIL PENGGUNA]> 🌐\n\n⚡ |  INFO PENGGUNA |\n➢ Nama : ${a}\n${i?"➢ Pengguna premium : Ya":"➢ Pengguna premium : Tidak"} ${e?"":`\n➢ Nama terdaftar : ${t}`} ${r<0?"":`\n➢ Umur : ${r}`} ${u<0?"":`\n➢ Tanggal Pendaftaran : ${k}`} ${d?s:""} ${l?"\n➢ Apakah administrator : [✓]":"\n➢ Apakah administrator : [X]"} ${g?"\n➢ Permintaan dari : Grup":" \n➢ Permintaan dari: Obrolan pribadi"} ${masss}`, `➢ Negara: ${a} \n➢ Kunci negara: ${i} \n➢ Asal nomor: ${e||" Tidak ditemukan u.u "}\n➢ Nomor Link : wa.me/${t} ${r?"\n➢ Nomor Valid : [✓]":"\n➢ Nomor Valid : [X]"} ${u?"\n➢ Perangkat seluler : [✓]":"\n➢ Perangkat seluler : [X]"} \n➢ Operator : ${k} \n➢ Jenis jalur : ${u} \n➢ Format lokal : ${d} \n➢ Format internasional : ${s} \n➢ Kode negara : ${l}`, `➢ Link Nomor : wa.me/${a}`],
	Uwme: (a = "", n = "") => [`⚡ *LINK NOMOR ANDA* ⚡\n\n*Diminta oleh* : ${a} \n\n▪︎ *Link whatsapp langsung Anda adalah* :\n\n▪︎ https://wa.me/${n}\n\n*Atau Anda dapat menggunakan yang ini*\n\n▪︎ https://api.whatsapp.com/send?phone=${n}`, "Sentuh di sini untuk melihat bukti tautan", `https://wa.me/${a}?text=Halo+${n}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`],
	Vrip: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "", g = "", o = "", m = "", $ = "", p = "", h = "", b = "", A = "", _ = "", c = "", y = "", f = "", T = "", P = "") => ["*[ ! ] Silakan masukkan alamat IP*", "*[ ! ] Gunakan alamat IP yang valid dari kelas (C) !*", , "Saya tidak dapat menemukan informasi apa pun untuk alamat IP ini ;-;", ` 🗺️ INFO ALAMAT IP\n🔖 Diminta oleh: @${a}\n\n[ INFORMASI ]\n\`\`\`\n➢ Alamat IP: ${n}\n➢ Perangkat seluler: ${i?"[ ✓]":"[X]"}\n➢ Benua : ${e}\n➢ Kode benua : ${t}\n➢ Negara : ${r}\n➢ Kode negara : ${u} \n➢ Nama Wilayah : ${k}\n➢ Kode Wilayah : ${d}\n➢ Kota : ${s}\n➢ Distrik : ${l||g}\n➢ Kode Pos : ${o||g}\n➢ Lintang : ${m}\n➢ Bujur : ${$}\n➢ Zona Waktu : ${p}\n➢ Offset : ${h}\n➢ Mata Uang Lokal : ${b}\n➢ Penyedia Internet: ${A}\n➢ Organisasi: ${_}\n➢ Perusahaan: ${y||g} \n➢ DNS: ${f||g}\n➢ Server Proksi : ${T?"[✓]":"[X]"}\n➢ Hosting Web : ${P?"[✓]":"[X]"}\n\`\`\``],
	Wgps: (a = "", n = "") => ["ᶜᵃᵗᵃᵗᵃⁿ⁻ ʲᶦᵏᵃ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ ᶦⁿᶦ ᵈᶦˡᵃʳᵃⁿᵍ ᵘⁿᵗᵘᵏ ᵐᵉᵐᵇᵃᵍᶦᵏᵃⁿ ᵗᵃᵘᵗᵃⁿ ʲᶦᵏᵃ ᵖᵉʳˡᵘ• ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳ ᵐᵉᵐᶦˡᶦᵏᶦ ˢᵉᵐᵘᵃ ʰᵃᵏ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵍʰᶦˡᵃⁿᵍᵏᵃⁿ ᵇᵒᵗ", `${a} Apakah Anda ingin menambahkan grup Anda? :D?`, "Sentuh di sini ;3"],
	Wppr: (a = "", n = "") => ["Wallpaper apa yang ingin Anda cari?", `┏━⊱ Wallpaper : ${a}\n┗⊱ Diminta oleh : @${n}`],
	Wkpd: (a = "", i = "") => ["Apa pencarian Wikipedia Anda?", "[ ! ] Tidak ada hasil untuk pencarian Anda ;-;", `||  *WIKIPEDIA* ||\n_~> Hasil untuk : ${a}_\n${masss}\n${i}`],
	Ytbd: (a = "", n = "", i = "", e = "", t = "", r = "", u = "", k = "", d = "", s = "", l = "") => [`Apa yang ingin Anda telusuri di Youtube?, Contoh penggunaan: \n\n${clave+a} berapa 1 + 1`, `*[ > ] hasil Youtube untuk:* _${a}_\n\n `, `🔖 Judul: ${a}\n🧬 ID: ${n}\n⛓️ URL: ${i}\n🗜️ Jenis: ${e}\n🖼️ Gambar mini: ${t}\n⌚ Durasi : ${r}\n📜 Deskripsi: ${u}\n📆 Tanggal Upload: ${k}\n👀 Penayangan: ${d}\n||\n⚡Pengarang: ${s}\n📺 Saluran: ${l}\n\n*——————————*\n\n`]
};
/*
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
*/