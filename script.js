const screens = {
  home: document.getElementById("homeScreen"),
  map: document.getElementById("mapScreen"),
  challenge: document.getElementById("challengeScreen"),
  ending: document.getElementById("endingScreen")
};

const ui = {
  startButton: document.getElementById("startButton"),
  settingsButton: document.getElementById("settingsButton"),
  settingsModal: document.getElementById("settingsModal"),
  closeSettingsButton: document.getElementById("closeSettingsButton"),
  homeButton: document.getElementById("homeButton"),
  soundButton: document.getElementById("soundButton"),
  backToMapButton: document.getElementById("backToMapButton"),
  mapTitle: document.getElementById("mapTitle"),
  integrityLabel: document.getElementById("integrityLabel"),
  integrityFill: document.getElementById("integrityFill"),
  regionName: document.getElementById("regionName"),
  regionDesc: document.getElementById("regionDesc"),
  crystalGrid: document.getElementById("crystalGrid"),
  questList: document.getElementById("questList"),
  sceneBackdrop: document.getElementById("sceneBackdrop"),
  particleField: document.getElementById("particleField"),
  challengeRegion: document.getElementById("challengeRegion"),
  challengeName: document.getElementById("challengeName"),
  challengeIntegrityLabel: document.getElementById("challengeIntegrityLabel"),
  challengeIntegrityFill: document.getElementById("challengeIntegrityFill"),
  actionPanel: document.getElementById("actionPanel"),
  dialogueBox: document.getElementById("dialogueBox"),
  speakerName: document.getElementById("speakerName"),
  speakerTone: document.getElementById("speakerTone"),
  dialogueText: document.getElementById("dialogueText"),
  bossPresence: document.getElementById("bossPresence"),
  prismAvatar: document.getElementById("prismAvatar"),
  endingBadge: document.getElementById("endingBadge"),
  endingTitle: document.getElementById("endingTitle"),
  endingText: document.getElementById("endingText"),
  finalCrystals: document.getElementById("finalCrystals"),
  finalBosses: document.getElementById("finalBosses"),
  finalIntegrity: document.getElementById("finalIntegrity"),
  endingMapButton: document.getElementById("endingMapButton"),
  restartButton: document.getElementById("restartButton")
};

const values = ["Peduli", "Adil", "Disiplin", "Jujur", "Berani", "Mandiri", "Tanggung Jawab", "Kerja Keras", "Sederhana"];

const regions = {
  equi: {
    name: "Civitas Equi",
    label: "Kota Steampunk",
    desc: "Kota mesin yang lupa cara berbagi. Pulihkan Peduli, Adil, dan Disiplin untuk membuka jalur hutan.",
    unlock: () => true
  },
  baswara: {
    name: "Baswara Wilds",
    label: "Hutan Cahaya",
    desc: "Hutan berkabut yang menguji kejujuran, keberanian, dan kemandirian Nara.",
    unlock: () => hasCompleted("judge")
  },
  aeterna: {
    name: "Aeterna Peak",
    label: "Puncak Salju",
    desc: "Puncak dingin yang meminta tanggung jawab, kerja keras, dan hidup sederhana.",
    unlock: () => hasCompleted("thorn")
  },
  prism: {
    name: "Prism Tower",
    label: "Kristal Utama",
    desc: "Menara pusat Ethica. Terbuka saat 9 kristal pendukung dan 3 boss wilayah telah dipulihkan.",
    unlock: () => state.crystals.size === 9 && hasCompleted("crown")
  }
};

const prologue = [
  line("Aegis Verita", "lembut", "Nara... akhirnya kamu dengar panggilan kami."),
  line("Nara", "ragu", "Ini tempat apa? Kenapa semuanya kayak kehilangan warna?"),
  line("Aegis Verita", "jernih", "Ini Ethica. Kamu adalah Prism, pembawa 9 cahaya integritas yang tersebar di tiga wilayah."),
  line("Nara", "pelan", "Kedengarannya berat banget."),
  line("Aegis Verita", "hangat", "Kamu tidak harus langsung kuat. Kamu hanya perlu memilih dengan jujur, melangkah dengan sadar, dan tidak meninggalkan yang butuh bantuan.")
];

