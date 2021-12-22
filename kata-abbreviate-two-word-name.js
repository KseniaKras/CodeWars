// 8 kyu
// Abbreviate a Two Word Name

// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
	let matches = name.match(/\b(\w)/g);
	let abbrev = matches.join('.');
 return abbrev.toUpperCase();
	// code away
}
