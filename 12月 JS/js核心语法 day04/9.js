var arr=[1,6,5,82,56,999,1014] 

bubbleSort(arr)

function bubbleSort(arr){
  for(var i=0;i<arr.length;i++){
	  for(var j=0;j<arr.length-i-1;j++){
		  if(arr[j]>arr[j+1]){
			  swap(arr,j,j+1)
		  }
	  }
	  
	  
  }
	
}

function swap(arr,index1,index2){
	arr[index1]=arr[index1]+arr[index2];
	arr[index2]=arr[index1]-arr[index2];
	arr[index1]=arr[index1]-arr[index2];
	
}

console.log(arr);