let sonuc= 0;
let kutu="0";
let öncekiislem; 

const screen = document.querySelector('.screen')
function buttonclick(value){
    if (isNaN(value)) {
         islem(value);
    }
    else{
        islemnumarası(value);
    } 
    screen.innerText = kutu;
}
function islem(symbol){
       switch (symbol){
        case 'C':
           kutu = "0";
           sonuc=0;
           break;
           case'=':
            if (islemnumarası==null) {
                return;
            }
            temizle(parseInt(kutu))
            islemnumarası=null;
            kutu = toplam;
            toplam=0;
            break;
            case '←':
                if (kutu.length===1) {
                    kutu="0";
                }else{
                    kutu   = kutu.toString(0,kutu.length-1);
                } 
                break;
                case '+':
                case '−':
                case '×':
                case '÷':
                    islemyapma(symbol)
                    break;
       }
       
}
function islemyapma(symbol){
    if (kutu==="0") {
        return;
    }    
        const intkutu = parseInt(kutu);
        if (sonuc===0) {
            sonuc = intkutu;
            
        } else { 
            temizle(intkutu);
            
        }
        öncekiislem = symbol;
        kutu="0";
}
function temizle(intkutu){
         if (öncekiislem==='+') {
                sonuc+=intkutu;
         } else if(öncekiislem==='-')
         {
         sonuc-=intkutu;
         } else if(sonuc==='x'){
            sonuc = sonuc*intkutu;
         } else if(sonuc==='÷')
         sonuc=sonuc/intkutu;
}
function  islemnumarası(numberString){
    if (kutu==="0") {
        kutu=numberString;

    }else {
        kutu+=numberString;
    }
}
function init(){
    document.querySelector('.hesap-buttons').addEventListener('click',
    function(event){buttonclick(event.target.innerText);
    })

}
init();