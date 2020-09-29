//Var,Let,Const
//let nama = "stenly";
//let nama = "adam";

//console.log(nama);

//scope dalam javascript
//1.Function scope(var)
//2.Block Scope

//(function tes(){
//     for (var i=0; i<10; i++){
//         console.log(i);
//     }
// })();//i hanya bisa diakses di dalam function
// {
//     let i;
//     for (let i=0; i<10; i++){
//         console.log(i);
//     }
// }
// console.log(i);

//Template Literal
const person ={
    firstname:"Stenly",
    lastname:"Adam",
    age:33,
}
console.log(`Halo nama saya  ${person.firstName} ${person.lastName} Umur saya adalah ${person.age} tahun.`)