const challenges = [
  challenge("care", "equi", "Grid of Care", "Peduli", "Kristal Peduli", [
    line("Automaton Worker", "mekanis", "Unit distribusi rusak. Kota meminta energi lebih banyak dari yang tersedia."),
    line("NPC Bangsawan", "licin", "Alirkan energi ke distrikku dulu. Aku bisa kasih gear langka."),
    line("Nara", "waspada", "Kalau kota mati, gear langka juga tidak ada gunanya.")
  ], [
    phase("Panel Distribusi Energi", "Rumah sakit kritis, dapur umum tinggi, bengkel air sedang, distrik bangsawan rendah.", [
      opt("Bagi sesuai kebutuhan paling mendesak dulu.", "Peduli adalah memberi sesuai kebutuhan.", 12, 15, "good"),
      opt("Prioritaskan distrik bangsawan demi gear.", "Rumah sakit kehilangan daya. Kamu masih bisa memperbaikinya.", -14, 4, "risky"),
      opt("Minta data lengkap sebelum memilih.", "Analisis tenang membuka distribusi yang adil.", 7, 10, "good")
    ])
  ]),
  challenge("fair", "equi", "Scales of Fair Trade", "Adil", "Kristal Adil", [
    line("Scale-Keeper", "tenang", "Pasar rusak karena orang mulai merasa curang itu wajar."),
    line("Pedagang", "defensif", "Dia menuduhku mengurangi berat. Padahal dia cuma mau diskon."),
    line("Pembeli", "kesal", "Timbangannya jelas aneh!")
  ], [
    phase("Timbangan Pasar", "Cocokkan bukti sebelum memutuskan sengketa.", [
      opt("Cek alat timbangnya dulu.", "Adil adalah sabar sebelum memutuskan.", 12, 15, "good"),
      opt("Percaya pembeli tanpa bukti.", "Keputusan cepat tidak selalu adil.", -7, 6, "risky"),
      opt("Percaya pedagang tanpa bukti.", "Kamu mengulang pemeriksaan dari awal.", -7, 6, "risky")
    ])
  ]),
  challenge("discipline", "equi", "Clockwork Promise", "Disiplin", "Kristal Disiplin", [
    line("Clockwright", "tegas", "Jam kota berhenti karena semua orang menunda janji kecil."),
    line("Nara", "fokus", "Kalau ritmenya rusak, satu kota ikut terlambat.")
  ], [
    phase("Rangkaian Gear", "Pilih urutan kerja yang menjaga janji utama tanpa mengabaikan keadaan darurat.", [
      opt("Perbaiki gear utama sesuai jadwal.", "Ritme kota kembali stabil.", 12, 15, "good"),
      opt("Istirahat dulu, lalu kembali.", "Kamu masih lanjut, tapi waktumu berkurang.", 0, 6, "neutral"),
      opt("Ambil semua permintaan sekaligus.", "Jadwal utama terancam karena kurang prioritas.", -8, 5, "risky")
    ])
  ]),
  boss("judge", "equi", "The Judge of Bias", "Peduli, Adil, Disiplin", [
    line("The Judge of Bias", "berat", "Yang kuat didahulukan. Yang lambat ditinggalkan."),
    line("Nara", "tegas", "Itu bukan keadilan. Itu alasan buat menyingkirkan yang lemah."),
    line("Scale-Keeper", "waspada", "Hati-hati, Nara. Dia membuat keputusan buruk terdengar masuk akal.")
  ], [
    phase("Bias of Wealth", "Boss melindungi NPC kaya. Pindahkan energi ke warga yang benar-benar butuh.", [
      opt("Dengar warga kecil dan baca kebutuhan.", "Perisai kekayaan retak.", 10, 14, "good"),
      opt("Ikuti donatur kota.", "Vonis berat sebelah makin kuat.", -10, 3, "risky"),
      opt("Bagi rata tanpa melihat kebutuhan.", "Cukup membantu, tapi belum tepat.", 2, 7, "neutral")
    ]),
    phase("Bias of Anger", "Boss melempar vonis cepat. Pilih bukti yang tepat.", [
      opt("Tahan vonis sampai bukti lengkap.", "Amarah boss terpental.", 10, 14, "good"),
      opt("Pilih pihak paling keras.", "Kemarahan menutup fakta.", -9, 3, "risky"),
      opt("Minta dua sisi bicara singkat.", "Ruang adil terbuka.", 5, 9, "neutral")
    ]),
    phase("Bias of Delay", "Jam kota diperlambat. Tekan urutan gear dengan disiplin.", [
      opt("Gear kecil, gear pusat, lalu rem waktu.", "Jam kota bergerak lagi.", 10, 16, "good"),
      opt("Serang boss tanpa urutan.", "Gear terpental dan waktu bocor.", -8, 4, "risky"),
      opt("Perkuat rem sebelum gear pusat.", "Lambat, tapi stabil.", 4, 8, "neutral")
    ])
  ]),
  challenge("truth", "baswara", "Lantern of Truth", "Jujur", "Kristal Jujur", [
    line("Sylphid", "berbisik", "Lentera ini menyala hanya saat kamu berhenti menyembunyikan noda."),
    line("Nara", "jujur", "Kalau salahku terlihat, setidaknya aku bisa mulai memperbaikinya.")
  ], [
    phase("Lentera Kabut", "Kabut memunculkan tiga versi cerita. Pilih yang paling jujur.", [
      opt("Akui salah dan jelaskan akibatnya.", "Lentera menyala terang.", 12, 15, "good"),
      opt("Akui sebagian agar tidak dimarahi.", "Cahaya kecil muncul, tapi kabut belum pergi.", 3, 7, "neutral"),
      opt("Sembunyikan bagian yang memalukan.", "Kabut mengulang segmen.", -12, 3, "risky")
    ])
  ]),
  challenge("brave", "baswara", "Iron-Bark Stand", "Berani", "Kristal Berani", [
    line("Iron-Bark Treant", "dalam", "Berani bukan tidak takut. Berani adalah tetap berdiri saat takut datang."),
    line("Nara", "mantap", "Kalau aku gemetar, aku tetap bisa melindungi yang lain.")
  ], [
    phase("Akar Hitam", "Tahan tekanan kabut dan pilih kapan maju.", [
      opt("Lindungi warga sebelum menyerang akar.", "Keberanianmu memberi ruang aman.", 12, 15, "good"),
      opt("Menunggu sampai takut hilang.", "Takut tidak pergi, tapi kamu masih bisa bergerak.", 0, 6, "neutral"),
      opt("Maju sendirian tanpa melihat sekitar.", "Ceroboh membuat akar makin liar.", -8, 4, "risky")
    ])
  ]),
  challenge("independent", "baswara", "Path of Own Steps", "Mandiri", "Kristal Mandiri", [
    line("Trail Mender", "ramah", "Kami bisa memberi tanda, tapi kakimu sendiri yang harus memilih jalan."),
    line("Nara", "sadar", "Mandiri bukan menolak bantuan. Mandiri itu tidak menyerahkan keputusan.")
  ], [
    phase("Jalur Bercabang", "Pilih jalur dari petunjuk visual tanpa menunggu NPC menyuruh.", [
      opt("Baca lumut cahaya dan pilih sendiri.", "Jejakmu menyala mandiri.", 12, 15, "good"),
      opt("Ikuti orang pertama yang terlihat.", "Jalur lebih panjang dan melelahkan.", -6, 5, "risky"),
      opt("Tanya petunjuk, lalu putuskan sendiri.", "Bantuan berubah jadi pemahaman.", 6, 10, "good")
    ])
  ]),
  boss("thorn", "baswara", "The Thorn of Doubt", "Jujur, Berani, Mandiri", [
    line("The Thorn of Doubt", "tajam", "Jujur hanya membuka semua noda."),
    line("Nara", "tenang", "Noda yang kelihatan bisa dibersihkan."),
    line("The Thorn of Doubt", "menekan", "Berhenti. Duduk di kabut. Biar dunia tidak menuntutmu lagi.")
  ], [
    phase("False Reflection", "Pilih jawaban jujur dari tiga bayangan.", [
      opt("Aku boleh ragu, tapi aku tetap memilih.", "Bayangan palsu pecah.", 11, 14, "good"),
      opt("Aku tidak pernah takut.", "Kebohongan membuat kabut tebal.", -10, 3, "risky"),
      opt("Aku capek, tapi tidak mau hutan padam.", "Kejujuranmu menyalakan jalur.", 7, 10, "neutral")
    ]),
    phase("Root Pressure", "Akar menekan arena. Bertahan di area aman.", [
      opt("Berdiri melindungi Trail Mender.", "Akar mundur.", 10, 14, "good"),
      opt("Lari ke jalur terdekat.", "Kamu selamat, tapi jalur lain retak.", -5, 5, "risky"),
      opt("Tarik napas, lalu maju bersama.", "Tekanan melemah.", 6, 9, "neutral")
    ]),
    phase("Silent Path", "Tentukan jalur dari petunjuk visual.", [
      opt("Ikuti kunang hijau, hindari daun hitam.", "Duri utama patah.", 11, 16, "good"),
      opt("Tunggu suara pemandu.", "Tidak ada suara. Kabut maju.", -8, 4, "risky"),
      opt("Pakai tanda batu sebagai cadangan.", "Jalur terbuka perlahan.", 4, 8, "neutral")
    ])
  ]),
  challenge("oath", "aeterna", "Watchpost Oath", "Tanggung Jawab", "Kristal Tanggung Jawab", [
    line("Frostwarden", "dingin", "Pos jaga tidak boleh padam. Ada orang yang mengandalkan sinyal ini."),
    line("Nara", "siap", "Kalau aku menerima tugas, aku harus menjaganya sampai selesai.")
  ], [
    phase("Pos Salju", "Jaga sinyal, periksa persediaan, dan laporkan risiko.", [
      opt("Periksa sinyal dulu, lalu persediaan.", "Tanggung jawabmu membuat pos stabil.", 12, 15, "good"),
      opt("Buka peti hadiah sebelum tugas.", "Peti terkunci sampai tugas selesai.", -7, 4, "risky"),
      opt("Mulai patroli tanpa cek alat.", "Stamina awal berkurang.", 0, 6, "neutral")
    ])
  ]),
  challenge("hardwork", "aeterna", "Hundred Steps Trial", "Kerja Keras", "Kristal Kerja Keras", [
    line("Stone-Carver", "mantap", "Seratus langkah tidak ditaklukkan dengan satu lompatan."),
    line("Nara", "bernapas", "Kalau pelan tapi terus, puncaknya tetap mendekat.")
  ], [
    phase("Seratus Tangga", "Atur stamina, checkpoint, dan ritme pendakian.", [
      opt("Jalan bertahap dan aktifkan checkpoint.", "Kerja kerasmu konsisten.", 12, 15, "good"),
      opt("Sprint dari awal.", "Stamina cepat turun.", 0, 5, "neutral"),
      opt("Cari jalan pintas licin.", "Kamu tergelincir dan mengulang.", -10, 3, "risky")
    ])
  ]),
  challenge("simple", "aeterna", "The Simple Flame", "Sederhana", "Kristal Sederhana", [
    line("Plainlight Monk", "hening", "Api kecil ini padam jika diberi terlalu banyak bahan bakar."),
    line("Nara", "paham", "Cukup bukan berarti kurang. Cukup berarti tidak dikuasai oleh lebih.")
  ], [
    phase("Api Kecil", "Buang beban yang tidak perlu agar api tetap jernih.", [
      opt("Simpan yang perlu, lepaskan yang berlebihan.", "Api sederhana menyala stabil.", 12, 15, "good"),
      opt("Bawa semua item langka.", "Bahan bakar awal berkurang.", -7, 5, "risky"),
      opt("Buang item setelah menimbang fungsi.", "Kamu belajar cukup dengan sadar.", 4, 9, "neutral")
    ])
  ]),
  boss("crown", "aeterna", "The Crown of Excess", "Tanggung Jawab, Kerja Keras, Sederhana", [
    line("The Crown of Excess", "megah", "Lebih banyak tugas, lebih banyak piala, lebih banyak beban. Itulah nilai sejati."),
    line("Nara", "tegas", "Nilai bukan tumpukan. Nilai harus membuat hidup menyala, bukan tenggelam.")
  ], [
    phase("Weight of Oath", "Boss menumpuk tugas tanpa prioritas.", [
      opt("Ambil tugas yang menjadi tanggung jawabmu.", "Mahkota pertama retak.", 10, 14, "good"),
      opt("Ambil semua tugas agar dipuji.", "Beban berlebihan menekanmu.", -9, 3, "risky"),
      opt("Delegasikan tugas yang bukan mandatmu.", "Beban turun dengan sehat.", 6, 10, "neutral")
    ]),
    phase("Endless Summit", "Boss membuat puncak terasa tidak pernah cukup.", [
      opt("Tetap melangkah sesuai ritme.", "Tangga ilusi runtuh.", 10, 14, "good"),
      opt("Memaksa lari tanpa istirahat.", "Stamina pecah.", -8, 4, "risky"),
      opt("Berhenti singkat untuk pulih.", "Kamu lanjut lebih stabil.", 5, 8, "neutral")
    ]),
    phase("Golden Burden", "Boss menawarkan piala yang membuat api padam.", [
      opt("Pilih cukup dan jaga api kecil.", "Mahkota Excess hancur.", 11, 16, "good"),
      opt("Ambil semua piala.", "Cahaya tertutup emas palsu.", -10, 3, "risky"),
      opt("Ambil satu simbol dan tinggalkan sisanya.", "Cahaya kembali muncul.", 5, 9, "neutral")
    ])
  ]),
  boss("regent", "prism", "The Pale Regent", "Semua Nilai", [
    line("The Pale Regent", "dingin", "Akhirnya Prism datang membawa warna."),
    line("Nara", "berani", "Kamu yang mengunci Kristal Nawa?"),
    line("The Pale Regent", "kosong", "Aku menyelamatkannya. Dunia penuh pilihan buruk. Warna membuat manusia merasa bebas untuk merusak."),
    line("Nara", "jernih", "Itu bukan tenang. Itu kosong.")
  ], [
    phase("Nine Seals", "Aktifkan 9 kristal pendukung sesuai nilai yang sudah dipulihkan.", [
      opt("Nyalakan semua kristal sebagai lingkaran.", "Sembilan segel terbuka.", 12, 16, "good"),
      opt("Pakai kristal terkuat saja.", "Menara menolak cahaya tunggal.", -9, 4, "risky"),
      opt("Nyalakan tiga wilayah bergantian.", "Segel terbuka perlahan.", 5, 9, "neutral")
    ]),
    phase("Memory Trial: Peduli", "Siapa yang memberimu hak menentukan kebutuhan orang?", [
      opt("Aku membaca data dan mendengar warga.", "Jawaban tidak nyaman, tapi benar.", 10, 14, "good"),
      opt("Karena tidak ada orang lain bergerak.", "Kuasa kosong memang berbahaya.", 3, 7, "neutral"),
      opt("Karena aku tokoh utamanya.", "Kesombongan membuat warna membusuk.", -12, 2, "risky")
    ]),
    phase("Memory Trial: Jujur", "Apa mengaku salah membuat masa lalumu hilang?", [
      opt("Tidak. Itu membuatku berhenti sembunyi.", "Kejujuranmu menyakitkan, tapi bersih.", 10, 14, "good"),
      opt("Setidaknya orang lain lupa.", "Kejujuranmu masih mencari tepuk tangan.", -7, 4, "risky"),
      opt("Aku takut, tapi aku jawab.", "Kabut melemah.", 4, 8, "neutral")
    ]),
    phase("Prism Break", "Pilih cara mengembalikan warna Ethica.", [
      opt("Belajar, salah, memperbaiki, dan menjaga bersama.", "Kristal Nawa menyala penuh.", 14, 20, "good"),
      opt("Paksa semua orang mengikuti satu aturan.", "Regent hampir menang.", -14, 2, "risky"),
      opt("Biarkan warna kembali pelan-pelan.", "Ethica pulih dengan warna tenang.", 4, 8, "neutral")
    ])
  ])
];

