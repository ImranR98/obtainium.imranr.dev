window.onload = async () => {
    const dd = document.querySelector('#downloadDiv')
    const response = await fetch('https://api.github.com/repos/ImranR98/Obtainium/releases/latest');
    const tag = (await response.json()).tag_name;
    if (dd) {
        dd.innerHTML = `
        <a type="button" class="btn btn-warning" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-release.apk">Download Universal APK</a>
        <a type="button" class="btn btn-outline-warning" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-arm64-v8a-release.apk">armv8</a>
        <a type="button" class="btn btn-outline-warning" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-armeabi-v7a-release.apk">armv7</a>
        <a type="button" class="btn btn-outline-warning" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-x86_64-release.apk">x64</a>
        `
    }
}