//明度
var bri_rangeSlider = document.getElementById("bri-range");
var bri_rangeBullet = document.getElementById("bri-rs-bullet");

bri_rangeSlider.addEventListener("input", bri_showSliderValue, false);

function bri_showSliderValue() {
  bri_rangeBullet.innerHTML = bri_rangeSlider.value;
  var bri_bulletPosition = (bri_rangeSlider.value /bri_rangeSlider.max);
  bri_rangeBullet.style.left = (bri_bulletPosition * 578) + "px";
}

//彩度
var sat_rangeSlider = document.getElementById("sat-range");
var sat_rangeBullet = document.getElementById("sat-rs-bullet");

sat_rangeSlider.addEventListener("input", sat_showSliderValue, false);

function sat_showSliderValue() {
  sat_rangeBullet.innerHTML = sat_rangeSlider.value;
  var sat_bulletPosition = (sat_rangeSlider.value /sat_rangeSlider.max);
  sat_rangeBullet.style.left = (sat_bulletPosition * 578) + "px";
}

//コントラスト
var con_rangeSlider = document.getElementById("con-range");
var con_rangeBullet = document.getElementById("con-rs-bullet");

con_rangeSlider.addEventListener("input", con_showSliderValue, false);

function con_showSliderValue() {
  con_rangeBullet.innerHTML = con_rangeSlider.value;
  var con_bulletPosition = (con_rangeSlider.value /con_rangeSlider.max);
  con_rangeBullet.style.left = (con_bulletPosition * 578) + "px";
}

//色調変更
var hue_rangeSlider = document.getElementById("hue-range");
var hue_rangeBullet = document.getElementById("hue-rs-bullet");

hue_rangeSlider.addEventListener("input",  hue_showSliderValue, false);

function hue_showSliderValue() {
  hue_rangeBullet.innerHTML = hue_rangeSlider.value;
  var hue_bulletPosition = (hue_rangeSlider.value /hue_rangeSlider.max);
  hue_rangeBullet.style.left = (hue_bulletPosition * 578) + "px";
}

//モノクロ
var gra_rangeSlider = document.getElementById("gra-range");
var gra_rangeBullet = document.getElementById("gra-rs-bullet");

gra_rangeSlider.addEventListener("input",  gra_showSliderValue, false);

function gra_showSliderValue() {
  gra_rangeBullet.innerHTML = gra_rangeSlider.value;
  var gra_bulletPosition = (gra_rangeSlider.value /gra_rangeSlider.max);
  gra_rangeBullet.style.left = (gra_bulletPosition * 578) + "px";
}

//セピア
var sep_rangeSlider = document.getElementById("sep-range");
var sep_rangeBullet = document.getElementById("sep-rs-bullet");

sep_rangeSlider.addEventListener("input",  sep_showSliderValue, false);

function sep_showSliderValue() {
  sep_rangeBullet.innerHTML = sep_rangeSlider.value;
  var sep_bulletPosition = (sep_rangeSlider.value /sep_rangeSlider.max);
  sep_rangeBullet.style.left = (sep_bulletPosition * 578) + "px";
}

//ネガ化
var inv_rangeSlider = document.getElementById("inv-range");
var inv_rangeBullet = document.getElementById("inv-rs-bullet");

inv_rangeSlider.addEventListener("input",  inv_showSliderValue, false);

function inv_showSliderValue() {
  inv_rangeBullet.innerHTML = inv_rangeSlider.value;
  var inv_bulletPosition = (inv_rangeSlider.value /inv_rangeSlider.max);
  inv_rangeBullet.style.left = (inv_bulletPosition * 578) + "px";
}

//ぼかし
var blu_rangeSlider = document.getElementById("blu-range");
var blu_rangeBullet = document.getElementById("blu-rs-bullet");

blu_rangeSlider.addEventListener("input",  blu_showSliderValue, false);

function blu_showSliderValue() {
  blu_rangeBullet.innerHTML = blu_rangeSlider.value;
  var blu_bulletPosition = (blu_rangeSlider.value /blu_rangeSlider.max);
  blu_rangeBullet.style.left = (blu_bulletPosition * 578) + "px";
}

//透過
var opa_rangeSlider = document.getElementById("opa-range");
var opa_rangeBullet = document.getElementById("opa-rs-bullet");

opa_rangeSlider.addEventListener("input",  opa_showSliderValue, false);

function opa_showSliderValue() {
  opa_rangeBullet.innerHTML = opa_rangeSlider.value;
  var opa_bulletPosition = (opa_rangeSlider.value /opa_rangeSlider.max);
  opa_rangeBullet.style.left = (opa_bulletPosition * 578) + "px";
}