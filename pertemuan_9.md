# Kerangka Slide Presentasi
## Konsep & Struktur Basis Data

---

### SLIDE 1 — COVER
**Judul:** Konsep & Struktur Basis Data
**Subjudul:** Mengenal Data, Basis Data, dan Strukturnya
**Keterangan:** Mata Pelajaran Informatika

<<img: a clean modern classroom with a digital whiteboard showing a database diagram, bright and welcoming atmosphere, flat illustration style, aspect ratio 4:3>>

---

### SLIDE 2 — CAPAIAN PEMBELAJARAN
**Judul:** Apa yang Akan Kamu Pelajari?

Setelah mengikuti pembelajaran ini, kamu diharapkan mampu:

- ✅ Menjelaskan pengertian **data** dan **basis data**
- ✅ Membedakan data mentah dengan informasi
- ✅ Menyebutkan contoh basis data dalam kehidupan sehari-hari
- ✅ Mengidentifikasi struktur basis data: **tabel, field, dan record**

---

### SLIDE 3 — APA ITU DATA?
**Judul:** Apa Itu Data?

**Definisi:**
Data adalah kumpulan fakta mentah yang belum diolah dan belum memiliki makna tersendiri.

**Contoh data mentah:**
- `081234567890`
- `17-08-2006`
- `Budi`
- `85`

> 💡 Data baru menjadi **informasi** ketika sudah diolah dan punya konteks. Contoh: "Nilai Matematika Budi adalah 85."

<<img: raw numbers and text floating in the air transforming into organized information charts, conceptual digital art style, aspect ratio 4:3>>

---

### SLIDE 4 — DATA VS INFORMASI
**Judul:** Bedanya Data dan Informasi

| | **Data** | **Informasi** |
|---|---|---|
| **Bentuk** | Mentah, belum diolah | Sudah diolah |
| **Makna** | Belum jelas | Memiliki arti |
| **Contoh** | `85`, `Budi`, `X-A` | "Budi dari kelas X-A mendapat nilai 85" |
| **Kegunaan** | Bahan baku | Bahan keputusan |

---

### SLIDE 5 — APA ITU BASIS DATA?
**Judul:** Apa Itu Basis Data?

Basis data (database) adalah **kumpulan data yang terorganisir**, disimpan secara sistematis, dan dapat diakses serta dikelola dengan mudah.

Bayangkan basis data seperti **lemari arsip digital** — semua dokumen tersimpan rapi, berlabel, dan mudah dicari kapan saja.

Basis data dikelola oleh perangkat lunak khusus yang disebut **DBMS** *(Database Management System)*.

<<img: a well-organized digital filing cabinet with colorful labeled folders glowing on a clean desk, minimal flat design illustration, aspect ratio 3:4>>

---

### SLIDE 6 — MENGAPA BASIS DATA PENTING?
**Judul:** Mengapa Kita Butuh Basis Data?

Tanpa basis data, data akan:
- 🗂️ Tersebar dan tidak terorganisir
- 🔁 Mudah ganda / duplikat
- 🔍 Susah dicari saat dibutuhkan
- ❌ Rentan hilang atau salah

Dengan basis data, data menjadi:
- ✅ Terstruktur dan rapi
- ✅ Mudah dicari dan diperbarui
- ✅ Aman dan terpusat
- ✅ Bisa digunakan banyak orang sekaligus

---

### SLIDE 7 — BASIS DATA DI SEKITAR KITA
**Judul:** Basis Data Ada di Mana-Mana!

Tanpa sadar, kita berinteraksi dengan basis data setiap hari:

| **Tempat** | **Data yang Disimpan** |
|---|---|
| 🏫 Sekolah | Data siswa, nilai, absensi |
| 🏥 Rumah Sakit | Data pasien, rekam medis |
| 🏦 Bank | Data nasabah, transaksi |
| 🛒 Toko Online | Data produk, pesanan, pelanggan |
| 📱 Media Sosial | Data profil, postingan, pertemanan |

<<img: icons of school, hospital, bank, online store, and social media connected to a central database server, flat icon style illustration, aspect ratio 4:3>>

