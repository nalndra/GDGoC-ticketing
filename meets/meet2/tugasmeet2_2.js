// Tugas 2: Async/Await & Try-Catch (Fetching Data)
const getTodo = async (url = 'https://jsonplaceholder.typicode.com/todos/1') => {
    try {
        console.log('Mencoba mengambil data...');

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Gagal mengambil data todo');
        }

        const data = await response.json();
        console.log(`Judul Todo: ${data.title}`);
    } catch (error) {
        console.log('Terjadi error:', error.message);
    } finally {
        console.log('-- Proses Selesai --');
    }
};

const main = async () => {
    await getTodo();

    // Uji blok catch dengan URL salah (uncomment baris di bawah)
    // await getTodo('https://jsonplaceholder.typicode.com/todoss/1');
};

main();
