
function snakeToCamel(str){
    camelString=str.split('')
    for(let i=0;i<camelString.length;i++){
        if(camelString[i] === '_'){
            if(camelString[i+1] !== undefined){
                camelString[i+1]=camelString[i+1].toUpperCase()
            }
            camelString.splice(i,1)
        }
    }
    camelString=camelString.join('')
    return camelString

}