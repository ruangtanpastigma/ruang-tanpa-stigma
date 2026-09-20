# Ruang Tanpa Stigma — Tata Kelola Editorial

Versi: 2.0

Tanggal berlaku: 19 September 2026

Pemilik proses: Founder & Project Lead

Dokumen internal ini menerjemahkan [Standar Editorial & Evidence](../dist/standar-editorial/index.html) menjadi langkah pemeliharaan yang dapat dijalankan tanpa sistem teknis yang rumit.

## Tujuan

- Menjaga informasi kesehatan akurat, dapat ditelusuri, jelas, dan tidak menstigma.
- Menunjukkan dengan jujur pemeriksaan apa yang sudah dan belum dilakukan.
- Mencegah materi klinis diterbitkan hanya karena terdengar meyakinkan.
- Membuat pembaruan dan koreksi dapat dilacak.
- Menjaga website tetap sederhana untuk dikelola oleh proyek kecil.

## Peran

### Founder & Project Lead

- Menetapkan prioritas konten dan audiens.
- Memastikan proses editorial dijalankan.
- Menyetujui publikasi konten nonklinis setelah pemeriksaan editorial.
- Menahan konten yang sumber, ruang lingkup, atau status tinjauannya belum jelas.
- Mencatat perubahan editorial bermakna.

### Penulis atau editor

- Menulis sesuai brief dan pembaca yang dituju.
- Membuka dan memeriksa sumber secara langsung.
- Memastikan setiap klaim didukung oleh sumber yang sesuai.
- Menulis Bahasa Indonesia secara alami sebagai bahasa utama.
- Menghapus data pribadi atau data kesehatan sensitif dari draf.

Satu orang dapat menjalankan kedua peran di atas. Jika demikian, pemeriksaan tetap dilakukan sebagai langkah terpisah dan dicatat dengan jujur sebagai tinjauan editorial, bukan tinjauan independen.

### Peninjau klinis/kesehatan publik independen

Peran ini belum terisi secara permanen. Bila digunakan, peninjau harus:

- memiliki kompetensi yang sesuai dengan topik;
- menerima versi dan sumber yang jelas untuk ditinjau;
- memeriksa klaim, batasan, risiko keselamatan, serta konteks Indonesia;
- menyatakan konflik kepentingan yang relevan;
- menyelesaikan tinjauan sebelum nama atau kredensial ditampilkan.

Nama, gelar, afiliasi, atau persetujuan tidak boleh dicantumkan hanya karena seseorang pernah melihat draf secara informal.

## Hierarki sumber

1. **Konteks Indonesia:** Kementerian Kesehatan RI, otoritas kesehatan resmi, regulasi, dan pedoman klinis/kesehatan publik nasional.
2. **Sumber internasional:** WHO dan UNAIDS; organisasi kesehatan otoritatif lain bila ruang lingkupnya relevan.
3. **Literatur ilmiah:** artikel peer-reviewed untuk konteks tambahan tentang perilaku, komunikasi kesehatan, stigma, keterlibatan dalam pengobatan, atau riset komunitas.
4. **Sumber pendukung:** materi pendidikan otoritatif dapat membantu penjelasan, tetapi tidak menggantikan sumber primer untuk klaim penting.

Blog acak, unggahan media sosial, materi promosi, dan konten tanpa sumber tidak menjadi dasar tunggal untuk klaim medis.

## Alur kerja

1. **Tetapkan tujuan dan pembaca.** Tuliskan pertanyaan yang akan dijawab dan hal yang berada di luar ruang lingkup.
2. **Buat draf.** Gunakan paragraf pendek, heading deskriptif, istilah yang dijelaskan saat pertama muncul, dan tindakan yang jelas.
3. **Verifikasi sumber.** Buka sumber asli; jangan hanya mengandalkan ringkasan mesin pencari atau kutipan pihak lain.
4. **Periksa klaim.** Cocokkan setiap pernyataan kesehatan dengan sumber dan pastikan redaksi tidak melampaui bukti.
5. **Periksa bahasa.** Hilangkan bahasa menyalahkan, menakut-nakuti, atau mereduksi seseorang menjadi diagnosis.
6. **Tentukan kebutuhan tinjauan independen.** Materi klinis, keselamatan, pengobatan, penilaian risiko, layanan, kehamilan, atau perubahan pedoman biasanya memerlukannya.
7. **Tinjau aksesibilitas dan privasi.** Periksa heading, tautan, alt text, pembacaan tanpa gambar, serta tidak adanya data sensitif.
8. **Publikasikan.** Isi tanggal publikasi, tanggal tinjauan, status, sumber, dan peninjau hanya jika benar-benar ada.
9. **Tinjau ulang.** Gunakan siklus tahunan atau lebih awal ketika bukti/pedoman berubah.

## Status konten

