function updateURL() {
    const params = new URLSearchParams();
    document.querySelectorAll('.rs-range').forEach(slider => {
        params.set(slider.id, slider.value);
    });
    history.replaceState(null, '', '?' + params.toString());
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.rs-range').forEach(slider => {
        slider.addEventListener('input', updateURL);
    });

    // 初期URL更新
    updateURL();
});