---

### SLIDE 8 — STRUKTUR BASIS DATA
**Judul:** Struktur Basis Data

Basis data tersusun dari tiga komponen utama:

```
BASIS DATA
└── TABEL
    ├── FIELD (Kolom)
    └── RECORD (Baris)
```

Ketiga komponen ini bekerja bersama untuk menyimpan dan mengorganisir data secara terstruktur. Mari kita pelajari satu per satu!

<<img: a clean visual diagram showing database containing tables with rows and columns highlighted, educational infographic style, aspect ratio 4:3>>

---

### SLIDE 9 — KOMPONEN 1: TABEL
**Judul:** Tabel — Wadah Penyimpan Data

**Tabel** adalah struktur utama dalam basis data. Bentuknya seperti tabel di Microsoft Excel — memiliki baris dan kolom.

- Satu basis data bisa terdiri dari **banyak tabel**
- Setiap tabel menyimpan **satu jenis data** tertentu
- Tabel diberi nama sesuai isinya

**Contoh nama tabel:**
`siswa` | `guru` | `nilai` | `mata_pelajaran`

---

### SLIDE 10 — CONTOH TABEL SISWA
**Judul:** Contoh: Tabel `siswa`

| NIS | Nama | Kelas | Alamat |
|---|---|---|---|
| 001 | Budi Santoso | X-A | Jakarta |
| 002 | Ani Rahayu | X-B | Bogor |
| 003 | Dian Pratama | X-A | Depok |

> 👆 Inilah tampilan sebuah **tabel** dalam basis data. Setiap kolom disebut **field**, dan setiap baris disebut **record**.

---

### SLIDE 11 — KOMPONEN 2: FIELD
**Judul:** Field — Kategori / Jenis Data

**Field** adalah **kolom** dalam tabel yang menentukan jenis informasi apa yang disimpan.

| **NIS** | **Nama** | **Kelas** | **Alamat** |
|---|---|---|---|
| *(field)* | *(field)* | *(field)* | *(field)* |
| 001 | Budi Santoso | X-A | Jakarta |

Setiap field memiliki:
- 📌 **Nama** — label/judul kolom (contoh: `Nama`, `Kelas`)
- 📋 **Tipe data** — jenis nilai yang boleh diisi (teks, angka, tanggal, dsb.)

---

### SLIDE 12 — TIPE DATA PADA FIELD
**Judul:** Tipe Data pada Field

| **Tipe Data** | **Keterangan** | **Contoh** |
|---|---|---|
| `TEXT / VARCHAR` | Teks bebas | Nama, Alamat |
| `INTEGER` | Bilangan bulat | Usia, Jumlah |
| `DECIMAL` | Bilangan desimal | Nilai, Harga |
| `DATE` | Tanggal | Tanggal Lahir |
| `BOOLEAN` | Benar/Salah | Status Aktif |

> 💡 Tipe data penting agar data tersimpan dengan benar dan efisien.

---

### SLIDE 13 — KOMPONEN 3: RECORD
**Judul:** Record — Satu Baris Data Lengkap

**Record** adalah **satu baris** dalam tabel yang berisi data lengkap dari satu entitas/objek.

| NIS | Nama | Kelas | Alamat |
|---|---|---|---|
| **001** | **Budi Santoso** | **X-A** | **Jakarta** |
| 002 | Ani Rahayu | X-B | Bogor |

> 👆 Baris yang ditebalkan adalah **satu record** — yaitu data lengkap milik Budi Santoso.

Satu record = satu "orang" / "barang" / "kejadian" yang datanya disimpan.

---

### SLIDE 14 — RINGKASAN: TABEL, FIELD, RECORD
**Judul:** Rangkuman Struktur Basis Data

| **Komponen** | **Analogi** | **Fungsi** |
|---|---|---|
| 🗄️ **Tabel** | Lembar kerja Excel | Menyimpan satu jenis data |
| 📋 **Field** | Judul kolom | Menentukan kategori data |
| 📄 **Record** | Satu baris isi | Menyimpan satu data lengkap |

