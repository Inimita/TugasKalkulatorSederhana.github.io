const itung = (prompt("masukan operator +,-,*,/"));
const angka1 = parseInt(prompt("masuka angka pertama"));
const angka2 = parseInt(prompt("masukan angka ke dua"));

if(itung == "+"){
   let tambah= angka1 + angka2;
   console.log(tambah);
}else if(itung == "-"){
    let kurang= angka1 - angka2;
    console.log(kurang);
} else if(itung == "*"){
    let kali= angka1 * angka2;
    console.log(kali);
}else{
    let bagi= angka1 / angka2;
    console.log(bagi);
}