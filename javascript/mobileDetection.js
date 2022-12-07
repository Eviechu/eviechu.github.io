function toggleTheme(node) {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
    // This checks if the current device is in fact mobile
        node.rel = 'stylesheet-mobile';
    } else {
        node.rel = 'stylesheet';
    }
};