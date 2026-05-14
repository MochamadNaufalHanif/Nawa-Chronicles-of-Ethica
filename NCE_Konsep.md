````markdown
# NAWA CHRONICLES OF ETHICA

**"Restore the Shards, Color the World, Become the Guardian."**

---

## 1. Konsep Utama

Dunia `Ethica` kehilangan warna akibat manipulasi `Nihil`, penguasa Prism Tower yang merusak `Nawa Shard` dan membuat tiga shard wilayah menjadi suram.

Nara, sang `The Prism`, datang untuk membantu penghuni asli tiap wilayah memulihkan shard mereka. Shard tidak dibawa oleh Nara. Shard tetap berada di tempat utama wilayah masing-masing dan akan terisi warna secara bertahap setelah Nara menyelesaikan tantangan.

Setiap wilayah memiliki:

- 1 entitas baik sebagai penghuni asli wilayah.
- 1 shard wilayah.
- 3 tantangan/minigames yang mewakili 3 nilai integritas.

Tidak ada boss wilayah. Antagonis utama hanya satu: `Nihil`, penguasa Prism Tower yang memanipulasi Nawa Shard dan membuat tiga shard wilayah menjadi rusak.

Nihil tidak menghancurkan dunia secara langsung. Ia membuat nilai integritas terasa tidak penting, melelahkan, berat, atau sia-sia.

---

## 2. Karakter Utama

### Nara - The Prism

Karakter utama yang bisa menyerap dan memancarkan warna integritas. Pilihan moral Nara memengaruhi `Vritatva Essence`, respons karakter lain, dan ending.

Nara dapat dipilih sebagai:

- `Nara_Laki-Laki`
- `Nara_Perempuan`

### Aegis Verita

Pembimbing protagonis. Entitas kristal cair tanpa gender yang melayang di sisi Nara. Aegis Verita memberi arahan, membaca kondisi shard, dan menjadi kompas moral.

### Veda - Penghuni Asli Equi Nagari

Entitas protagonis wilayah Equi Nagari. Veda adalah burung mekanis bercahaya dengan sayap seperti lembaran logam tipis. Ia mencoba memulihkan `Karuna Shard` di Menara Jam.

Veda mencakup nilai:

- Peduli
- Adil
- Disiplin

### Luma - Penghuni Asli Baswara Wilds

Entitas protagonis wilayah Baswara Wilds. Luma adalah roh cahaya. Ia menjaga Danau Cermin dan mencoba memulihkan `Atman Shard`.

Luma mencakup nilai:

- Jujur
- Berani
- Mandiri

### Sthira - Penghuni Asli Aeterna Peak

Entitas protagonis wilayah Aeterna Peak. Sthira adalah golem penjaga batu-kristal yang tenang dan kokoh. Ia mencoba memulihkan `Sadhana Shard` di puncak gunung.

Sthira mencakup nilai:

- Tanggung Jawab
- Kerja Keras
- Sederhana

### Nihil - Penguasa Prism Tower

Antagonis utama. Nihil adalah penghuni Prism Tower yang telah memanipulasi `Nawa Shard`, lalu membuat Karuna Shard, Atman Shard, dan Sadhana Shard kehilangan warna.

Nihil berbicara tenang, elegan, dingin, dan menggoda pikiran. Ia tidak menyerang dengan kekerasan langsung, tetapi dengan keraguan.

---

## 3. Asset Karakter dan Pose

### Asset Nara

Karena Nara bisa dipilih laki-laki atau perempuan, setiap dialog Nara harus mendukung dua folder asset:

- `Nara_Laki-Laki/Pose (1)`
- `Nara_Laki-Laki/Pose (2)`
- `Nara_Laki-Laki/Pose (3)`
- `Nara_Laki-Laki/Pose (4)`

atau

- `Nara_Perempuan/Pose (1)`
- `Nara_Perempuan/Pose (2)`
- `Nara_Perempuan/Pose (3)`
- `Nara_Perempuan/Pose (4)`

| Pose | Fungsi |
|---|---|
| Pose (1) | Normal, siap, netral |
| Pose (2) | Bicara santai, penasaran |
| Pose (3) | Berpikir, ragu, serius |
| Pose (4) | Terkejut, waspada, defensif |

### Asset Aegis Verita

| Pose | Fungsi |
|---|---|
| Pose (1) | Netral, muncul pertama kali |
| Pose (2) | Menjelaskan, membimbing |
| Pose (3) | Serius, membaca shard |
| Pose (4) | Redup, memperingatkan bahaya |

### Asset Veda

| Pose | Fungsi |
|---|---|
| Pose (1) | Terbuka, menyambut, menjelaskan kota |
| Pose (2) | Aktif, memberi arahan |
| Pose (3) | Serius, membahas kerusakan/kesalahan sistem |
| Pose (4) | Tenang, reflektif, setelah shard pulih |

### Asset Luma

| Pose | Fungsi |
|---|---|
| Pose (1) | Netral, misterius |
| Pose (2) | Lembut, menjelaskan danau/pantulan |
| Pose (3) | Aktif, memberi tantangan |
| Pose (4) | Tenang, reflektif, setelah Atman pulih |

### Asset Sthira

| Pose | Fungsi |
|---|---|
| Pose (1) | Menahan/melindungi, cocok untuk bahaya |
| Pose (2) | Menjelaskan, memberi arahan |
| Pose (3) | Netral, kokoh, diam |
| Pose (4) | Terbuka, memberi nasihat/penutup |

### Asset Nihil

| Pose | Fungsi |
|---|---|
| Pose (1) | Muncul megah, mengintimidasi |
| Pose (2) | Bicara tenang, menggoda pikiran |
| Pose (3) | Serius, menekan Nara |
| Pose (4) | Final, distorsi/emosi meningkat |

````markdown
## 3.1 Lokasi Folder Asset

Seluruh asset game disimpan di dalam folder project:

```text
Documents/New project/asset/
````

Folder asset dibagi menjadi beberapa kategori utama:

```text
Documents/New project/asset/
├── Map/
├── Background/
├── Nara_Laki-Laki/
├── Nara_Perempuan/
├── Aegis Verita/
├── Veda/
├── Luma/
├── Sthira/
└── Nihil/
```

---

## 3.2 Lokasi Asset Map

Asset map digunakan untuk tampilan **World Map Carousel 1-1**.

Lokasi folder:

```text
Documents/New project/asset/Map/
```

Isi asset map:

| Nama Asset            | Fungsi                                                              | Lokasi File                                           |
| --------------------- | ------------------------------------------------------------------- | ----------------------------------------------------- |
| `EquiNagari_Before`   | Tampilan Equi Nagari sebelum dipulihkan / Corrupted                 | `Documents/New project/asset/Map/EquiNagari_Before`   |
| `EquiNagari_After`    | Tampilan Equi Nagari setelah Karuna Shard pulih / Restored          | `Documents/New project/asset/Map/EquiNagari_After`    |
| `BaswaraWilds_Before` | Tampilan Baswara Wilds sebelum dipulihkan / Corrupted atau Locked   | `Documents/New project/asset/Map/BaswaraWilds_Before` |
| `BaswaraWilds_After`  | Tampilan Baswara Wilds setelah Atman Shard pulih / Restored         | `Documents/New project/asset/Map/BaswaraWilds_After`  |
| `AeternaPeak_Before`  | Tampilan Aeterna Peak sebelum dipulihkan / Corrupted atau Locked    | `Documents/New project/asset/Map/AeternaPeak_Before`  |
| `AeternaPeak_After`   | Tampilan Aeterna Peak setelah Sadhana Shard pulih / Restored        | `Documents/New project/asset/Map/AeternaPeak_After`   |
| `PrismTower_Before`   | Tampilan Prism Tower sebelum semua shard pulih / Locked atau Sealed | `Documents/New project/asset/Map/PrismTower_Before`   |
| `PrismTower_After`    | Tampilan Prism Tower setelah terbuka / Awakened atau Final Access   | `Documents/New project/asset/Map/PrismTower_After`    |

---

## 3.3 Penggunaan Asset Map Berdasarkan Status Wilayah

### Equi Nagari

```text
Locked: tidak digunakan karena Equi Nagari terbuka sejak awal
Corrupted: Documents/New project/asset/Map/EquiNagari_Before
Restored: Documents/New project/asset/Map/EquiNagari_After
```

### Baswara Wilds

```text
Locked: Documents/New project/asset/Map/BaswaraWilds_Before dengan overlay kabut gelap
Corrupted: Documents/New project/asset/Map/BaswaraWilds_Before
Restored: Documents/New project/asset/Map/BaswaraWilds_After
```

### Aeterna Peak

```text
Locked: Documents/New project/asset/Map/AeternaPeak_Before dengan overlay kabut gelap
Corrupted: Documents/New project/asset/Map/AeternaPeak_Before
Restored: Documents/New project/asset/Map/AeternaPeak_After
```

### Prism Tower

```text
Locked: Documents/New project/asset/Map/PrismTower_Before dengan overlay kabut gelap
Sealed: Documents/New project/asset/Map/PrismTower_Before
Awakened / Opened: Documents/New project/asset/Map/PrismTower_After
```

---

## 3.4 Lokasi Asset Background Dialog

Asset background dialog digunakan saat karakter sedang berbicara di chapter atau sebelum/sesudah minigame.

Lokasi folder:

```text
Documents/New project/asset/Background/
```

Isi asset background dialog:

| Nama Asset                   | Fungsi                                                       | Lokasi File                                                         |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| `HomePage`                   | Background utama homepage                                    | `Documents/New project/asset/Background/HomePage`                   |
| `EquiNagari_Dialog_Before`   | Background dialog Equi Nagari sebelum Karuna Shard pulih     | `Documents/New project/asset/Background/EquiNagari_Dialog_Before`   |
| `EquiNagari_Dialog_After`    | Background dialog Equi Nagari setelah Karuna Shard pulih     | `Documents/New project/asset/Background/EquiNagari_Dialog_After`    |
| `BaswaraWilds_Dialog_Before` | Background dialog Baswara Wilds sebelum Atman Shard pulih    | `Documents/New project/asset/Background/BaswaraWilds_Dialog_Before` |
| `BaswaraWilds_Dialog_After`  | Background dialog Baswara Wilds setelah Atman Shard pulih    | `Documents/New project/asset/Background/BaswaraWilds_Dialog_After`  |
| `AeternaPeak_Dialog_Before`  | Background dialog Aeterna Peak sebelum Sadhana Shard pulih   | `Documents/New project/asset/Background/AeternaPeak_Dialog_Before`  |
| `AeternaPeak_Dialog_After`   | Background dialog Aeterna Peak setelah Sadhana Shard pulih   | `Documents/New project/asset/Background/AeternaPeak_Dialog_After`   |
| `PrismTower_Dialog_Before`   | Background dialog Prism Tower sebelum Nawa Shard pulih       | `Documents/New project/asset/Background/PrismTower_Dialog_Before`   |
| `PrismTower_Dialog_After`    | Background dialog Prism Tower setelah Nawa Shard aktif/pulih | `Documents/New project/asset/Background/PrismTower_Dialog_After`    |

---

## 3.5 Penggunaan Background Dialog Berdasarkan Progress

### Homepage

```text
Documents/New project/asset/Background/HomePage
```

Digunakan di:

* halaman awal game,
* sebelum pemain menekan Start,
* sebelum masuk World Map Carousel.

---

### Equi Nagari

Sebelum Karuna Shard penuh:

```text
Documents/New project/asset/Background/EquiNagari_Dialog_Before
```

Digunakan pada:

* pembuka Chapter 1,
* sebelum Tantangan 1,
* setelah Tantangan 1,
* sebelum Tantangan 2,
* setelah Tantangan 2,
* sebelum Tantangan 3.

Setelah Karuna Shard penuh:

```text
Documents/New project/asset/Background/EquiNagari_Dialog_After
```

Digunakan pada:

* dialog setelah Tantangan 3,
* dialog restoration Equi Nagari,
* replay dialog setelah wilayah restored.

---

### Baswara Wilds

Sebelum Atman Shard penuh:

```text
Documents/New project/asset/Background/BaswaraWilds_Dialog_Before
```

Digunakan pada:

* pembuka Chapter 2,
* sebelum Tantangan 4,
* setelah Tantangan 4,
* sebelum Tantangan 5,
* setelah Tantangan 5,
* sebelum Tantangan 6.

Setelah Atman Shard penuh:

```text
Documents/New project/asset/Background/BaswaraWilds_Dialog_After
```

Digunakan pada:

* dialog setelah Tantangan 6,
* dialog restoration Baswara Wilds,
* replay dialog setelah wilayah restored.

---

### Aeterna Peak

Sebelum Sadhana Shard penuh:

```text
Documents/New project/asset/Background/AeternaPeak_Dialog_Before
```

Digunakan pada:

* pembuka Chapter 3,
* sebelum Tantangan 7,
* setelah Tantangan 7,
* sebelum Tantangan 8,
* setelah Tantangan 8,
* sebelum Tantangan 9.

Setelah Sadhana Shard penuh:

```text
Documents/New project/asset/Background/AeternaPeak_Dialog_After
```

Digunakan pada:

* dialog setelah Tantangan 9,
* dialog restoration Aeterna Peak,
* replay dialog setelah wilayah restored.

---

### Prism Tower

Sebelum final challenge selesai:

```text
Documents/New project/asset/Background/PrismTower_Dialog_Before
```

Digunakan pada:

* pembuka Final Chapter,
* dialog sebelum Nawa Resonance,
* dialog pilihan final melawan Nihil.

Setelah Nawa Shard aktif atau ending tercapai:

```text
Documents/New project/asset/Background/PrismTower_Dialog_After
```

Digunakan pada:

* dialog setelah final challenge,
* ending,
* epilog,
* Hall of Light versi awakened jika diperlukan.

---

## 3.6 Mapping Asset untuk World Map Carousel

Gunakan mapping berikut agar developer tidak salah mengambil asset.

```js
const mapAssets = {
  equiNagari: {
    before: "Documents/New project/asset/Map/EquiNagari_Before",
    after: "Documents/New project/asset/Map/EquiNagari_After"
  },

  baswaraWilds: {
    before: "Documents/New project/asset/Map/BaswaraWilds_Before",
    after: "Documents/New project/asset/Map/BaswaraWilds_After"
  },

  aeternaPeak: {
    before: "Documents/New project/asset/Map/AeternaPeak_Before",
    after: "Documents/New project/asset/Map/AeternaPeak_After"
  },

  prismTower: {
    before: "Documents/New project/asset/Map/PrismTower_Before",
    after: "Documents/New project/asset/Map/PrismTower_After"
  }
};
```

---

## 3.7 Mapping Asset untuk Background Dialog

```js
const backgroundAssets = {
  homepage: "Documents/New project/asset/Background/HomePage",

  equiNagari: {
    before: "Documents/New project/asset/Background/EquiNagari_Dialog_Before",
    after: "Documents/New project/asset/Background/EquiNagari_Dialog_After"
  },

  baswaraWilds: {
    before: "Documents/New project/asset/Background/BaswaraWilds_Dialog_Before",
    after: "Documents/New project/asset/Background/BaswaraWilds_Dialog_After"
  },

  aeternaPeak: {
    before: "Documents/New project/asset/Background/AeternaPeak_Dialog_Before",
    after: "Documents/New project/asset/Background/AeternaPeak_Dialog_After"
  },

  prismTower: {
    before: "Documents/New project/asset/Background/PrismTower_Dialog_Before",
    after: "Documents/New project/asset/Background/PrismTower_Dialog_After"
  }
};
```

---

## 3.8 Aturan Pemilihan Asset Before dan After

Game harus memilih asset berdasarkan status wilayah dan progress shard.

### Untuk World Map

```text
Jika status wilayah = Locked:
  gunakan asset Before + overlay kabut gelap + tombol Enter disabled

