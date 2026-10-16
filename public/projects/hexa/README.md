# Foto proyek Hexa

Simpan dokumentasi yang boleh dipublikasikan di folder ini. Samarkan kredensial,
data pelanggan, dan informasi internal sebelum menambahkan foto.

Daftar proyek dan foto ada di `src/data/hexa-projects.js`. Isi array `photos` pada
proyek yang sesuai, misalnya:

```js
photos: [
  {
    src: '/projects/hexa/sensor-dashboard.webp',
    caption: {
      id: 'Dashboard pemantauan perangkat Hexa.Sensor.',
      en: 'Hexa.Sensor device monitoring dashboard.',
    },
  },
],
```

ID proyek: `sensor`, `simulator`, `chat-live`, `ai`, `rag-finetuning`.
Gambar pertama menjadi preview kartu. Semua gambar muncul di galeri detail dan
bisa diperbesar. Array kosong menampilkan keterangan bahwa foto belum tersedia.
Jangan gunakan gambar contoh sebagai bukti pekerjaan.
