# Kerangka Slide Presentasi
## DBMS — Perangkat Lunak Basis Data

---

### SLIDE 1 — COVER
**Judul:** Mengenal DBMS
**Subjudul:** Perangkat Lunak untuk Mengelola Basis Data
**Keterangan:** Mata Pelajaran Informatika | Kelas X

<<img: create an image of a sleek server room with glowing blue lights and digital data streams flowing between servers, modern futuristic style illustration, aspect ratio 4:3>>

---

### SLIDE 2 — CAPAIAN PEMBELAJARAN
**Judul:** Apa yang Akan Kamu Pelajari?

Setelah mengikuti pembelajaran ini, kamu diharapkan mampu:

- ✅ Menjelaskan pengertian **DBMS**
- ✅ Menyebutkan dan menjelaskan **fungsi-fungsi DBMS**
- ✅ Membedakan **jenis-jenis DBMS** berdasarkan karakteristiknya
- ✅ Menyebutkan **contoh software DBMS** yang populer
- ✅ Memilih DBMS yang tepat untuk kebutuhan tertentu

---

### SLIDE 3 — REVIEW MATERI SEBELUMNYA
**Judul:** Ingat Materi Sebelumnya?

Kita sudah belajar bahwa basis data adalah kumpulan data yang tersimpan secara terstruktur. Tapi...

> ❓ **Siapa yang mengatur, menyimpan, dan mengelola basis data itu?**

Jawabannya: **DBMS!**

Basis data ibarat sebuah **perpustakaan besar** — dan DBMS adalah **pustakawannya** yang mengatur semua buku agar bisa dicari, dipinjam, dan dikembalikan dengan tertib.

<<img: create an image of a friendly librarian organizing books in a vast modern library, warm lighting, flat illustration style, aspect ratio 4:3>>

---

### SLIDE 4 — APA ITU DBMS?
**Judul:** Pengertian DBMS

**DBMS** *(Database Management System)* adalah perangkat lunak yang digunakan untuk **membuat, mengelola, dan mengakses** basis data secara terstruktur dan efisien.

Dengan DBMS, pengguna dan aplikasi tidak perlu tahu cara data disimpan secara teknis di dalam komputer — cukup minta data apa yang dibutuhkan, dan DBMS yang akan mengurusnya.

**Singkatnya:**
> DBMS = "Perantara" antara pengguna dan data yang tersimpan.

---

### SLIDE 5 — FUNGSI DBMS (BAGIAN 1)
**Judul:** Fungsi DBMS — Bagian 1

**1. 📥 Menyimpan Data**
DBMS menyimpan data secara terstruktur ke dalam tabel-tabel sehingga mudah diatur dan diakses kembali.

**2. 🔍 Mengambil Data (Query)**
Pengguna bisa meminta data tertentu menggunakan perintah khusus. Contoh: "Tampilkan semua siswa kelas X-A." DBMS akan langsung mencari dan menampilkan hasilnya.

**3. ✏️ Mengubah dan Menghapus Data**
Data yang sudah tersimpan dapat diperbarui atau dihapus kapan saja melalui DBMS tanpa harus membuka file satu per satu.

<<img: create an image of a computer screen displaying a clean database query interface with rows of data being filtered, modern UI flat illustration style, aspect ratio 3:4>>

---

### SLIDE 6 — FUNGSI DBMS (BAGIAN 2)
**Judul:** Fungsi DBMS — Bagian 2

**4. 🔐 Keamanan Data**
DBMS mengatur siapa saja yang boleh melihat, mengubah, atau menghapus data. Setiap pengguna diberikan hak akses yang berbeda sesuai perannya.

**5. 🔄 Mencegah Duplikasi Data**
DBMS memastikan data yang sama tidak tersimpan berulang kali, sehingga basis data tetap bersih dan efisien.

**6. 💾 Pemulihan Data (Backup & Recovery)**
Jika terjadi kerusakan atau kesalahan, DBMS mampu memulihkan data ke kondisi sebelumnya menggunakan sistem cadangan *(backup)*.

---

### SLIDE 7 — RANGKUMAN FUNGSI DBMS
**Judul:** Rangkuman 6 Fungsi Utama DBMS

| **No** | **Fungsi** | **Manfaat** |
|---|---|---|
| 1 | Menyimpan Data | Data tersimpan rapi dan terstruktur |
| 2 | Mengambil Data | Pencarian data cepat dan akurat |
| 3 | Mengubah/Menghapus Data | Data selalu up-to-date |
| 4 | Keamanan Data | Hanya pengguna berwenang yang bisa akses |
| 5 | Mencegah Duplikasi | Data tidak ganda / redundan |
| 6 | Backup & Recovery | Data aman meski terjadi kerusakan |

---

### SLIDE 8 — JENIS DBMS: PENGANTAR
**Judul:** Jenis-Jenis DBMS

DBMS tidak hanya satu jenis — ada beberapa jenis DBMS yang dikembangkan untuk kebutuhan yang berbeda-beda.

Secara umum, DBMS dibagi menjadi **4 jenis utama:**

