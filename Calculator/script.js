function ClearScreen(){
    document.getElementById('screen').textContent='0';
}
function deleteLastChar(){
  let screenContent = document.getElementById('screen').textContent;
    screenContent = screenContent.slice(0, -1);
    if (screenContent === '')
    {
      screenContent = '0';    
    }
    document.getElementById('sceen').textContent=screenContent;
}
function appendNumber(number) {
    let screenContent = document.getElementById('screen').textContent;
    if (screenContent === '0' && number !== 0) {
        screenContent = '';
    }
    screenContent += number.toString();
    document.getElementById('screen').textContent = screenContent.replace(/^0+/, '');
}
function appendSymbol(symbol){
    let screenContent = document.getElementById('screen').textContent;
    if (screenContent!== '0')  {
    document.getElementById('screen').textContent+= symbol;
    }
}
function CalculateResult() {
    let screenContent = document.getElementById('screen').textContent;
    try {
        const result = eval(screenContent);
        document.getElementById('screen').textContent = '' + result + '';
    } catch (error) {
       document.getElementById('screen').textContent='Error';  
    }
    document.addEventListener('DOMContentLoaded',function(){
        document.addEventListener('keydown',function(event){
            event.preventDefault();
        })
    });
}
document.addEventListener('keydown',function(event){
    const key = event.key;
    const numberKeys = ['0','1','2','3','4','5','6','7','8','9'];
    const OperatorKeys = ['/','*','+','-']
    if (numberKeys.includes(key)) {
        appendNumber(parseInt(key));
    } else if(OperatorKeys.includes(key))
    {
       appendSymbol(key)   ; 
    } else if(key === 'Enter')
    {
       CalculateResult();
    } else if(key=== 'Backspace'){
       deleteLastChar();
    }else if (key==='Delete'){
         ClearScreen();
    }
});