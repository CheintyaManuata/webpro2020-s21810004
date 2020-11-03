//MANUATA CHEINTYA
//UJIAN02

//BAGIAN 1
//No.1 
const calculateAge = (birthYear)=> {
	return 2019 - birthYear;
}
 
function yearUntilRetirement(object){
	const age = calculateAge(object.year);
	const retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}
 
yearUntilRetirement({year: 1987, firstName: 'John'});

//2. 
//No.2
const addNumber = (a,b,c,d,e,f,g)=>{
    retrun sum;
}
const addNumber = (a,b,c,d,e,f,g){
    var numbers =[a,b,c,d,e,f,g];
    var sum = 0;
    for(var i=0;<numbers.lengeth,i++){
        sum + = numbers[i];
    }
};
console.log(addNumber (1,2,3,4,5,6,7));

//Bagian 2. 
//No.1
const WarnaKesukaan =(warna='putih') =>{
    return console.log(`Warna kesukaan saya adalah ${warna}`)
    }
    
    WarnaKesukaan('biru');

//No.2
let namaBuah1 = ['apel', ' mangga'];
let namaBuah2 = ['sirsak', 'semangka']

let semuaNamaBuah = [...namaBuah1,namaBuah2];

console.log (semuaNamaBuah)
let namaBuah1 = ['apel', ' mangga'];
let namaBuah2 = ['sirsak', 'semangka']

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

console.log (semuaNamaBuah)