const $ = el => document.querySelector(el)

function bgChangeWhite(){
    $(':root').style.setProperty('--bg-color', `#FFF`);
    $(':root').style.setProperty('--txt-color', `#000`);
}

function bgChangeBlack(){
    $(':root').style.setProperty('--bg-color', `#111`);
    $(':root').style.setProperty('--txt-color', `#FFF`);
}

function bgChangeGray(){
    $(':root').style.setProperty('--bg-color', `#CCC`);
    $(':root').style.setProperty('--txt-color', `#000`);
}

//明度
$('#bri-range').addEventListener('input', briE => {
  $(':root').style.setProperty('--bri-value', `${briE.target.value}%`);
})

//彩度
$('#sat-range').addEventListener('input', satE => {
    $(':root').style.setProperty('--sat-value', `${satE.target.value}%`);
})

//コントラスト
$('#con-range').addEventListener('input', conE => {
    $(':root').style.setProperty('--con-value', `${conE.target.value}%`);
})

//色調変更
$('#hue-range').addEventListener('input', hueE => {
    $(':root').style.setProperty('--hue-value', `${hueE.target.value}deg`);
})

//モノクロ
$('#gra-range').addEventListener('input', graE => {
    $(':root').style.setProperty('--gra-value', `${graE.target.value}%`);
})

//セピア
$('#sep-range').addEventListener('input', sepE => {
    $(':root').style.setProperty('--sep-value', `${sepE.target.value}%`);
})

//ネガ化
$('#inv-range').addEventListener('input', invE => {
    $(':root').style.setProperty('--inv-value', `${invE.target.value}%`);
})

//透過
$('#opa-range').addEventListener('input', opaE => {
    $(':root').style.setProperty('--opa-value', `${opaE.target.value}%`);
})

//ぼかし
$('#blu-range').addEventListener('input', bluE => {
    $(':root').style.setProperty('--blu-value', `${bluE.target.value}px`);
})