// 8 kyu
// String repeat

function repeatStr (n, s) {
	let x = [];
	while(x.length < n) {
	  x.push(s);
	}
	return x.join('');
 }