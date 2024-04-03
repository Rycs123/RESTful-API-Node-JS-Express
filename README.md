# Tugas 2

Buatlah sebuah server yang menyajikan api untuk CRUD data apapun (bebas). Beri field id (string) pada tiap object sebagai identifier.

1. Root url "/" (metode GET) khusus untuk mengembalikan object dengan tampilan seperti di bawah ini. Isi sesuai data kalian masing-masing

```
{
  "nama": "",
  "asal": "",
}
```

2. Get semua data
3. Get data by id
4. Create new data
5. Update data by id
6. Delete data by id

### Ketentuan:

1. Server terhubung ke database
2. Data object harus memiliki minimal 5 field dan valuenya setidaknya terdiri dari tipe data string, boolean, dan number.
3. Tambahkan validasi

- Pada Create dan Update, semua field harus diisi (required), jika tidak memenuhi validasi, return error
- Pada endpoint yang membutuhkan id, jika data dengan id terkait tidak ditemukan, return error

4. Gunakan protokol REST API untuk CRUD-nya
5. Sesuaikan status code-nya, baik untuk response yang success maupun error.  
   Referensi: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
6. Push project ke repositori
7. Deploy project ke Azure VM
8. Akses server hanya menggunakan ssh
9. Gunakan nginx untuk port forwarding
10. Running project as a service menggunakan systemd
11. Ikuti [format response body](#format-response-body) di bawah

_Testing API bisa pakai Postman (recommended) atau ekstensi REST Client di VS Code_

### Format Response Body

Success dengan kembalian data

```
{
  "data: [] atau {}
}
```

Success tanpa kembalian data

```
{
  "message": "string"
}
```

Error

```
{
  "errors": [
    "namaFieldNya": [
      "deskripsiError1",
      "deskripsiError2"
    ]
  ]
}
```

### Nilai Bonus

Menerapkan CI/CD
