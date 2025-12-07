console.log("----Tiket Masuk Zoo----");
let pengunjung = [{nama: "poke", umur: 4}, {nama: "coqq", umur: 35}, {nama: "ammar", umur: 65}, {nama: "gasss", umur: 10}];

// Menentukan harga tiket normal
let hargaTiket = 50000;

for (let i = 0; i < pengunjung.length; i++) {

    let namaPengunjung = pengunjung[i].nama;

    let umur = pengunjung[i].umur;

    let pesan = "";

    if (umur < 5) {
        pesan = "Free! Untuk balita."; //free balita
    } else if (umur <= 12) {
        pesan = "Diskon 50%! Harga tiket: " + (hargaTiket / 2); // Anak-anak diskon 50%
    } else if (umur <= 60) {
        pesan = "Diskon 30%! Harga tiket: " + (hargaTiket * 0.7); // Lansia diskon 30%
    } else {
        pesan = "Harga normal: " + hargaTiket; // Dewasa bayar normal
    }

    
    console.log("Nama Pengunjung :", namaPengunjung);
    console.log("Umur           :", umur + " tahun");
    console.log("Keterangan     :", pesan);
}