Jika status wilayah = Corrupted:
  gunakan asset Before + efek suram ringan + tombol Enter aktif

Jika status wilayah = Restored:
  gunakan asset After + efek cahaya lembut + tombol Enter aktif
```

### Untuk Background Dialog

```text
Jika shard wilayah belum penuh:
  gunakan Dialog_Before

Jika shard wilayah sudah penuh:
  gunakan Dialog_After

Jika berada di homepage:
  gunakan HomePage

Jika berada di Prism Tower sebelum ending:
  gunakan PrismTower_Dialog_Before

Jika berada di ending atau epilog:
  gunakan PrismTower_Dialog_After
```

---

## 3.9 Prompt Implementasi Asset Map dan Background untuk AI Coding

Gunakan asset map dan background dari folder project berikut:

```text
Documents/New project/asset/
```

Untuk World Map Carousel, ambil asset dari:

```text
Documents/New project/asset/Map/
```

Asset yang tersedia:

```text
AeternaPeak_After
AeternaPeak_Before
BaswaraWilds_After
BaswaraWilds_Before
EquiNagari_After
EquiNagari_Before
PrismTower_After
PrismTower_Before
```

Untuk background dialog, ambil asset dari:

```text
Documents/New project/asset/Background/
```

Asset yang tersedia:

```text
AeternaPeak_Dialog_After
AeternaPeak_Dialog_Before
BaswaraWilds_Dialog_After
BaswaraWilds_Dialog_Before
EquiNagari_Dialog_After
EquiNagari_Dialog_Before
HomePage
PrismTower_Dialog_After
PrismTower_Dialog_Before
```

World Map Carousel harus menggunakan asset `Map`.
Dialog visual novel harus menggunakan asset `Background`.

Gunakan aturan:

* wilayah Locked memakai asset `Before` dengan overlay kabut gelap,
* wilayah Corrupted memakai asset `Before`,
* wilayah Restored memakai asset `After`,
* dialog sebelum shard pulih memakai `Dialog_Before`,
* dialog setelah shard pulih memakai `Dialog_After`,
* homepage memakai `HomePage`.

---

## 4. Format Dialog Visual Novel

Dialog tidak memakai label `Scene`.

Semua suasana, lokasi, konflik, dan perubahan kondisi disampaikan lewat dialog karakter secara natural.

Format dialog:

```markdown
**[Asset: NamaFolder/Pose (Nomor) | Posisi: Kiri/Kanan/Tengah-Kanan | State: Aktif/Redup]**
**Nama Karakter:** "Isi dialog."
````

Untuk Nara:

```markdown
**[Asset: Nara_Laki-Laki/Pose (Nomor) atau Nara_Perempuan/Pose (Nomor) | Posisi: Kiri | State: Aktif]**
**Nara:** "Isi dialog."
```

Aturan posisi:

* Nara selalu di kiri.
* Lawan bicara utama di kanan.
* Aegis Verita di tengah-kanan atau dekat Nara.
* Karakter yang sedang berbicara `State: Aktif`.
* Karakter yang tidak berbicara `State: Redup`.
* State Redup memakai opacity sekitar 45%.
* Perpindahan speaker memakai transisi opacity smooth.

---

## 5. Sistem Shard

| Shard         | Lokasi                      | Nilai                                  | Warna Saat Pulih                       | Penjaga/Pemberi Tantangan |
| ------------- | --------------------------- | -------------------------------------- | -------------------------------------- | ------------------------- |
| Karuna Shard  | Menara Jam, Equi Nagari     | Peduli, Adil, Disiplin                 | Oranye uap, biru listrik, emas jam     | Veda                      |
| Atman Shard   | Danau Cermin, Baswara Wilds | Jujur, Berani, Mandiri                 | Toska danau, kuning cahaya, hijau daun | Luma                      |
| Sadhana Shard | Puncak Gunung, Aeterna Peak | Tanggung Jawab, Kerja Keras, Sederhana | Biru es, putih kristal, ungu aurora    | Sthira                    |
| Nawa Shard    | Prism Tower                 | Gabungan seluruh nilai                 | Spektrum pelangi dan emas              | Terkunci oleh Nihil       |

### Progress Shard di UI

Di layar chapter, bagian atas atau pojok layar menampilkan siluet shard wilayah:

* Awal chapter: shard tampak retak, gelap, dan tidak berwarna.
* Setelah tantangan 1 selesai: shard terisi 1/3 warna.
* Setelah tantangan 2 selesai: shard terisi 2/3 warna.
* Setelah tantangan 3 selesai: shard penuh, aktif, dan memancarkan sinar ke Prism Tower.

Saat shard penuh:

* Wilayah mengalami `Dynamic Restoration`.
* Warna utama wilayah kembali.
* Musik wilayah berubah lebih hidup.
* Chapter berikutnya terbuka.

---

## 6. Alur Menu

### Homepage

Homepage menampilkan Nara berdiri menghadap Ethica yang masih monokrom. Di kejauhan terlihat Prism Tower dengan Nawa Shard redup.

Tombol utama:

* `Start`
* `Settings`
* `Rewards`

### Button Start

Saat `Start` ditekan:

1. Kabut muncul dari semua sisi layar.
2. Kabut memenuhi layar.
3. Loading asli dimulai.
4. Game melakukan preload world map, data chapter, sprite, musik, SFX, UI, dan save data.
5. Tampil indikator `Loading...` dengan progress.
6. Setelah proses loading selesai, kabut keluar dari layar.
7. World Map Carousel ditampilkan.

### Button Settings di Homepage

Saat `Settings` ditekan:

1. Board settings turun dari atas layar.
2. Background menjadi gelap.
3. Area selain board tidak bisa diklik.
4. Board berhenti di tengah dengan transisi smooth.

Isi settings homepage:

* Slider `SFX`
* Slider `BGM`
* Pilihan karakter `Nara Laki-laki`
* Pilihan karakter `Nara Perempuan`
* Tombol `X` untuk close

Saat `X` ditekan, board naik kembali ke atas dan overlay gelap menghilang.

### Button Settings Setelah Homepage

Settings setelah homepage hanya berisi:

* Slider `SFX`
* Slider `BGM`
* Navigasi:

  * Return to Game
  * Return to World Map
  * Return to Homepage
* Tombol `X`

Tidak ada pilihan gender setelah homepage.

### Button Rewards

Rewards membuka `The Hall of Light`.

Isi reward:

| Slot          | Nama                          | Status |
| ------------- | ----------------------------- | ------ |
| Karuna Shard  | Locked / 1/3 / 2/3 / Restored |        |
| Atman Shard   | Locked / 1/3 / 2/3 / Restored |        |
| Sadhana Shard | Locked / 1/3 / 2/3 / Restored |        |
| Nawa Shard    | Sealed / Awakened             |        |

Saat shard diklik, pemain melihat:

* ilustrasi shard,
* lokasi shard,
* nilai integritas,
* entitas pemberi tantangan,
* kutipan filosofis.

---

## 7. World Map Carousel

World Map menggunakan sistem **Map Carousel 1-1**, bukan peta besar.

Pemain hanya melihat satu wilayah besar di tengah layar, lalu bisa menggeser kiri dan kanan untuk melihat wilayah lain.

Urutan carousel:

1. `Equi Nagari`
2. `Baswara Wilds`
3. `Aeterna Peak`
4. `Prism Tower`

### Isi Kartu Map

Setiap kartu wilayah berisi:

* Nama wilayah.
* Ilustrasi wilayah.
* Status wilayah.
* Progress shard.
* Tombol `Enter`.
* Tombol panah kiri dan kanan.
* Indikator posisi map, misalnya `1 / 4`.
* Efek visual sesuai status.

### Status Wilayah

#### Locked

Wilayah tertutup kabut gelap kristal. Tombol `Enter` terkunci. Teks yang tampil:

> "Pulihkan shard sebelumnya untuk membuka wilayah ini."

#### Corrupted

Wilayah terlihat suram, kurang warna, beberapa bagian retak, musik pelan, dan shard tampak kosong atau sebagian terisi.

#### Restored

Wilayah penuh warna, animasi hidup, musik lebih cerah, dan shard wilayah bersinar penuh.

### Interaksi Map

Saat pemain klik panah kanan atau swipe kanan:

1. Kartu wilayah bergerak keluar layar.
2. Kartu berikutnya masuk dengan efek parallax.
3. Kabut tipis mengikuti transisi.
4. Musik ambience berubah halus sesuai wilayah.

Saat pemain klik wilayah yang terbuka:

1. Kamera zoom ke kartu wilayah.
2. Kabut atau cahaya wilayah memenuhi layar.
3. Loading singkat muncul.
4. Masuk ke chapter wilayah tersebut.

## 7.1 Mekanisme Pemilihan Chapter

Pemilihan chapter dilakukan melalui sistem World Map Carousel. Pemain tidak memilih chapter dari daftar teks, tetapi melalui kartu wilayah yang bisa digeser kanan dan kiri.

Urutan chapter mengikuti urutan pemulihan shard:

1. Equi Nagari terbuka sejak awal.
2. Baswara Wilds terbuka setelah Karuna Shard pulih penuh.
3. Aeterna Peak terbuka setelah Atman Shard pulih penuh.
4. Prism Tower terbuka setelah Karuna Shard, Atman Shard, dan Sadhana Shard pulih penuh.

Setiap kartu wilayah memiliki tombol `Enter`.