1. 🗂️ **DBMS Relasional** *(Relational DBMS / RDBMS)*
2. 📄 **DBMS Berbasis Dokumen**
3. 🔑 **DBMS Key-Value**
4. 🕸️ **DBMS Berbasis Graf**

> Jenis yang paling umum digunakan dan dipelajari di sekolah adalah **RDBMS**.

<<img: create an image of four different types of database structures shown as icons in a clean grid layout, minimal flat design infographic style, aspect ratio 4:3>>

---

### SLIDE 9 — JENIS 1: RDBMS
**Judul:** DBMS Relasional (RDBMS)

RDBMS adalah jenis DBMS yang menyimpan data dalam bentuk **tabel-tabel yang saling berhubungan** *(berelasi)*.

**Ciri-ciri:**
- Data disimpan dalam tabel (baris & kolom)
- Antar tabel bisa dihubungkan menggunakan **kunci** *(key)*
- Menggunakan bahasa **SQL** *(Structured Query Language)* untuk mengolah data

**Contoh software:**
`MySQL` | `PostgreSQL` | `Microsoft SQL Server` | `Oracle`

**Cocok untuk:** Aplikasi sekolah, toko online, perbankan, rumah sakit.

<<img: create an image of two database tables connected by a line showing a relationship between student and grades tables, clean educational diagram style, aspect ratio 4:3>>

---

### SLIDE 10 — JENIS 2: DBMS BERBASIS DOKUMEN
**Judul:** DBMS Berbasis Dokumen

DBMS berbasis dokumen menyimpan data bukan dalam tabel, melainkan dalam bentuk **dokumen** — biasanya berformat JSON atau XML yang fleksibel.

**Ciri-ciri:**
- Tidak memiliki struktur tabel yang kaku
- Setiap data bisa memiliki format yang berbeda-beda
- Sangat cocok untuk data yang tidak seragam

**Contoh software:**
`MongoDB` | `CouchDB` | `Firebase Firestore`

**Cocok untuk:** Aplikasi mobile, media sosial, katalog produk e-commerce.

---

### SLIDE 11 — JENIS 3 & 4: KEY-VALUE & GRAF
**Judul:** DBMS Key-Value & Berbasis Graf

**🔑 DBMS Key-Value**
Menyimpan data dalam pasangan **kunci → nilai**, seperti kamus/dictionary. Sangat cepat untuk pencarian data sederhana.

- Contoh: `Redis`, `Amazon DynamoDB`
- Cocok untuk: Penyimpanan sesi login, cache aplikasi, keranjang belanja sementara.

---

**🕸️ DBMS Berbasis Graf**
Menyimpan data sebagai **simpul (node) dan relasi (edge)**, seperti peta jaringan. Sangat baik untuk data yang penuh hubungan kompleks.

- Contoh: `Neo4j`, `Amazon Neptune`
- Cocok untuk: Jaringan pertemanan media sosial, peta jalan, rekomendasi produk.

---

### SLIDE 12 — PERBANDINGAN JENIS DBMS
**Judul:** Perbandingan Jenis DBMS

| **Jenis** | **Struktur Data** | **Contoh Software** | **Cocok Untuk** |
|---|---|---|---|
| Relasional | Tabel | MySQL, PostgreSQL | Sistem sekolah, bank |
| Dokumen | JSON/XML | MongoDB, Firebase | Aplikasi mobile |
| Key-Value | Kunci → Nilai | Redis, DynamoDB | Cache, sesi login |
| Graf | Node & Edge | Neo4j | Media sosial, peta |

---

### SLIDE 13 — FOKUS: SOFTWARE DBMS POPULER
**Judul:** Mengenal Software DBMS yang Populer

Mari kita kenali lebih dekat beberapa DBMS yang paling banyak digunakan di dunia nyata:

<<img: create an image of logos and icons of popular database software like MySQL, PostgreSQL, MongoDB, and SQLite arranged in a clean grid on a white background, flat icon design style, aspect ratio 4:3>>

---

### SLIDE 14 — PROFIL DBMS POPULER
**Judul:** Profil Software DBMS Populer

| **Software** | **Jenis** | **Kelebihan** | **Siapa yang Pakai** |
|---|---|---|---|
| **MySQL** | Relasional | Gratis, mudah dipelajari | Website, sekolah, UMKM |
| **PostgreSQL** | Relasional | Canggih, mendukung data kompleks | Perusahaan besar |
| **SQLite** | Relasional | Ringan, tidak butuh server | Aplikasi mobile, IoT |
| **MongoDB** | Dokumen | Fleksibel, cocok data tidak seragam | Startup, media sosial |
| **Redis** | Key-Value | Sangat cepat | Aplikasi real-time |

---

### SLIDE 15 — CARA KERJA DBMS
**Judul:** Bagaimana DBMS Bekerja?

Berikut alur sederhana bagaimana DBMS bekerja saat kamu meminta data:

```
[Pengguna / Aplikasi]
        ↓  "Tampilkan nilai Budi"
    [DBMS]
        ↓  Memproses permintaan
  [Basis Data]
        ↓  Mengambil data yang diminta
    [DBMS]
        ↓  Menampilkan hasil
[Pengguna / Aplikasi]
```

