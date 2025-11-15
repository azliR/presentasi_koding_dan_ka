BAGIAN 1 – PENGANTAR IF–ELSE

⸻

Slide 1 – Judul Materi

Judul:
Percabangan If–Else di Python

Isi:
• Pada materi ini kita belajar bagaimana membuat program yang bisa mengambil keputusan.
• Kita fokus pada percabangan: if, else, dan elif di Python.
• Setelah materi ini, kamu diharapkan dapat:
• Menjelaskan apa itu percabangan.
• Memahami alur kerja if–else.
• Menulis program sederhana yang menggunakan percabangan.

(Opsional: di bagian atas/bawah, tambahkan ikon sederhana seperti tanda panah bercabang atau ikon “decision”.)

⸻

Slide 2 – Cerita Sehari-hari: Program yang “Mikir”

Judul:
Program yang Bisa “Mikir”

Isi:
• Dalam kehidupan sehari-hari, kita sering mengambil keputusan:
• Jika hujan → pakai jas hujan.
• Jika lapar → cari makanan.
• Jika uang cukup → beli jajan.
• Program juga bisa seperti itu:
• Program memilih tindakan berdasarkan kondisi tertentu.
• Cara membuat program bisa “mikir” seperti ini disebut percabangan.

(Opsional: satu ilustrasi kecil di samping, misalnya orang membawa payung saat hujan.)

⸻

Slide 3 – Apa Itu Percabangan?

Judul:
Apa Itu Percabangan?

Isi:
• Percabangan adalah struktur dalam program untuk:
• Mengecek suatu kondisi.
• Menentukan jalur mana yang akan dijalankan program.
• Jika kondisi benar, program menjalankan satu jalur.
• Jika kondisi salah, program dapat menjalankan jalur lain (misalnya else).
• Tanpa percabangan, program hanya berjalan lurus dari atas ke bawah tanpa pilihan.

(Opsional: diagram sangat sederhana “Mulai → Cek kondisi → Ya / Tidak”.)

⸻

Slide 4 – Bentuk Dasar if di Python

Judul:
Struktur Dasar if di Python

Isi:
• Bentuk umum:

if kondisi:
aksi_yang_dijalankan

    •	Hal penting:
    •	Harus ada tanda titik dua : setelah kondisi.
    •	Baris di dalam if harus menjorok ke dalam (indentasi).
    •	Jika kondisi bernilai benar, semua baris di dalam blok if akan dijalankan.
    •	Jika kondisi bernilai salah, blok if akan dilewati.

(Tidak perlu gambar di slide ini agar fokus ke bentuk kode.)

⸻

Slide 5 – Contoh if Sederhana

Judul:
Contoh: Cek Kelulusan (Tanpa else)

Isi:

nilai = 80

if nilai >= 75:
print("Lulus")

Penjelasan:
• Variabel nilai berisi angka 80.
• Program mengecek: apakah nilai >= 75?
• Karena 80 lebih besar atau sama dengan 75, kondisinya benar.
• Hasilnya: program mencetak teks Lulus.
• Jika nilai kurang dari 75, program tidak mencetak apa pun (karena tidak ada else).

(Tidak perlu gambar, fokus ke kode dan penjelasan.)

⸻

Slide 6 – Menambahkan else

Judul:
Menambahkan else untuk Kondisi Lain

Isi:
• Kadang kita ingin program melakukan sesuatu jika syarat tidak terpenuhi.
• Untuk itu, kita menggunakan else.
• Bentuk umum:

if kondisi:
aksi_jika_benar
else:
aksi_jika_salah

    •	Dengan else, selalu ada salah satu aksi yang dijalankan:
    •	Entah aksi di dalam if, atau aksi di dalam else.

(Tidak perlu gambar, cukup teks dan contoh.)

⸻

Slide 7 – Contoh Lengkap if–else

Judul:
Contoh: Lulus atau Tidak Lulus

Isi:

nilai = 60

if nilai >= 75:
print("Lulus")
else:
print("Tidak lulus")

