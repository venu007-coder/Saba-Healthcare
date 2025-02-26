document.addEventListener("DOMContentLoaded", function () {
    function setProgress(percent) {
        const circle = document.querySelector(".progress-ring__circle");
        const text = document.querySelector(".progress-text");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        text.textContent = percent + "%";
    }

    let progressValue = 0;
    const interval = setInterval(() => {
        if (progressValue >= 100) {
            clearInterval(interval);
        } else {
            progressValue++;
            setProgress(progressValue);
        }
    }, 20);
});
