/* =========================================================
   PLAYORA — PLAYER ENGINE
   Connected to data.js
   ========================================================= */

(() => {
  "use strict";

  if (!window.PLAYORA_DATA) {
    console.error("PLAYORA: data.js must load before player.js");
    return;
  }

  const TRACKS = PLAYORA_DATA.tracks;

  const audio = new Audio();
  audio.preload = "metadata";

  let currentIndex = -1;
  let isPlaying = false;

  const savedVolume =
    Number(localStorage.getItem("playoraVolume")) || 0.85;

  audio.volume = savedVolume;

  /* -------------------------------------------------------
     PLAYER
     ------------------------------------------------------- */

  const player = document.createElement("div");

  player.id = "playoraPlayer";

  player.innerHTML = `
    <div class="playora-player">

      <div class="player-track">

        <img
          id="playerCover"
          src="assets/covers/default.jpg"
          alt="Cover"
        >

        <div class="player-info">
          <strong id="playerTitle">Choose a song</strong>
          <span id="playerArtist">PLAYORA</span>
        </div>

      </div>

      <div class="player-controls">

        <button id="prevBtn">⏮</button>

        <button id="mainPlayBtn" class="main-play">
          ▶
        </button>

        <button id="nextBtn">⏭</button>

      </div>

      <div class="player-progress">

        <span id="currentTime">0:00</span>

        <input
          id="progressBar"
          type="range"
          min="0"
          max="100"
          value="0"
        >

        <span id="duration">0:00</span>

      </div>

      <div class="player-volume">

        🔊

        <input
          id="volumeBar"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value="${savedVolume}"
        >

      </div>

    </div>
  `;

  document.body.appendChild(player);


  /* -------------------------------------------------------
     STYLE
     ------------------------------------------------------- */

  const style = document.createElement("style");

  style.textContent = `

    #playoraPlayer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99999;
    }

    .playora-player {
      min-height: 76px;
      padding: 11px 18px;

      display: grid;
      grid-template-columns:
        minmax(170px,1fr)
        auto
        minmax(220px,1.5fr)
        auto;

      align-items: center;
      gap: 20px;

      background:
        linear-gradient(
          135deg,
          rgba(13,8,30,.98),
          rgba(42,7,48,.98)
        );

      border-top:
        1px solid rgba(255,255,255,.1);

      box-shadow:
        0 -12px 40px rgba(0,0,0,.4);

      backdrop-filter: blur(20px);
    }

    .player-track {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    #playerCover {
      width: 52px;
      height: 52px;

      object-fit: cover;

      border-radius: 12px;

      background:
        linear-gradient(135deg,#ff27d9,#704cff);
    }

    .player-info {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    #playerTitle {
      color: #fff;
      font-size: 14px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #playerArtist {
      color: #aaa2b9;
      font-size: 12px;
      margin-top: 4px;
    }

    .player-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .player-controls button {
      width: 38px;
      height: 38px;

      border: none;
      border-radius: 50%;

      background: rgba(255,255,255,.08);
      color: white;

      cursor: pointer;
      transition: .2s;
    }

    .player-controls button:hover {
      transform: scale(1.08);
    }

    .player-controls .main-play {
      width: 48px;
      height: 48px;

      background:
        linear-gradient(135deg,#ff27d9,#704cff);

      box-shadow:
        0 0 20px rgba(255,39,217,.3);
    }

    .player-progress {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .player-progress span {
      color: #aaa2b9;
      font-size: 11px;
      min-width: 32px;
      text-align: center;
    }

    #progressBar,
    #volumeBar {
      accent-color: #ff27d9;
      cursor: pointer;
    }

    #progressBar {
      width: 100%;
    }

    .player-volume {
      display: flex;
      align-items: center;
      gap: 7px;
      color: white;
    }

    #volumeBar {
      width: 80px;
    }

    @media(max-width:850px) {

      .playora-player {
        grid-template-columns: 1fr auto;
        gap: 8px;
      }

      .player-progress {
        grid-column: 1 / -1;
      }

      .player-volume {
        display: none;
      }

    }

    @media(max-width:500px) {

      .playora-player {
        padding: 8px 10px;
      }

      #playerCover {
        width: 44px;
        height: 44px;
      }

      .player-controls button {
        width: 34px;
        height: 34px;
      }

      .player-controls .main-play {
        width: 42px;
        height: 42px;
      }

    }

  `;

  document.head.appendChild(style);


  /* -------------------------------------------------------
     ELEMENTS
     ------------------------------------------------------- */

  const playBtn =
    document.getElementById("mainPlayBtn");

  const prevBtn =
    document.getElementById("prevBtn");

  const nextBtn =
    document.getElementById("nextBtn");

  const progress =
    document.getElementById("progressBar");

  const volume =
    document.getElementById("volumeBar");

  const currentTime =
    document.getElementById("currentTime");

  const duration =
    document.getElementById("duration");

  const title =
    document.getElementById("playerTitle");

  const artist =
    document.getElementById("playerArtist");

  const cover =
    document.getElementById("playerCover");


  /* -------------------------------------------------------
     TIME
     ------------------------------------------------------- */

  function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const minutes =
      Math.floor(seconds / 60);

    const secs =
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${secs}`;
  }


  /* -------------------------------------------------------
     LOAD
     ------------------------------------------------------- */

  function loadTrack(index, autoplay = false) {

    if (!TRACKS.length) return;

    if (index < 0) {
      index = TRACKS.length - 1;
    }

    if (index >= TRACKS.length) {
      index = 0;
    }

    currentIndex = index;

    const track = TRACKS[currentIndex];

    audio.src = track.src;

    title.textContent = track.title;
    artist.textContent = track.artist;

    if (track.cover) {
      cover.src = track.cover;
    }

    progress.value = 0;

    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    if (autoplay) {
      playAudio();
    }
  }


  /* -------------------------------------------------------
     PLAY
     ------------------------------------------------------- */

  function playAudio() {

    if (currentIndex === -1) {
      loadTrack(0);
    }

    audio.play()
      .then(() => {

        isPlaying = true;
        playBtn.textContent = "⏸";

      })
      .catch(error => {

        console.warn(
          "PLAYORA audio could not start:",
          error
        );

        isPlaying = false;
        playBtn.textContent = "▶";

      });
  }


  /* -------------------------------------------------------
     PAUSE
     ------------------------------------------------------- */

  function pauseAudio() {

    audio.pause();

    isPlaying = false;

    playBtn.textContent = "▶";
  }


  /* -------------------------------------------------------
     PLAY / PAUSE
     ------------------------------------------------------- */

  playBtn.onclick = () => {

    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }

  };


  /* -------------------------------------------------------
     NEXT
     ------------------------------------------------------- */

  nextBtn.onclick = () => {

    loadTrack(
      currentIndex + 1,
      true
    );

  };


  /* -------------------------------------------------------
     PREVIOUS
     ------------------------------------------------------- */

  prevBtn.onclick = () => {

    if (audio.currentTime > 3) {

      audio.currentTime = 0;

    } else {

      loadTrack(
        currentIndex - 1,
        true
      );

    }

  };


  /* -------------------------------------------------------
     PROGRESS
     ------------------------------------------------------- */

  audio.addEventListener(
    "timeupdate",
    () => {

      if (!audio.duration) return;

      progress.value =
        (audio.currentTime /
        audio.duration) * 100;

      currentTime.textContent =
        formatTime(audio.currentTime);

    }
  );


  /* -------------------------------------------------------
     DURATION
     ------------------------------------------------------- */

  audio.addEventListener(
    "loadedmetadata",
    () => {

      duration.textContent =
        formatTime(audio.duration);

    }
  );


  /* -------------------------------------------------------
     SEEK
     ------------------------------------------------------- */

  progress.oninput = () => {

    if (!audio.duration) return;

    audio.currentTime =
      (progress.value / 100) *
      audio.duration;

  };


  /* -------------------------------------------------------
     VOLUME
     ------------------------------------------------------- */

  volume.oninput = () => {

    audio.volume =
      Number(volume.value);

    localStorage.setItem(
      "playoraVolume",
      audio.volume
    );

  };


  /* -------------------------------------------------------
     AUTO NEXT
     ------------------------------------------------------- */

  audio.addEventListener(
    "ended",
    () => {

      loadTrack(
        currentIndex + 1,
        true
      );

    }
  );


  /* -------------------------------------------------------
     PUBLIC PLAYORA API
     ------------------------------------------------------- */

  window.PLAYORA_PLAYER = {

    playTrack(id) {

      const index =
        TRACKS.findIndex(
          track => track.id === id
        );

      if (index === -1) {
        console.warn(
          "PLAYORA track not found:",
          id
        );
        return;
      }

      loadTrack(index, true);
    },

    play() {
      playAudio();
    },

    pause() {
      pauseAudio();
    },

    next() {
      loadTrack(currentIndex + 1, true);
    },

    previous() {
      loadTrack(currentIndex - 1, true);
    },

    getCurrentTrack() {
      return TRACKS[currentIndex] || null;
    }

  };


  /* Backwards-compatible function */
  window.playTrack = function(id) {
    window.PLAYORA_PLAYER.playTrack(id);
  };


})();