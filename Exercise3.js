var nama = '';
var peran = '';

if(nama === '') {
    console.log('Nama harus diisi!');
} else if(peran === '') {
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game!');
} else {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '!');
    if(peran === 'Ksatria') {
        console.log('Hallo ' + peran, nama + ', kamu dapat menyerang dengan senjatamu!');
    } else if(peran === 'Tabib') {
        console.log('Hallo ' + peran, nama + ', kamu akan membantu temanmu yang terluka!');
    } else if(peran === 'Zero') {
        console.log('hallo ' + peran, nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }
}