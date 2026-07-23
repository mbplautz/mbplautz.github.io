const playlistList = document.getElementById("playlistList");

const albumName = "APPROVED MUSIC BY ELDER STREETER";
const albumArtist = "Elder Streeter";
const albumCover = "track/album_image.png";
const albumPlaylist = [
  {
    name: "intro",
    artist: albumName,
    url: "track/01 intro.mp3",
    cover: albumCover,
  },
  {
    name: "try for tomorrow",
    artist: albumName,
    url: "track/02 try for tomorrow.mp3",
    cover: albumCover,
  },
  {
    name: "it's still summer somewhere",
    artist: albumName,
    url: "track/03 it's still summer somewhere.mp3",
    cover: albumCover,
  },
  {
    name: "if you give her back, i'll have to drop her (feat. Sister Petersen)",
    artist: albumName,
    url: "track/04 if you give her back, i'll have to drop her (feat. Sister Petersen).mp3",
    cover: albumCover,
  },
  {
    name: "sputnik (watching over you)",
    artist: albumName,
    url: "track/05 sputnik (watching over you).mp3",
    cover: albumCover,
  },
  {
    name: "as sisters in zion",
    artist: albumName,
    url: "track/06 as sisters in zion.mp3",
    cover: albumCover,
  },
  {
    name: "when gordon shares a story",
    artist: albumName,
    url: "track/07 when gordon shares a story.mp3",
    cover: albumCover,
  },
  {
    name: "bunnies and bears",
    artist: albumName,
    url: "track/08 bunnies and bears.mp3",
    cover: albumCover,
  },
  {
    name: "worthless",
    artist: albumName,
    url: "track/09 worthless.mp3",
    cover: albumCover,
  },
  {
    name: "i remember the time",
    artist: albumName,
    url: "track/10 i remember the time.mp3",
    cover: albumCover,
  },
  {
    name: "we will check on that (feat. Sister Petersen)",
    artist: albumName,
    url: "track/11 we will check on that (feat. Sister Petersen).mp3",
    cover: albumCover,
  },
  {
    name: "passenger pigeon",
    artist: albumName,
    url: "track/12 passenger pigeon.mp3",
    cover: albumCover,
  },
  {
    name: "never loved",
    artist: albumName,
    url: "track/13 never loved.mp3",
    cover: albumCover,
  },
  {
    name: "talk tonight (Oasis cover)",
    artist: albumName,
    url: "track/14 talk tonight (Oasis cover).mp3",
    cover: albumCover,
  },
  {
    name: "a soundscape familiar",
    artist: albumName,
    url: "track/15 a soundscape familiar.mp3",
    cover: albumCover,
  },
  {
    name: "we have a dog ourselves (feat. Sister Petersen)",
    artist: albumName,
    url: "track/16 we have a dog ourselves (feat. Sister Petersen).mp3",
    cover: albumCover,
  },
  {
    name: "CPR (business ventures with cory)",
    artist: albumName,
    url: "track/17 CPR (business ventures with cory).mp3",
    cover: albumCover,
  },
  {
    name: "my cheyenne dream",
    artist: albumName,
    url: "track/18 my cheyenne dream.mp3",
    cover: albumCover,
  },
  {
    name: "voicemails (feat. Crookie, Ensign and Woodhouse)",
    artist: albumName,
    url: "track/19 voicemails (feat. Crookie, Ensign and Woodhouse).mp3",
    cover: albumCover,
  },
  {
    name: "your plans",
    artist: albumName,
    url: "track/20 your plans.mp3",
    cover: albumCover,
  },
  {
    name: "the wise man and the foolish man",
    artist: albumName,
    url: "track/21 the wise man and the foolish man.mp3",
    cover: albumCover,
  },
  {
    name: "outro",
    artist: albumName,
    url: "track/22 outro.mp3",
    cover: albumCover,
  },
];

let aplayer;
let playlist = [];
let activeIndex = 0;