Penjelasan:
• Program mengecek: nilai >= 75.
• Dengan nilai = 60, kondisi tersebut salah.
• Karena kondisi salah, baris di dalam if dilewati.
• Program masuk ke blok else dan mencetak Tidak lulus.
• Dalam satu rangkaian if–else, hanya satu blok yang dijalankan.

(Tidak perlu gambar, fokus ke alur kode.)

⸻

Slide 8 – Indentasi di Python

Judul:
Indentasi: Penanda Blok Kode di Python

Isi:
• Bahasa lain biasanya memakai { dan } untuk menandai blok kode.
• Python menggantinya dengan indentasi (spasi/tab di awal baris).
• Aturan:
• Semua baris yang termasuk dalam blok if, elif, atau else harus mempunyai indentasi yang sama.
• Jika indentasi tidak konsisten, Python akan mengeluarkan error.
• Contoh benar:

if nilai >= 75:
print("Lulus")
print("Selamat!")

(Opsional: kecil saja, tampilkan juga contoh salah dengan tanda silang di catatan / bagian bawah.)

⸻

BAGIAN 2 – elif DAN INPUT

⸻

Slide 9 – Percabangan Bertingkat dengan elif

Judul:
Percabangan Bertingkat: elif

Isi:
• Jika pilihan hanya dua, kita cukup pakai if dan else.
• Jika pilihan lebih dari dua, kita bisa menambah elif.
• Bentuk umum:

if kondisi1:
aksi1
elif kondisi2:
aksi2
else:
aksi_lain

    •	Program mengecek kondisi dari atas ke bawah:
    •	Jika kondisi1 sudah benar, kondisi2 dan else tidak diperiksa lagi.

(Opsional: diagram kecil dengan beberapa kotak “Jika kondisinya…”.)

⸻

Slide 10 – Contoh elif: Menentukan Grade

Judul:
Contoh: Menentukan Grade Nilai

Isi:

nilai = 82

if nilai >= 90:
print("Grade A")
elif nilai >= 80:
print("Grade B")
elif nilai >= 70:
print("Grade C")
elif nilai >= 60:
print("Grade D")
else:
print("Grade E")

Penjelasan:
• Nilai 82 tidak memenuhi syarat >= 90, jadi if pertama dilewati.
• Nilai 82 memenuhi syarat >= 80, jadi program mencetak Grade B.
• Kondisi di bawahnya (>= 70, >= 60, else) tidak diperiksa lagi.

(Tidak perlu gambar, fokus ke tabel logika di penjelasan verbal.)

⸻

Slide 11 – Mengambil Input dari Pengguna

Judul:
Mengambil Input dan Menggunakan If–Else

Isi:
• Program bisa meminta data dari pengguna menggunakan fungsi input().
• Data yang dibaca dari input() berupa teks (string).
• Jika ingin membandingkan sebagai angka, gunakan int() untuk mengubahnya menjadi bilangan bulat.
• Contoh:

nilai = int(input("Masukkan nilai kamu: "))

if nilai >= 75:
print("Lulus")
else:
print("Tidak lulus")

(Tidak perlu gambar, fokus ke alur input–proses–output.)

⸻

Slide 12 – Contoh: Ganjil atau Genap

Judul:
Program Cek Ganjil / Genap

Isi:

angka = int(input("Masukkan sebuah angka: "))

if angka % 2 == 0:
print("Angka genap")
else:
print("Angka ganjil")

Penjelasan:
• Operator % menghasilkan sisa hasil bagi.
• Jika angka % 2 == 0, berarti angkanya habis dibagi 2 → genap.
• Jika tidak sama dengan 0, berarti angkanya ganjil.

(Tidak perlu gambar, siswa fokus ke contoh perhitungan.)

⸻

BAGIAN 3 – STUDI KASUS & LATIHAN

⸻

Slide 13 – Studi Kasus: Login Sederhana

Judul:
Studi Kasus 1: Program Login Sederhana

Isi:

username = input("Masukkan username: ")
password = input("Masukkan password: ")

if username == "admin" and password == "1234":
print("Login berhasil")
else:
print("Username atau password salah")

