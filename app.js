console.log("Spotify");
let songIndex = 0;
const audioElement = new Audio("1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let mygif = document.querySelector("#gif");
let masterSongName = document.querySelector("#masterSongName");
console.log(masterSongName.innerText);
let myProgressBar = document.querySelector("#myProgressBar");
let songItem = document.querySelectorAll(".songItem");
let songs = [
  {
    songName: "Tu jo chule pyar se - Kher",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "Main Woh Chand - Himesh Reshmiya",
    filePath: "2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "Tum hi aana - Marjavaan",
    filePath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "Main agar kahoon - om shanti om",
    filePath: "4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "Pyar tha waqt nahi - Pagal world",
    filePath: "5.mp3",
    coverPath: "5.jpg",
  },
  {
    songName: "Shiddhat title track - Shiddhat 2022",
    filePath: "6.mp3",
    coverPath: "6.jpg",
  },
  {
    songName: "Toota jo kabhi tara - A flying jatt",
    filePath: "7.mp3",
    coverPath: "7.jpg",
  },
  {
    songName: "Zara Zara mehkata hai - 2013 Reprise",
    filePath: "8.mp3",
    coverPath: "8.jpg",
  },
];
// newAudio.play();
Array.from(songItem).forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//play pause events
masterPlay.addEventListener("click", () => {
  // audioElement.play();
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    setTimeout(() => {
      Array.from(songItem).forEach((element) => {
        if (
          document.querySelector("#masterSongName").innerText ==
          element.getElementsByClassName("songName")[0].innerText
        ) {
          makeAllPlays();
          element.getElementsByTagName("i")[0].classList.remove("fa-play");
          element.getElementsByTagName("i")[0].classList.add("fa-pause");
        }
      });
    }, 200);
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    mygif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    mygif.style.opacity = 0;
    makeAllPlays();
  }
});
let songItemList = document.querySelectorAll(".songItemPlay");
const makeAllPlays = () => {
  Array.from(songItemList).forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};

Array.from(songItemList).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    if (e.target.classList.contains("fa-play")) {
      // console.log(e.target.classList);
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      console.log(e.target.classList);
      audioElement.src = `${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex - 1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      mygif.style.opacity = 1;
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    }
  });
});

audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  // console.log(progress);
  //update the progress barx`
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
document.querySelector(".next").addEventListener("click", (e) => {
  if (songIndex > 7) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  setTimeout(() => {
    Array.from(songItem).forEach((element) => {
      if (
        document.querySelector("#masterSongName").innerText ==
        element.getElementsByClassName("songName")[0].innerText
      ) {
        makeAllPlays();
        element.getElementsByTagName("i")[0].classList.remove("fa-play");
        element.getElementsByTagName("i")[0].classList.add("fa-pause");
      }
    });
  }, 200);

  audioElement.src = `${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  mygif.style.opacity = 1;
});
document.querySelector(".previous").addEventListener("click", (e) => {
  if (songIndex < 2) {
    songIndex = 8;
  } else {
    songIndex -= 1;
  }
  setTimeout(() => {
    Array.from(songItem).forEach((element) => {
      if (
        document.querySelector("#masterSongName").innerText ==
        element.getElementsByClassName("songName")[0].innerText
      ) {
        makeAllPlays();
        element.getElementsByTagName("i")[0].classList.remove("fa-play");
        element.getElementsByTagName("i")[0].classList.add("fa-pause");
      }
    });
  }, 200);
  audioElement.src = `${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  mygif.style.opacity = 1;
});
