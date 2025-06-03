# Islamic-Knowledge-Quiz-Game
Selamat datang di Kuis Pengetahuan Islam! Ini adalah aplikasi kuis sederhana yang dibangun menggunakan HTML, CSS, dan JavaScript vanilla. Proyek ini bertujuan untuk menguji pengetahuan dasar tentang ajaran Islam melalui serangkaian pertanyaan pilihan ganda.

## Fitur

* **Antarmuka Sederhana**: Desain yang bersih dan mudah digunakan.
* **Pertanyaan Acak**: Urutan pertanyaan diacak setiap kali kuis dimulai untuk pengalaman yang berbeda.
* **Umpan Balik Langsung**: Pengguna akan melihat apakah jawaban mereka benar atau salah secara instan.
* **Skor Akhir**: Setelah menyelesaikan semua pertanyaan, pengguna akan melihat total skor mereka.
* **Mulai Ulang Kuis**: Opsi untuk mengulang kuis kapan saja.
* **Responsif**: Tampilan dasar yang mencoba menyesuaikan dengan berbagai ukuran layar (meskipun pengoptimalan lebih lanjut mungkin diperlukan).

## Tampilan (Saran)

*(Anda bisa menambahkan screenshot aplikasi di sini setelah menjalankannya. Contoh:)*
## Teknologi yang Digunakan

* HTML5
* CSS3
* JavaScript (ES6+)

## Cara Menjalankan

1.  **Unduh atau Clone Repositori:**
    ```bash
    git clone [https://github.com/NAMA_PENGGUNA_ANDA/NAMA_REPOSITORI_ANDA.git](https://github.com/farrosfr/Islamic-Knowledge-Quiz-Game.git)
    cd Islamic-Knowledge-Quiz-Game
    ```
2.  **Buka `index.html`:**
    Buka file `index.html` langsung di peramban web pilihan Anda (misalnya Google Chrome, Firefox, Safari, Edge).

Tidak ada instalasi atau dependensi eksternal yang diperlukan.

## Cara Menambah Pertanyaan

Untuk menambah atau mengubah pertanyaan, Anda bisa memodifikasi array `questions` di dalam file `script.js`. Setiap objek pertanyaan memiliki format berikut:

```javascript
{
    question: "Teks pertanyaan Anda di sini?",
    answers: [
        { text: "Pilihan jawaban 1", correct: false },
        { text: "Pilihan jawaban 2 (benar)", correct: true },
        { text: "Pilihan jawaban 3", correct: false },
        { text: "Pilihan jawaban 4", correct: false }
    ]
}
```

**Beberapa saran tambahan:**

1.  **Ganti Placeholder:**
    * `NAMA_PENGGUNA_ANDA/NAMA_REPOSITORI_ANDA` dengan username GitHub dan nama repositori Anda.
    * Jika Anda mengambil screenshot, unggah ke repositori dan ganti `link_ke_screenshot.png` dengan path yang benar.
2.  **Lisensi:** Jika Anda ingin, Anda bisa memilih lisensi open-source (seperti MIT, Apache 2.0, GPL) dan menambahkannya ke repositori Anda (biasanya sebagai file `LICENSE`).
3.  **Deskripsi Lebih Lanjut:** Anda bisa menambahkan detail lebih lanjut tentang tujuan pembuatan kuis ini atau target penggunanya.

Semoga berhasil dengan unggahan Anda di GitHub!
