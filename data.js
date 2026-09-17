/* =========================================================
   PLAYORA — MUSIC DATABASE
   data.js
   ========================================================= */

const PLAYORA_DATA = {

  /* -------------------------------------------------------
     PLATFORM
     ------------------------------------------------------- */

  platform: {
    name: "PLAYORA",
    tagline: "Music without limits.",
    description: "Discover music, artists and projects in one place."
  },


  /* -------------------------------------------------------
     FEATURED ARTISTS
     ------------------------------------------------------- */

  artists: [

    {
      id: "thugkeed",
      name: "Thugkeed",
      genre: "Hip-Hop",
      location: "South Africa",
      verified: true,
      image: "assets/covers/thugkeed.jpg",

      spotify:
        "https://open.spotify.com/artist/0pLKp8JWae8rUyVF2u1e1r?si=4AcRpX0AT2S_wu7ugjr7TQ&utm_source=copy-link"
    },

    {
      id: "nova",
      name: "Nova",
      genre: "R&B",
      location: "PLAYORA",
      verified: true,
      image: "assets/covers/nova.jpg"
    },

    {
      id: "aria",
      name: "Aria",
      genre: "Afro",
      location: "PLAYORA",
      verified: true,
      image: "assets/covers/aria.jpg"
    },

    {
      id: "kai",
      name: "Kai",
      genre: "Trap",
      location: "PLAYORA",
      verified: false,
      image: "assets/covers/kai.jpg"
    },

    {
      id: "luna",
      name: "Luna",
      genre: "R&B",
      location: "PLAYORA",
      verified: true,
      image: "assets/covers/luna.jpg"
    }

  ],


  /* -------------------------------------------------------
     TRACKS
     ------------------------------------------------------- */

  tracks: [

    {
      id: "trench",

      title: "Since From The Trench",

      artist: "Thugkeed",
      artistId: "thugkeed",

      genre: "Hip-Hop",
      type: "Single",

      duration: "3:24",

      src:
        "assets/music/since-from-the-trench.mp3",

      cover:
        "assets/covers/thugkeed.jpg",

      spotify:
        "https://open.spotify.com/artist/0pLKp8JWae8rUyVF2u1e1r?si=4AcRpX0AT2S_wu7ugjr7TQ&utm_source=copy-link",

      featured: true,
      trending: true
    },


    {
      id: "motion",

      title: "Motion Wave",

      artist: "Thugkeed",
      artistId: "thugkeed",

      genre: "Trap",
      type: "Single",

      duration: "2:58",

      src:
        "assets/music/motion-wave.mp3",

      cover:
        "assets/covers/thugkeed.jpg",

      spotify:
        "https://open.spotify.com/artist/0pLKp8JWae8rUyVF2u1e1r?si=4AcRpX0AT2S_wu7ugjr7TQ&utm_source=copy-link",

      featured: true,
      trending: true
    },


    {
      id: "mathata",

      title: "MATHATA THATAA",

      artist: "Thugkeed",
      artistId: "thugkeed",

      genre: "Hip-Hop",
      type: "Single",

      duration: "3:01",

      src:
        "assets/music/mathata-thataa.mp3",

      cover:
        "assets/covers/thugkeed.jpg",

      spotify:
        "https://open.spotify.com/artist/0pLKp8JWae8rUyVF2u1e1r?si=4AcRpX0AT2S_wu7ugjr7TQ&utm_source=copy-link",

      featured: false,
      trending: true
    },


    {
      id: "sixbynine",

      title: "SixbyNine Drill",

      artist: "Thugkeed",
      artistId: "thugkeed",

      genre: "Drill",
      type: "Freestyle",

      duration: "2:41",

      src:
        "assets/music/sixbynine-drill.mp3",

      cover:
        "assets/covers/thugkeed.jpg",

      spotify:
        "https://open.spotify.com/artist/0pLKp8JWae8rUyVF2u1e1r?si=4AcRpX0AT2S_wu7ugjr7TQ&utm_source=copy-link",

      featured: false,
      trending: true
    },


    {
      id: "midnight-drive",

      title: "Midnight Drive",

      artist: "Nova",
      artistId: "nova",

      genre: "R&B",
      type: "Single",

      duration: "3:12",

      src:
        "assets/music/midnight-drive.mp3",

      cover:
        "assets/covers/nova.jpg",

      featured: false,
      trending: true
    },


    {
      id: "afterglow",

      title: "Afterglow",

      artist: "Aria",
      artistId: "aria",

      genre: "Afro",
      type: "Single",

      duration: "3:36",

      src:
        "assets/music/afterglow.mp3",

      cover:
        "assets/covers/aria.jpg",

      featured: false,
      trending: true
    },


    {
      id: "red-lights",

      title: "Red Lights",

      artist: "Kai",
      artistId: "kai",

      genre: "Trap",
      type: "Single",

      duration: "2:54",

      src:
        "assets/music/red-lights.mp3",

      cover:
        "assets/covers/kai.jpg",

      featured: false,
      trending: true
    },


    {
      id: "blue-hour",

      title: "Blue Hour",

      artist: "Luna",
      artistId: "luna",

      genre: "R&B",
      type: "Single",

      duration: "3:18",

      src:
        "assets/music/blue-hour.mp3",

      cover:
        "assets/covers/luna.jpg",

      featured: false,
      trending: true
    },


    {
      id: "night-drive",

      title: "Night Drive",

      artist: "Nova",
      artistId: "nova",

      genre: "R&B",
      type: "Single",

      duration: "3:09",

      src:
        "assets/music/night-drive.mp3",

      cover:
        "assets/covers/nova.jpg",

      featured: false,
      trending: true
    },


    {
      id: "after-hours",

      title: "After Hours",

      artist: "Aria",
      artistId: "aria",

      genre: "Afro",
      type: "Single",

      duration: "3:27",

      src:
        "assets/music/after-hours.mp3",

      cover:
        "assets/covers/aria.jpg",

      featured: false,
      trending: true
    }

  ],


  /* -------------------------------------------------------
     ALBUMS / PROJECTS
     ------------------------------------------------------- */

  albums: [

    {
      id: "since-from-the-trench",

      title: "Since From The Trench",

      artist: "Thugkeed",
      artistId: "thugkeed",

      genre: "Hip-Hop",

      year: "2026",

      type: "Single",

      cover:
        "assets/covers/thugkeed.jpg",

      tracks: [
        "trench"
      ]
    },


    {
      id: "lavida-loca",

      title: "Lavida Loca",

      artist: "Thugkeed",
      artistId: "thugkeed",

      genre: "Trap",

      year: "2026",

      type: "Single",

      cover:
        "assets/covers/thugkeed.jpg",

      tracks: [
        "motion"
      ]
    },


    {
      id: "night-drive",

      title: "Night Drive",

      artist: "Nova",
      artistId: "nova",

      genre: "R&B",

      year: "2026",

      type: "Single",

      cover:
        "assets/covers/nova.jpg",

      tracks: [
        "night-drive"
      ]
    },


    {
      id: "after-hours",

      title: "After Hours",

      artist: "Aria",
      artistId: "aria",

      genre: "Afro",

      year: "2026",

      type: "Single",

      cover:
        "assets/covers/aria.jpg",

      tracks: [
        "after-hours"
      ]
    },


    {
      id: "red-season",

      title: "Red Season",

      artist: "Kai",
      artistId: "kai",

      genre: "Trap",

      year: "2026",

      type: "EP",

      cover:
        "assets/covers/kai.jpg",

      tracks: [
        "red-lights"
      ]
    },


    {
      id: "blue-hour",

      title: "Blue Hour",

      artist: "Luna",
      artistId: "luna",

      genre: "R&B",

      year: "2026",

      type: "EP",

      cover:
        "assets/covers/luna.jpg",

      tracks: [
        "blue-hour"
      ]
    },


    {
      id: "city-lights",

      title: "City Lights",

      artist: "Nova",
      artistId: "nova",

      genre: "R&B",

      year: "2026",

      type: "Album",

      cover:
        "assets/covers/nova.jpg",

      tracks: [
        "midnight-drive",
        "night-drive"
      ]
    },


    {
      id: "sunset-dreams",

      title: "Sunset Dreams",

      artist: "Luna",
      artistId: "luna",

      genre: "R&B",

      year: "2026",

      type: "Album",

      cover:
        "assets/covers/luna.jpg",

      tracks: [
        "blue-hour"
      ]
    }

  ]

};