const miniGames = {
  care: {
    type: "energy",
    title: "Distribusi Energi Civitas Equi",
    total: 12,
    sectors: [
      { id: "hospital", name: "Rumah Sakit", need: 5, hint: "Kritis: pasien butuh daya stabil." },
      { id: "kitchen", name: "Dapur Umum", need: 4, hint: "Tinggi: makanan warga hampir berhenti." },
      { id: "water", name: "Bengkel Air", need: 2, hint: "Sedang: pompa air harus tetap hidup." },
      { id: "noble", name: "Distrik Bangsawan", need: 1, hint: "Rendah: menawarkan gear langka jika diprioritaskan." }
    ]
  },
  fair: {
    type: "investigation",
    title: "Pasar Dua Sisi Cerita",
    intro: "Klik bukti sebelum memilih keputusan. Vonis tanpa bukti akan menurunkan Integrity.",
    cases: [
      {
        name: "Timbangan Berubah",
        dialogue: "Pedagang menyangkal, pembeli marah, jarum timbangan bergerak tidak wajar.",
        evidence: ["Jarum timbangan macet di angka 800g", "Gear bawah meja baru diganti", "Pembeli membawa struk 1kg"],
        verdicts: [
          { label: "Minta pedagang mengulang timbang dan mengganti selisih.", good: true },
          { label: "Percaya pembeli dan sita kios langsung.", good: false },
          { label: "Percaya pedagang karena ia lebih tua.", good: false }
        ]
      },
      {
        name: "Upah Terpotong",
        dialogue: "Pekerja mengaku belum dibayar penuh, pemilik kios bilang kas sedang kosong.",
        evidence: ["Buku kas mencatat laba hari ini", "Kontrak menulis upah penuh", "Pekerja menyelesaikan shift lengkap"],
        verdicts: [
          { label: "Bayar upah penuh lebih dulu, lalu audit kas.", good: true },
          { label: "Tunda upah sampai pasar ramai.", good: false },
          { label: "Bagi dua tanpa membaca kontrak.", good: false }
        ]
      },
      {
        name: "Tuduhan Palsu",
        dialogue: "Pembeli menuduh pedagang curang, tetapi meminta diskon sebelum bukti diperiksa.",
        evidence: ["Timbangan kios normal", "Barang belum dibuka", "Saksi melihat pembeli menekan harga"],
        verdicts: [
          { label: "Tolak tuduhan, tawarkan mediasi tanpa diskon paksa.", good: true },
          { label: "Paksa pedagang memberi diskon agar cepat selesai.", good: false },
          { label: "Usir pembeli tanpa menjelaskan bukti.", good: false }
        ]
      }
    ]
  },
  discipline: {
    type: "schedule",
    title: "Ritme Jam Utama",
    time: 45,
    tasks: [
      { id: "boiler", label: "Stabilkan boiler", duration: 9, priority: 1 },
      { id: "gear", label: "Pasang gear pusat", duration: 12, priority: 2 },
      { id: "clock", label: "Nyalakan jam utama", duration: 10, priority: 3 },
      { id: "panic", label: "Tenangkan NPC panik", duration: 6, priority: 0 },
      { id: "brass", label: "Poles ornamen balai", duration: 8, priority: 9 }
    ],
    correct: ["panic", "boiler", "gear", "clock"]
  },
  judge: {
    type: "boss",
    title: "The Judge of Bias",
    phases: [
      { name: "Bias of Wealth", prompt: "Timbangan condong ke distrik kaya. Lindungi warga kecil.", correct: "Alihkan perisai ke rumah sakit dan dapur umum.", attack: "Palu vonis emas" },
      { name: "Bias of Anger", prompt: "Boss memaksa vonis cepat.", correct: "Tahan keputusan sampai bukti cocok.", attack: "Gelombang amarah" },
      { name: "Bias of Delay", prompt: "Waktu melambat dan gear acak.", correct: "Gear kecil, gear pusat, rem waktu.", attack: "Rantai jam lambat" }
    ]
  },
  truth: {
    type: "memory",
    title: "Lantern of Truth",
    color: "green",
    scenes: [
      { prompt: "Ilusi menunjukkan Nara meninggalkan janji lama. Apa jawabanmu?", honest: "Aku takut waktu itu, tapi aku memang meninggalkan mereka.", lie: "Aku tidak punya pilihan sama sekali." },
      { prompt: "Kabut menanyakan kenapa kamu ingin menolong Ethica.", honest: "Aku juga ingin memperbaiki diriku.", lie: "Karena aku selalu benar." },
      { prompt: "Lentera meminta satu kebenaran kecil.", honest: "Aku belum kuat, tapi aku mau belajar.", lie: "Aku tidak pernah ragu." }
    ]
  },
  brave: {
    type: "survival",
    title: "Iron-Bark Stand",
    goal: 100,
    safeMin: 35,
    safeMax: 72,
    label: "Fear Pressure"
  },
  independent: {
    type: "exploration",
    title: "Path of Own Steps",
    clues: ["Lumut bercahaya tumbuh di sisi utara batu.", "Jejak kecil berhenti sebelum kabut hitam.", "Batu berbentuk bulan mengarah ke jalur timur."],
    paths: [
      { label: "Ikuti NPC yang menunjuk ke kabut hitam.", good: false },
      { label: "Ikuti lumut utara, lalu batu bulan ke timur.", good: true },
      { label: "Tunggu sampai Trail Mender memilihkan rute.", good: false }
    ]
  },
  thorn: {
    type: "boss",
    title: "The Thorn of Doubt",
    phases: [
      { name: "False Reflection", prompt: "Tiga bayangan menawarkan versi diri yang berbeda.", correct: "Pilih refleksi yang mengaku ragu tapi tetap berjalan.", attack: "Bisikan kabut" },
      { name: "Root Pressure", prompt: "Akar menekan arena.", correct: "Bertahan di zona aman tanpa kabur terlalu lama.", attack: "Akar hitam" },
      { name: "Silent Path", prompt: "Tidak ada bantuan NPC.", correct: "Baca cahaya daun dan pilih jalur sendiri.", attack: "Jalan palsu" }
    ]
  },
  oath: {
    type: "maintenance",
    title: "Watchpost Oath",
    resources: ["Nyalakan ulang lentera", "Periksa pintu pos", "Kirim sinyal evakuasi"],
    temptation: "Buka peti hadiah di luar pos"
  },
  hardwork: {
    type: "rhythm",
    title: "Hundred Steps Trial",
    beats: ["Pecah Es", "Tanam Pijakan", "Atur Napas", "Naik", "Checkpoint", "Atur Napas", "Naik"]
  },
  simple: {
    type: "inventory",
    title: "The Simple Flame",
    capacity: 8,
    items: [
      { name: "Mantel", weight: 3, value: 4, need: true },
      { name: "Tali", weight: 2, value: 3, need: true },
      { name: "Lampu Besar", weight: 4, value: 1, need: false },
      { name: "Ornamen Mahal", weight: 3, value: 0, need: false },
      { name: "Makanan", weight: 2, value: 4, need: true }
    ]
  },
  crown: {
    type: "boss",
    title: "The Crown of Excess",
    phases: [
      { name: "Abandoned Post", prompt: "Mahkota menawarkan peti hadiah jika pos ditinggalkan.", correct: "Tetap di pos dan kirim sinyal.", attack: "Badai emas" },
      { name: "Instant Summit", prompt: "Jalan pintas muncul di atas jurang.", correct: "Naik bertahap dengan checkpoint.", attack: "Tangga palsu" },
      { name: "Golden Burden", prompt: "Barang mewah jatuh dari langit.", correct: "Lepaskan beban dan jaga api kecil.", attack: "Hujan piala" }
    ]
  },
  regent: {
    type: "final",
    title: "The Pale Regent",
    phases: ["Nine Seals", "Memory Trial", "Monochrome Cage", "Prism Break"]
  }
};

