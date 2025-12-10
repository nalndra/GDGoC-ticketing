let namaKarakter1 = "Judy Hopps";
let namaKarakter2 = "Nick Wilde";
// jarak lari per hari
let jarakJudy = 3;
let jarakNick = 2;

console.log("=== LATIHAN PENJAGA ZOOTOPIA ===\n");
console.log("Jarak lari per hari:");
console.log(`${namaKarakter1}: ${jarakJudy} km`);
console.log(`${namaKarakter2}: ${jarakNick} km\n`);

// math and logic here
let totalJarakJudy = 0;
let totalJarakNick = 0;

for (let i = 1; i <= 5; i++) {
    console.log(`Hari ${i}:`);
    console.log(`- ${namaKarakter1} lari ${jarakJudy} km`);
    console.log(`- ${namaKarakter2} lari ${jarakNick} km\n`);
    
    totalJarakJudy += jarakJudy;
    totalJarakNick += jarakNick;
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(`${namaKarakter1}: ${totalJarakJudy} km`);
console.log(`${namaKarakter2}: ${totalJarakNick} km`);