Jika wilayah berstatus `Locked`, tombol `Enter` tidak aktif dan menampilkan pesan:

> "Pulihkan shard sebelumnya untuk membuka wilayah ini."

Jika wilayah berstatus `Corrupted`, pemain bisa masuk ke chapter wilayah tersebut dan melanjutkan tantangan yang belum selesai.

Jika wilayah berstatus `Restored`, pemain bisa masuk kembali untuk replay minigame, melihat dialog memory, atau mengejar skor lebih tinggi.

Saat pemain menekan `Enter` pada wilayah yang terbuka:

1. Kamera melakukan zoom ke kartu wilayah.
2. Efek kabut atau cahaya wilayah memenuhi layar.
3. Loading singkat berjalan.
4. Game membuka chapter sesuai wilayah.
5. Jika chapter sudah pernah dimainkan, game melanjutkan dari progress terakhir.
6. Jika semua tantangan wilayah sudah selesai, wilayah masuk mode replay.

## 7.2 Mekanisme Transisi Kabut Saat Masuk Chapter

Transisi kabut digunakan saat pemain menekan tombol `Enter` pada kartu wilayah yang terbuka di World Map Carousel.

Kabut bukan hanya efek teks atau fade biasa, tetapi harus dibuat sebagai beberapa layer visual yang benar-benar bergerak menutupi layar.

### Tujuan Transisi Kabut

Transisi kabut berfungsi untuk:

- menyembunyikan perpindahan dari World Map ke chapter,
- memberi kesan magical fantasy,
- membuat perpindahan area terasa halus,
- memberi waktu loading singkat,
- memperkuat identitas wilayah yang dimasuki.

---

### Struktur Layer Kabut

Saat transisi dimulai, game menampilkan overlay khusus bernama:

`FogTransitionOverlay`

Overlay ini berada di atas semua UI dan karakter.

Urutan layer dari belakang ke depan:

1. `World Map / current screen`
2. `Dark Soft Overlay`
3. `Fog Back Layer`
4. `Fog Middle Layer`
5. `Fog Front Layer`
6. `Loading Text / Area Name`

### Detail Layer

#### 1. Dark Soft Overlay

Layer gelap transparan untuk meredupkan layar.

- Warna: hitam kebiruan
- Opacity awal: 0%
- Opacity maksimal: 35% sampai 45%
- Durasi fade in: 0.3 detik

Fungsinya agar kabut terlihat jelas dan transisi terasa sinematik.

#### 2. Fog Back Layer

Kabut tipis di belakang.

- Gerak lambat
- Opacity rendah
- Ukuran besar
- Blur lembut
- Bergerak dari kiri dan kanan menuju tengah

#### 3. Fog Middle Layer

Kabut utama.

- Opacity sedang
- Menutup sebagian besar layar
- Bergerak dari bawah, kiri, dan kanan ke tengah
- Layer ini menjadi kabut yang paling terlihat

#### 4. Fog Front Layer

Kabut paling depan.

- Opacity lebih tinggi
- Bergerak lebih cepat
- Bentuk lebih tebal di pinggir layar
- Dipakai untuk menutup layar sepenuhnya sebelum chapter dimuat

#### 5. Loading Text / Area Name

Saat layar sudah tertutup kabut, tampil teks kecil di tengah bawah:

`Entering Equi Nagari...`

atau sesuai wilayah:

- `Entering Equi Nagari...`
- `Entering Baswara Wilds...`
- `Entering Aeterna Peak...`
- `Entering Prism Tower...`

Teks muncul dengan fade lembut.

---

### Alur Animasi Kabut Saat Masuk Chapter

Saat pemain menekan `Enter`:

1. Input pemain dikunci.
2. Tombol `Enter`, panah kiri, dan panah kanan dinonaktifkan.
3. Kamera melakukan zoom kecil ke kartu wilayah.
4. Dark Soft Overlay muncul perlahan.
5. Fog Back Layer masuk dari kiri dan kanan.
6. Fog Middle Layer naik dari bawah layar.
7. Fog Front Layer masuk dari semua sisi layar.
8. Kabut menutup layar hingga hampir penuh.
9. Teks `Entering [Nama Wilayah]...` muncul.
10. Game melakukan loading chapter.
11. Setelah loading selesai, background chapter sudah disiapkan di belakang kabut.
12. Kabut mulai keluar dari tengah ke arah pinggir layar.
13. Dark Soft Overlay menghilang.
14. Dialog pembuka chapter dimulai.
15. Input pemain diaktifkan kembali.

---

### Timing Animasi

Gunakan timing berikut agar kabut benar-benar terasa muncul:

| Tahap | Durasi |
|---|---|
| Zoom ke kartu wilayah | 0.35 detik |
| Dark overlay fade in | 0.30 detik |
| Fog Back Layer masuk | 0.60 detik |
| Fog Middle Layer masuk | 0.75 detik |
| Fog Front Layer masuk | 0.90 detik |
| Layar tertutup penuh | 0.30 detik |
| Loading minimum | 0.50 detik |
| Fog keluar | 0.80 detik |
| Total transisi | sekitar 2.5 - 3.0 detik |

Catatan: walaupun loading asli sangat cepat, kabut tetap harus tampil minimal sekitar 2 detik agar transisi terlihat dan tidak terasa seperti blink.

---

### Bentuk Gerakan Kabut

Kabut tidak boleh hanya fade putih biasa.

Kabut harus bergerak seperti asap lembut:

- dari kiri ke kanan,
- dari kanan ke kiri,
- dari bawah ke atas,
- sedikit berputar,
- opacity naik turun perlahan,
- pinggir kabut tidak rata,
- bentuknya lembut dan blur.

Gerakan kabut harus terasa natural, seperti lapisan awan tipis yang menyapu layar.

---

### Warna Kabut Berdasarkan Wilayah

Kabut bisa memiliki warna dasar berbeda sesuai wilayah agar transisi terasa menyatu.

| Wilayah | Warna Kabut | Nuansa |
|---|---|---|
| Equi Nagari | abu kebiruan + oranye redup | uap mesin, kota mekanis |
| Baswara Wilds | hijau gelap + toska lembut | kabut hutan dan danau |
| Aeterna Peak | putih biru + ungu pucat | salju, es, aurora |
| Prism Tower | ungu gelap + putih kebiruan | kabut prismatik, misterius |

Kabut tetap harus soft, tidak neon, dan tidak terlalu gelap.

---

### Asset Kabut yang Dibutuhkan

Buat asset modular berikut:

- `fog_back.png`
- `fog_middle.png`
- `fog_front.png`
- `fog_wisp_01.png`
- `fog_wisp_02.png`
- `fog_wisp_03.png`
- `soft_dark_overlay.png`

Format:

- PNG transparan
- pinggir blur
- bentuk tidak simetris
- bisa di-loop atau digeser
- resolusi besar agar tidak pecah saat diperbesar

---

### Implementasi Teknis Sederhana

Transisi kabut harus dibuat sebagai komponen khusus.

Nama komponen:

`FogTransition`

Parameter yang dibutuhkan:

