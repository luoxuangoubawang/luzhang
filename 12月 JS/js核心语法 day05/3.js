var data="ab中文123?+";
var shuzi=0;
var yinwen=0;
var hanzi=0;
var qita=0

function getCode(data){
	for(var i=0;i<data.length;i++){
         var c=data.charAt(i);
		 // console.log(c);
		 if(c>="0"&&c<="9"){
			 shuzi++; 
		 }else if(c>="A"&&c<="Z"||c>="a"&&c<="z"){
			 yinwen++
		 }else if(c>="\u4E00"&&c<="\u9FA5"){
         		hanzi++;	 
		 }else{
			 qita++;
		 }
	}
	
}

getCode(data);
console.log(shuzi);
console.log(yinwen)
console.log(hanzi);
console.log(qita);