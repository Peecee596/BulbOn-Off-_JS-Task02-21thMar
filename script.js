console.log("change")

function lightOn(){
    // console.log('menu')
    let bulbLight=document.getElementById('img')

    if(bulbLight.src.match('pic_bulboff')){
        bulbLight.src='./images/pic_bulbon.gif'
       
    }
    else{
        bulbLight.src='./images/pic_bulboff.gif'
    }
       
   
}
