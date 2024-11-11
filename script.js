function firstWord(s) {
  // your code here
	let trimmedStr = s.trim();
	let firstSpaceStr = trimmedStr.indexOf(' ');
	if(firstSpaceStr === -1){
		return trimmedStr
	}else{
		return trimmedStr.slice(0, firstSpaceStr);
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
