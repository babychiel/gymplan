# Gymplan — Muscle Lab Batam

Aplikasi latihan pribadi satu halaman. Program 5 hari untuk fat loss dengan prioritas glute dan punggung, disusun dari alat yang benar-benar ada di Muscle Lab Batam.

Live: https://babychiel.github.io/gymplan/

## Isi

- **Video tiap alat** — thumbnail yang diputar langsung di halaman, 25 alat dipakai dari katalog Muscle Lab
- **Checklist set** — tersimpan di perangkat, reset otomatis tiap Senin
- **Timer istirahat** — mengikuti preskripsi tiap gerakan, lengkap dengan bunyi dan getar
- **Timer HIIT 40/20** — 6 putaran kali 3 blok otomatis
- **Menu makan harian** — kurang lebih 2015 kkal, protein sekitar 160 g, tanpa ikan, tanpa whey, kacang hanya edamame
- **Progres mingguan** — persentase, hari tuntas, dan set tersisa
- **Bisa dipasang di HP** — PWA dengan service worker, tetap terbuka saat offline

## Program

| Hari | Fokus | Durasi |
|---|---|---|
| Senin | Punggung & postur | 55-60 menit |
| Selasa | Glute & hamstring | 55-60 menit |
| Rabu | HIIT & core | 40 menit |
| Kamis | Dada, bahu & lengan | 55-60 menit |
| Jumat | Quad, betis & zona 2 | 55-60 menit |
| Sabtu | Active recovery | 20-30 menit |
| Minggu | Full rest | — |

## Berkas

| Berkas | Isi |
|---|---|
| `index.html` | Seluruh aplikasi, CSS dan JavaScript sudah menyatu |
| `manifest.json`, `sw.js`, `icon.svg` | PWA, service worker, dan ikon |

Untuk mengubah program latihan atau menu makan, cari `window.PROGRAM` di dalam `index.html`.

## Sumber data alat

Nama alat, video tutorial, tag otot, dan deskripsi diambil dari repo [PangFive/gym](https://github.com/PangFive/gym), aplikasi WHY milik teman. Videonya diputar dari YouTube.
