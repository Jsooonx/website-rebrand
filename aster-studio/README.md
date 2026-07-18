# Aster Studio

Starter project untuk website portfolio fiktif **Aster Studio**—sebuah studio
independen yang menggabungkan brand strategy, visual identity, dan web design.

Dokumen branding lengkap berada di [BRANDING.md](BRANDING.md). Gunakan sebagai
acuan saat mulai membuat UI, menulis copy, atau memilih asset visual.

## Suggested website pages

- \`/\` — home / landing page
- \`/work\` — daftar proyek
- \`/work/[slug]\` — detail case study
- \`/about\` — studio dan prinsip kerja
- \`/contact\` — ajakan kerja sama

## Core message

**Distinct digital identities, made with care.**

Website perlu terasa editorial, hangat, dan presisi: desainnya tidak ramai,
tetapi setiap detailnya disengaja.

## Hero interaction

Gambar hero bergerak hingga 68px ke atas selama area gambarnya dilalui scroll,
tetapi tetap terpotong di dalam container. Efek ini otomatis dinonaktifkan
untuk pengguna yang mengaktifkan reduced motion.

Section berikutnya, **The Approach**, merangkum tiga fase kolaborasi dan daftar
klien fiktif yang dapat dipakai sebagai placeholder portfolio.

Headline Approach masuk per kata saat terlihat di viewport; animasinya tidak
dijalankan ketika reduced motion aktif.

Section **Selected Work** menampilkan empat studi kasus fiktif dengan asset
visual orisinal di `public/work/`.

Tiga teks pada header portfolio masuk berurutan; headline tengah muncul per
kata.

Section **About** memakai interaksi scroll: headline terlebih dahulu bergerak
turun, lalu mengecil saat frame portrait berparallax menutupnya; deskripsi
muncul di bawah image pada state akhir.

Label About masuk secara staggered, sementara headline masuk per kata sebelum
memulai scroll transition.

Section **Services** memakai accordion satu-panel: setiap layanan dapat dibuka
untuk melihat ringkasan dan deliverables, lalu ditutup kembali tanpa
memindahkan halaman. Headline section ini masuk bertahap per kata.

Section **In Practice** mengunci sebuah paragraf di tengah viewport. Empat
visual karya dimulai di bawah viewport lalu bergerak melintas saat scroll,
sementara visual terakhir berhenti di bagian tengah paragraf tanpa menutupi
seluruh copy.

Section **Stats** menampilkan empat proof point dengan entrance sederhana dan
angka yang menghitung naik saat memasuki viewport. Animasi angka dihentikan
untuk pengguna dengan reduced motion.

Section **Pricing** menyediakan switch untuk membandingkan paket one-time
payment dan monthly maintenance. Visual penutupnya memakai parallax naik yang
tetap dipotong di dalam frame gambar.

Headline Pricing direveal per kata; switch billing masuk sesudah headline
dengan entrance sederhana.

Section **Testimonials** menampilkan dua marquee testimonial yang loop tanpa
batas: baris pertama bergerak dari kanan ke kiri, sedangkan baris kedua dari
kiri ke kanan. Sebelum loop dimulai, card ditumpuk dari arah geraknya lalu
menyebar ke posisi masing-masing. Marquee dipause saat reduced motion aktif.

Section **FAQ** memakai heading reveal per kata dan accordion satu-panel.
Item pertama masuk dengan fade, sementara item berikutnya muncul dari posisi di
bawah item pertama sebelum menyebar ke baris final masing-masing.

Footer **Contact** menutup pengalaman dengan heading per kata, reveal cepat
per kata pada deskripsi, portrait dan wordmark yang bergerak parallax saat
scroll, serta social CTA dengan underline ketika hover.
