const briInputElem = document.getElementById('bri-range');
const briValueElem = document.getElementById('bri-value');

// 現在の値を埋め込む関数
const setbriValue = (val) => {
    briValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const briRangeOnChange = (e) =>{
    setbriValue(e.target.value);
}

function briResetDst(){
    briValueElem.innerText = '100';
}

const satInputElem = document.getElementById('sat-range');
const satValueElem = document.getElementById('sat-value');

// 現在の値を埋め込む関数
const setsatValue = (val) => {
    satValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const satRangeOnChange = (e) =>{
    setsatValue(e.target.value);
}

function satResetDst(){
    satValueElem.innerText = '100';
}

const conInputElem = document.getElementById('con-range');
const conValueElem = document.getElementById('con-value');

// 現在の値を埋め込む関数
const setconValue = (val) => {
    conValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const conRangeOnChange = (e) =>{
    setconValue(e.target.value);
}

function conResetDst(){
    conValueElem.innerText = '100';
}

const hueInputElem = document.getElementById('hue-range');
const hueValueElem = document.getElementById('hue-value');

// 現在の値を埋め込む関数
const sethueValue = (val) => {
    hueValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const hueRangeOnChange = (e) =>{
    sethueValue(e.target.value);
}

function hueResetDst(){
    hueValueElem.innerText = '0';
}

const graInputElem = document.getElementById('gra-range');
const graValueElem = document.getElementById('gra-value');

// 現在の値を埋め込む関数
const setgraValue = (val) => {
    graValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const graRangeOnChange = (e) =>{
    setgraValue(e.target.value);
}

function graResetDst(){
    graValueElem.innerText = '0';
}

const sepInputElem = document.getElementById('sep-range');
const sepValueElem = document.getElementById('sep-value');

// 現在の値を埋め込む関数
const setsepValue = (val) => {
    sepValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const sepRangeOnChange = (e) =>{
    setsepValue(e.target.value);
}

function sepResetDst(){
    sepValueElem.innerText = '0';
}

const invInputElem = document.getElementById('inv-range');
const invValueElem = document.getElementById('inv-value');

// 現在の値を埋め込む関数
const setinvValue = (val) => {
    invValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const invRangeOnChange = (e) =>{
    setinvValue(e.target.value);
}

function invResetDst(){
    invValueElem.innerText = '0';
}

const bluInputElem = document.getElementById('blu-range');
const bluValueElem = document.getElementById('blu-value');

// 現在の値を埋め込む関数
const setbluValue = (val) => {
    bluValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const bluRangeOnChange = (e) =>{
    setbluValue(e.target.value);
}

function bluResetDst(){
    bluValueElem.innerText = '0';
}

const opaInputElem = document.getElementById('opa-range');
const opaValueElem = document.getElementById('opa-value');

// 現在の値を埋め込む関数
const setopaValue = (val) => {
    opaValueElem.innerText = val;
}
  
// inputイベント時に値をセットする関数
const opaRangeOnChange = (e) =>{
    setopaValue(e.target.value);
}

function opaResetDst(){
    opaValueElem.innerText = '100';
}

function allResetDst(){
    briValueElem.innerText = '100';
    conValueElem.innerText = '100';
    satValueElem.innerText = '100';
    hueValueElem.innerText = '0';
    graValueElem.innerText = '0';
    sepValueElem.innerText = '0';
    invValueElem.innerText = '0';
    bluValueElem.innerText = '0';
    opaValueElem.innerText = '100';
}

window.onload = () => {
    // 変更に合わせてイベントを発火する
    briInputElem.addEventListener('input', briRangeOnChange);
    // ページ読み込み時の値をセット
    setbriValue(briInputElem.value);

    // 変更に合わせてイベントを発火する
    satInputElem.addEventListener('input', satRangeOnChange);
    // ページ読み込み時の値をセット
    setsatValue(satInputElem.value);

    // 変更に合わせてイベントを発火する
    conInputElem.addEventListener('input', conRangeOnChange);
    // ページ読み込み時の値をセット
    setconValue(conInputElem.value);

    // 変更に合わせてイベントを発火する
    hueInputElem.addEventListener('input', hueRangeOnChange);
    // ページ読み込み時の値をセット
    sethueValue(hueInputElem.value);

    // 変更に合わせてイベントを発火する
    graInputElem.addEventListener('input', graRangeOnChange);
    // ページ読み込み時の値をセット
    setgraValue(graInputElem.value);

    // 変更に合わせてイベントを発火する
    sepInputElem.addEventListener('input', sepRangeOnChange);
    // ページ読み込み時の値をセット
    setsepValue(sepInputElem.value);

    // 変更に合わせてイベントを発火する
    invInputElem.addEventListener('input', invRangeOnChange);
    // ページ読み込み時の値をセット
    setinvValue(invInputElem.value);

    // 変更に合わせてイベントを発火する
    bluInputElem.addEventListener('input', bluRangeOnChange);
    // ページ読み込み時の値をセット
    setbluValue(bluInputElem.value);

    // 変更に合わせてイベントを発火する
    opaInputElem.addEventListener('input', opaRangeOnChange);
    // ページ読み込み時の値をセット
    setopaValue(opaInputElem.value);
}



function copyToClipboard() {
    // コピー対象のpタグオブジェクトを取得する.
    let pTag = document.getElementById('dst');
    // コピー内容を選択する.
    let range = document.createRange();
    range.selectNodeContents(pTag);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    // 選択したものをコピーする.
    document.execCommand('copy');
    // コピー内容の選択を解除する.
    selection.removeAllRanges();
    alert("コピーできました！");
}