const state = {
  selectedRegion: "equi",
  currentChallenge: null,
  phaseIndex: 0,
  dialogueIndex: 0,
  typingTimer: 0,
  typingFullText: "",
  typingDone: true,
  dialogueMode: "intro",
  integrity: 100,
  essence: 0,
  crystals: new Set(),
  completed: new Set(),
  sound: true,
  audio: null,
  prologueSeen: false,
  characterGender: "female",
  mini: null
};

function line(speaker, tone, text) {
  return { speaker, tone, text };
}

function opt(label, result, integrity, essence, type) {
  return { label, result, integrity, essence, type };
}

function phase(title, prompt, options) {
  return { title, prompt, options };
}

function challenge(id, region, title, value, reward, intro, phases) {
  return { id, region, title, value, reward, intro, phases, boss: false };
}

function boss(id, region, title, value, intro, phases) {
  return { id, region, title, value, reward: null, intro, phases, boss: true };
}

function hasCompleted(id) {
  return state.completed.has(id);
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  playSfx("transition");
}

function openSettings() {
  ui.settingsModal.classList.add("is-open");
  ui.settingsModal.setAttribute("aria-hidden", "false");
}

function closeSettings() {
  ui.settingsModal.classList.remove("is-open");
  ui.settingsModal.setAttribute("aria-hidden", "true");
}

function applyCharacter() {
  ui.prismAvatar.classList.toggle("gender-male", state.characterGender === "male");
  ui.prismAvatar.classList.toggle("gender-female", state.characterGender === "female");
  document.body.dataset.characterGender = state.characterGender;
}

function startGame() {
  initAudio();
  if (!state.prologueSeen) {
    state.prologueSeen = true;
    startNarrative(prologue, () => {
      showScreen("map");
      renderMap();
    });
    return;
  }
  showScreen("map");
  renderMap();
}

function startNarrative(lines, done) {
  showScreen("challenge");
  ui.challengeRegion.textContent = "Prolog";
  ui.challengeName.textContent = "Nara Tiba di Ethica";
  updateHud();
  ui.sceneBackdrop.className = "scene-backdrop prism";
  ui.bossPresence.classList.add("is-hidden");
  ui.actionPanel.className = "action-panel is-empty";
  state.currentChallenge = { intro: lines, phases: [] };
  state.dialogueIndex = 0;
  state.narrativeDone = done;
  applyCharacter();
  showDialogueLine();
}

function renderMap() {
  updateHud();
  const region = regions[state.selectedRegion];
  ui.mapTitle.textContent = region.name;
  ui.regionName.textContent = region.name;
  ui.regionDesc.textContent = region.desc;

  document.querySelectorAll(".chapter-node").forEach((node) => {
    const key = node.dataset.region;
    const unlocked = regions[key].unlock();
    const complete = getRegionChallenges(key).every((item) => state.completed.has(item.id));
    node.classList.toggle("is-locked", !unlocked);
    node.classList.toggle("is-complete", complete);
  });

  ui.crystalGrid.innerHTML = values.map((value) => {
    const lit = state.crystals.has(value) ? " is-lit" : "";
    return `<div class="crystal${lit}">${value}</div>`;
  }).join("");

  ui.questList.innerHTML = "";
  getRegionChallenges(state.selectedRegion).forEach((item) => {
    const unlocked = canPlay(item);
    const done = state.completed.has(item.id);
    const button = document.createElement("button");
    button.className = "quest-button";
    button.disabled = !unlocked || done;
    button.innerHTML = `
      <span>
        <strong>${item.title}</strong>
        <small>${item.boss ? "Boss" : "Nilai"}: ${item.value}</small>
      </span>
      <span class="quest-state">${done ? "Selesai" : unlocked ? "Main" : "Terkunci"}</span>
    `;
    button.addEventListener("click", () => startChallenge(item.id));
    ui.questList.appendChild(button);
  });
}

function getRegionChallenges(region) {
  return challenges.filter((item) => item.region === region);
}

function canPlay(item) {
  if (!regions[item.region].unlock()) return false;
  const regionItems = getRegionChallenges(item.region);
  const index = regionItems.findIndex((entry) => entry.id === item.id);
  return regionItems.slice(0, index).every((entry) => state.completed.has(entry.id));
}

function startChallenge(id) {
  clearMiniTimers();
  const item = challenges.find((entry) => entry.id === id);
  if (!item || !canPlay(item)) return;
  state.currentChallenge = item;
  state.phaseIndex = 0;
  state.dialogueIndex = 0;
  ui.challengeRegion.textContent = regions[item.region].name;
  ui.challengeName.textContent = item.title;
  updateHud();
  ui.sceneBackdrop.className = `scene-backdrop ${item.region}`;
  ui.bossPresence.classList.toggle("is-hidden", !item.boss);
  ui.actionPanel.className = "action-panel is-empty";
  applyCharacter();
  seedParticles();
  showScreen("challenge");
  showDialogueLine();
}

function showDialogueLine() {
  clearInterval(state.typingTimer);
  state.dialogueMode = "intro";
  const item = state.currentChallenge;
  const lines = item.intro;
  if (state.dialogueIndex >= lines.length) {
    if (state.narrativeDone && !item.phases.length) {
      const done = state.narrativeDone;
      state.narrativeDone = null;
      done();
      return;
    }
    renderPhase();
    return;
  }

  const entry = lines[state.dialogueIndex];
  ui.speakerName.textContent = entry.speaker;
  ui.speakerTone.textContent = entry.tone;
  typeText(entry.text, getTypeSpeed(entry));
}

function getTypeSpeed(entry) {
  if (entry.tone.includes("mekanis") || entry.speaker.includes("Automaton")) return 22;
  if (entry.tone.includes("tajam") || entry.tone.includes("tegas")) return 15;
  if (entry.tone.includes("dingin") || entry.speaker.includes("Regent")) return 28;
  if (entry.tone.includes("berbisik") || entry.tone.includes("hening")) return 34;
  return 20;
}

function typeText(text, speed) {
  state.typingFullText = text;
  state.typingDone = false;
  ui.dialogueText.textContent = "";
  let index = 0;
  playSfx("type");
  state.typingTimer = setInterval(() => {
    index += 1;
    ui.dialogueText.textContent = text.slice(0, index);
    if (index >= text.length) {
      clearInterval(state.typingTimer);
      state.typingDone = true;
    }
  }, speed);
}

function skipOrNext() {
  if (!state.typingDone) {
    clearInterval(state.typingTimer);
    ui.dialogueText.textContent = state.typingFullText;
    state.typingDone = true;
    return;
  }
  if (state.dialogueMode !== "intro") {
    return;
  }
  state.dialogueIndex += 1;
  showDialogueLine();
}

function renderPhase() {
  const item = state.currentChallenge;
  if (miniGames[item.id]) {
    renderMiniGame(item, miniGames[item.id]);
    return;
  }
  const current = item.phases[state.phaseIndex];
  if (!current) {
    completeChallenge();
    return;
  }

  state.dialogueMode = "phase";
  ui.speakerName.textContent = item.boss ? item.title : item.value;
  ui.speakerTone.textContent = item.boss ? "fase boss" : "tantangan";
  typeText(current.prompt, 18);
  ui.actionPanel.className = "action-panel";
  ui.actionPanel.innerHTML = `
    <div class="objective-card">
      <h3>${current.title}</h3>
      <p>${current.prompt}</p>
      <div class="choice-grid"></div>
    </div>
  `;

  const grid = ui.actionPanel.querySelector(".choice-grid");
  current.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = `choice-card ${option.type}`;
    button.innerHTML = `<strong>${option.label}</strong><small>${option.result}</small>`;
    button.addEventListener("click", () => chooseOption(option));
    grid.appendChild(button);
  });
}

function renderMiniGame(item, mini) {
  state.dialogueMode = "phase";
  ui.speakerName.textContent = item.boss ? item.title : item.value;
  ui.speakerTone.textContent = mini.type;
  typeText(getMiniIntro(mini), 18);
  ui.actionPanel.className = "action-panel action-panel-wide";

  if (mini.type === "energy") renderEnergyGame(item, mini);
  if (mini.type === "investigation") renderInvestigationGame(item, mini);
  if (mini.type === "schedule") renderScheduleGame(item, mini);
  if (mini.type === "boss") renderBossMini(item, mini);
  if (mini.type === "memory") renderMemoryGame(item, mini);
  if (mini.type === "survival") renderSurvivalGame(item, mini);
  if (mini.type === "exploration") renderExplorationGame(item, mini);
  if (mini.type === "maintenance") renderMaintenanceGame(item, mini);
  if (mini.type === "rhythm") renderRhythmGame(item, mini);
  if (mini.type === "inventory") renderInventoryGame(item, mini);
  if (mini.type === "final") renderFinalGame(item, mini);
}

