const screenshotLinks = [...document.querySelectorAll('.screenshot-card')];
const lightbox = document.querySelector('#lightbox');

if (lightbox && screenshotLinks.length) {
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const prevButton = lightbox.querySelector('.lightbox-prev');
    const nextButton = lightbox.querySelector('.lightbox-next');
    const closeButton = lightbox.querySelector('.lightbox-close');
    let currentIndex = 0;
    let lastFocused = null;

    const showImage = (index) => {
        currentIndex = (index + screenshotLinks.length) % screenshotLinks.length;
        const link = screenshotLinks[currentIndex];
        const preview = link.querySelector('img');
        lightboxImage.src = link.href;
        lightboxImage.alt = preview ? preview.alt : '';
        if (!lightbox.classList.contains('open')) {
            lastFocused = document.activeElement;
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            closeButton.focus();
        }
    };

    const hideImage = () => {
        if (!lightbox.classList.contains('open')) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lightboxImage.src = '';
        if (lastFocused) lastFocused.focus();
    };

    screenshotLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showImage(index);
        });
    });

    prevButton.addEventListener('click', () => showImage(currentIndex - 1));
    nextButton.addEventListener('click', () => showImage(currentIndex + 1));
    closeButton.addEventListener('click', hideImage);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) hideImage();
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('open')) return;
        if (event.key === 'Escape') {
            hideImage();
        } else if (event.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }
    });
}

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