> DBMS bertindak sebagai **penerjemah dan pengatur lalu lintas** antara pengguna dan data.

<<img: create an image of a simple flowchart showing user sending a request to DBMS which retrieves data from database and returns results, clean diagram style on white background, aspect ratio 3:4>>

---

### SLIDE 16 — DBMS VS TANPA DBMS
**Judul:** Pakai DBMS vs Tidak Pakai DBMS

| | **Tanpa DBMS** | **Dengan DBMS** |
|---|---|---|
| Penyimpanan | File terpisah (Excel, txt) | Terpusat dan terstruktur |
| Pencarian Data | Manual, lambat | Otomatis, cepat |
| Keamanan | Tidak ada kontrol akses | Hak akses teratur |
| Duplikasi Data | Sering terjadi | Dikontrol secara otomatis |
| Banyak Pengguna | Sulit diakses bersama | Bisa diakses banyak orang sekaligus |
| Pemulihan Data | Sulit / tidak bisa | Ada fitur backup & recovery |

> Dengan DBMS, pengelolaan data menjadi **jauh lebih aman, cepat, dan efisien**.

---

### SLIDE 17 — KESIMPULAN
**Judul:** Kesimpulan

Hari ini kamu telah belajar bahwa:

- 🖥️ **DBMS** adalah perangkat lunak untuk membuat, mengelola, dan mengakses basis data
- ⚙️ **6 fungsi utama DBMS:** menyimpan, mengambil, mengubah data, menjaga keamanan, mencegah duplikasi, dan pemulihan data
- 🗂️ Ada **4 jenis DBMS:** Relasional, Dokumen, Key-Value, dan Graf
- 🏆 **RDBMS** adalah jenis yang paling umum digunakan, dengan contoh seperti MySQL dan PostgreSQL
- 🔁 DBMS bekerja sebagai **perantara** antara pengguna dan data

---

### SLIDE 18 — KUIS SINGKAT (1/3)
**Judul:** 🧠 Kuis — Soal 1

**Apa kepanjangan dari DBMS dan apa fungsi utamanya?**

- A. Data Build Management System — untuk membangun jaringan komputer
- B. Database Management System — untuk membuat, mengelola, dan mengakses basis data
- C. Database Management System — untuk merancang tampilan aplikasi
- D. Data Backup Management System — untuk mencadangkan file komputer

> *(Pikirkan jawabanmu sebelum melihat halaman berikutnya!)*

---

### SLIDE 19 — KUIS SINGKAT (2/3)
**Judul:** 🧠 Kuis — Soal 2

Sebuah sekolah ingin menyimpan data siswa, nilai, dan absensi dalam satu sistem yang saling terhubung. Jenis DBMS yang paling tepat digunakan adalah...

- A. DBMS Berbasis Graf, karena data sekolah sangat kompleks
- B. DBMS Key-Value, karena data sekolah sederhana dan cepat diakses
- C. DBMS Relasional, karena data disimpan dalam tabel yang saling berelasi
- D. DBMS Berbasis Dokumen, karena data sekolah tidak seragam

> *(Pikirkan jawabanmu sebelum melihat halaman berikutnya!)*

---

### SLIDE 20 — KUIS SINGKAT (3/3)
**Judul:** 🧠 Kuis — Soal 3 & Penutup

**Di bawah ini yang BUKAN merupakan fungsi dari DBMS adalah...**

- A. Menjaga keamanan data dengan mengatur hak akses pengguna
- B. Mencegah terjadinya duplikasi data dalam basis data
- C. Mengubah tampilan grafis antarmuka aplikasi menjadi lebih menarik
- D. Memulihkan data yang hilang melalui fitur backup & recovery

> *(Pikirkan jawabanmu!)*

---

**Jawaban Kuis (Tidak perlu ditampilkan di slide):**
| Soal | Jawaban | Alasan Singkat |
|---|---|---|
| Soal 1 | **B** | DBMS = Database Management System, fungsi utamanya mengelola basis data |
| Soal 2 | **C** | RDBMS ideal untuk data terstruktur yang saling berelasi seperti data sekolah |
| Soal 3 | **C** | Mengubah tampilan grafis adalah tugas framework/desain UI, bukan DBMS |

*Sampai jumpa di materi berikutnya!* 🎉

### SLIDE 21 — PENUTUP
**Judul:** Terima Kasih

**Ada yang ingin ditanyakan?**

<<img: create an image of happy students celebrating learning achievement with digital database icons floating around them, colorful motivating flat illustration style, aspect ratio 4:3>>

---

## Rekap Penggunaan Gambar

| Slide | Gambar | Keterangan |
|---|---|---|
| Slide 1 | ✅ | Cover |
| Slide 3 | ✅ | Analogi Pustakawan |
| Slide 5 | ✅ | Ilustrasi Query |
| Slide 8 | ✅ | 4 Jenis DBMS |
| Slide 9 | ✅ | Relasi antar Tabel |
| Slide 13 | ✅ | Logo Software DBMS |
| Slide 15 | ✅ | Alur Kerja DBMS |
| Slide 20 | ✅ | Penutup |