// #1

/*

function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome();

*/

// #2

function dashInsert(num) { 

var prev='', 
	newstring='';

	num = num.toString();
	
	for (var i=0; i<num.length; i++){
		parseInt(num[i])%2 == 0 ? current='even' : current='odd';
		if (current=='odd' && prev=='odd'){
			newstring=newstring + '-' + num[i];
			prev='odd';
		} else {
			newstring=newstring + num[i];
		 	prev=current;
		}
	}

  return newstring; 
         
}

dashInsert(424579);