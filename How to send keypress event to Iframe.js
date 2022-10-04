var iframeElement = document.getElementsByTagName("iframe")[0]

setTimeout(machet,100);

function machet() {
    iframeElement.contentWindow.focus();
}