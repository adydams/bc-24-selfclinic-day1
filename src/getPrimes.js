const checkprimenum = function (num) {
    let list  =[2];
 	if(num<2){

 		return false;
 	}
         
    for(let i=3; i<=num; i++){
        let primeval = 'true';
        for (x=2; x< i; x++ ) {      
            if(i % x === 0){
                primeval = 'false';
                break;
            }
        }
        if(primeval=='true'){
            list.push(i);
        }
        
    } return list;
}

 module.exports ={
       checkprimenum  
 };

console.log( checkprimenum('20'));