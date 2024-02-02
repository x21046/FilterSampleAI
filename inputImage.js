function previewImage(obj) {
    var fileReader = new FileReader();
    fileReader.onload = (function() {
        var result = fileReader.result;
        document.getElementById('inputImage').src = result;
        document.getElementById('outputImage').src = result;

        // 画像のデータをセッションストレージに保存
        sessionStorage.setItem('uploadedImage', result);
    });
    fileReader.readAsDataURL(obj.files[0]);
}

// ページが読み込まれたときにセッションストレージから画像を読み込む
document.addEventListener('DOMContentLoaded', function() {
    var uploadedImage = sessionStorage.getItem('uploadedImage');
    if (uploadedImage) {
        document.getElementById('inputImage').src = uploadedImage;
        document.getElementById('outputImage').src = uploadedImage;
    }
});