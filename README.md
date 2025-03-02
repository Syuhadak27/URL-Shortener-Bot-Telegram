# 🤖 Telegram URL Shortener Bot

Bot ini adalah bot Telegram yang berfungsi untuk memperpendek tautan menggunakan layanan **OUO** dan **TinyURL** secara otomatis. Bot ini dibangun menggunakan **Google Apps Script**, sehingga mudah untuk dijalankan tanpa perlu server tambahan.

## ✨ Fitur
- 🔗 **Memperpendek tautan secara otomatis** dengan **OUO.io** dan **TinyURL**
- 📝 **Mendukung format teks HTML** agar tampilan lebih menarik di Telegram
- 🚀 **Dapat digunakan tanpa perlu hosting atau server**, cukup dengan Google Apps Script
- 📌 **Menampilkan dua versi tautan pendek (OUO & TinyURL) dalam satu pesan**

## 🎯 Cara Menggunakan Bot
1. **Tambahkan bot ke Telegram**
2. **Ketik /start** untuk memulai
3. **Kirimkan tautan panjang** yang ingin dipendekkan
4. **Bot akan membalas dengan dua versi tautan pendek (OUO & TinyURL)**

## ⚙️ Cara Deploy di Google Apps Script

1. **Buka Google Apps Script**
   - Kunjungi [Google Apps Script](https://script.google.com/)
   - Klik **`New Project`**

2. **Salin dan tempel kode bot ke dalam editor**
   - Buat file baru bernama `Code.gs`
   - Masukkan kode bot (lihat di repo ini)

3. **Setel webhook untuk bot**
   - Dapatkan token bot dari [@BotFather](https://t.me/BotFather) di Telegram
   - Edit **`TOKEN`** di dalam kode dengan token bot Anda
   - Setel webhook dengan menjalankan fungsi `setWebhook()`

4. **Jalankan bot**
   - Simpan skrip dan klik **Run** pada `setWebhook`
   - Bot akan aktif dan siap digunakan!

## 🔥 Contoh Pesan yang Diterima Bot
```
👋 Halo! Berikut adalah tautan pendek Anda:

🔗 OUO: <code>https://ouo.io/abcd1234</code>
🔗 TinyURL: <code>https://tinyurl.com/abcd1234</code>

📌 Powered by @YourBotUsername
```

## 🛠 Pengembang
Dikembangkan oleh [Syuhadak27]([https://github.com/username](https://github.com/Syuhadak27)). Jika ada pertanyaan atau ingin berkontribusi, silakan buat **Issue** atau **Pull Request**!

---
💡 **Tip**: Jika ingin mendapatkan cuan dari **OUO.io**, Anda bisa menyebarluaskan API key agar lebih banyak orang yang menggunakannya! 🚀

