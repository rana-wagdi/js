function validAngram(first, second){
	if(first.length !== second.length){
  	return	false 
  }
  
  let lookUp = {}
  
	for( let i=0 ; i < first.length; i++){
  let latter  = first[i];
  lookUp[latter] ?  lookUp[latter] +=1 :  lookUp[latter] = 1
  }
	  for (let i=0; i < second.length; i++){
    	let latter = second[i]
      
     if(!lookUp[latter]){
          console.log("A", !lookUp[latter])

     console.log(false)
     }else {
     		lookUp[latter] -= 1
        console.log(lookUp[latter] -= 1)
     }

    }
    console.log(lookUp)

}

validAngram('ranawagdi', 'ranawagdi')