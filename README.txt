GARAGE21 - PORTOFOLIO PERFORMANCE TESTING

Cara menjalankan:
1. Ekstrak folder ini.
2. Buka index.html menggunakan browser.
3. Tabel dapat digeser ke samping untuk melihat semua kolom Aggregate Report.
4. Gunakan kotak pencarian untuk mencari endpoint.

Data tabel diambil dari Aggregate Report JMeter. Debug Sampler dan baris TOTAL tidak dimasukkan sebagai endpoint individual. File ini menampilkan 21 sampel HTTP (satu sampel per endpoint).

Arti kolom:
- Average: rata-rata waktu respons.
- Median: nilai tengah waktu respons.
- 90%/95%/99% Line: persentil waktu respons. 90% Line adalah waktu yang mencakup sekitar 90% sampel tercepat.
- Min/Max: waktu respons tercepat/terlama.
- Error %: persentase sampel gagal.
- Throughput: request per detik.
- Received/Sent: kecepatan data diterima/dikirim dalam KB per detik.

Catatan: karena setiap endpoint hanya memiliki satu sampel, nilai Average, Median, dan persentil sama. Ulangi pengujian dengan lebih banyak sampel untuk analisis persentil yang lebih representatif.
