document.querySelector('#number_of_cases').addEventListener('click',
    ()=>{
        document.querySelector('#enter').style.display='flex';
    }
);
document.querySelector('#again').addEventListener('click',
    ()=>{
        location.reload();
    }
)
document.querySelector('#cases_submit').addEventListener('click',
    ()=>{
        const inputValue=document.querySelector('#cases_input').value;
        document.querySelector('#cases').style.display='none';
        document.querySelector('#enter').style.display='none';
        document.querySelector("#choices").style.display='flex';
        document.querySelector("#expected_death").innerHTML=`Expected Deaths: ${inputValue}`;
        let simrnd=simulateRandom(inputValue);
        let sim50=simulate50(inputValue);
        let sim10=simulate10(inputValue);
        compare(simrnd,sim50,sim10);
        document.querySelector('#again').style.display='flex';
    }
);
function compare(a,b,c){
    let l = [
        { val: a, label: 'Random' },
        { val: b, label: '50% Choice' },
        { val: c, label: '10% Choice' }
    ];
    l.sort((x, y) => x.val - y.val);
    let str = l.map(item => item.label).join(' < ');
    document.querySelector('#comparison').innerHTML = str;
}
function death10(){
    let rnd=Math.random();
    if(rnd<0.1){
        return true;
    }
    return false;
};
function death50(){
    let rnd=Math.random();
    if(rnd<0.50){
        return true;
    }
    return false;
};
function simulateRandom(cases){
    let deaths=0;
    for(let i=0;i<cases;i++){
        let rnd=Math.random();
        if(rnd<0.50){
            if(death10()){
                deaths+=10;
            }
        }
        else{
            if(death50()){
                deaths+=2;
            }
        }
    }
    document.querySelector('#result_random').innerHTML=`Total Deaths: ${deaths}`;
    return deaths;
};
function simulate10(cases){
    let deaths=0;
    for(let i=0;i<cases;i++){
        let rnd=Math.random();
        if(rnd<0.10){
            deaths+=10;
        }
    }
    document.querySelector('#result_10').innerHTML=`Total Deaths: ${deaths}`;
    return deaths;
};
function simulate50(cases){
    let deaths=0;
    for(let i=0;i<cases;i++){
        let rnd=Math.random();
        if(rnd<0.5){
            deaths+=2;
        }
    }
    document.querySelector('#result_50').innerHTML=`Total Deaths: ${deaths}`;
    return deaths;
};