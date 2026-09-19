# Ruang Tanpa Stigma V2 — Ringkasan Audit Implementasi

Tanggal audit: 19 September 2026

Branch kerja: `public-health-v2`

Baseline: `main` pada commit `47cc296`

Dokumen ini mencatat keputusan sebelum perubahan publik dilakukan. Situs produksi dan branch `main` tidak diubah selama pengerjaan V2.

## 1. Bagian homepage yang dihapus

- Bagian besar **Portofolio Public Health / Public Health Portfolio**, termasuk CTA menuju portofolio pribadi.
- Bahasa yang menempatkan dokumentasi pengalaman pendiri sebagai salah satu tujuan utama homepage.

Alasan: homepage perlu melayani kebutuhan pengunjung dan memperkenalkan inisiatif lebih dahulu, bukan berfungsi sebagai halaman résumé.

## 2. Bagian homepage yang dipertahankan

- Hero dengan pesan utama tentang nilai dan martabat manusia.
- Jalur kebutuhan **“Mungkin kamu datang ke sini karena…” / “You may have come here because…”**.
- Pengantar HIV, tes dan pencegahan, pengobatan, viral load, CD4, PrEP, PEP, dan U=U.
- U=U sebagai penjelasan penting yang terlihat jelas dan dibatasi pada transmisi seksual.
- Mitos & Fakta serta konsekuensi sosial dari informasi yang salah.
- Komunikasi suportif, privasi, martabat, dan bahasa yang tidak menghakimi.
- Sumber/evidence dan tanggal peninjauan.
- Artikel & Video sebagai perpustakaan edukasi kesehatan publik.
- Pengantar singkat tentang Ruang Tanpa Stigma dengan tautan ke halaman Tentang.

## 3. Materi yang dipindahkan ke Tentang

- Penjelasan mengapa pengalaman dan minat kesehatan publik pendiri relevan dengan inisiatif.
- Tautan LinkedIn profesional.
- Biografi pendiri yang dipadatkan menjadi bagian **Founder & Project Lead** setelah penjelasan inisiatif, misi, nilai, dan prinsip editorial.

Riwayat kerja rinci, angka pengalaman, dan metrik portofolio tidak dipindahkan sebagai CV publik. Materi tersebut lebih sesuai untuk CV atau LinkedIn.

## 4. Lokasi informasi pendiri saat ini

- Homepage ID dan EN: satu bagian portofolio besar menjelang bagian Tentang.
- Halaman Tentang/About: hero, kartu profil, grid portofolio, dan biografi panjang.
- Artikel pendirian proyek: nama pendiri muncul sebagai konteks penulis/proyek.

V2 mempertahankan pengakuan pendiri secara proporsional pada halaman Tentang/About dan metadata penulis bila faktual.

## 5. Lokasi GPA saat ini

- `dist/tentang/index.html`
- `dist/en/about/index.html`

Semua penyebutan **IPK/GPA 4.00/4.00** akan dihapus dari website publik dan tidak diganti dengan klaim penghargaan akademik.

## 6. Halaman yang memerlukan peningkatan metadata editorial

- `belajar-hiv/` dan `en/learn/`
- `mitos-fakta/` dan `en/myths-facts/`
- `untuk-kamu/` dan `en/for-you/`
- Artikel dinamis pada `artikel/baca/` dan `en/stories/read/`
- Perpustakaan artikel/video dan konfigurasi Pages CMS

Metadata yang diperlukan: penulis/penanggung jawab, tanggal publikasi bila relevan, tanggal tinjauan terakhir, siklus tinjauan, sumber otoritatif, kebutuhan tinjauan klinis, dan status tinjauan yang tidak menyiratkan validasi eksternal bila belum terjadi.

## 7. Halaman dan file baru

Halaman publik bilingual:

- `standar-editorial/` dan `en/editorial-policy/`
- `privasi-etika/` dan `en/privacy-ethics/`
- `dampak/` dan `en/impact/` dengan keterangan awal yang jujur, tanpa penghitung atau klaim hasil

Dokumentasi internal:

- `docs/editorial-governance.md`
- `docs/accessibility-audit.md`
- `docs/user-testing-plan.md`
- `docs/monitoring-evaluation-framework.md`
- tracker bulanan dan tracker mutu konten yang dapat digunakan ulang
- `CHANGELOG.md` untuk perubahan editorial bermakna sejak V2

## 8. Pelestarian URL

Semua URL publik yang sudah ada dipertahankan. Tidak ada redirect atau migrasi framework yang diperlukan. Halaman baru ditambahkan tanpa mengubah jalur lama. Tautan bahasa ID/EN, sitemap, canonical, dan `hreflang` akan diperbarui secara konsisten.

## 9. Perubahan teknis yang benar-benar diperlukan

- Penambahan metadata SEO/canonical/hreflang/Open Graph yang saat ini belum konsisten.
- Perbaikan aksesibilitas pada label navigasi, tombol, status menu seluler, target sentuh, struktur heading, dan metadata konten dinamis.
- Penyempurnaan JavaScript kecil untuk fokus menu, status tinjauan artikel, dan metadata halaman artikel; tanpa framework.
- Penyempurnaan skema Pages CMS untuk status pemeriksaan sumber, kebutuhan tinjauan klinis, dan jadwal tinjauan.
- CSS tambahan untuk ritme editorial, daftar berdivider, panel kebijakan, dan layout yang tidak bergantung pada kartu.
- Penambahan halaman baru ke sitemap.
- Validasi HTML, tautan internal, JSON, keyboard, responsivitas, dan build GitHub Pages.

Tidak ada kebutuhan untuk React, Next.js, basis data, akun pengguna, formulir kesehatan, atau analytics pihak ketiga.

## 10. Bagian yang tetap tidak disentuh

- Logo resmi dan identitas merek dasarnya.
- Bahasa Indonesia sebagai bahasa utama dan versi Inggris lengkap.
- Arsitektur HTML/CSS/JavaScript statis serta kompatibilitas GitHub Pages.
- Alur deployment yang hanya memublikasikan branch `main` dan menyaring artikel berstatus draf.
- Dashboard Pages CMS dan prinsip draf tidak tampil di perpustakaan publik.
- Batas privasi: tanpa akun pembaca, komentar, formulir kesehatan, atau pengumpulan data kesehatan sensitif.
- URL halaman yang telah digunakan publik.
- Palet olive/sage/cream/coral dan karakter editorial yang hangat.

## Temuan risiko utama sebelum publikasi V2

- Halaman klinis belum memiliki tinjauan independen yang dapat dibuktikan; website harus menyatakannya dengan transparan.
- Tanggal tinjauan yang tampil perlu disertai makna/status dan siklus tinjauan, bukan sekadar tanggal.
- Klaim layanan lokal, jam, biaya, serta ketersediaan PrEP/PEP/ART belum boleh ditambahkan tanpa verifikasi.
- Tidak ada analytics saat ini; pengukuran jangkauan perlu dimulai secara manual atau baru menggunakan opsi berorientasi privasi setelah persetujuan terpisah.
- Pemeriksaan screen reader dan perangkat nyata tetap diperlukan setelah perbaikan otomatis dan keyboard dilakukan.
