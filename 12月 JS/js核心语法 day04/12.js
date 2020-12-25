var name=["shaokang","xiaoming","tom","jill"];

var index=getNamesIndex(name,"tom")
console.log(index);
function getNamesIndex(arr,e){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==e){
			break;
		}
	}
	
	if(i>=arr.length){
		return -1
	}else{
		return i;
	}
	
	
	
}