**Analogi mudah:**
Bayangkan **buku absensi kelas**:
- Buku absensi = **Tabel**
- Kolom (Nama, Hadir, Tanggal) = **Field**
- Satu baris data seorang siswa = **Record**

<<img: an open attendance book with clearly labeled columns and rows, one row highlighted to show a single record, realistic flat illustration style, aspect ratio 4:3>>

---

### SLIDE 15 — CONTOH LENGKAP BASIS DATA SEKOLAH
**Judul:** Contoh: Basis Data Sekolah

Sebuah basis data sekolah bisa memiliki beberapa tabel:

**Tabel `siswa`**
| NIS | Nama | Kelas |
|---|---|---|
| 001 | Budi | X-A |
| 002 | Ani | X-B |

**Tabel `nilai`**
| NIS | Mata Pelajaran | Nilai |
|---|---|---|
| 001 | Matematika | 85 |
| 002 | Informatika | 90 |

> Kedua tabel terhubung melalui kolom **NIS** — inilah kekuatan basis data!

---

### SLIDE 16 — PENUTUP MATERI
**Judul:** Kesimpulan

Hari ini kamu telah belajar bahwa:

- 📌 **Data** adalah fakta mentah; menjadi **informasi** setelah diolah
- 🗄️ **Basis data** adalah kumpulan data yang tersimpan secara terstruktur dan sistematis
- 🏗️ Struktur basis data terdiri dari:
  - **Tabel** → wadah utama data
  - **Field** → kolom / kategori data
  - **Record** → satu baris data lengkap
- 🌍 Basis data digunakan di mana-mana: sekolah, rumah sakit, bank, toko online

---

### SLIDE 17 — KUIS SINGKAT (1/3)
**Judul:** 🧠 Kuis — Soal 1

**Manakah pernyataan yang BENAR tentang data dan informasi?**

- A. Data dan informasi adalah hal yang sama persis
- B. Informasi adalah data yang sudah diolah dan memiliki makna
- C. Data sudah pasti lebih berguna daripada informasi
- D. Informasi tidak memerlukan data untuk terbentuk

> *(Pikirkan jawabanmu sebelum melihat halaman berikutnya!)*

---

### SLIDE 18 — KUIS SINGKAT (2/3)
**Judul:** 🧠 Kuis — Soal 2

Perhatikan tabel berikut:

| NIS | Nama | Kelas |
|---|---|---|
| 001 | Budi | X-A |
| 002 | Ani | X-B |

**Apa yang dimaksud dengan "Record" pada tabel di atas?**

- A. Seluruh isi tabel beserta judulnya
- B. Kolom NIS, Nama, dan Kelas
- C. Satu baris data, misalnya: `001 | Budi | X-A`
- D. Nama tabel yang digunakan

> *(Pikirkan jawabanmu sebelum melihat halaman berikutnya!)*

---

### SLIDE 19 — KUIS SINGKAT (3/3)
**Judul:** 🧠 Kuis — Soal 3

**Di bawah ini yang BUKAN merupakan contoh penggunaan basis data dalam kehidupan sehari-hari adalah...**

- A. Penyimpanan data pasien di rumah sakit
- B. Daftar kontak di ponselmu
- C. Mencetak dokumen menggunakan printer
- D. Transaksi belanja di toko online

> *(Pikirkan jawabanmu sebelum melihat halaman berikutnya!)*

---

### SLIDE 20 — PENUTUP
**Judul:** Terima Kasih! 🎉

**Jawaban Kuis:**
| Soal | Jawaban | Alasan Singkat |
|---|---|---|
| Soal 1 | **B** | Informasi = data + konteks/pengolahan |
| Soal 2 | **C** | Record = satu baris data lengkap |
| Soal 3 | **C** | Mencetak dokumen tidak melibatkan penyimpanan/pengelolaan data |

---

*Sampai jumpa di materi berikutnya!*

*"Data adalah bahan bakar dunia digital — dan kamu baru saja belajar cara menyimpannya dengan benar."*

<<img: cheerful students giving thumbs up in front of a digital classroom screen, bright and motivating illustration style, aspect ratio 4:3>>
