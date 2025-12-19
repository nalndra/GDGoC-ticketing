// async function

const getDataMahasiswa = async (id) => {
    //try catch
    try{
        console.log('fetching data...');
        // Await-Fetch
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!response.ok){
            throw new Error('Data mahasiswa tidak ditemukan');
        }

        const dataAPI = await response.json();
        //destructuring
        const {name, email, phone} = dataAPI;
       
        console.log("data berhasil didapatkan:");
       
        return {
            id: id,
            name: name,
            email: email,
            phone: phone
        }
    } catch (error) {
        console.log('error', error.message);
    } finally {
        console.log('fetching data selesai');
    }
}

const main = async () => {
    const mahasiswa = await getDataMahasiswa(1);
    console.log(mahasiswa);

    const gagal = await getDataMahasiswa(999);
    console.log("Error Test:", gagal);
}

main();