// arrow function
const greetings = (name) => console.log(`Hello ${name}, Good Afternoon!`);

//spread operator:
//data dummy
const dataNilai ={
    matkul: 'Algoritma dan Pemrograman',
    nilai: 85,
    status: 'Lulus'
}

const dataTambahan = {
    semester: 3,
    aktif: true
}

const dataMahasiswa = {... dataNilai, ...dataTambahan};
console.log(`data mahasiswa:`, dataMahasiswa);

greetings('Ammar');