Penjelasan:
• Jika username dan password keduanya sesuai, program mencetak “Login berhasil”.
• Kalau salah satu saja berbeda, program mencetak “Username atau password salah”.
• Konsep ini mirip proses login di aplikasi atau website pada umumnya.

(Opsional: ikon kecil “login” atau “kunci” di samping, tidak perlu ilustrasi besar.)

⸻

Slide 14 – Studi Kasus: Diskon di Toko

Judul:
Studi Kasus 2: Program Diskon Toko

Isi:

total = int(input("Total belanja: "))

if total >= 100000:
diskon = total \* 10 / 100
total_bayar = total - diskon
print("Mendapat diskon 10%")
print("Total yang harus dibayar:", total_bayar)
else:
print("Tidak ada diskon")
print("Total yang harus dibayar:", total)

Penjelasan:
• Jika total belanja minimal 100.000, pelanggan mendapat diskon 10%.
• Jika kurang dari 100.000, tidak ada diskon.
• Ini contoh penggunaan if–else yang dekat dengan kehidupan sehari-hari.

(Opsional: ikon kecil keranjang belanja di pojok, tidak mengganggu area kode.)

⸻

Slide 15 – Studi Kasus: Biaya Parkir

Judul:
Studi Kasus 3: Menghitung Biaya Parkir

Isi:
Aturan biaya parkir:
• 2 jam pertama: Rp 5.000.
• Setiap jam berikutnya: + Rp 2.000 per jam.

Kode:

jam = int(input("Lama parkir (jam): "))

if jam <= 2:
biaya = 5000
else:
biaya = 5000 + (jam - 2) \* 2000

print("Biaya parkir:", biaya)

Penjelasan singkat:
• Jika jam kurang dari atau sama dengan 2, langsung 5.000.
• Jika lebih dari 2, hitung tambahan (jam - 2) \* 2000, lalu ditambah 5.000.

(Opsional: ikon kecil parkir “P”, tanpa ilustrasi besar.)

⸻

Slide 16 – Latihan Mandiri untuk Siswa

Judul:
Latihan Mandiri

Isi:
Minta siswa membuat program berikut: 1. Program Kategori Umur
• Program meminta input: umur.
• Jika umur < 13 → tampilkan “Anak-anak”.
• Jika umur 13–17 → tampilkan “Remaja”.
• Jika umur ≥ 18 → tampilkan “Dewasa”.
• Gunakan if, elif, dan else. 2. Program Salam Berdasarkan Jam
• Program meminta input: jam (0–23).
• 0–11 → tampilkan “Selamat pagi”.
• 12–17 → tampilkan “Selamat siang”.
• 18–23 → tampilkan “Selamat malam”.

(Slide ini cukup teks, agar instruksi latihan jelas.)

⸻

Slide 17 – Kesalahan yang Sering Terjadi

Judul:
Kesalahan Umum Saat Menggunakan If–Else

Isi:
• Lupa menulis tanda titik dua : setelah if, elif, atau else.
• Indentasi tidak konsisten:
• Misalnya, baris pertama pakai 4 spasi, baris kedua pakai tab.
• Menggunakan = saat seharusnya == ketika membandingkan nilai.
• Lupa mengonversi input menjadi int saat membandingkan angka.
• Menaruh baris yang seharusnya di dalam blok, tetapi indentasinya sejajar dengan luar blok.

(Opsional: satu contoh error pendek, misalnya IndentationError atau SyntaxError, dengan highlight kecil.)

⸻

Slide 18 – Rangkuman Akhir

Judul:
Rangkuman If–Else di Python

Isi:
• if digunakan untuk menjalankan kode jika kondisi benar.
• else digunakan untuk menjalankan kode ketika kondisi pada if tidak terpenuhi.
• elif digunakan untuk menangani lebih dari dua kemungkinan kondisi.
• Python menggunakan indentasi, bukan {} untuk blok kode.
• Percabangan digunakan di banyak program:
• Login, perhitungan diskon, tarif parkir, kategori umur, dan lain-lain.

(Opsional: peta konsep kecil “if → else → elif → contoh nyata”.)
