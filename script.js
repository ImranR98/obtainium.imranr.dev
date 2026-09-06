window.onload = async () => {
    const dd = document.querySelector('#downloadDiv')
    const response = await fetch('https://api.github.com/repos/ImranR98/Obtainium/releases/latest');
    const tag = (await response.json()).tag_name;
    if (dd) {
        dd.innerHTML = `
        <a class="btn btn-filled" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-release.apk">Download Universal APK</a>
        <a class="btn btn-outline" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-arm64-v8a-release.apk">armv8</a>
        <a class="btn btn-outline" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-armeabi-v7a-release.apk">armv7</a>
        <a class="btn btn-outline" href="https://github.com/ImranR98/Obtainium/releases/download/${tag}/app-x86_64-release.apk">x64</a>
        `
    }

    const kaoNote = document.querySelector('#kaoNote');
    if (kaoNote && Date.now() < new Date('Jan 1, 2027 00:00:00').getTime()) {
        kaoNote.hidden = false;
    }
}
