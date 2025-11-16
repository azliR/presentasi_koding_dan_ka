Berikut versi revisi tanpa ide visual, lebih banyak paragraf, bullet point hanya jika memang perlu, dan bagian “Kesalahan Umum” dipecah menjadi beberapa slide, diletakkan sebelum Studi Kasus.

Format tetap slide-per-slide agar bisa langsung dicopas ke HTML slide kamu.

⸻

BAGIAN 1 – PENGANTAR IF–ELSE

⸻

Slide 1 – Judul Materi

Percabangan If–Else di Python

Hari ini kita belajar bagaimana membuat program yang mampu mengambil keputusan secara otomatis. Fokus utama materi ini adalah struktur percabangan: if, else, dan elif pada Python. Setelah mempelajari materi ini, kamu diharapkan memahami apa yang dimaksud dengan percabangan, bagaimana alur kerjanya, dan mampu menulis program sederhana yang menggunakan percabangan.

⸻

Slide 2 – Cerita Sehari-hari: Program yang “Mikir”

Program yang Bisa “Mikir”

Dalam kehidupan sehari-hari, kita selalu membuat keputusan. Ketika hujan kita memakai jas hujan, saat lapar kita mencari makanan, atau saat uang cukup kita membeli sesuatu. Program komputer dapat bekerja dengan cara yang sama. Program dapat memilih tindakan yang berbeda berdasarkan kondisi tertentu. Inilah konsep dasar dari percabangan.

⸻

Slide 3 – Apa Itu Percabangan?

Apa Itu Percabangan?

Percabangan adalah cara bagi program untuk memeriksa sebuah kondisi dan menentukan jalur mana yang akan dijalankan berikutnya. Jika kondisi bernilai benar, program menjalankan jalur tertentu. Jika kondisi salah, program dapat mengambil jalur berbeda. Tanpa percabangan, program hanya berjalan lurus dari atas ke bawah tanpa kemampuan mengambil keputusan.

⸻

Slide 4 – Bentuk Dasar If di Python

Struktur Dasar if di Python

Struktur dasar if di Python ditulis dengan menempatkan kondisi setelah kata kunci if, diikuti tanda titik dua. Baris perintah yang ingin dijalankan harus ditulis menjorok ke dalam sebagai bentuk indentasi. Ketika kondisi bernilai benar, seluruh baris yang berada di dalam blok if akan dijalankan.

if kondisi:
aksi_yang_dijalankan

⸻

Slide 5 – Contoh If Sederhana

Contoh: Cek Kelulusan

nilai = 80

if nilai >= 75:
print("Lulus")

Program mengecek apakah nilai memenuhi syarat kelulusan. Karena nilai 80 lebih besar atau sama dengan 75, program menampilkan “Lulus”. Jika nilai berada di bawah 75, program tidak menampilkan apa pun karena tidak ada perintah di luar blok if.

⸻

Slide 6 – Menambah Else

Menambahkan else

Ketika kita ingin program melakukan tindakan alternatif saat kondisi tidak terpenuhi, kita dapat menggunakan else. Bagian ini akan dijalankan ketika kondisi pada if bernilai salah.

if kondisi:
aksi_jika_benar
else:
aksi_jika_salah

⸻

Slide 7 – Contoh Lengkap If–Else

Contoh: Lulus atau Tidak Lulus

nilai = 60

if nilai >= 75:
print("Lulus")
else:
print("Tidak lulus")

Karena nilai tidak memenuhi batas minimal, program langsung menjalankan bagian else dan menampilkan “Tidak lulus”. Dalam sebuah percabangan if–else, hanya satu bagian yang akan dijalankan.

⸻

Slide 8 – Indentasi: “Kurung Kurawal”-nya Python

Indentasi di Python

Berbeda dengan beberapa bahasa lain yang menggunakan {} untuk menandai blok kode, Python justru menggunakan indentasi. Semua baris di dalam if, elif, atau else harus menjorok ke dalam dengan jumlah spasi atau tab yang sama. Jika indentasi tidak konsisten, Python akan menghasilkan error.

⸻

BAGIAN 1.5 – KESALAHAN UMUM (DIPECAH PER SLIDE)

⸻

Slide 9 – Kesalahan 1: Lupa Menambahkan Tanda Titik Dua

Kesalahan yang sering terjadi adalah lupa menuliskan tanda : setelah if, elif, atau else. Tanpa tanda ini, Python tidak dapat mengenali bahwa sebuah blok kode akan dimulai.

Contoh salah:

if nilai >= 75
print("Lulus")

Contoh benar:

if nilai >= 75:
print("Lulus")

⸻

Slide 10 – Kesalahan 2: Indentasi Tidak Konsisten

Indentasi yang tidak konsisten dapat menyebabkan error karena Python menganggap blok kode tidak sejajar. Misalnya satu baris memakai dua spasi dan baris lain memakai empat spasi.

Contoh salah:

if nilai >= 75:
print("Lulus")
print("Bagus!")

Contoh benar:

if nilai >= 75:
print("Lulus")
print("Bagus!")

⸻

Slide 11 – Kesalahan 3: Menggunakan = Saat Harusnya ==

Operator = digunakan untuk memberi nilai pada variabel, sedangkan == digunakan untuk membandingkan dua nilai. Salah menggunakan operator akan membuat program berjalan tidak sesuai harapan.

