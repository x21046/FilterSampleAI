//明度
function briReset(){
    var briReset = document.getElementById('bri-range');
    var briVal = document.getElementById('bri-rs-bullet');
    briVal.innerText = '100';
    briReset.value = 100;
    document.querySelector(':root').style.setProperty('--bri-value', `100%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//彩度
function satReset(){
    var satReset = document.getElementById('sat-range');
    var satVal = document.getElementById('sat-rs-bullet');
    satVal.innerText = '100';
    satReset.value = 100;
    document.querySelector(':root').style.setProperty('--sat-value', `100%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//コントラスト
function conReset(){
    var conReset = document.getElementById('con-range');
    var conVal = document.getElementById('con-rs-bullet');
    conVal.innerText = '100';
    conReset.value = 100;
    document.querySelector(':root').style.setProperty('--con-value', `100%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//色調変更
function hueReset(){
    var hueReset = document.getElementById('hue-range');
    var hueVal = document.getElementById('hue-rs-bullet');
    hueVal.innerText = '0';
    hueReset.value = 0;
    document.querySelector(':root').style.setProperty('--hue-value', `0deg`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//モノクロ
function graReset(){
    var graReset = document.getElementById('gra-range');
    var graVal = document.getElementById('gra-rs-bullet');
    graVal.innerText = '0';
    graReset.value = 0;
    document.querySelector(':root').style.setProperty('--gra-value', `0%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//セピア
function sepReset(){
    var sepReset = document.getElementById('sep-range');
    var sepVal = document.getElementById('sep-rs-bullet');
    sepVal.innerText = '0';
    sepReset.value = 0;
    document.querySelector(':root').style.setProperty('--sep-value', `0%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//ネガ化
function invReset(){
    var invReset = document.getElementById('inv-range');
    var invVal = document.getElementById('inv-rs-bullet');
    invVal.innerText = '0';
    invReset.value = 0;
    document.querySelector(':root').style.setProperty('--inv-value', `0%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//ぼかし
function bluReset(){
    var bluReset = document.getElementById('blu-range');
    var bluVal = document.getElementById('blu-rs-bullet');
    bluVal.innerText = '0';
    bluReset.value = 0;
    document.querySelector(':root').style.setProperty('--blu-value', `0px`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//透過
function opaReset(){
    var opaReset = document.getElementById('opa-range');
    var opaVal = document.getElementById('opa-rs-bullet');
    opaVal.innerText = '100';
    opaReset.value = 100;
    document.querySelector(':root').style.setProperty('--opa-value', `100%`);
    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}

//全てリセット
function allReset(){
    var briReset = document.getElementById('bri-range');
    var briVal = document.getElementById('bri-rs-bullet');
    briVal.innerText = '100';
    briReset.value = 100;
    document.querySelector(':root').style.setProperty('--bri-value', `100%`);

    var satReset = document.getElementById('sat-range');
    var satVal = document.getElementById('sat-rs-bullet');
    satVal.innerText = '100';
    satReset.value = 100;
    document.querySelector(':root').style.setProperty('--sat-value', `100%`);

    var conReset = document.getElementById('con-range');
    var conVal = document.getElementById('con-rs-bullet');
    conVal.innerText = '100';
    conReset.value = 100;
    document.querySelector(':root').style.setProperty('--con-value', `100%`);

    var hueReset = document.getElementById('hue-range');
    var hueVal = document.getElementById('hue-rs-bullet');
    hueVal.innerText = '0';
    hueReset.value = 0;
    document.querySelector(':root').style.setProperty('--hue-value', `0deg`);

    var graReset = document.getElementById('gra-range');
    var graVal = document.getElementById('gra-rs-bullet');
    graVal.innerText = '0';
    graReset.value = 0;
    document.querySelector(':root').style.setProperty('--gra-value', `0%`);

    var sepReset = document.getElementById('sep-range');
    var sepVal = document.getElementById('sep-rs-bullet');
    sepVal.innerText = '0';
    sepReset.value = 0;
    document.querySelector(':root').style.setProperty('--sep-value', `0%`);

    var invReset = document.getElementById('inv-range');
    var invVal = document.getElementById('inv-rs-bullet');
    invVal.innerText = '0';
    invReset.value = 0;
    document.querySelector(':root').style.setProperty('--inv-value', `0%`);

    var bluReset = document.getElementById('blu-range');
    var bluVal = document.getElementById('blu-rs-bullet');
    bluVal.innerText = '0';
    bluReset.value = 0;
    document.querySelector(':root').style.setProperty('--blu-value', `0px`);

    var opaReset = document.getElementById('opa-range');
    var opaVal = document.getElementById('opa-rs-bullet');
    opaVal.innerText = '100';
    opaReset.value = 100;
    document.querySelector(':root').style.setProperty('--opa-value', `100%`);

    updateURL();

    // 全てのスライダーをリセットした後、現在の状態を保存します。
    saveCurrentState();
}