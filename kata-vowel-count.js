function getCount(str) {
	var vowelsCount = 0;
	 let vowels = ['a', 'e', 'i', 'o', 'u'];
	  for (let char of str) {
		 if (vowels.includes(char)) {
			vowelsCount++
		 }
	  }
	 
	// enter your majic here
	
	return vowelsCount;
 }