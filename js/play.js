document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function () {
        const container = this.parentElement;
        const iframe = container.querySelector('iframe');

        this.style.display = 'none';
        iframe.classList.remove('video--hidden');
        iframe.classList.add('video--visible');
    });
});