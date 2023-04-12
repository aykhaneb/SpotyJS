let curr_track = document.querySelector('audio');
let track = document.querySelector("#playpause-track")
track.onclick = function playpauseTrack() {
    if (curr_track.paused)
        curr_track.play();
    else
        curr_track.pause();
}



