// Fungsi yang berdiri sendiri
/*
function sapa() {
    return "Selamat Pagi!";
  }
  
  console.log(sapa()); // Output: Selamat Pagi!
  
  // Fungsi disimpan di dalam variabel
  
  let berkenalan = function() {
    return "Hallo, nama saya Sarah.";
  };
  
  console.log(berkenalan()); // Output: Hallo, nama saya Sarah

  function operasiPerkalian(angka1, angka2){
    return angka1 * angka2;
  }
  
  console.log(operasiPerkalian(2, 6)) // Output: 12

  console.log(operasiPerkalian(5, 5)); // Output: 25

function operasiPerkalian(angka1, angka2) {
  return angka1 * angka2;
}

//lingkup global

const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball

//lingkup lokal
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi'; // lingkup fungsi
  const noMessi = 10; // lingkup fungsi
  if (olahraga === 'basketball') { 
     atlet = 'Kobe Bryant';
     const noKobe = 24; // lingkup blok
     console.log(noMessi); // Output: 10  
  }
  console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();
*/