// 画像ダウンロード
function downloadImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('inputImage');

    // スライダーから値を取得
    const brightness = document.getElementById('bri-range').value;
    const saturation = document.getElementById('sat-range').value;
    const contrast = document.getElementById('con-range').value;
    const hue = document.getElementById('hue-range').value;
    const grayscale = document.getElementById('gra-range').value;
    const sepia = document.getElementById('sep-range').value;
    const invert = document.getElementById('inv-range').value;
    const blur = document.getElementById('blu-range').value;
    const opacity = document.getElementById('opa-range').value;

    // キャンバスのサイズを設定
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // CSSフィルターをキャンバスに適用
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) hue-rotate(${hue}deg) grayscale(${grayscale}%) sepia(${sepia}%) invert(${invert}%) blur(${blur}px) opacity(${opacity}%)`;

    // 画像をキャンバスに描画
    ctx.drawImage(img, 0, 0);

    // 画像としてキャンバスの内容を取得
    const dataURL = canvas.toDataURL('image/jpeg');

    // ダウンロードリンクを作成してクリック
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'filtered-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}