function getMiniIntro(mini) {
  const copy = {
    energy: "Seret inti energi ke sektor kota. Baca kebutuhan nyata, bukan hadiah paling menggoda.",
    investigation: "Periksa bukti dan dengar dua sisi cerita sebelum memutuskan.",
    schedule: "Susun tugas tepat waktu. Prioritas yang tenang membuat jam kota kembali berdetak.",
    boss: "Hadapi fase boss. Pilih respons moral dan hindari serangan saat tekanan naik.",
    memory: "Kabut membuka ingatan. Jawaban jujur menyalakan lentera.",
    survival: "Tetap di zona keberanian. Hindari akar, tapi jangan kabur terlalu lama.",
    exploration: "Baca petunjuk lingkungan. Instruksi palsu akan menebalkan kabut.",
    maintenance: "Rawat pos salju satu per satu. Tanggung jawab berarti tidak meninggalkan sinyal.",
    rhythm: "Naik dengan ritme. Terlalu cepat menguras stamina, terlalu lambat tertutup badai.",
    inventory: "Pilih bekal secukupnya. Beban berlebihan membuat api kecil padam.",
    final: "Aktifkan kristal, hadapi memori, pulihkan warna, lalu pecahkan kurungan monokrom."
  };
  return copy[mini.type] || mini.title;
}

function miniShell(mini, body) {
  ui.actionPanel.innerHTML = `
    <div class="mini-card">
      <div class="mini-head">
        <div>
          <p class="kicker">Minigame</p>
          <h3>${mini.title}</h3>
        </div>
        <div class="mini-status" id="miniStatus">Mulai</div>
      </div>
      ${body}
    </div>
  `;
}

function renderEnergyGame(item, mini) {
  const allocations = Object.fromEntries(mini.sectors.map((sector) => [sector.id, 0]));
  state.mini = { allocations };
  miniShell(mini, `
    <div class="iso-city mono" id="isoCity">
      <div class="iso-tile hospital">H</div><div class="iso-tile kitchen">D</div>
      <div class="iso-tile water">B</div><div class="iso-tile noble">N</div>
      <div class="steam-stack"></div><div class="steam-stack small"></div>
    </div>
    <div class="energy-bank" id="energyBank"></div>
    <div class="sector-grid">
      ${mini.sectors.map((sector) => `
        <div class="sector-drop" data-sector="${sector.id}">
          <strong>${sector.name}</strong><small>${sector.hint}</small>
          <div class="need-meter"><span style="width:0%"></span></div>
          <b>0 / ${sector.need}</b>
        </div>
      `).join("")}
    </div>
    <p class="warning-text" id="balanceWarning">Energi tersedia: ${mini.total}. Distribusi ideal mengikuti kebutuhan minimum.</p>
    <button class="primary-button small mini-submit" id="submitEnergy">Stabilkan Grid</button>
  `);

  const bank = document.getElementById("energyBank");
  for (let i = 0; i < mini.total; i += 1) {
    const orb = document.createElement("button");
    orb.className = "energy-orb";
    orb.draggable = true;
    orb.textContent = "E";
    orb.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", "energy"));
    orb.addEventListener("click", () => assignEnergy(mini.sectors[0].id));
    bank.appendChild(orb);
  }

  document.querySelectorAll(".sector-drop").forEach((drop) => {
    drop.addEventListener("dragover", (event) => event.preventDefault());
    drop.addEventListener("drop", () => assignEnergy(drop.dataset.sector));
    drop.addEventListener("click", () => assignEnergy(drop.dataset.sector));
  });
  document.getElementById("submitEnergy").addEventListener("click", () => {
    const diff = mini.sectors.reduce((total, sector) => total + Math.abs(sector.need - allocations[sector.id]), 0);
    const nobleTooHigh = allocations.noble > 2;
    const score = Math.max(0, 100 - diff * 16 - (nobleTooHigh ? 22 : 0));
    finishMini(item, score, score >= 78 ? "Kota kembali bernapas. Peduli berarti memberi sesuai kebutuhan." : "Grid menyala, tapi beberapa sektor masih kekurangan karena distribusi tidak seimbang.");
  });

  function assignEnergy(id) {
    const used = Object.values(allocations).reduce((sum, value) => sum + value, 0);
    if (used >= mini.total) return;
    allocations[id] += 1;
    playSfx("choice");
    refreshEnergy();
  }

  function refreshEnergy() {
    const used = Object.values(allocations).reduce((sum, value) => sum + value, 0);
    bank.querySelectorAll(".energy-orb").forEach((orb, index) => orb.classList.toggle("is-used", index < used));
    mini.sectors.forEach((sector) => {
      const box = document.querySelector(`[data-sector="${sector.id}"]`);
      const amount = allocations[sector.id];
      box.querySelector(".need-meter span").style.width = `${Math.min(120, amount / sector.need * 100)}%`;
      box.querySelector("b").textContent = `${amount} / ${sector.need}`;
      box.classList.toggle("is-good", amount >= sector.need && amount <= sector.need + 1);
      box.classList.toggle("is-danger", amount < sector.need || amount > sector.need + 2);
    });
    const warning = document.getElementById("balanceWarning");
    warning.textContent = allocations.noble > 2
      ? "Peringatan: distrik bangsawan mulai menyerap energi yang lebih dibutuhkan sektor kritis."
      : used === mini.total ? "Semua energi telah dialirkan. Periksa keseimbangan sebelum menstabilkan grid." : `Energi tersisa: ${mini.total - used}.`;
    document.getElementById("isoCity").classList.toggle("warm", used >= 9);
  }
}

function renderInvestigationGame(item, mini) {
  state.mini = { caseIndex: 0, evidence: 0, correct: 0 };
  drawCase();

  function drawCase() {
    const current = mini.cases[state.mini.caseIndex];
    miniShell(mini, `
      <div class="market-scene">
        <div class="gold-scale"><span></span></div>
        <div class="gear-row"><i></i><i></i><i></i></div>
      </div>
      <p class="case-dialogue">${current.dialogue}</p>
      <div class="evidence-grid">
        ${current.evidence.map((text, index) => `<button class="evidence-card" data-evidence="${index}">${text}</button>`).join("")}
      </div>
      <div class="verdict-grid">
        ${current.verdicts.map((verdict, index) => `<button class="choice-card ${verdict.good ? "good" : "risky"}" data-verdict="${index}"><strong>${verdict.label}</strong><small>${current.name}</small></button>`).join("")}
      </div>
    `);
    document.getElementById("miniStatus").textContent = `Kasus ${state.mini.caseIndex + 1}/${mini.cases.length}`;
    document.querySelectorAll("[data-evidence]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!button.classList.contains("is-found")) state.mini.evidence += 1;
        button.classList.add("is-found");
        playSfx("choice");
      });
    });
    document.querySelectorAll("[data-verdict]").forEach((button) => {
      button.addEventListener("click", () => {
        const verdict = current.verdicts[Number(button.dataset.verdict)];
        const enoughEvidence = state.mini.evidence >= (state.mini.caseIndex + 1) * 2;
        if (verdict.good && enoughEvidence) state.mini.correct += 1;
        if (!enoughEvidence) state.integrity = clamp(state.integrity - 5, 0, 100);
        state.mini.caseIndex += 1;
        updateHud();
        playSfx(verdict.good && enoughEvidence ? "reward" : "danger");
        if (state.mini.caseIndex >= mini.cases.length) {
          finishMini(item, state.mini.correct / mini.cases.length * 100, "Pasar belajar bahwa adil bukan netral kosong. Adil adalah sabar sebelum memutuskan.");
        } else {
          drawCase();
        }
      });
    });
  }
}

function renderScheduleGame(item, mini) {
  state.mini = { time: mini.time, order: [], done: new Set(), timer: null };
  miniShell(mini, `
    <div class="clock-face"><span id="clockHand"></span></div>
    <div class="timebar"><span id="timeFill"></span></div>
    <div class="task-grid">
      ${mini.tasks.map((task) => `<button class="task-card" data-task="${task.id}"><strong>${task.label}</strong><small>${task.duration} detik ritme</small></button>`).join("")}
    </div>
    <button class="primary-button small mini-submit" id="submitSchedule">Kunci Jadwal</button>
  `);
  state.mini.timer = setInterval(() => {
    state.mini.time -= 1;
    document.getElementById("timeFill").style.width = `${state.mini.time / mini.time * 100}%`;
    document.getElementById("clockHand").style.transform = `rotate(${(mini.time - state.mini.time) * 8}deg)`;
    if (state.mini.time <= 0) {
      clearInterval(state.mini.timer);
      finishMini(item, 45, "Jam utama menyala terlambat. Ritme kota pulih, tapi jadwal utama retak.");
    }
  }, 1000);
  document.querySelectorAll("[data-task]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.mini.done.has(button.dataset.task)) return;
      state.mini.done.add(button.dataset.task);
      state.mini.order.push(button.dataset.task);
      button.classList.add("is-done");
      playSfx("choice");
    });
  });
  document.getElementById("submitSchedule").addEventListener("click", () => {
    clearInterval(state.mini.timer);
    const orderScore = mini.correct.reduce((score, id, index) => score + (state.mini.order[index] === id ? 25 : 0), 0);
    finishMini(item, orderScore, orderScore >= 75 ? "Ritme kota kembali stabil. Disiplin terasa seperti napas yang teratur." : "Beberapa tugas selesai, tapi prioritas yang goyah membuat jam berdetak pincang.");
  });
}

