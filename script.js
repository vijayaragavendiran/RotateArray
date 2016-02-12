function solution(A,K){
	var rotatedArray=[];
	var temp = [];
	
	if(A.length >1){
		temp = A;
		for (j=0;j<=K-1;j++){
			rotatedArray=[];
			for(i=0;i<=temp.length-1;i++){
				if(i==0){
					rotatedArray[i] = temp[temp.length-1];
				}else{
					rotatedArray[i] = temp[i-1];
				}
				if(i ==(temp.length-1))
					temp =rotatedArray;
			}

		}
		
	}else{rotatedArray = A;}
	return rotatedArray;
}
//var  s = [3, 8, 9, 7, 6];
var  s = []
var result = solution(s,3);
console.log(result);
