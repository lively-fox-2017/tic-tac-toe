function tic_tac_toe(){

    var tic = 'xo'
    var str = ''
    var arr = []
    var jO = 0, jX = 0
    for(var i = 0; i < 3; i++){
        arr.push([])
        for(var j = 0; j < 3; j++){
            str = tic.charAt(Math.floor(Math.random() * tic.length))
            if(str === 'x') {
              if(jX < 5){
                arr[i].push(str)
                jX += 1
              }else{
                arr[i].push('o')
                jO += 1
              }
            }else if(str === 'o'){
              if(jO < 5){
                arr[i].push(str)
                jO += 1
              }else{
                arr[i].push('x')
                jX += 1
              }
            }
        }
    }
    return arr

}

console.log(tic_tac_toe())