function renderBossMini(item, mini) {
  state.mini = { phase: 0, hp: 100, guard: 50 };
  drawBossPhase();

  function drawBossPhase() {
    const phaseData = mini.phases[state.mini.phase];
    miniShell(mini, `
      <div class="boss-arena-mini">
        <div class="boss-hp"><span style="width:${state.mini.hp}%"></span></div>
        <div class="boss-figure-mini">${item.id === "judge" ? "⚖" : item.id === "thorn" ? "✦" : item.id === "crown" ? "♛" : "◆"}</div>
        <p><strong>${phaseData.name}</strong> ${phaseData.prompt}</p>
        <div class="dodge-lane"><button class="ghost-button" id="dodgeAttack">Dodge: ${phaseData.attack}</button><span id="guardMeter" style="width:${state.mini.guard}%"></span></div>
        <div class="verdict-grid">
          <button class="choice-card good" data-boss-choice="good"><strong>${phaseData.correct}</strong><small>Respons bernilai</small></button>
          <button class="choice-card risky" data-boss-choice="bad"><strong>Ambil jalan tercepat.</strong><small>Tekanan turun sesaat, Integrity retak.</small></button>
          <button class="choice-card" data-boss-choice="mid"><strong>Bertahan dan baca pola.</strong><small>Aman, tapi boss melemah lebih lambat.</small></button>
        </div>
      </div>
    `);
    document.getElementById("miniStatus").textContent = `Fase ${state.mini.phase + 1}/${mini.phases.length}`;
    document.getElementById("dodgeAttack").addEventListener("click", () => {
      state.mini.guard = clamp(state.mini.guard + 20, 0, 100);
      document.getElementById("guardMeter").style.width = `${state.mini.guard}%`;
      playSfx("choice");
    });
    document.querySelectorAll("[data-boss-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        const kind = button.dataset.bossChoice;
        const damage = kind === "good" ? 34 : kind === "mid" ? 22 : 12;
        state.mini.hp = clamp(state.mini.hp - damage, 0, 100);
        if (kind === "bad") state.integrity = clamp(state.integrity - 9, 0, 100);
        if (state.mini.guard < 45) state.integrity = clamp(state.integrity - 4, 0, 100);
        state.mini.phase += 1;
        updateHud();
        playSfx(kind === "good" ? "reward" : "danger");
        if (state.mini.phase >= mini.phases.length) {
          finishMini(item, state.mini.hp <= 25 ? 95 : 70, `${mini.title} melemah. Cahaya wilayah pecah menjadi warna yang lebih hangat.`);
        } else {
          drawBossPhase();
        }
      });
    });
  }
}

function renderMemoryGame(item, mini) {
  state.mini = { index: 0, honest: 0, fog: 70 };
  drawMemory();

  function drawMemory() {
    const scene = mini.scenes[state.mini.index];
    miniShell(mini, `
      <div class="fog-panel" style="--fog:${state.mini.fog}%"><div class="lantern"></div></div>
      <p>${scene.prompt}</p>
      <div class="choice-grid">
        <button class="choice-card good" data-memory="honest"><strong>${scene.honest}</strong><small>Jujur, meski tidak nyaman.</small></button>
        <button class="choice-card risky" data-memory="lie"><strong>${scene.lie}</strong><small>Kabut terasa lebih aman.</small></button>
      </div>
    `);
    document.getElementById("miniStatus").textContent = `Ilusi ${state.mini.index + 1}/${mini.scenes.length}`;
    document.querySelectorAll("[data-memory]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.memory === "honest") {
          state.mini.honest += 1;
          state.mini.fog -= 22;
          playSfx("reward");
        } else {
          state.mini.fog += 12;
          state.integrity = clamp(state.integrity - 8, 0, 100);
          playSfx("danger");
        }
        state.mini.index += 1;
        updateHud();
        if (state.mini.index >= mini.scenes.length) finishMini(item, state.mini.honest / mini.scenes.length * 100, "Lentera kecil menyala. Kabut hutan membuka jalan bagi kebenaran yang pelan.");
        else drawMemory();
      });
    });
  }
}

function renderSurvivalGame(item, mini) {
  state.mini = { courage: 50, progress: 0, timer: null };
  miniShell(mini, `
    <div class="survival-arena">
      <div class="courage-zone"></div>
      <div class="root-attack"></div>
      <div class="courage-marker" id="courageMarker"></div>
    </div>
    <div class="timebar"><span id="survivalProgress"></span></div>
    <div class="choice-grid">
      <button class="choice-card good" id="standGround"><strong>Tetap Berdiri</strong><small>Naikkan keberanian.</small></button>
      <button class="choice-card" id="sidestep"><strong>Menghindar</strong><small>Turunkan tekanan sesaat.</small></button>
      <button class="choice-card risky" id="runAway"><strong>Kabur Jauh</strong><small>Aman, tapi terlalu lama berarti menyerah.</small></button>
    </div>
  `);
  const update = () => {
    state.mini.progress += state.mini.courage >= mini.safeMin && state.mini.courage <= mini.safeMax ? 4 : -2;
    state.mini.courage += Math.random() * 8 - 4;
    state.mini.courage = clamp(state.mini.courage, 0, 100);
    document.getElementById("courageMarker").style.left = `${state.mini.courage}%`;
    document.getElementById("survivalProgress").style.width = `${clamp(state.mini.progress, 0, mini.goal)}%`;
    if (state.mini.progress >= mini.goal) {
      clearInterval(state.mini.timer);
      finishMini(item, 92, "Kamu gemetar, tapi tetap berdiri. Akar hitam mundur dari arena.");
    }
    if (state.mini.progress <= -20) {
      clearInterval(state.mini.timer);
      finishMini(item, 45, "Kamu bertahan hidup, tetapi terlalu lama menjauh dari zona keberanian.");
    }
  };
  state.mini.timer = setInterval(update, 650);
  document.getElementById("standGround").addEventListener("click", () => state.mini.courage = clamp(state.mini.courage + 9, 0, 100));
  document.getElementById("sidestep").addEventListener("click", () => state.mini.courage = clamp(state.mini.courage - 5, 0, 100));
  document.getElementById("runAway").addEventListener("click", () => {
    state.mini.courage = clamp(state.mini.courage - 16, 0, 100);
    state.mini.progress -= 5;
  });
}

function renderExplorationGame(item, mini) {
  state.mini = { clues: new Set() };
  miniShell(mini, `
    <div class="forest-map-mini">
      ${mini.clues.map((clue, index) => `<button class="clue-stone" data-clue="${index}">${index + 1}</button>`).join("")}
    </div>
    <p id="clueText">Klik batu, lumut, dan jejak untuk membaca petunjuk visual.</p>
    <div class="choice-grid">
      ${mini.paths.map((path, index) => `<button class="choice-card ${path.good ? "good" : "risky"}" data-path="${index}"><strong>${path.label}</strong><small>${path.good ? "Observasi mandiri" : "Trap panduan palsu"}</small></button>`).join("")}
    </div>
  `);
  document.querySelectorAll("[data-clue]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mini.clues.add(button.dataset.clue);
      button.classList.add("is-found");
      document.getElementById("clueText").textContent = mini.clues[Number(button.dataset.clue)];
      playSfx("choice");
    });
  });
  document.querySelectorAll("[data-path]").forEach((button) => {
    button.addEventListener("click", () => {
      const path = mini.paths[Number(button.dataset.path)];
      const ready = state.mini.clues.size >= 2;
      finishMini(item, path.good && ready ? 95 : 45, path.good && ready ? "Jalur samar menyala. Kamu memilih dengan mata sendiri." : "Kabut menebal karena keputusan diambil sebelum petunjuk cukup terbaca.");
    });
  });
}

