window.addEventListener('load', function() {

    
    var title = document.getElementById('title');
    title.addEventListener('click', titleClick);

    var subtitle = document.getElementById('subtitle');
    subtitle.addEventListener('click', subtitleClick);

    var startButton = document.getElementById('btn-start');
    startButton.addEventListener('click', startTimer);

    var stopButton = document.getElementById('btn-stop');
    stopButton.addEventListener('click', stopTimer);
    stopButton.disabled = true;

    var resetButton = document.getElementById('btn-reset');
    resetButton.addEventListener('click', resetTimer);

    var setButton = document.getElementById('btn-timeset');
    setButton.addEventListener('click', setTimer);

    var setTimeButton = document.getElementById('btn-set-time');
    setTimeButton.addEventListener('click', setTimeClick);

    var hoursInput = document.getElementById('hours');
    var minutesInput = document.getElementById('minutes');
    var secondsInput = document.getElementById('seconds');

    var timer = document.getElementById('timer');
    var time = 0;

    var timesetCloseButton = document.getElementById('btn-timeset-close');
    timesetCloseButton.addEventListener('click', timesetCloseClick);

    var interval;

    
    function titleClick() {
        var titleInput = document.getElementById('title-input');
        var titleSpan = document.getElementById('title-span');
        titleInput.value = titleSpan.innerHTML;
        titleInput.style.display = 'block';
        titleSpan.style.display = 'none';
        titleInput.focus();
        titleInput.addEventListener('blur', function() {
            titleSpan.innerHTML = titleInput.value;
            titleInput.style.display = 'none';
            titleSpan.style.display = 'block';
        });
    }

    function subtitleClick() {
        var subtitleInput = document.getElementById('subtitle-input');
        var subtitleSpan = document.getElementById('subtitle-span');
        subtitleInput.value = subtitleSpan.innerHTML;
        subtitleInput.style.display = 'block';
        subtitleSpan.style.display = 'none';
        subtitleInput.focus();
        subtitleInput.addEventListener('blur', function() {
            subtitleSpan.innerHTML = subtitleInput.value;
            subtitleInput.style.display = 'none';
            subtitleSpan.style.display = 'block';
        });
    }
    
    function setTimeClick() {
        var setterDiv = document.getElementById('setter');
        setterDiv.style.display = 'block';
        setTimeButton.style.display = 'none';
    }

    function timesetCloseClick() {
        var setterDiv = document.getElementById('setter');
        setterDiv.style.display = 'none';
        setTimeButton.style.display = 'block';
    }

    function startTimer() {
        startButton.disabled = true;
        stopButton.disabled = false;
        timer.style.color = '#fc0';
        interval = setInterval(function() {
            time++;
            timer.innerHTML = formatHms(time);
        }, 1000);
    }

    function stopTimer() {
        startButton.disabled = false;
        stopButton.disabled = true;
        timer.style.color = '#999';
        clearInterval(interval);
    }

    function resetTimer() {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(interval);
        time = 0;
        timer.innerHTML = formatHms(time);
    }

    function formatHms(time) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time % 3600) / 60);
        var seconds = time % 60
        hoursInput.value = pad(hours);
        minutesInput.value = pad(minutes);
        secondsInput.value = pad(seconds);
        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }

    function setTimer() {
        var hours = parseInt(document.getElementById('hours').value);
        var minutes = parseInt(document.getElementById('minutes').value);
        var seconds = parseInt(document.getElementById('seconds').value);
        if (hours < 0 || isNaN(hours)) hours = 0;
        if (hours > 99) hours = 99;
        if (minutes < 0 || isNaN(minutes)) minutes = 0;
        if (minutes > 59) minutes = 59;
        if (seconds < 0 || isNaN(seconds)) seconds = 0;
        if (seconds > 59) seconds = 59;
        time = hours * 3600 + minutes * 60 + seconds;
        timer.innerHTML = formatHms(time);
        timesetCloseClick();
    }

    function pad(num) {
        return num < 10 ? '0' + num : num;
    }

});
