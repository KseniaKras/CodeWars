// 8 kyu
// Counting sheep...

function countSheeps(arrayOfSheep) {
	let sumOfSheep = 0;
	  for (let i = 0; i < arrayOfSheep.length; i++) {
		 if (arrayOfSheep[i]) {sumOfSheep += 1;}
	  }
	return sumOfSheep;
	// TODO May the force be with you
 }