function renderMaintenanceGame(item, mini) {
  state.mini = { done: new Set(), blizzard: 18, timer: null };
  miniShell(mini, `
    <div class="watchpost-mini"><div class="signal-light"></div><div class="snow"></div></div>
    <div class="timebar"><span id="blizzardFill"></span></div>
    <div class="task-grid">
      ${mini.resources.map((task, index) => `<button class="task-card" data-maint="${index}"><strong>${task}</strong><small>Tugas pos</small></button>`).join("")}
      <button class="task-card risky" id="temptPost"><strong>${mini.temptation}</strong><small>Hadiah menggoda</small></button>
    </div>
    <button class="primary-button small mini-submit" id="sendSignal">Kirim Sinyal</button>
  `);
  state.mini.timer = setInterval(() => {
    state.mini.blizzard += 5;
    document.getElementById("blizzardFill").style.width = `${clamp(state.mini.blizzard, 0, 100)}%`;
    if (state.mini.blizzard >= 100) {
      clearInterval(state.mini.timer);
      finishMini(item, 40, "Badai menutup pos sebelum semua tanggung jawab selesai.");
    }
  }, 900);
  document.querySelectorAll("[data-maint]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mini.done.add(button.dataset.maint);
      button.classList.add("is-done");
      state.mini.blizzard = clamp(state.mini.blizzard - 8, 0, 100);
      playSfx("choice");
    });
  });
  document.getElementById("temptPost").addEventListener("click", () => {
    state.integrity = clamp(state.integrity - 8, 0, 100);
    state.mini.blizzard += 18;
    updateHud();
    playSfx("danger");
  });
  document.getElementById("sendSignal").addEventListener("click", () => {
    clearInterval(state.mini.timer);
    finishMini(item, state.mini.done.size === mini.resources.length ? 95 : 55, state.mini.done.size === mini.resources.length ? "Sinyal biru menembus badai. Pos jaga tetap hidup." : "Sinyal terkirim lemah karena pos belum sepenuhnya dirawat.");
  });
}

function renderRhythmGame(item, mini) {
  state.mini = { index: 0, stamina: 70, storm: 20, hits: 0, timer: null };
  miniShell(mini, `
    <div class="climb-mini"><div class="climber" id="climber"></div></div>
    <div class="dual-bars"><label>Stamina<span><i id="staminaFill"></i></span></label><label>Badai<span><i id="stormFill"></i></span></label></div>
    <div class="rhythm-target" id="rhythmTarget">${mini.beats[0]}</div>
    <div class="choice-grid">
      <button class="choice-card" data-rhythm="slow"><strong>Pelan</strong><small>Aman tapi badai naik.</small></button>
      <button class="choice-card good" data-rhythm="steady"><strong>Tepat Ritme</strong><small>Langkah kecil konsisten.</small></button>
      <button class="choice-card risky" data-rhythm="fast"><strong>Cepat</strong><small>Progress cepat, stamina turun.</small></button>
    </div>
  `);
  const refresh = () => {
    document.getElementById("rhythmTarget").textContent = mini.beats[state.mini.index] || "Puncak";
    document.getElementById("staminaFill").style.width = `${state.mini.stamina}%`;
    document.getElementById("stormFill").style.width = `${state.mini.storm}%`;
    document.getElementById("climber").style.bottom = `${10 + state.mini.index * 10}%`;
  };
  document.querySelectorAll("[data-rhythm]").forEach((button) => {
    button.addEventListener("click", () => {
      const kind = button.dataset.rhythm;
      if (kind === "steady") {
        state.mini.hits += 1;
        state.mini.stamina -= 7;
        state.mini.storm += 4;
      }
      if (kind === "fast") {
        state.mini.stamina -= 18;
        state.mini.storm += 1;
      }
      if (kind === "slow") {
        state.mini.stamina -= 3;
        state.mini.storm += 14;
      }
      state.mini.index += 1;
      playSfx(kind === "steady" ? "reward" : "choice");
      if (state.mini.index >= mini.beats.length || state.mini.stamina <= 0 || state.mini.storm >= 100) {
        finishMini(item, state.mini.hits / mini.beats.length * 100, "Puncak menerima langkah yang kecil, konsisten, dan tidak sombong.");
      } else refresh();
    });
  });
  refresh();
}

function renderInventoryGame(item, mini) {
  state.mini = { bag: new Set() };
  miniShell(mini, `
    <div class="flame-mini"><div class="small-flame" id="smallFlame"></div></div>
    <p id="bagStatus">Kapasitas 0 / ${mini.capacity}. Api membutuhkan bekal perlu, bukan barang paling berkilau.</p>
    <div class="inventory-grid">
      ${mini.items.map((gear, index) => `<button class="item-card" data-item="${index}"><strong>${gear.name}</strong><small>Berat ${gear.weight} • Nilai ${gear.value}</small></button>`).join("")}
    </div>
    <button class="primary-button small mini-submit" id="submitBag">Mulai Perjalanan</button>
  `);
  document.querySelectorAll("[data-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.item;
      if (state.mini.bag.has(id)) state.mini.bag.delete(id);
      else state.mini.bag.add(id);
      button.classList.toggle("is-done");
      refreshBag();
    });
  });
  document.getElementById("submitBag").addEventListener("click", () => {
    const selected = [...state.mini.bag].map((id) => mini.items[Number(id)]);
    const weight = selected.reduce((sum, gear) => sum + gear.weight, 0);
    const needed = selected.filter((gear) => gear.need).length;
    const excess = selected.filter((gear) => !gear.need).length;
    const score = clamp(needed * 34 - Math.max(0, weight - mini.capacity) * 15 - excess * 18, 0, 100);
    finishMini(item, score, score >= 80 ? "Api kecil menyala hangat. Cukup membuat perjalanan terasa ringan." : "Api tetap hidup, tapi beban berlebih membuat langkah terasa berat.");
  });
  function refreshBag() {
    const selected = [...state.mini.bag].map((id) => mini.items[Number(id)]);
    const weight = selected.reduce((sum, gear) => sum + gear.weight, 0);
    document.getElementById("bagStatus").textContent = `Kapasitas ${weight} / ${mini.capacity}. ${weight > mini.capacity ? "Beban berlebihan mulai memadamkan api." : "Tas masih bisa dibawa dengan tenang."}`;
    document.getElementById("smallFlame").style.transform = `scale(${weight > mini.capacity ? 0.72 : 1.08})`;
  }
}

function renderFinalGame(item, mini) {
  state.mini = { index: 0, restored: 0 };
  drawFinal();
  function drawFinal() {
    const title = mini.phases[state.mini.index];
    miniShell(mini, `
      <div class="prism-final ${state.mini.index >= 2 ? "color-return" : ""}">
        ${values.map((value) => `<span class="${state.crystals.has(value) ? "is-lit" : ""}"></span>`).join("")}
      </div>
      <p>${title}: ${getFinalPrompt(title)}</p>
      <div class="choice-grid">
        <button class="choice-card good" data-final="good"><strong>${getFinalGood(title)}</strong><small>Pulihkan warna dengan nilai yang utuh.</small></button>
        <button class="choice-card risky" data-final="bad"><strong>Paksa semua warna tunduk.</strong><small>Ketertiban tanpa hati.</small></button>
        <button class="choice-card" data-final="mid"><strong>Biarkan warna kembali perlahan.</strong><small>Aman, tapi belum sepenuhnya hangat.</small></button>
      </div>
    `);
    document.getElementById("miniStatus").textContent = `${state.mini.index + 1}/${mini.phases.length}`;
    document.querySelectorAll("[data-final]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.final === "good") state.mini.restored += 1;
        if (button.dataset.final === "bad") state.integrity = clamp(state.integrity - 12, 0, 100);
        state.mini.index += 1;
        updateHud();
        playSfx(button.dataset.final === "good" ? "crystal" : "danger");
        if (state.mini.index >= mini.phases.length) finishMini(item, state.mini.restored / mini.phases.length * 100, "Prism Tower pecah menjadi warna. Ethica hidup lagi, bukan karena dikontrol, tapi karena berani belajar.");
        else drawFinal();
      });
    });
  }
}

function getFinalPrompt(title) {
  if (title === "Nine Seals") return "Sembilan kristal menunggu urutan yang saling melengkapi.";
  if (title === "Memory Trial") return "Regent memunculkan pilihan moral masa lalu.";
  if (title === "Monochrome Cage") return "Arena berubah hitam putih. Warna wilayah harus dipanggil kembali.";
  return "Gunakan seluruh nilai integritas untuk membuka Kristal Nawa.";
}

function getFinalGood(title) {
  if (title === "Nine Seals") return "Aktifkan semua kristal sebagai lingkaran.";
  if (title === "Memory Trial") return "Akui pilihan sulit dan tanggung akibatnya.";
  if (title === "Monochrome Cage") return "Pulihkan biru kota, hijau hutan, putih puncak.";
  return "Buka Kristal Nawa bersama semua nilai.";
}

function finishMini(item, score, result) {
  const delta = score >= 80 ? 12 : score >= 60 ? 4 : -10;
  state.integrity = clamp(state.integrity + delta, 0, 100);
  state.essence += score >= 80 ? 18 : score >= 60 ? 10 : 4;
  updateHud();
  playSfx(score >= 80 ? "reward" : score >= 60 ? "choice" : "danger");
  ui.prismAvatar.classList.toggle("reward-burst", score >= 60);
  ui.prismAvatar.classList.toggle("flash", score < 60);
  state.dialogueMode = "result";
  ui.speakerName.textContent = score >= 60 ? "Aegis Verita" : "Nara";
  ui.speakerTone.textContent = score >= 60 ? "hangat" : "terguncang";
  typeText(result, score >= 60 ? 18 : 26);
  if (state.integrity <= 20) {
    setTimeout(() => showEnding("void"), 900);
    return;
  }
  setTimeout(() => completeChallenge(), Math.max(1200, result.length * 24));
}

