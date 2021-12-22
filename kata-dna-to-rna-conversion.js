// 8 kyu
// DNA to RNA Conversion

function DNAtoRNA(dna) {
  
	let re = /T/gi;
	let rna = dna.replace(re, "U");
	return rna;
	// create a function which returns an RNA sequence from the given DNA sequence
 }