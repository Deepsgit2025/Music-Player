const song = document.getElementById("song")
const playBtn = document.querySelector(".play")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const progress = document.getElementById("progress")

const images = document.querySelectorAll(".song-img")
const titles = document.querySelectorAll(".sn")
const artists = document.querySelectorAll(".artist")

const songs = [
    "sorry.mp3",
    "02 - Shawn Mendes - Stitches.mp3",
    "908028.mp3",
    "After Hours CD 1 TRACK 9 (320) (1).mp3"
]

let currentIndex = 0
song.src = songs[currentIndex]

function updateUI() {
    images.forEach(i => i.classList.remove("active"))
    titles.forEach(t => t.classList.remove("active"))
    artists.forEach(a => a.classList.remove("active"))

    images[currentIndex].classList.add("active")
    titles[currentIndex].classList.add("active")
    artists[currentIndex].classList.add("active")

    song.src = songs[currentIndex]
    song.play()
    playBtn.textContent = "⏸"
}

playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play()
        playBtn.textContent = "⏸"
    } else {
        song.pause()
        playBtn.textContent = "▶"
    }
})

song.addEventListener("timeupdate", () => {
    if (!song.duration) return
    progress.value = (song.currentTime / song.duration) * 100
})

progress.addEventListener("input", () => {
    song.currentTime = (progress.value / 100) * song.duration
})

next.addEventListener("click", () => {
    currentIndex++
    if (currentIndex >= songs.length) currentIndex = 0
    updateUI()
})

prev.addEventListener("click", () => {
    currentIndex--
    if (currentIndex < 0) currentIndex = songs.length - 1
    updateUI()
})