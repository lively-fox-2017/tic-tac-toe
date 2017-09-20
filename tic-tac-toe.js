function tic_tac_toe(Row, Col){
		
		var arr = [];

		for ( i = 0; i < Row; i++) {
			 	arr[i]=[];

			 		for (j=0; j < Col; j++) {
						  	arr[i][j]=randomStr(1);
					}
				}
		return arr;
}

console.log(tic_tac_toe(3,3));

function randomStr(num) {
	  var sRand = ''; 
	  var str = "XO";
	  
	  for (var i=0; i < num; i++) { 
		      sRand += str.charAt(Math.floor(Math.random() * str.length)); 
		    }
	  return sRand;
}