/* =========================================================
   PLAYORA DATABASE API
   ========================================================= */

window.PLAYORA_DATA = PLAYORA_DATA;


/* ---------------------------------------------------------
   FIND TRACK
   --------------------------------------------------------- */

window.getPlayoraTrack = function(id) {

  return PLAYORA_DATA.tracks.find(
    track => track.id === id
  );

};


/* ---------------------------------------------------------
   FIND ARTIST
   --------------------------------------------------------- */

window.getPlayoraArtist = function(id) {

  return PLAYORA_DATA.artists.find(
    artist => artist.id === id
  );

};


/* ---------------------------------------------------------
   FIND ALBUM
   --------------------------------------------------------- */

window.getPlayoraAlbum = function(id) {

  return PLAYORA_DATA.albums.find(
    album => album.id === id
  );

};


/* ---------------------------------------------------------
   SEARCH EVERYTHING
   --------------------------------------------------------- */

window.searchPlayora = function(query) {

  const q =
    String(query)
      .toLowerCase()
      .trim();

  if (!q) {

    return {
      tracks: PLAYORA_DATA.tracks,
      artists: PLAYORA_DATA.artists,
      albums: PLAYORA_DATA.albums
    };

  }


  return {

    tracks:
      PLAYORA_DATA.tracks.filter(track =>
        track.title.toLowerCase().includes(q) ||
        track.artist.toLowerCase().includes(q) ||
        track.genre.toLowerCase().includes(q)
      ),

    artists:
      PLAYORA_DATA.artists.filter(artist =>
        artist.name.toLowerCase().includes(q) ||
        artist.genre.toLowerCase().includes(q)
      ),

    albums:
      PLAYORA_DATA.albums.filter(album =>
        album.title.toLowerCase().includes(q) ||
        album.artist.toLowerCase().includes(q) ||
        album.genre.toLowerCase().includes(q)
      )

  };

};


/* ---------------------------------------------------------
   GET TRENDING MUSIC
   --------------------------------------------------------- */

window.getTrendingTracks = function() {

  return PLAYORA_DATA.tracks.filter(
    track => track.trending === true
  );

};


/* ---------------------------------------------------------
   GET FEATURED MUSIC
   --------------------------------------------------------- */

window.getFeaturedTracks = function() {

  return PLAYORA_DATA.tracks.filter(
    track => track.featured === true
  );

};


/* ---------------------------------------------------------
   GET ARTIST TRACKS
   --------------------------------------------------------- */

window.getArtistTracks = function(artistId) {

  return PLAYORA_DATA.tracks.filter(
    track => track.artistId === artistId
  );

};


/* ---------------------------------------------------------
   GET ALBUM TRACKS
   --------------------------------------------------------- */

window.getAlbumTracks = function(albumId) {

  const album =
    getPlayoraAlbum(albumId);

  if (!album) return [];

  return album.tracks
    .map(id => getPlayoraTrack(id))
    .filter(Boolean);

};