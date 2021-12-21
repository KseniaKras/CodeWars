// 8 kyu
// Find the Remainder

function remainder(a, b){
  
	// Divide the larger argument by the smaller argument and return the remainder
	if (a < b) {
	  return b % a;
	} else if (a > b) {
	  return a % b;
	} else if ( a === 0 && b / 0 || b === 0 && a / 0) {
	  return NaN;
	} else if (a < 0 || b < 0) {
	  return 0;
	}
 }