```js
FogTransition({
  targetArea: "Equi Nagari",
  fogTheme: "equi",
  onCovered: loadChapter,
  onFinished: startChapterDialogue
})

---

## 8. Struktur Tantangan

Total tantangan utama wilayah: 9.
Final Prism Tower menjadi tantangan penutup setelah ketiga shard wilayah pulih.

| No | Chapter       | Nama Tantangan          | Arti / Makna                                     | Nilai          | Progress         |
| -- | ------------- | ----------------------- | ------------------------------------------------ | -------------- | ---------------- |
| 1  | Equi Nagari   | Circuit of Care         | Menyambung aliran kota yang terputus             | Peduli         | Karuna 1/3       |
| 2  | Equi Nagari   | Scales of Civic Balance | Menimbang kebutuhan kota secara bijak            | Adil           | Karuna 2/3       |
| 3  | Equi Nagari   | Clockwork Promise       | Menjaga ritme janji dan rutinitas                | Disiplin       | Karuna Restored  |
| 4  | Baswara Wilds | Mirror of True Steps    | Melangkah melalui pantulan yang jujur            | Jujur          | Atman 1/3        |
| 5  | Baswara Wilds | Lantern Run             | Menerobos hutan ilusi dengan cahaya              | Berani         | Atman 2/3        |
| 6  | Baswara Wilds | Solo Bloom Path         | Menumbuhkan jalur sendiri tanpa bergantung penuh | Mandiri        | Atman Restored   |
| 7  | Aeterna Peak  | Burden Bridge           | Menjaga beban agar jembatan tetap utuh           | Tanggung Jawab | Sadhana 1/3      |
| 8  | Aeterna Peak  | Summit Rhythm           | Mendaki dengan usaha stabil, bukan terburu-buru  | Kerja Keras    | Sadhana 2/3      |
| 9  | Aeterna Peak  | Silent Provision        | Memilih bekal secukupnya untuk perjalanan        | Sederhana      | Sadhana Restored |
| 10 | Prism Tower   | Nawa Resonance          | Menyatukan seluruh warna shard                   | Semua Nilai    | Ending           |

---

# 9. Prolog Utama

## Prolog - Nara dan Aegis Verita

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Oke... ini jelas bukan tempat aku tadi berdiri."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Langitnya abu-abu. Tanahnya abu-abu. Bahkan anginnya terasa abu-abu."

**[Asset: Aegis Verita/Pose (1) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Nara."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kristal bisa bicara?"

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Aku Aegis Verita. Aku memanggilmu ke Ethica."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tanpa izin?"

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Jika masih ada waktu untuk meminta izin, aku akan melakukannya."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Itu jawaban yang bikin aku makin khawatir."

**[Asset: Aegis Verita/Pose (3) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Ethica kehilangan warna."

**[Asset: Aegis Verita/Pose (3) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Nihil memanipulasi Nawa Shard."

**[Asset: Aegis Verita/Pose (4) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Tiga shard wilayah menjadi suram."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi aku harus mengalahkan Nihil?"

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Pada akhirnya, ya."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Tapi sebelum itu, tiga wilayah harus dipulihkan."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dengan cara membawa shard ke menara?"

**[Asset: Aegis Verita/Pose (3) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Tidak."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Shard wilayah tidak boleh dipindahkan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Mereka adalah jantung tempatnya masing-masing."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi aku harus datang ke tempat shard itu berada?"

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Benar."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Kamu akan membantu penghuni asli tiap wilayah memulihkan shard mereka."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Penghuni asli?"

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Veda di Equi Nagari."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Luma di Baswara Wilds."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Sthira di Aeterna Peak."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dan mereka semua menunggu aku?"

**[Asset: Aegis Verita/Pose (3) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Mereka sudah berusaha sebelum kamu datang."

**[Asset: Aegis Verita/Pose (4) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Tapi shard tidak lagi merespons mereka sepenuhnya."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kenapa aku?"

**[Asset: Aegis Verita/Pose (1) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Karena kamu adalah The Prism."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku merasa harusnya ada penjelasan lebih panjang untuk kalimat itu."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Akan ada."

**[Asset: Aegis Verita/Pose (3) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Namun Ethica tidak punya banyak waktu."

### Pilihan Prolog

1. "Aku takut, tapi aku akan coba bantu."
2. "Aku butuh penjelasan yang lebih jelas."
3. "Kalau aku menolak, apa aku bisa pulang?"

### Jika memilih 1

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku takut, tapi aku akan coba bantu."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Rasa takut yang diakui tidak memadamkan cahaya."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jangan berharap aku langsung hebat."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Aku hanya berharap kamu tetap memilih dengan sadar."

**Efek:** Vritatva Essence naik.

### Jika memilih 2

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku butuh penjelasan yang lebih jelas."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Ada tiga shard wilayah: Karuna, Atman, dan Sadhana."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Setiap shard menyimpan tiga nilai integritas."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dan aku menyelesaikan tantangan untuk mengisi warna shard itu?"

**[Asset: Aegis Verita/Pose (1) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Benar."

**Efek:** Membuka tutorial shard progress.

### Jika memilih 3

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau aku menolak, apa aku bisa pulang?"

**[Asset: Aegis Verita/Pose (4) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Jalan pulang melewati Prism Tower."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dan Prism Tower dikuasai Nihil."

**[Asset: Aegis Verita/Pose (3) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Ya."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi pilihan pulang tetap harus lewat membantu dunia ini."

**[Asset: Aegis Verita/Pose (2) | Posisi: Kanan | State: Aktif]**
**Aegis Verita:** "Kadang jalan pulang dan jalan menolong memang bertemu di tempat yang sama."

**Efek:** Vritatva Essence turun sedikit, tetapi Nara tetap lanjut.

---

# 10. Chapter 1 - Equi Nagari

## Pembuka Chapter 1

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kota ini... seperti masih bergerak, tapi tidak benar-benar hidup."

**[Asset: Veda/Pose (1) | Posisi: Kanan | State: Aktif]**
**Veda:** "Equi Nagari dulu tidak hanya bergerak."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Ia saling menjaga."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Sekarang semua mesinnya seperti bekerja karena terpaksa."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Karuna Shard kehilangan warna."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Peduli, adil, dan disiplin tidak lagi mengalir."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Veda adalah penghuni asli Equi Nagari."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Ia mencoba memulihkan shard ini sebelum kamu datang."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Aku mencoba."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Tapi satu penjaga kota tidak cukup."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau begitu aku bantu."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Mulai dari mana?"

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Dari hal kecil yang hampir dihancurkan."

---

## Tantangan 1 - Circuit of Care

**Wilayah:** Equi Nagari
**Nilai:** Peduli
**Pemberi Tantangan:** Veda
**Progress shard:** Karuna Shard terisi 1/3 warna oranye hangat.

### Konsep Minigame

Pemain memperbaiki jaringan energi kota dengan cara menyambungkan jalur listrik dari pusat menara ke beberapa robot kecil, rumah bengkel, dan lampu jalan yang padam.

Nilai peduli disampaikan secara tersirat melalui tindakan menyelamatkan titik kecil yang hampir padam.

### Cara Bermain

Pemain melihat papan sirkuit berbentuk kota mini. Ada node energi utama, kabel putus, node lemah, dan beberapa titik rusak.

Pemain menarik jalur kabel dari sumber energi ke titik yang membutuhkan daya.

Indikator node:

* Lampu merah: butuh bantuan cepat.
* Lampu kuning: butuh bantuan sedang.
* Lampu biru redup: bisa menunggu.
* Kabel hitam: jalur rusak.
* Kabel oranye: jalur aktif.

### Fitur Seru

* `Combo Care Chain`
* `Perfect Route Bonus`
* `Replay Score`
* Animasi node menyala dan cahaya menjalar ke shard

### Menang Jika

Pemain berhasil menghidupkan semua node prioritas sebelum energi habis.

### Kalah Jika

Pemain membuang terlalu banyak kabel ke node tidak penting sampai node prioritas padam.

### Tutorial Singkat

Tarik kabel dari sumber energi ke node yang paling membutuhkan. Perhatikan warna indikator. Gunakan kabel secukupnya agar semua titik penting mendapat daya.

### Dialog Sebelum Tantangan 1

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Lorong bawah kota ini gelap sekali."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tapi garis-garis di lantai itu... seperti pembuluh cahaya."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Itu jaringan energi Equi Nagari."

**[Asset: Veda/Pose (1) | Posisi: Kanan | State: Aktif]**
**Veda:** "Dulu, setiap jalurnya saling menjawab."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Sekarang banyak yang putus."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Karuna Shard hampir tidak mampu mengalirkan warna."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku lihat beberapa lampu kecil masih berkedip."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Mereka adalah titik terakhir yang belum padam."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau dibiarkan?"

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kota akan kehilangan suara-suara kecilnya."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Suara kecil tetap penting?"

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kota besar runtuh ketika suara kecil terlalu sering diabaikan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tantangan ini tidak memintamu menyelamatkan semuanya sekaligus."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kamu hanya perlu memilih jalur pertama dengan sadar."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Energinya terbatas, kan?"

**[Asset: Veda/Pose (1) | Posisi: Kanan | State: Aktif]**
**Veda:** "Ya."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tentu saja."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Tarik kabel dari sumber energi."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Sambungkan ke titik yang paling membutuhkan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dan jangan membuang daya ke jalur yang cuma terlihat terang."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kamu mulai memahami Karuna."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Belum. Tapi aku bisa mulai dari satu lampu."

**[Gameplay: Mulai Minigame Circuit of Care]**

### Dialog Setelah Tantangan 1

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Lampunya menyala."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Robot kecil itu bergerak lagi."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Bukan hanya bergerak."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Ia kembali mengirim sinyal ke jaringan kota."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Karuna Shard merespons."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku lihat warnanya."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Oranye hangat, seperti napas pertama setelah lama tertahan."

**[Asset: Veda/Pose (1) | Posisi: Kanan | State: Aktif]**
**Veda:** "Peduli tidak selalu datang dalam bentuk besar."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kadang ia hanya berupa tangan yang tidak melewati kerusakan kecil."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku pikir peduli cuma soal merasa kasihan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kasihan bisa berhenti sebagai perasaan."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Peduli harus sampai menjadi tindakan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau begitu, satu bagian kota sudah tidak sendirian."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Dan bagian lain mulai meminta untuk didengar."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku dengar suara protes dari atas."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Balai Keputusan memanggil."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Setelah peduli, kota menuntut keseimbangan."

**Efek:** Karuna Shard menjadi 1/3. Tantangan 2 terbuka.

---

## Tantangan 2 - Scales of Civic Balance

**Wilayah:** Equi Nagari
**Nilai:** Adil
**Pemberi Tantangan:** Veda
**Progress shard:** Karuna Shard terisi 2/3 warna biru listrik.

### Konsep Minigame

Pemain mengatur prioritas bantuan kota di Balai Keputusan. Ada berbagai kartu permintaan bantuan dari warga, distrik, mesin publik, dan fasilitas penting. Beberapa kartu tampak menarik, tetapi datanya tidak selalu jujur.

### Cara Bermain

Pemain menyeret kartu permohonan ke tiga jalur prioritas:

* `Segera`
* `Setelah Stabil`
* `Tunda`

Setiap kartu punya data:

* kebutuhan,
* dampak,
* waktu,
* risiko.

Beberapa kartu memiliki stempel palsu atau hadiah tersembunyi dari Nihil.

### Fitur Seru

* `Decision Streak`
* `Hidden Corruption Reveal`
* `Civic Trust Meter`
* Ronde makin cepat tetapi tetap mudah dibaca

### Menang Jika

Civic Trust mencapai batas aman dan fasilitas penting mendapat prioritas yang tepat.

### Kalah Jika

Pemain terlalu banyak memilih kartu palsu, menerima tawaran pribadi, atau menunda kebutuhan darurat.

### Tutorial Singkat

Baca kartu permohonan. Seret ke prioritas yang tepat. Perhatikan kebutuhan, dampak, waktu, dan tanda stempel palsu.

### Dialog Sebelum Tantangan 2

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Banyak sekali yang minta didahulukan."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Begitulah kota yang terluka."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Semua merasa lukanya paling keras."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau begitu bagaimana aku memilih tanpa membuat yang lain marah?"

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kamu mungkin tetap membuat mereka marah."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Itu tidak menenangkan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Keputusan yang baik tidak selalu membuat semua pihak puas."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tetapi keputusan itu harus bisa dijelaskan."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Lihat datanya."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Siapa yang paling membutuhkan. Siapa yang terdampak paling luas."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dan kartu yang bersinar terlalu cantik itu?"

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Sebagian adalah permintaan asli."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Sebagian lagi sudah disentuh Nihil."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi tidak semua yang terang membawa cahaya."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kadang yang terlalu terang hanya ingin membutakan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Baik. Aku akan menimbang, bukan menebak."

**[Gameplay: Mulai Minigame Scales of Civic Balance]**

### Dialog Setelah Tantangan 2

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku tidak menyangka memilih urutan bantuan bisa setegang itu."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Karena setiap pilihan menyentuh hidup seseorang."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku hampir memilih distrik yang menawarkan komponen langka."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kamu berhenti ketika datanya tidak cocok."

**[Asset: Aegis Verita/Pose (1) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Itu yang penting."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tapi ada warga yang tetap kecewa."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Adil bukan berarti semua keinginan dipenuhi."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Adil berarti alasan keputusan tidak disembunyikan."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Karuna Shard terisi dua bagian."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Peduli memberi arah. Adil memberi ukuran."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tinggal disiplin."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Bagian tersulit untuk kota ini."

**Efek:** Karuna Shard menjadi 2/3. Tantangan 3 terbuka.

---

## Tantangan 3 - Clockwork Promise

**Wilayah:** Equi Nagari
**Nilai:** Disiplin
**Pemberi Tantangan:** Veda
**Progress shard:** Karuna Shard penuh. Menara Jam menyala, Equi Nagari pulih, dan sinar Karuna menuju Prism Tower.

### Konsep Minigame

Pemain mengatur jadwal perbaikan Menara Jam dalam tiga siklus hari. Pemain harus menyeimbangkan tugas wajib, tugas darurat, perawatan mesin, dan istirahat.

Disiplin ditunjukkan bukan sebagai kerja terus, tetapi menjaga ritme agar sistem tetap berjalan.

### Cara Bermain

Pemain menyusun kartu aktivitas ke slot waktu:

* Pagi
* Siang
* Sore
* Malam

Jenis kartu:

* `Repair`
* `Maintenance`
* `Rest`
* `Emergency`
* `Shortcut`

### Fitur Seru

* `Rhythm Bonus`
* `No Shortcut Bonus`
* Animasi roda gigi makin stabil
* Grade hasil: `Stable`, `Excellent`, `Perfect Rhythm`

### Menang Jika

Menara Jam stabil sampai akhir siklus ketiga dan stamina tidak habis.

### Kalah Jika

Pemain menunda terlalu banyak tugas wajib, memakai terlalu banyak shortcut, atau mengabaikan istirahat sampai sistem rusak.

### Tutorial Singkat

Susun kartu aktivitas ke slot waktu. Jaga keseimbangan antara perbaikan, perawatan, keadaan darurat, dan istirahat. Hindari shortcut kelabu.

### Dialog Sebelum Tantangan 3

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tempat ini rasanya seperti jadwal sekolah yang berubah jadi mesin raksasa."

**[Asset: Veda/Pose (1) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kurang lebih begitu."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Bedanya, kalau jadwal ini kacau, seluruh kota ikut tersendat."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tantangan ini menguji disiplin sebagai konsistensi."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Apa bedanya dengan sekadar patuh?"

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kepatuhan bisa terjadi karena takut."

**[Asset: Aegis Verita/Pose (1) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Konsistensi terjadi karena kamu memahami nilai dari tindakan yang diulang."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Kamu harus menyusun tiga siklus perbaikan."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Jangan menumpuk semua pekerjaan di awal."

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Jangan juga menunda yang wajib."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dan tombol kelabu itu?"

**[Asset: Veda/Pose (3) | Posisi: Kanan | State: Aktif]**
**Veda:** "Jalan pintas dari Nihil."

**[Asset: Aegis Verita/Pose (4) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Ia membuat satu tugas terlihat selesai, tetapi merusak ritme berikutnya."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Baik. Aku akan membuat jadwal yang bisa bertahan."

**[Gameplay: Mulai Minigame Clockwork Promise]**

### Dialog Setelah Tantangan 3

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Ternyata disiplin bukan soal memaksa diri sampai habis."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Disiplin yang menghancurkan diri sendiri hanya bentuk lain dari ketidakseimbangan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kamu memberi ruang untuk tugas wajib, keadaan darurat, dan istirahat."

**[Asset: Aegis Verita/Pose (1) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Karena itu ritmenya bertahan."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku biasanya mengira istirahat itu hadiah setelah semua beres."

**[Asset: Veda/Pose (2) | Posisi: Kanan | State: Aktif]**
**Veda:** "Di kota yang hidup, istirahat adalah bagian dari mesin."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Tanpanya, roda gigi cepat aus."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Karuna Shard pulih penuh."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Peduli membuat kita melihat."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Adil membuat kita menimbang."

**[Asset: Veda/Pose (4) | Posisi: Kanan | State: Aktif]**
**Veda:** "Disiplin membuat kita menjaga."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Satu wilayah pulih."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Area berikutnya terbuka: Baswara Wilds."

**Efek:** Karuna Shard penuh. Equi Nagari Restored. Baswara Wilds terbuka.

---

# 11. Chapter 2 - Baswara Wilds

## Pembuka Chapter 2

**[Asset: Luma/Pose (1) | Posisi: Kanan | State: Aktif]**
**Luma:** "Jangan percaya semua pantulan di sini."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Itu sapaan yang agak mencurigakan."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Baswara Wilds dulu memantulkan kebenaran."

**[Asset: Luma/Pose (3) | Posisi: Kanan | State: Aktif]**
**Luma:** "Sekarang, Nihil membuat pantulan terlihat lebih nyaman dari kenyataan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Atman Shard membutuhkan kejujuran, keberanian, dan kemandirian."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tiga hal yang sering lebih susah dari kelihatannya."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Karena ketiganya tidak bisa dipalsukan terlalu lama."

---

## Tantangan 4 - Mirror of True Steps

**Wilayah:** Baswara Wilds
**Nilai:** Jujur
**Pemberi Tantangan:** Luma
**Progress shard:** Atman Shard terisi 1/3 warna toska.

### Konsep Minigame

Pemain berjalan melewati Danau Cermin. Ada dua jalur: dunia asli dan pantulan danau. Kadang pantulan menunjukkan jalur yang lebih mudah, tetapi palsu.

### Cara Bermain

Layar terbagi menjadi dua:

* Bagian atas: jalur hutan nyata.
* Bagian bawah: pantulan danau.

Pemain menggerakkan Nara melewati tile. Sebelum melangkah, pemain harus mencocokkan perbedaan antara objek nyata dan pantulan.

### Fitur Seru

* `Truth Streak`
* `Reflection Break`
* `Memory Tile`
* Timer lembut

### Menang Jika

Pemain mencapai tengah Danau Cermin dengan memilih jalur nyata.

### Kalah Jika

Pemain terlalu sering mengikuti pantulan palsu sampai tersesat.

### Tutorial Singkat

Bandingkan dunia asli dan pantulannya. Pilih langkah yang sesuai kenyataan. Jangan tergoda jalur yang terlihat terlalu sempurna.

### Dialog Sebelum Tantangan 4

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Pantulannya terlihat lebih bagus dari tempat aslinya."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Itulah masalahnya."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Biasanya pantulan cuma mengikuti benda aslinya."

**[Asset: Luma/Pose (3) | Posisi: Kanan | State: Aktif]**
**Luma:** "Dulu begitu."

**[Asset: Luma/Pose (3) | Posisi: Kanan | State: Aktif]**
**Luma:** "Sekarang pantulan di sini belajar berbohong."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Nihil tidak membuat kebohongan terlihat buruk."

**[Asset: Aegis Verita/Pose (4) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Ia membuatnya terasa lebih nyaman dari kenyataan."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi kalau aku mengikuti yang terlihat paling indah..."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Kamu mungkin masuk ke jalur yang tidak pernah ada."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku harus melihat yang retak, yang layu, yang tidak rapi."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Karena yang benar tidak selalu terlihat menyenangkan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Baik. Aku akan melangkah di jalur yang nyata."

**[Gameplay: Mulai Minigame Mirror of True Steps]**

### Dialog Setelah Tantangan 4

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Pantulan itu pecah saat aku memilih jalan yang asli."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Kebohongan tidak selalu kuat."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Sering kali ia hanya menunggu seseorang berhenti mempercayainya."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Atman Shard merespons."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Warnanya seperti air yang akhirnya berani jernih."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Kejujuran tidak selalu membuat jalan mudah."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Tapi ia membuatmu tahu di mana kamu berdiri."

**Efek:** Atman Shard menjadi 1/3. Tantangan 5 terbuka.

---

## Tantangan 5 - Lantern Run

**Wilayah:** Baswara Wilds
**Nilai:** Berani
**Pemberi Tantangan:** Luma
**Progress shard:** Atman Shard terisi 2/3 warna kuning cahaya.

### Konsep Minigame

Pemain berlari membawa lentera kecil melewati hutan yang berubah-ubah. Ada bayangan ilusi yang menghalangi, tetapi sebagian bayangan hanya menakut-nakuti dan akan hilang jika disorot.

### Cara Bermain

Minigame berupa side-scrolling runner ringan. Nara membawa lentera. Pemain harus:

* Melompat melewati akar.
* Menunduk dari ranting.
* Mengarahkan cahaya lentera ke bayangan palsu.
* Menghindari bayangan asli.

### Fitur Seru

* `Brave Dash`
* `Lantern Combo`
* Musik dinamis
* Endless Replay Mode setelah story clear

### Menang Jika

Pemain mencapai altar cahaya di ujung hutan dengan lentera masih menyala.

### Kalah Jika

Lentera padam atau pemain terlalu sering terkena rintangan.

### Tutorial Singkat

Lari melewati hutan, lompat dan hindari rintangan. Arahkan lentera ke bayangan palsu. Gunakan cahaya dengan bijak agar tidak padam.

### Dialog Sebelum Tantangan 5

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kenapa aku merasa hutan ini sedang menunggu aku panik?"

**[Asset: Luma/Pose (1) | Posisi: Kanan | State: Aktif]**
**Luma:** "Karena memang begitu."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku berharap kamu bilang tidak."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Aku sedang jujur."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Bayangan di depanmu tidak semuanya nyata."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tetapi rasa takutmu nyata."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Itu membuatku harus bagaimana?"

**[Asset: Luma/Pose (3) | Posisi: Kanan | State: Aktif]**
**Luma:** "Bukan menghilangkan takut."

**[Asset: Luma/Pose (3) | Posisi: Kanan | State: Aktif]**
**Luma:** "Bukan juga menabrak semuanya."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi aku harus maju sambil tetap melihat."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Itulah cahaya lentera."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Ia bukan membuat jalan mudah. Ia membuatmu tahu ke mana harus melangkah."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Baik. Aku maju."

**[Gameplay: Mulai Minigame Lantern Run]**

### Dialog Setelah Tantangan 5

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Lenteranya hampir padam, tapi aku sampai."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Cahaya kecil yang dijaga bisa melewati hutan panjang."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku masih takut."

**[Asset: Aegis Verita/Pose (1) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tetapi kamu tidak menyerahkan langkahmu pada rasa takut."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Itu sudah cukup untuk membuat Atman mendengar."

**Efek:** Atman Shard menjadi 2/3. Tantangan 6 terbuka.

---

## Tantangan 6 - Solo Bloom Path

**Wilayah:** Baswara Wilds
**Nilai:** Mandiri
**Pemberi Tantangan:** Luma
**Progress shard:** Atman Shard penuh. Danau Cermin menyala, Baswara Wilds pulih, dan sinar Atman menuju Prism Tower.

### Konsep Minigame

Pemain harus menumbuhkan jalur bunga cahaya sendiri untuk mencapai Atman Shard di tengah danau. Luma bisa memberi bantuan kecil, tetapi tidak menyelesaikan rute untuk pemain.

### Cara Bermain

Pemain berada di grid danau. Setiap langkah meninggalkan bunga cahaya. Bunga hanya bisa tumbuh jika pemain memilih tile yang cocok dengan pola alam.

Jenis tile:

* Tanah basah: bisa ditumbuhi.
* Air jernih: perlu bunga jembatan.
* Air gelap: tidak bisa dilewati.
* Batu akar: mengubah arah pertumbuhan.
* Bunga bantuan Luma: memberi satu hint.

### Fitur Seru

* `Self Path Bonus`
* `Bloom Chain`
* Level pendek dan cepat diulang
* 1 sampai 3 bintang berdasarkan langkah dan hint

### Menang Jika

Pemain berhasil mencapai Atman Shard dengan jalur bunga yang stabil.

### Kalah Jika

Pemain kehabisan langkah atau membuat jalur tertutup.

### Tutorial Singkat

Pilih tile untuk menumbuhkan jalur bunga. Pelajari pola alam. Gunakan bantuan Luma hanya jika perlu.

### Dialog Sebelum Tantangan 6

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku tidak melihat jalan."

**[Asset: Luma/Pose (1) | Posisi: Kanan | State: Aktif]**
**Luma:** "Karena kali ini jalan belum ada."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Itu terdengar seperti masalah besar."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Atau kesempatan."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Atman Shard telah merespons kejujuran dan keberanianmu."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Bagian terakhir menunggu keputusan yang lahir dari dirimu sendiri."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi Luma tidak akan menuntunku?"

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Aku bisa memberi cahaya kecil."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Tapi langkahnya harus kamu pilih."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Mandiri bukan berarti menolak bantuan, kan?"

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Bukan."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Mandiri berarti tidak menyerahkan seluruh arah hidupmu kepada bantuan itu."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku akan menumbuhkan jalanku sendiri."

**[Gameplay: Mulai Minigame Solo Bloom Path]**

### Dialog Setelah Tantangan 6

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Bunganya benar-benar tumbuh dari langkahku."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Danau tidak memberimu jalan."

**[Asset: Luma/Pose (2) | Posisi: Kanan | State: Aktif]**
**Luma:** "Ia hanya menahan jalan yang kamu pilih dengan sadar."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Atman Shard pulih penuh."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Baswara Wilds tidak terasa sesuram tadi."

**[Asset: Luma/Pose (4) | Posisi: Kanan | State: Aktif]**
**Luma:** "Karena kebenaran, keberanian, dan kemandirian mulai memantul lagi."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Area berikutnya terbuka: Aeterna Peak."

**Efek:** Atman Shard penuh. Baswara Wilds Restored. Aeterna Peak terbuka.

---

# 12. Chapter 3 - Aeterna Peak

## Pembuka Chapter 3

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Puncak tidak jauh."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tapi jalan ke sana berat."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau ada yang bilang tidak jauh di gunung bersalju, aku tidak langsung percaya."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Bijak."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Sthira menjaga Aeterna Peak."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Ia mencoba memulihkan Sadhana Shard sebelum badai menutup jalur."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tanggung jawab, kerja keras, sederhana."

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tiga nilai yang tidak berisik."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tapi menentukan apakah seseorang sampai atau menyerah."

---

## Tantangan 7 - Burden Bridge

**Wilayah:** Aeterna Peak
**Nilai:** Tanggung Jawab
**Pemberi Tantangan:** Sthira
**Progress shard:** Sadhana Shard terisi 1/3 warna biru es.

### Konsep Minigame

Pemain membantu memperbaiki jembatan desa di kaki Aeterna Peak. Jembatan membawa warga, bekal, dan alat pendakian. Pemain harus menaruh beban pada posisi yang seimbang agar jembatan tidak runtuh.

### Cara Bermain

Pemain melihat jembatan es-batu dari samping. Ada beberapa beban:

* Peti obat.
* Kayu perbaikan.
* Alat pendakian.
* Kristal pemanas.
* Batu penyeimbang.

Pemain harus menempatkan beban ke titik jembatan yang tepat agar stabil. Jembatan punya meter tekanan kiri, tengah, kanan.

### Fitur Seru

* `Balance Perfect`
* `Rescue Bonus`
* Feedback fisik jembatan bergetar
* Puzzle ronde cepat

### Menang Jika

Jembatan stabil dan warga berhasil menyeberang.

### Kalah Jika

Tekanan terlalu berat di satu sisi sampai jembatan retak.

### Tutorial Singkat

Letakkan beban di posisi yang tepat. Jaga tekanan kiri, tengah, dan kanan tetap seimbang agar jembatan bisa dilewati.

### Dialog Sebelum Tantangan 7

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku kira kita langsung mendaki ke puncak."

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tidak."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Karena jembatan ini?"

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Ya."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tapi shard ada di atas sana."

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Dan orang-orang ini perlu menyeberang di sini."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Sadhana tidak menyala untuk mereka yang mengejar puncak sambil melupakan jalan di bawahnya."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi sebelum lanjut, kita pastikan jembatan ini aman."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tanggung jawab sering terlihat seperti berhenti sebentar."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Padahal sebenarnya menjaga agar perjalanan semua orang bisa lanjut."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tepat."

**[Gameplay: Mulai Minigame Burden Bridge]**

### Dialog Setelah Tantangan 7

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jembatannya stabil."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Dan orang-orang bisa lewat."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku hampir lupa kalau perjalanan ini bukan cuma tentang aku mencapai puncak."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tanggung jawab membuat langkahmu terhubung dengan langkah orang lain."

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Sadhana Shard mendengar."

**Efek:** Sadhana Shard menjadi 1/3. Tantangan 8 terbuka.

---

## Tantangan 8 - Summit Rhythm

**Wilayah:** Aeterna Peak
**Nilai:** Kerja Keras
**Pemberi Tantangan:** Sthira
**Progress shard:** Sadhana Shard terisi 2/3 warna putih kristal.

### Konsep Minigame

Pemain mendaki jalur bersalju dengan sistem ritme stamina. Pemain harus menekan tombol sesuai irama napas dan langkah. Jika terlalu cepat, stamina turun. Jika terlalu lambat, badai mendekat.

### Cara Bermain

Minigame rhythm-climbing. Ada lingkaran timing yang muncul mengikuti detak langkah. Pemain menekan saat indikator masuk zona tepat.

Aksi:

* `Step`
* `Grip`
* `Breathe`
* `Push`

### Fitur Seru

* `Perfect Step Chain`
* `Stamina Flow`
* Musik sinkron dengan langkah
* Rank hasil: `Steady`, `Strong`, `Peakborn`

### Menang Jika

Pemain mencapai pos pendakian berikutnya sebelum badai menutup jalur.

### Kalah Jika

Stamina habis atau pemain terlalu sering gagal timing.

### Tutorial Singkat

Tekan tombol saat indikator masuk zona cahaya. Jaga ritme langkah, gunakan napas untuk memulihkan stamina, dan jangan terlalu sering memaksa dorongan kuat.

### Dialog Sebelum Tantangan 8

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Sekarang baru terasa seperti gunung sungguhan."

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Puncak tidak menolak siapa pun."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Ia hanya bertanya siapa yang tetap melangkah."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku bisa lari?"

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Bisa."

**[Asset: Sthira/Pose (1) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Lalu jatuh lebih cepat."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Oke, tidak lari."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Kerja keras bukan menghancurkan diri agar terlihat kuat."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Langkah. Napas. Pegangan. Ulangi."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kedengarannya sederhana."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Yang sederhana belum tentu mudah."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Baik. Aku jaga ritmenya."

**[Gameplay: Mulai Minigame Summit Rhythm]**

### Dialog Setelah Tantangan 8

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku capek."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Bagus."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Itu bukan jawaban yang biasanya orang kasih."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Capek berarti kamu benar-benar melangkah."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Dan kamu tidak membiarkan lelah mengubahmu menjadi ceroboh."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Puncaknya semakin dekat."

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Sadhana Shard terisi dua bagian."

**Efek:** Sadhana Shard menjadi 2/3. Tantangan 9 terbuka.

---

## Tantangan 9 - Silent Provision

**Wilayah:** Aeterna Peak
**Nilai:** Sederhana
**Pemberi Tantangan:** Sthira
**Progress shard:** Sadhana Shard penuh. Puncak gunung menyala, Aeterna Peak pulih, dan sinar Sadhana menuju Prism Tower.

### Konsep Minigame

Pemain memilih bekal untuk perjalanan terakhir menuju Sadhana Shard. Banyak item terlihat keren dan kuat, tetapi ransel punya batas berat. Pemain harus memilih item yang benar-benar dibutuhkan.

### Cara Bermain

Pemain diberi ransel dengan batas berat. Ada banyak item:

* Tali.
* Air hangat.
* Kristal pemanas.
* Makanan ringan.
* Jubah tebal.
* Kompas.
* Lentera.
* Hiasan kristal berat.
* Pedang besar dekoratif.
* Kotak alat berlebihan.

Jika terlalu sedikit, pemain tidak siap. Jika terlalu banyak, stamina cepat turun.

### Fitur Seru

* `Minimal Clear Bonus`
* `Smart Pack Score`
* Item preview
* Route variation

### Menang Jika

Pemain mencapai Sadhana Shard dengan bekal cukup dan berat ransel masih aman.

### Kalah Jika

Pemain membawa terlalu banyak sampai stamina habis, atau terlalu sedikit sampai tidak bisa melewati rintangan.

### Tutorial Singkat

Pilih bekal yang benar-benar dibutuhkan. Perhatikan berat ransel dan kondisi jalur. Jangan terlalu banyak, jangan terlalu sedikit.

### Dialog Sebelum Tantangan 9

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Akhirnya, bagian memilih perlengkapan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku ambil semuanya saja?"

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tidak."

**[Asset: Nara_Laki-Laki/Pose (4) atau Nara_Perempuan/Pose (4) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jawabanmu cepat sekali."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Karena itu kesalahan yang sering terjadi."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Yang berlebihan bisa terasa seperti persiapan."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Tetapi di perjalanan berat, ia berubah menjadi beban."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Jadi sederhana bukan berarti tidak punya apa-apa."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Sederhana berarti tahu apa yang cukup."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau aku membawa terlalu sedikit?"

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Kamu tidak siap."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kalau terlalu banyak?"

**[Asset: Sthira/Pose (3) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Kamu tidak sampai."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Berarti aku harus memilih yang benar-benar perlu."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Puncak tidak meminta banyak."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Ia meminta tepat."

**[Gameplay: Mulai Minigame Silent Provision]**

### Dialog Setelah Tantangan 9

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku membawa lebih sedikit dari yang kupikir perlu."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Dan tetap sampai."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Ranselnya ringan. Langkahku juga."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Sadhana Shard pulih penuh."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Tanggung jawab menjaga jalan."

**[Asset: Sthira/Pose (2) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Kerja keras menjaga langkah."

**[Asset: Sthira/Pose (4) | Posisi: Kanan | State: Aktif]**
**Sthira:** "Sederhana menjaga beban."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Prism Tower terbuka."

**Efek:** Sadhana Shard penuh. Aeterna Peak Restored. Prism Tower terbuka.

---

# 13. Final Chapter - Prism Tower

## Tantangan 10 - Nawa Resonance

**Wilayah:** Prism Tower
**Nilai:** Semua nilai integritas
**Antagonis:** Nihil
**Progress:** Ending

### Konsep Minigame

Final challenge bukan boss fight penuh kekerasan, melainkan gabungan action, puzzle, dan rhythm. Pemain harus mengaktifkan 9 warna nilai dari shard yang sudah dipulihkan untuk membuka Nawa Shard.

Nihil menyerang bukan dengan monster, tetapi dengan distorsi pikiran: membuat nilai terasa berat, sia-sia, melelahkan, atau tidak penting.

### Cara Bermain

Pemain berada di arena Prism Tower. Ada 9 fragmen cahaya mengitari Nawa Shard. Pemain harus mengaktifkan fragmen sesuai pola yang muncul.

Fragmen nilai:

* Peduli: sambungkan cahaya ke titik redup.
* Adil: pilih fragmen yang paling membutuhkan energi.
* Disiplin: tekan ritme stabil.
* Jujur: pilih pantulan yang benar.
* Berani: sorot bayangan Nihil.
* Mandiri: buat jalur sendiri.
* Tanggung jawab: seimbangkan beban energi.
* Kerja keras: tahan ritme pendakian cahaya.
* Sederhana: buang energi berlebih agar shard stabil.

### Menang Jika

Pemain berhasil menstabilkan Nawa Shard dan memilih respons akhir terhadap Nihil.

### Kalah Jika

Resonance Meter kosong karena terlalu banyak salah memilih pola.

### Dialog Sebelum Final Challenge

**[Asset: Nihil/Pose (1) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Tiga wilayah menyala."

**[Asset: Nihil/Pose (2) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Kamu pikir itu cukup?"

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Cukup untuk membuka jalan."

**[Asset: Nihil/Pose (2) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Peduli akan lelah."

**[Asset: Nihil/Pose (2) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Jujur akan menyakiti."

**[Asset: Nihil/Pose (3) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Tanggung jawab akan membebani."

**[Asset: Aegis Verita/Pose (3) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Nihil hanya menyebut harga dari nilai."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Bukan maknanya."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku tahu nilai tidak selalu ringan."

**[Asset: Nihil/Pose (3) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Maka tinggalkan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tidak."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Ringan bukan satu-satunya alasan sesuatu layak dibawa."

### Pilihan Final

1. "Nilai memang berat, tapi tanpa nilai dunia tidak hidup."
2. "Aku tidak punya jawaban sempurna, tapi kosong bukan solusi."
3. "Kamu benar soal lukanya, tapi salah soal akhirnya."

### Jika memilih 1

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Nilai memang berat, tapi tanpa nilai dunia tidak hidup."

**[Asset: Nihil/Pose (3) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Hidup berarti retak."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Retak bisa diperbaiki."

**[Asset: Nihil/Pose (4) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Dan rusak lagi."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Lalu diperbaiki lagi."

**Efek:** Golden Harmony lebih mudah dicapai jika Essence tinggi.

### Jika memilih 2

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku tidak punya jawaban sempurna, tapi kosong bukan solusi."

**[Asset: Nihil/Pose (2) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Ketidaktahuan adalah kelemahan."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Mungkin."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Tapi aku belajar dari tiap wilayah."

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Dan belajar adalah bentuk cahaya yang bergerak."

**Efek:** Vritatva Essence naik sedang.

### Jika memilih 3

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Kamu benar soal lukanya, tapi salah soal akhirnya."

**[Asset: Nihil/Pose (3) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Luka adalah akhir."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Bukan."

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Luka bisa jadi alasan seseorang mulai peduli."

**[Asset: Nihil/Pose (4) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Kamu akan lelah."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku tahu."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Makanya aku tidak sendirian."

**Efek:** Final trial dimulai dengan dialog reflektif tambahan.

### Dialog Setelah Final Challenge

**[Asset: Nihil/Pose (4) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Cahaya itu tidak menghapus beban."

**[Asset: Nara_Laki-Laki/Pose (3) atau Nara_Perempuan/Pose (3) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku tahu."

**[Asset: Nihil/Pose (3) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Ia tidak menghapus takut."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Aku juga tahu."

**[Asset: Nihil/Pose (2) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Lalu kenapa masih memilihnya?"

**[Asset: Nara_Laki-Laki/Pose (2) atau Nara_Perempuan/Pose (2) | Posisi: Kiri | State: Aktif]**
**Nara:** "Karena tanpa cahaya, semua beban terasa tidak punya arah."

**[Asset: Aegis Verita/Pose (1) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Nawa Shard menerima resonansi."

**[Asset: Nihil/Pose (4) | Posisi: Kanan | State: Aktif]**
**Nihil:** "Kalau begitu... lihatlah apakah dunia sanggup menjaganya."

**[Asset: Nara_Laki-Laki/Pose (1) atau Nara_Perempuan/Pose (1) | Posisi: Kiri | State: Aktif]**
**Nara:** "Dunia tidak harus sempurna untuk mulai pulih."

**Efek:** Masuk ke ending sesuai Vritatva Essence dan hasil minigame.

---

# 14. Sistem Ending

Ending ditentukan oleh:

* Vritatva Essence.
* Jumlah minigame dengan hasil Perfect/Excellent.
* Pilihan dialog penting.
* Jumlah hint yang digunakan.
* Konsistensi pemain dalam final challenge.

| Ending                | Syarat                                                | Hasil                                                          |
| --------------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| Golden Harmony Ending | Essence tinggi, banyak Perfect/Excellent              | Ethica pulih penuh, Nara menjadi Guardian of Prism             |
| True Color Ending     | Semua shard pulih, Essence sedang                     | Ethica pulih, tetapi Nara masih belajar menjaga cahaya         |
| Dim Reflection Ending | Banyak pilihan egois, sering gagal tetapi tetap tamat | Ethica pulih sebagian, Nihil memudar namun bayangannya tersisa |

---

# 15. Vritatva Essence

`Vritatva Essence` adalah meter sikap batin Nara. Meter ini naik atau turun berdasarkan pilihan dialog, hasil minigame, dan cara pemain menyelesaikan tantangan.

Essence tidak ditampilkan sebagai baik/jahat secara terang-terangan.

Gunakan status:

* `Clear`
* `Wavering`
* `Dimmed`

Efek Essence:

* Membuka variasi dialog.
* Memberi hint tambahan jika pemain sering gagal.
* Mempengaruhi ending.
* Mengubah warna aura Nara secara halus.

---

# 16. Shard Result Screen

Setelah tiap minigame selesai, tampil layar hasil:

* Challenge Clear
* Score
* Combo
* Mistake
* Essence Change
* Shard Progress
* Reward Quote

Contoh quote:

> "Cahaya kecil tetap berarti saat ia diberikan tepat waktu."

---

# 17. Replay Challenge

Minigame yang sudah selesai bisa dimainkan ulang dari menu wilayah.

Progress shard tidak turun, tetapi pemain bisa mengejar:

* skor lebih tinggi,
* Perfect Clear,
* quote tambahan,
* shard illustration variant,
* dialogue memory.

---

# 18. Hint System dari Aegis Verita

Jika pemain gagal 2 kali, Aegis memberi hint ringan.

Jika gagal 4 kali, Aegis memberi hint lebih jelas.

Contoh hint:

**[Asset: Aegis Verita/Pose (2) | Posisi: Tengah-Kanan | State: Aktif]**
**Aegis Verita:** "Perhatikan bukan yang paling terang, melainkan yang paling terdesak."

---

# 19. Dynamic Restoration

Saat shard wilayah penuh, perubahan visual harus terasa memuaskan.

Urutan restoration:

1. Shard menyala penuh.
2. Warna menjalar dari shard ke tanah, bangunan, pohon, atau salju.
3. Musik berubah dari suram ke versi hidup.
4. Entitas wilayah memberi dialog penutup.
5. Sinar shard menuju Prism Tower.
6. World Map memperbarui status wilayah menjadi Restored.
7. Wilayah berikutnya terbuka.

---

# 20. Aturan Kalah

Game tidak memaksa pemain menang.

Jika pemain gagal:

* progress tantangan tidak diberikan,
* shard tidak bertambah warna,
* muncul layar `Try Again`,
* pemain mengulang dari checkpoint atau awal minigame.

Pilihan layar kalah:

* `Try Again`
* `Restart Challenge`
* `Return to World Map`

---

# 21. Prompt Tampilan Minigame

## Prompt Circuit of Care

Buat tampilan minigame 2D fantasy-steampunk untuk **Circuit of Care** di wilayah Equi Nagari. Visual berupa papan sirkuit kota mini dari logam halus, kabel bercahaya oranye, node energi berbentuk lampu kecil, dan latar Menara Jam yang suram. Gunakan palet abu kebiruan, oranye uap, biru listrik, dan emas tipis. UI harus clean, mudah dibaca, teen-friendly, tidak terlalu ramai, dengan efek glow lembut saat node berhasil dinyalakan. Tambahkan indikator kabel tersisa, progress shard 1/3, tombol pause/settings kecil, dan efek cahaya berantai saat pemain membuat combo.

## Prompt Scales of Civic Balance

Buat tampilan minigame 2D fantasy visual novel puzzle untuk **Scales of Civic Balance**. Latar berada di Balai Keputusan Equi Nagari dengan timbangan mekanis besar, jam raksasa, kartu permohonan warga, rel logam, dan panel prioritas. Gunakan warna abu kebiruan, biru listrik, oranye hangat, dan aksen emas tipis. UI harus elegan, clean, mudah dipahami, dengan tiga zona drag-and-drop: Segera, Setelah Stabil, dan Tunda. Tambahkan efek kartu palsu yang retak menjadi asap gelap, meter Civic Trust, timer lembut, dan progress Karuna Shard 2/3 di pojok layar.

## Prompt Clockwork Promise

Buat tampilan minigame 2D fantasy-steampunk untuk **Clockwork Promise**. Latar berada di dalam Menara Jam Equi Nagari dengan roda gigi besar, kalender melayang, kartu rutinitas, slot waktu, dan cahaya emas lembut. Gunakan palet oranye uap, biru listrik, emas jam, abu kebiruan, dan putih kebiruan. UI berbentuk board jadwal tiga siklus hari, dengan kartu drag-and-drop untuk Repair, Maintenance, Emergency, Rest, dan Shortcut. Tambahkan animasi roda gigi yang semakin stabil, progress Karuna Shard 3/3, serta efek jalan pintas Nihil berupa glow kelabu yang retak jika dihindari.

## Prompt Mirror of True Steps

Buat tampilan minigame 2D fantasy forest untuk **Mirror of True Steps** di Baswara Wilds. Layar terbagi menjadi jalur hutan nyata di atas dan pantulan danau di bawah. Gunakan palet hijau daun, toska danau, kuning cahaya lembut, biru gelap tipis, dan kabut putih. UI harus clean dan magis, dengan tile bercahaya, retakan ilusi seperti kaca, efek ripple pada danau, dan progress Atman Shard 1/3 di pojok layar. Buat suasana misterius tetapi tetap teen-friendly, tidak horor.

## Prompt Lantern Run

Buat tampilan minigame 2D side-scrolling fantasy runner untuk **Lantern Run**. Latar berada di Baswara Wilds yang berkabut, dengan pohon besar, akar melengkung, kunang-kunang, bayangan ilusi, dan danau bercahaya jauh di belakang. Gunakan palet hijau gelap lembut, kuning cahaya, toska, dan putih kabut. UI menampilkan meter lentera, combo, progress Atman Shard 2/3, dan tombol pause/settings kecil. Efek cahaya lentera harus lembut, tidak neon berlebihan. Suasana harus tegang namun indah, teen-friendly, dan mudah dibaca.

## Prompt Solo Bloom Path

Buat tampilan minigame 2D fantasy puzzle untuk **Solo Bloom Path**. Latar berada di atas Danau Cermin Baswara Wilds dengan grid halus dari cahaya toska, bunga bercahaya, akar pohon, batu kecil, dan Atman Shard di tengah danau. Gunakan palet hijau daun, toska danau, kuning lembut, dan putih bercahaya. UI menampilkan jumlah langkah, tombol hint dari Luma, jumlah bintang, progress Atman Shard 3/3, dan efek bunga tumbuh berantai saat pemain memilih tile benar. Tampilan harus clean, magical, calming, dan tetap seru.

## Prompt Burden Bridge

Buat tampilan minigame 2D fantasy mountain puzzle untuk **Burden Bridge** di Aeterna Peak. Visual berupa jembatan batu-es yang retak, jurang bersalju, peti bantuan, kristal pemanas, kayu perbaikan, dan golem Sthira di sisi layar. Gunakan palet biru es, putih kristal, abu kebiruan, dan ungu aurora lembut. UI menampilkan meter tekanan kiri-tengah-kanan, jumlah beban, progress Sadhana Shard 1/3, dan efek retakan halus saat posisi salah. Tampilan harus clean, kokoh, tenang, dan mudah dipahami.

## Prompt Summit Rhythm

Buat tampilan minigame 2D fantasy rhythm-climbing untuk **Summit Rhythm**. Latar berada di lereng Aeterna Peak dengan salju lembut, batu kristal, angin aurora, dan jalur pendakian menuju puncak. UI menampilkan lingkaran timing, stamina bar, badai distance meter, combo Perfect Step, progress Sadhana Shard 2/3, dan tombol aksi Step, Grip, Breathe, Push. Gunakan palet biru es, putih kristal, ungu aurora, dan abu kebiruan. Tampilan harus jelas, tidak terlalu ramai, dengan animasi langkah yang terasa satisfying.

## Prompt Silent Provision

Buat tampilan minigame 2D fantasy inventory puzzle untuk **Silent Provision**. Latar berada di pos terakhir Aeterna Peak dengan ransel kulit-kristal, meja batu, item pendakian, salju lembut, dan Sadhana Shard terlihat jauh di puncak. Gunakan palet biru es, putih kristal, ungu aurora, abu kebiruan, dan aksen emas tipis. UI menampilkan ransel dengan batas berat, daftar item drag-and-drop, indikator fungsi item, stamina prediction, progress Sadhana Shard 3/3, dan skor Smart Pack. Desain harus clean, elegan, tenang, dan tidak terlalu ramai.

## Prompt Nawa Resonance

Buat tampilan final minigame 2D fantasy action-puzzle untuk **Nawa Resonance** di Prism Tower. Arena berbentuk ruang kristal tinggi dengan Nawa Shard besar di tengah, tiga sinar dari Karuna, Atman, dan Sadhana masuk dari luar menara. Nihil muncul sebagai siluet kabut elegan tanpa detail menyeramkan berlebihan. UI menampilkan Resonance Meter, 9 fragmen nilai berbentuk shard kecil, Vritatva Essence, dan progress final. Gunakan palet spektrum pelangi lembut, emas, putih kebiruan, ungu pucat, dan toska. Efek cahaya harus magical, clean, elegant, tidak neon berlebihan, dan tetap teen-friendly.

---

# 22. Prompt World Map Carousel

Buat tampilan **World Map Carousel 1-1** untuk game 2D fantasy visual novel adventure **Nawa Chronicles of Ethica**. Pemain hanya melihat satu wilayah besar di tengah layar dalam bentuk kartu map sinematik, bisa digeser kiri dan kanan. Ada 4 kartu wilayah: Equi Nagari, Baswara Wilds, Aeterna Peak, dan Prism Tower. Setiap kartu menampilkan ilustrasi wilayah, nama wilayah, status Locked/Corrupted/Restored, progress shard, tombol Enter, panah kiri-kanan, dan indikator 1/4. Gunakan gaya magical, clean, elegant, soft fantasy, teen-friendly, dengan material crystal UI, kaca transparan, batu magis halus, aksen emas tipis, biru lembut, putih kebiruan, ungu pucat, toska halus, dan abu kebiruan. Locked harus tertutup kabut kristal, Corrupted terlihat suram, Restored penuh warna dan bercahaya lembut. Hindari neon berlebihan, UI terlalu modern, dan ornamen terlalu padat.

---

# 23. Prompt Sistem Asset Dialog untuk AI Coding

Tambahkan sistem asset dialog visual novel untuk game Nawa Chronicles of Ethica.

Setiap dialog harus memiliki metadata asset yang menentukan sprite karakter, pose, posisi, dan state.

Gunakan format data dialog seperti:

```js
{
  speaker: "Nara",
  text: "Dialog karakter",
  asset: "Nara_Laki-Laki/Pose (1)",
  femaleAsset: "Nara_Perempuan/Pose (1)",
  position: "left",
  state: "active"
}
```

Untuk karakter Nara, asset harus menyesuaikan pilihan gender pemain:

* Jika pemain memilih Nara laki-laki, gunakan folder `Nara_Laki-Laki`.
* Jika pemain memilih Nara perempuan, gunakan folder `Nara_Perempuan`.

Dalam layar dialog:

* Nara selalu muncul di kiri.
* Lawan bicara utama muncul di kanan.
* Aegis Verita boleh muncul di tengah-kanan atau melayang dekat Nara.
* Karakter yang sedang bicara dibuat terang/aktif.
* Karakter yang tidak sedang bicara dibuat redup dengan opacity sekitar 45%.
* Saat speaker berubah, transisi opacity harus smooth.
* Jangan memakai label Scene.
* Suasana tempat harus disampaikan melalui dialog karakter, bukan narasi scene.

---

# 24. Prompt Umum Pembuatan Game

Buat game **Nawa Chronicles of Ethica**, sebuah game 2D fantasy visual novel adventure. Game ini memiliki homepage, settings, rewards, world map carousel, dialog visual novel, shard progress, 9 minigames utama, final challenge, dynamic restoration, save progress, replay challenge, dan multiple ending.

Homepage menampilkan Nara menghadap dunia Ethica yang monokrom, dengan Prism Tower jauh di belakang dan Nawa Shard redup. Tombol utama adalah Start, Settings, dan Rewards. Saat Start ditekan, kabut memenuhi layar, loading asli berjalan untuk preload assets, lalu world map muncul setelah kabut keluar.

World map menggunakan sistem **carousel 1-1**, bukan peta besar. Pemain bisa geser kiri dan kanan untuk melihat Equi Nagari, Baswara Wilds, Aeterna Peak, dan Prism Tower. Setiap wilayah memiliki status Locked, Corrupted, atau Restored. Jika pemain klik wilayah yang terbuka, kamera zoom ke kartu wilayah lalu masuk ke chapter.

Settings di homepage berisi slider SFX, slider BGM, pilihan Nara laki-laki dan Nara perempuan, serta tombol close. Settings setelah homepage hanya berisi slider SFX, slider BGM, navigasi, dan tombol close, tanpa pilihan gender.

Rewards membuka **The Hall of Light**, berisi status Karuna Shard, Atman Shard, Sadhana Shard, dan Nawa Shard. Setiap shard bisa diklik untuk melihat ilustrasi, lokasi, nilai integritas, entitas pemberi tantangan, dan kutipan filosofis.

Game memiliki 9 minigames utama: Circuit of Care, Scales of Civic Balance, Clockwork Promise, Mirror of True Steps, Lantern Run, Solo Bloom Path, Burden Bridge, Summit Rhythm, dan Silent Provision. Setiap minigame harus mudah dipahami, punya tutorial singkat, UI clean, feedback visual satisfying, sistem skor, combo, perfect clear, retry, checkpoint, dan replay.

Setiap tantangan yang selesai mengisi shard wilayah sebanyak 1/3. Setelah shard penuh, wilayah mengalami Dynamic Restoration, musik berubah lebih hidup, world map memperbarui status wilayah menjadi Restored, dan chapter berikutnya terbuka. Progress tersimpan otomatis, pemain bisa memainkan ulang minigame tanpa menghapus progress.

Final challenge adalah Nawa Resonance di Prism Tower. Pemain menyatukan 9 fragmen nilai yang sudah dipulihkan untuk menstabilkan Nawa Shard dan menghadapi Nihil. Ending ditentukan oleh Vritatva Essence, hasil minigame, dan pilihan dialog.

Desain visual harus magical, clean, elegant, soft fantasy, teen-friendly, menggunakan crystal UI, kaca transparan, batu magis halus, ornamen prisma lembut, aksen emas tipis, biru lembut, putih kebiruan, ungu pucat, toska halus, dan abu kebiruan. Hindari neon berlebihan, desain terlalu modern seperti aplikasi biasa, ornamen terlalu padat, efek glow terlalu terang, dan warna terlalu gelap.

# 25. Desain Dialog Box Visual Novel

## Konsep Umum Dialog Box

Box dialog untuk **Nawa Chronicles of Ethica** adalah panel visual novel di bagian bawah layar dengan gaya **soft fantasy UI** yang rapi, elegan, tenang, dan mudah dibaca.

Dialog box harus terasa:

- clean,
- fantasy,
- calm,
- readable,
- elegant,
- nyaman untuk dialog panjang.

Desain tidak boleh terlalu ramai, tidak terlalu berkilau, dan tidak terlalu kristal.

Bentuk utama berupa panel horizontal lebar di bagian bawah layar, dengan sudut membulat dan proporsi yang cukup besar agar teks mudah dibaca, tetapi tetap menyisakan area visual untuk background dan sprite karakter.

Material visual utama menggunakan kombinasi seperti:

- kaca buram lembut,
- batu magis halus,
- panel fantasy semi-transparan,
- atau fantasy parchment modern yang ringan.

Hindari kesan UI yang terlalu keras, terlalu futuristic, terlalu neon, atau terlalu seperti aplikasi mobile modern biasa.

---

## Arah Visual Dialog Box

Dialog box harus terlihat menyatu dengan dunia **Ethica**, tetapi tetap netral sehingga cocok dipakai di semua wilayah:

- `Equi Nagari`
- `Baswara Wilds`
- `Aeterna Peak`
- `Prism Tower`

Karena itu, dialog box tidak boleh terlalu mengikuti satu wilayah saja. Desain harus dibuat sebagai **UI inti global** milik game.

### Gaya Visual

- soft fantasy
- clean elegant
- semi-transparan
- ringan
- tidak terlalu ornamental
- tidak terlalu kristal
- tidak terlalu glow
- tidak terlalu gelap

### Material

Gunakan material seperti:

- frosted glass,
- soft stone,
- polished magical frame,
- panel semi-transparan dengan sedikit depth.

Kristal hanya boleh hadir sebagai **aksen kecil**, misalnya:

- sudut panel,
- titik cahaya kecil,
- garis border tipis,
- atau ornamen sangat minimal.

Kristal **bukan** elemen utama.

---

## Palet Warna Dialog Box

Gunakan warna utama berikut:

- biru keabu-abuan transparan
- putih lembut
- ungu pucat
- abu kebiruan
- aksen emas tipis

### Catatan Warna

- Warna dasar panel sebaiknya semi-transparan agar background masih sedikit terlihat.
- Teks harus tetap kontras dan mudah dibaca.
- Border atau outline cukup lembut, tidak tebal.
- Glow hanya dipakai tipis di tepi panel agar terlihat hidup, tetapi jangan mencolok.

### Hindari

- neon terang,
- glow berlebihan,
- warna terlalu gelap,
- saturasi terlalu tinggi,
- biru kristal terlalu tajam.

---

## Struktur Dialog Box

Dialog box berada di bagian bawah layar dan terdiri dari beberapa bagian utama:

1. panel utama dialog,
2. name tag karakter,
3. area teks,
4. next indicator,
5. choice box.

---

## 25.1 Panel Utama Dialog

Panel utama adalah area terbesar yang menampung teks dialog.

### Ciri-ciri panel utama

- berbentuk horizontal lebar,
- sudut membulat,
- tinggi cukup untuk 2–4 baris dialog,
- ada padding yang lega,
- tidak terlalu banyak ornamen,
- tekstur lembut dan bersih.

### Fungsi desain

Panel utama harus memberi kesan:

- aman untuk membaca,
- tidak melelahkan mata,
- tidak menutupi layar terlalu banyak,
- tetap terasa fantasy.

### Arah desain

- Bagian tengah panel relatif bersih.
- Aksen visual cukup diletakkan di tepi atau pojok.
- Jangan memenuhi area teks dengan pattern atau ornamen.

---

## 25.2 Name Tag

Name tag berada di kiri atas area dialog.

### Fungsi

Menampilkan nama karakter yang sedang berbicara, seperti:

- Nara
- Aegis Verita
- Veda
- Luma
- Sthira
- Nihil

### Bentuk name tag

Name tag dibuat sebagai panel kecil sederhana, misalnya:

- plat batu halus,
- label fantasy ringan,
- panel kaca buram kecil,
- gulungan kecil modern bergaya fantasy.

### Karakter name tag

- sederhana,
- elegan,
- mudah dibaca,
- sedikit berbeda dari box utama, tetapi tetap satu gaya.

### Hindari

- terlalu besar,
- terlalu kristal,
- terlalu banyak ornamen,
- bentuk terlalu tajam,
- glow berlebihan.

---

## 25.3 Area Teks Dialog

Area teks adalah bagian paling penting dalam dialog box.

### Karakter area teks

- luas,
- kosong,
- bersih,
- tidak tertutup ornamen,
- nyaman untuk dialog panjang.

### Teks

Gunakan warna teks seperti:

- putih hangat,
- putih kebiruan,
- atau abu sangat terang.

Gunakan font yang:

- sederhana,
- jelas,
- nyaman dibaca,
- tidak dekoratif berlebihan.

### Hindari font

- terlalu tipis,
- terlalu rumit,
- terlalu ornamental,
- terlalu bergaya tulisan tangan,
- sulit dibaca di ukuran kecil.

---

## 25.4 Next Indicator

Next indicator berada di pojok kanan bawah dialog box.

### Fungsi

Menunjukkan bahwa pemain bisa melanjutkan dialog.

### Bentuk yang disarankan

- panah kecil,
- titik cahaya kecil,
- simbol diamond sederhana,
- atau ikon fantasy minimal.

### Animasi

Animasi cukup berupa:

- kedip halus,
- gerakan naik-turun kecil,
- atau fade lembut.

### Hindari

- glow besar,
- animasi terlalu cepat,
- efek terlalu mencolok,
- simbol besar yang mengganggu teks.

---

## 25.5 Choice Box

Choice box digunakan untuk pilihan dialog pemain.

Semua pilihan harus dibuat **netral**, sehingga pemain tidak langsung tahu mana jawaban benar atau salah.

### Karakter choice box

- bentuk sederhana,
- ukuran seragam,
- warna seragam,
- jarak antar pilihan rapi,
- mudah di-hover atau dipilih.

### Warna choice box

Gunakan warna seperti:

- biru transparan,
- abu kebiruan,
- ungu lembut,
- putih kebiruan lembut.

### Hover State

Saat hover:

- border sedikit lebih terang,
- ada highlight lembut,
- atau sedikit perubahan brightness.

### Selected State

Saat dipilih:

- panel sedikit lebih terang,
- border emas tipis atau putih terang,
- tetap netral dan tidak terlalu dramatis.

### Disabled State

Saat nonaktif:

- opacity lebih rendah,
- warna lebih pucat,
- tetapi tetap terbaca.

### Hindari

- warna hijau untuk benar,
- warna merah untuk salah,
- ikon centang atau silang,
- efek yang membuat pilihan terasa “diarahkan”.

---

## 25.6 Modular Asset yang Harus Dibuat

Dialog system harus dibuat modular agar mudah dipakai ulang.

### Asset modular

Buat asset berikut:

- dialog box kosong,
- name tag kosong,
- choice box kosong,
- next indicator,
- hover state,
- selected state,
- disabled state.

### Format asset

- PNG transparan

### Kegunaan modular asset

Dengan sistem modular, developer bisa:

- mengganti teks secara dinamis,
- mengganti nama karakter,
- memunculkan pilihan dialog,
- menyesuaikan hover/selected state,
- memakai UI yang konsisten di semua chapter.

---

## 25.7 State Visual

Untuk kebutuhan implementasi UI, dialog box dan choice box perlu memiliki beberapa state visual.

### State utama

#### Default State
Tampilan normal untuk dialog box dan choice box.

#### Hover State
Dipakai saat kursor diarahkan ke choice box.

#### Selected State
Dipakai saat pemain memilih pilihan tertentu.

#### Disabled State
Dipakai untuk pilihan yang belum bisa diakses atau saat tombol tidak aktif.

### Arah visual state

Perubahan state harus halus dan elegan.

Gunakan perubahan seperti:

- brightness ringan,
- opacity,
- border tipis,
- glow lembut sangat kecil.

Hindari perubahan yang terlalu keras atau terlalu arcade.

---

## 25.8 Kesesuaian dengan Gaya Game

Dialog box harus selaras dengan identitas visual **Nawa Chronicles of Ethica**, yaitu:

- magical,
- clean,
- elegant,
- soft fantasy,
- teen-friendly.

Dialog box juga harus mendukung sistem sprite karakter dan dialog yang panjang tanpa membuat pemain lelah membaca.

Desain akhir harus terasa:

- fantasy,
- clean,
- soft,
- elegant,
- readable,
- not too crystal,
- not too glowing,
- not too dark,
- suitable for visual novel adventure game.

---

## 25.9 Prompt Desain Dialog Box

Buat desain dialog box visual novel untuk game **Nawa Chronicles of Ethica** dengan gaya **soft fantasy UI**, clean, elegan, readable, dan cocok untuk remaja. Dialog box berada di bagian bawah layar, berbentuk panel horizontal lebar dengan sudut membulat. Desainnya tidak boleh terlalu kristal, tidak terlalu berkilau, dan tidak terlalu ramai.

Gunakan material visual seperti kaca buram lembut, batu magis halus, atau panel fantasy semi-transparan. Kristal hanya boleh menjadi aksen kecil di sudut atau border, bukan elemen utama. Warna utama menggunakan biru keabu-abuan transparan, putih lembut, ungu pucat, abu kebiruan, dan aksen emas tipis. Tambahkan glow sangat lembut hanya di bagian tepi, tidak neon dan tidak mencolok.

Di dalam dialog box, sediakan:

- name tag di kiri atas untuk nama karakter,
- area teks utama yang luas dan bersih,
- next indicator kecil di kanan bawah,
- choice box untuk pilihan dialog.

Name tag dibuat sederhana seperti label batu halus, plat fantasy, atau panel kaca buram kecil. Area teks harus mudah dibaca dan tidak tertutup ornamen. Choice box harus tampil netral, dengan ukuran dan warna yang sama untuk semua pilihan. Jangan gunakan warna hijau untuk benar atau merah untuk salah. Hover cukup diberi border lebih terang atau highlight lembut.

Buat asset modular:

- dialog box kosong,
- name tag kosong,
- choice box kosong,
- next indicator,
- hover state,
- selected state,
- disabled state,
- PNG transparan.

Gaya akhir harus terasa fantasy, clean, soft, elegant, readable, not too crystal, not too glowing, not too dark, and suitable for visual novel adventure game.

---

## 25.10 Negative Prompt Desain Dialog Box

Jangan buat terlalu kristal, jangan terlalu neon, jangan terlalu glowing, jangan terlalu gelap, jangan terlalu ramai, jangan seperti UI sci-fi, jangan seperti aplikasi modern biasa, jangan memakai font sulit dibaca, jangan terlalu banyak ornamen, jangan membuat pilihan terlihat benar/salah, jangan memakai efek cahaya berlebihan.

---

## 25.11 Prompt Implementasi untuk AI Coding

Buat sistem UI dialog visual novel untuk **Nawa Chronicles of Ethica** dengan dialog box di bagian bawah layar. Gunakan gaya soft fantasy UI yang clean, elegan, mudah dibaca, dan cocok untuk remaja. Dialog box harus mendukung komponen modular berupa panel utama, name tag, area teks, next indicator, dan choice box.

Panel utama berbentuk horizontal lebar dengan sudut membulat, menggunakan tampilan semi-transparan seperti kaca buram lembut atau batu magis halus. Warna utama menggunakan biru keabu-abuan transparan, putih lembut, ungu pucat, abu kebiruan, dan aksen emas tipis. Tambahkan glow lembut di pinggir panel secukupnya saja. Jangan buat terlalu kristal, terlalu neon, atau terlalu ramai.

Name tag berada di kiri atas dialog box dan harus bisa menampilkan nama karakter secara dinamis. Area teks harus luas dan bersih untuk menampilkan dialog panjang. Next indicator berada di kanan bawah dan memiliki animasi kecil yang halus. Choice box harus tampil netral, semua pilihan memiliki bentuk dan warna yang sama, dengan hover state berupa border lebih terang atau highlight lembut. Jangan gunakan kode warna yang membuat pemain langsung tahu pilihan benar atau salah.

Sediakan state visual untuk:

- default,
- hover,
- selected,
- disabled.

Gunakan sistem modular agar asset PNG transparan untuk dialog box, name tag, choice box, next indicator, dan state lainnya bisa dipakai ulang dengan mudah di seluruh game.