| Status | Arti | Boleh tampil publik? |
|---|---|---|
| Draft | Penulisan atau pemeriksaan belum selesai | Tidak |
| Source checked | Sumber sudah dibuka dan klaim awal diperiksa | Hanya untuk materi nonklinis yang siap secara editorial |
| Editorially reviewed | Struktur, bahasa, sumber, dan ruang lingkup diperiksa; bukan tinjauan klinis | Ya untuk materi nonklinis |
| Needs clinical review | Konten klinis/keselamatan menunggu peninjau independen | Tidak |
| Independently reviewed | Peninjau yang sesuai telah menyelesaikan tinjauan | Ya, jika pemeriksaan lain juga selesai |
| Published | Konten tampil publik dan tetap tunduk pada tinjauan terjadwal | Ya |

Status `Published` dan status tinjauan disimpan sebagai dua field terpisah. Publikasi tidak boleh digunakan untuk menyamarkan kebutuhan tinjauan klinis.

## Pengaman teknis artikel

Workflow GitHub Pages akan gagal bila:

- artikel berstatus `published` tidak memiliki tanggal publikasi atau tanggal tinjauan; atau
- artikel berstatus `published` menandai `clinical_review_needed: true`, tetapi statusnya bukan `independently_reviewed` atau field peninjau masih kosong.

Pengaman ini berlaku pada perpustakaan artikel/video. Halaman HTML medis utama tetap memerlukan pemeriksaan manual melalui tracker mutu konten.

## Metadata minimum

### Semua artikel

- slug;
- bahasa;
- pasangan terjemahan bila ada;
- status publikasi;
- status tinjauan;
- format dan kategori;
- judul dan ringkasan;
- penulis;
- tanggal publikasi;
- tanggal tinjauan;
- sumber;
- isi.

### Konten klinis atau keselamatan

- kebutuhan tinjauan klinis;
- nama peninjau hanya setelah selesai;
- tanggal tinjauan berikutnya atau siklus tinjauan;
- ruang lingkup klaim dan pengecualian penting;
- sumber nasional bila membahas jalur layanan Indonesia.

## Siklus tinjauan

- Tinjauan dasar: sekurang-kurangnya setiap 12 bulan untuk halaman medis substansial.
- Tinjauan lebih awal: ketika pedoman Kementerian Kesehatan/WHO/UNAIDS berubah, sumber utama diperbarui, tautan rusak, risiko keselamatan ditemukan, atau pembaca menunjukkan ketidakjelasan penting.
- Tanggal baru hanya diberikan setelah halaman dan sumber benar-benar diperiksa.
- Halaman yang tidak dapat diperbarui dengan aman dapat ditahan dari publikasi.

## Koreksi dan changelog

- Kesalahan kecil seperti ejaan dapat diperbaiki tanpa catatan publik terpisah.
- Koreksi yang mengubah arti medis, ruang lingkup, tindakan pembaca, sumber utama, atau status tinjauan dicatat di `CHANGELOG.md` dengan tanggal dan ringkasan.
- Jangan menciptakan riwayat koreksi sebelum proses changelog dimulai.
- Jika koreksi berhubungan dengan keselamatan, prioritaskan pembaruan atau penarikan sementara sebelum pekerjaan kosmetik lain.

## Bahasa dan terjemahan

- Bahasa Indonesia adalah versi utama dan ditulis secara mandiri.
- Versi Inggris harus alami, bukan terjemahan kata demi kata.
- Kedua versi harus menjaga batas klaim medis yang sama.
- Gunakan bahasa yang berpusat pada manusia, misalnya “orang yang hidup dengan HIV” sesuai konteks.
- Jangan mengatur secara kaku cara seseorang memilih menyebut dirinya sendiri.

## Privasi draf

Repositori bersifat publik. Status draf hanya mencegah konten tampil di perpustakaan website; status tersebut tidak membuat teks di repositori menjadi rahasia. Jangan pernah memasukkan:

- nama pasien atau klien;
- status HIV atau diagnosis seseorang;
- catatan konsultasi;
- hasil laboratorium;
- nomor telepon, alamat, atau pengenal pribadi;
- cerita yang memungkinkan seseorang dikenali tanpa persetujuan yang sesuai.

## Checklist publikasi singkat

- [ ] Tujuan dan pembaca jelas.
- [ ] Semua klaim kesehatan memiliki sumber yang tepat.
- [ ] Sumber dibuka dan diperiksa langsung.
- [ ] Konteks Indonesia menggunakan sumber nasional bila tersedia.
- [ ] Istilah dijelaskan dan paragraf dapat dipindai.
- [ ] Bahasa tidak menyalahkan atau menstigma.
- [ ] Ruang lingkup U=U tetap pada transmisi seksual.
- [ ] Kebutuhan tinjauan independen ditentukan.
- [ ] Tinjauan independen tidak diklaim sebelum selesai.
- [ ] Tanggal dan metadata terisi.
- [ ] Tidak ada data kesehatan sensitif.
- [ ] Tautan, tampilan seluler, dan navigasi keyboard diperiksa.
