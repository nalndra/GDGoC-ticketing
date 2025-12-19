// Tugas 1: Simulasi Pembuatan Teh (Konsep Promise)
const buatTeh = (jenisGula) => {
    return new Promise((resolve, reject) => {
        console.log('Sedang merebus air... (Tunggu 2 detik)');

        setTimeout(() => {
            if (jenisGula === 'Gula Batu') {
                resolve('Teh Gula Batu Siap dinikmati!');
            } else {
                reject(new Error('Maaf, stok gula habis.'));
            }
        }, 2000);
    });
};

const jalankanPembuatanTeh = async (jenisGula) => {
    try {
        const pesan = await buatTeh(jenisGula);
        console.log(pesan);
    } catch (error) {
        console.log(error.message);
    }
};

const main = async () => {
    // Contoh sukses
    await jalankanPembuatanTeh('Gula Batu');

    // Contoh gagal (ubah parameter untuk melihat pesan error)
    await jalankanPembuatanTeh('Gula Pasir');
};

main();