function cleanupAPlayerList() {
  const listItems = document.querySelectorAll(".aplayer-list li");
  listItems.forEach((li) => {
    const author = li.querySelector(".aplayer-list-author");
    if (author) author.remove();

    const title = li.querySelector(".aplayer-list-title");
    if (title) {
      title.style.maxWidth = "100%";
      title.style.overflow = "hidden";
      title.style.textOverflow = "ellipsis";
      title.style.whiteSpace = "nowrap";
    }

    li.style.boxSizing = "border-box";
    li.style.maxWidth = "100%";
    li.style.width = "100%";
    li.style.paddingLeft = "0.75rem";
    li.style.paddingRight = "0.75rem";
  });

  const list = document.querySelector(".aplayer-list ol");
  if (list) {
    list.style.width = "100%";
    list.style.maxWidth = "100%";
    list.style.overflowX = "hidden";
    list.style.boxSizing = "border-box";
  }
}

function renderPlaylist() {
  if (!playlist.length) {
    playlistList.innerHTML = '<li class="empty">No tracks available for this album.</li>';
    return;
  }

  playlistList.innerHTML = "";

  playlist.forEach((track, index) => {
    const item = document.createElement("li");
    item.className = index === activeIndex ? "active" : "";

    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<strong>${track.name}</strong><br /><span>${track.artist}</span>`;
    button.addEventListener("click", () => {
      activeIndex = index;
      if (aplayer) {
        aplayer.list.switch(index);
        aplayer.play();
      }
      renderPlaylist();
    });

    item.appendChild(button);
    playlistList.appendChild(item);
  });
}

function addDownloadButtonsToPlaylist() {
  cleanupAPlayerList();

  const listItems = document.querySelectorAll(".aplayer-list li");
  
  listItems.forEach((li, index) => {
    let existingDownload = li.querySelector(".aplayer-list-download-wrapper");
    if (existingDownload) existingDownload.remove();

    const span = document.createElement("span");
    span.className = "aplayer-list-download-wrapper";
    
    const link = document.createElement("a");
    link.href = "#";
    link.className = "aplayer-list-download";
    link.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (playlist[index]) downloadTrack(playlist[index]);
    });
    
    span.appendChild(link);
    li.appendChild(span);
  });
}

function addDownloadButton() {
  const infoSection = document.querySelector(".aplayer-info");
  if (!infoSection) return;
  
  let existingBtn = infoSection.querySelector(".aplayer-download");
  if (existingBtn) existingBtn.remove();
  
  const downloadBtn = document.createElement("button");
  downloadBtn.className = "aplayer-download";
  downloadBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`;
  downloadBtn.addEventListener("click", () => {
    const currentTrack = playlist[aplayer.audio.index];
    if (currentTrack) downloadTrack(currentTrack);
  });
  
  infoSection.appendChild(downloadBtn);
}

function downloadTrack(track) {
  const link = document.createElement("a");
  link.href = track.url;
  link.download = track.name + ".mp3";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function buildAPlayer() {
  if (aplayer) {
    aplayer.destroy();
  }

  if (!playlist.length) {
    document.getElementById("aplayer").innerHTML = "";
    return;
  }

  aplayer = new APlayer({
    container: document.getElementById("aplayer"),
    audio: playlist.map((track) => ({ ...track, artist: albumArtist })),
    autoplay: false,
    theme: "#4f46e5",
    loop: "all",
    order: "list",
    preload: "metadata",
    volume: 0.7,
  });

  requestAnimationFrame(() => {
    cleanupAPlayerList();
    addDownloadButtonsToPlaylist();
  });

  aplayer.on("play", () => {
    const currentTrackIndex = aplayer.audio.index;
    activeIndex = currentTrackIndex;
    renderPlaylist();
    //addDownloadButton();
    addDownloadButtonsToPlaylist();
  });

  aplayer.on("pause", () => {
    renderPlaylist();
  });
  
  aplayer.on("listswitch", () => {
    addDownloadButtonsToPlaylist();
  });
  
  //addDownloadButton();
  addDownloadButtonsToPlaylist();
}

function initializePlaylist() {
  playlist = albumPlaylist.map((track) => ({ ...track, artist: albumName }));
  activeIndex = 0;
  renderPlaylist();
  buildAPlayer();
}

initializePlaylist();