Contoh salah:

if nilai = 75:

Contoh benar:

if nilai == 75:

⸻

Slide 12 – Kesalahan 4: Baris Di Luar Blok Karena Indentasi Keliru

Ketika satu baris yang seharusnya berada di dalam blok justru tidak diindentasi dengan benar, Python akan menganggapnya berada di luar blok percabangan.

Contoh salah:

if nilai >= 75:
print("Lulus")
print("Bagus!") # tidak sengaja keluar blok

⸻

Slide 13 – Kesalahan 5: Tidak Mengubah Input Menjadi Angka

input() selalu menghasilkan string. Jika dibandingkan langsung dengan angka, hasilnya salah dan bisa menyebabkan error. Oleh karena itu perlu mengonversinya menggunakan int().

Contoh salah:

nilai = input("Masukkan nilai: ")
if nilai >= 75:
print("Lulus")

Contoh benar:

nilai = int(input("Masukkan nilai: "))
if nilai >= 75:
print("Lulus")

⸻

BAGIAN 2 – ELIF DAN INPUT

⸻

Slide 14 – Percabangan Bertingkat: elif

Menggunakan elif untuk Banyak Pilihan

Jika sebuah percabangan memiliki lebih dari dua kemungkinan kondisi, kita bisa menambahkan elif. Program akan mengecek kondisi dari atas ke bawah, dan ketika menemukan satu kondisi yang benar, bagian di bawahnya tidak akan diperiksa lagi.

if kondisi1:
aksi1
elif kondisi2:
aksi2
else:
aksi_lain

⸻

Slide 15 – Contoh Elif: Grade Nilai

Contoh: Menentukan Grade

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

Pada contoh ini, nilai 82 tidak memenuhi kondisi pertama, tetapi memenuhi kondisi kedua sehingga menghasilkan “Grade B”.

⸻

Slide 16 – Memakai Input Pengguna

Mengambil Input dan Menggunakan If–Else

Program dapat meminta pengguna memasukkan data menggunakan input(). Jika yang diminta adalah angka, data tersebut harus diubah menjadi bilangan dengan int(). Setelah itu nilai tersebut bisa dipakai dalam percabangan.

nilai = int(input("Masukkan nilai kamu: "))

if nilai >= 75:
print("Lulus")
else:
print("Tidak lulus")

⸻

Slide 17 – Contoh: Ganjil atau Genap

Program Cek Ganjil / Genap

angka = int(input("Masukkan sebuah angka: "))

if angka % 2 == 0:
print("Angka genap")
else:
print("Angka ganjil")

Operator % digunakan untuk mengambil sisa hasil pembagian. Jika sisa pembagian angka terhadap 2 adalah nol, maka angka tersebut genap; jika tidak, angka tersebut ganjil.

⸻

BAGIAN 3 – STUDI KASUS & LATIHAN

⸻

Slide 18 – Studi Kasus 1: Login Sederhana

username = input("Masukkan username: ")
password = input("Masukkan password: ")

if username == "admin" and password == "1234":
print("Login berhasil")
else:
print("Username atau password salah")

Pada login sederhana ini, program mengecek apakah kedua nilai yang dimasukkan sesuai. Jika salah satu berbeda, program menampilkan pesan gagal.

⸻

Slide 19 – Studi Kasus 2: Diskon di Toko

total = int(input("Total belanja: "))

if total >= 100000:
diskon = total \* 10 / 100
total_bayar = total - diskon
print("Mendapat diskon 10%")
print("Total yang harus dibayar:", total_bayar)
else:
print("Tidak ada diskon")
print("Total yang harus dibayar:", total)

Jika jumlah belanja mencapai minimal seratus ribu rupiah, program memberikan diskon 10%. Jika tidak, total harga tetap.

⸻

Slide 20 – Studi Kasus 3: Biaya Parkir

jam = int(input("Lama parkir (jam): "))

if jam <= 2:
biaya = 5000
else:
biaya = 5000 + (jam - 2) \* 2000

print("Biaya parkir:", biaya)

Aturan biaya parkir dihitung berdasarkan dua jam pertama dan jam berikutnya, kemudian program menampilkan total biaya.

⸻

Slide 21 – Latihan untuk Siswa

Latihan Mandiri 1. Kategori Umur
Program meminta input umur. Jika umur di bawah 13 tampilkan “Anak-anak”, jika 13–17 tampilkan “Remaja”, dan jika 18 ke atas tampilkan “Dewasa”. 2. Salam Berdasarkan Jam
Program meminta input jam 0–23. Jika jam berada di 0–11 tampilkan “Selamat pagi”, jika 12–17 tampilkan “Selamat siang”, dan jika 18–23 tampilkan “Selamat malam”.

⸻

Slide 22 – Rangkuman Akhir

Struktur if digunakan untuk memeriksa kondisi tertentu. Bagian else menangani kondisi ketika syarat tidak terpenuhi, sedangkan elif digunakan ketika terdapat lebih dari dua kemungkinan kondisi. Python menggunakan indentasi untuk menentukan blok kode, sehingga penulisan rapi sangat penting. Percabangan ini digunakan di banyak contoh nyata seperti login, diskon, perhitungan biaya, dan kategorisasi umur.

⸻

Jika ingin, saya bisa buatkan versi lebih singkat, versi super-ringkas, atau versi yang lebih banyak paragraf lagi.