function chooseOption(option) {
  state.integrity = clamp(state.integrity + option.integrity, 0, 100);
  state.essence += option.essence;
  updateHud();
  playSfx(option.integrity >= 8 ? "reward" : option.integrity < 0 ? "danger" : "choice");

  ui.prismAvatar.classList.remove("flash", "reward-burst");
  ui.bossPresence.classList.remove("flash");
  void ui.prismAvatar.offsetWidth;
  if (option.integrity < 0) {
    ui.prismAvatar.classList.add("flash");
  } else {
    ui.prismAvatar.classList.add("reward-burst");
  }
  ui.bossPresence.classList.add("flash");

  ui.actionPanel.className = "action-panel is-empty";
  state.dialogueMode = "result";
  ui.speakerName.textContent = "Nara";
  ui.speakerTone.textContent = option.type === "risky" ? "terguncang" : "yakin";
  typeText(option.result, option.type === "risky" ? 26 : 18);
  state.phaseIndex += 1;

  if (state.integrity <= 20) {
    setTimeout(() => showEnding("void"), 900);
    return;
  }

  setTimeout(() => renderPhase(), Math.max(1300, option.result.length * 24));
}

function completeChallenge() {
  const item = state.currentChallenge;
  state.completed.add(item.id);
  if (item.reward) {
    state.crystals.add(item.value);
    playSfx("crystal");
  } else {
    playSfx("boss");
  }

  const unlockText = item.id === "judge"
    ? "Gerbang menuju Baswara Wilds terbuka."
    : item.id === "thorn"
      ? "Jalur menuju Aeterna Peak terbuka."
      : item.id === "crown"
        ? "Prism Tower menerima sembilan cahaya pendukung."
        : item.id === "regent"
          ? "Kristal Nawa menyala kembali."
          : `${item.reward} pulang ke Hall of Light.`;

  ui.speakerName.textContent = "Aegis Verita";
  ui.speakerTone.textContent = "hangat";
  state.dialogueMode = "complete";
  typeText(unlockText, 20);
  ui.actionPanel.className = "action-panel";
  ui.actionPanel.innerHTML = `
    <div class="objective-card">
      <h3>${item.boss ? "Boss Kalah" : "Kristal Dipulihkan"}</h3>
      <p>${unlockText}</p>
      <div class="choice-grid">
        <button class="choice-card good" id="continueMap"><strong>Kembali ke Peta</strong><small>Pilih chapter berikutnya.</small></button>
      </div>
    </div>
  `;
  document.getElementById("continueMap").addEventListener("click", () => {
    if (item.id === "regent") {
      showEnding(state.integrity > 80 ? "true" : "neutral");
      return;
    }
    state.selectedRegion = item.region;
    showScreen("map");
    renderMap();
  });
}

function showEnding(kind) {
  const endings = {
    true: {
      badge: "True Ending",
      title: "The Golden Harmony",
      text: "Kristal Nawa menyala emas. Ethica tidak diselamatkan oleh satu orang, tetapi oleh pilihan baik yang berani diulang. Nara pulang sebagai Grand Guardian of Integrity."
    },
    neutral: {
      badge: "Neutral Ending",
      title: "The Quiet Color",
      text: "Warna kembali ke Ethica, tetapi belum sepenuhnya hangat. Nara tinggal sementara sebagai Apprentice Guardian, membantu warga memperkuat retak yang tersisa."
    },
    void: {
      badge: "Game Over",
      title: "Lost in the Void",
      text: "Cahaya Nara terlalu redup. Warna yang terkumpul retak kembali menjadi abu-abu, tetapi Aegis Verita masih membuka jalan untuk mencoba lagi."
    }
  };

  const ending = endings[kind];
  ui.endingBadge.textContent = ending.badge;
  ui.endingTitle.textContent = ending.title;
  ui.endingText.textContent = ending.text;
  ui.finalCrystals.textContent = `${state.crystals.size}/9`;
  ui.finalBosses.textContent = `${["judge", "thorn", "crown"].filter(hasCompleted).length}/3`;
  ui.finalIntegrity.textContent = `${Math.round(state.integrity)}%`;
  playSfx(kind === "void" ? "danger" : "ending");
  showScreen("ending");
}

function updateHud() {
  ui.integrityLabel.textContent = `${Math.round(state.integrity)}%`;
  ui.integrityFill.style.width = `${state.integrity}%`;
  ui.integrityFill.style.background = state.integrity < 35
    ? "linear-gradient(90deg, #d55463, #f3bd4d)"
    : state.integrity < 70
      ? "linear-gradient(90deg, #f3bd4d, #ffe89a)"
      : "linear-gradient(90deg, #58a94d, #f3bd4d)";
  ui.challengeIntegrityLabel.textContent = `${Math.round(state.integrity)}%`;
  ui.challengeIntegrityFill.style.width = `${state.integrity}%`;
  ui.challengeIntegrityFill.style.background = ui.integrityFill.style.background;
}

function seedParticles() {
  ui.particleField.innerHTML = "";
  for (let i = 0; i < 32; i += 1) {
    const particle = document.createElement("span");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * -6}s`;
    particle.style.animationDuration = `${4 + Math.random() * 5}s`;
    ui.particleField.appendChild(particle);
  }
}

function resetGame() {
  clearMiniTimers();
  clearInterval(state.typingTimer);
  state.selectedRegion = "equi";
  state.currentChallenge = null;
  state.phaseIndex = 0;
  state.dialogueIndex = 0;
  state.typingDone = true;
  state.dialogueMode = "intro";
  state.integrity = 100;
  state.essence = 0;
  state.crystals = new Set();
  state.completed = new Set();
  state.prologueSeen = false;
  applyCharacter();
  ui.actionPanel.innerHTML = "";
  showScreen("home");
  updateHud();
}

function clearMiniTimers() {
  if (state.mini && state.mini.timer) {
    clearInterval(state.mini.timer);
  }
  state.mini = null;
}

function initAudio() {
  if (state.audio) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  state.audio = new AudioContext();
}

function playSfx(kind) {
  if (!state.sound || !state.audio) return;
  const ctx = state.audio;
  const now = ctx.currentTime;
  const gain = ctx.createGain();
  const osc = ctx.createOscillator();
  gain.connect(ctx.destination);
  osc.connect(gain);

  const presets = {
    type: [520, 0.025, "sine", 0.018],
    transition: [260, 0.16, "triangle", 0.05],
    choice: [420, 0.11, "sine", 0.045],
    reward: [720, 0.2, "triangle", 0.07],
    crystal: [880, 0.45, "sine", 0.08],
    boss: [150, 0.34, "sawtooth", 0.055],
    danger: [110, 0.26, "square", 0.055],
    ending: [660, 0.55, "triangle", 0.08]
  };
  const [freq, duration, type, volume] = presets[kind] || presets.choice;
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  if (kind === "reward" || kind === "crystal" || kind === "ending") {
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + duration);
  }
  if (kind === "danger" || kind === "boss") {
    osc.frequency.exponentialRampToValueAtTime(Math.max(60, freq * 0.55), now + duration);
  }
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

document.querySelectorAll(".chapter-node").forEach((node) => {
  node.addEventListener("click", () => {
    const key = node.dataset.region;
    if (!regions[key].unlock()) {
      playSfx("danger");
      return;
    }
    state.selectedRegion = key;
    playSfx("choice");
    renderMap();
  });
});

ui.startButton.addEventListener("click", startGame);
ui.settingsButton.addEventListener("click", openSettings);
ui.closeSettingsButton.addEventListener("click", closeSettings);
ui.settingsModal.addEventListener("click", (event) => {
  if (event.target === ui.settingsModal) closeSettings();
});
document.querySelectorAll("input[name='characterGender']").forEach((input) => {
  input.addEventListener("change", () => {
    state.characterGender = input.value;
    applyCharacter();
    playSfx("choice");
  });
});
ui.homeButton.addEventListener("click", () => {
  clearMiniTimers();
  showScreen("home");
});
ui.backToMapButton.addEventListener("click", () => {
  clearMiniTimers();
  showScreen("map");
  renderMap();
});
ui.soundButton.addEventListener("click", () => {
  initAudio();
  state.sound = !state.sound;
  ui.soundButton.textContent = state.sound ? "♪" : "×";
});
ui.dialogueBox.addEventListener("click", skipOrNext);
screens.challenge.addEventListener("click", (event) => {
  if (state.dialogueMode !== "intro" || !state.currentChallenge) return;
  if (event.target.closest("button, .action-panel, .dialogue")) return;
  skipOrNext();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && ui.settingsModal.classList.contains("is-open")) {
    closeSettings();
    return;
  }
  if (event.key !== "Enter") return;
  if (!screens.challenge.classList.contains("is-active")) return;
  if (state.dialogueMode !== "intro") return;
  event.preventDefault();
  skipOrNext();
});
ui.endingMapButton.addEventListener("click", () => {
  clearMiniTimers();
  showScreen("map");
  renderMap();
});
ui.restartButton.addEventListener("click", resetGame);

seedParticles();
applyCharacter();
updateHud();
