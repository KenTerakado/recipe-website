window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrolled = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var gradientStop = windowHeight / 0.5;

    if (scrolled <= gradientStop) {
        var opacity = scrolled / gradientStop;
        var startColor = [138, 18, 0];
        var endColor = [59, 15, 17];
        var color = interpolateColors(startColor, endColor, opacity);
        var backgroundColor = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
            header.style.backgroundColor = backgroundColor;
        } else {
            header.style.backgroundColor = 'rgb(59, 15, 17)';
        }
    });

function interpolateColors(startColor, endColor, opacity) {
        var interpolatedColor = [];
        for (var i = 0; i < startColor.length; i++) {
            var colorComponent = Math.round(startColor[i] * (1 - opacity) + endColor[i] * opacity);
            interpolatedColor.push(colorComponent);
        }
    return interpolatedColor;
}