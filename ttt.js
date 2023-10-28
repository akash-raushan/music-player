const music = new Audio("audio/haaye-dard.mp3")


// TILL SONG 16


const songs = [
    {
        id: 1,
        songName: `Haaye Dard <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/haaye-dard.jpg",
        source: "audio/haaye-dard.mp3"
    },
    {
        id: 2,
        songName: `Lo Aayi Barsaat<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/lo-aayi-barsaat.jpg",
        source: "audio/lo-aayi-barsaat.mp3"
    },

    {
        id: 3,
        songName: `Kesariya <div class="subtitle">Arijit Singh`,
        poster: "img/Posters/kesariya.jpg",
        source: "audio/kesariya.mp3"
    },
    {
        id: 4,
        songName: `Yaad Na Aaye<div class="subtitle">Akull</div>`,
        poster: "img/Posters/yaad-na-aaye.jpg",
        source: "audio/yaad-na-aaye.mp3"
    },
    {
        id: 5,
        songName: `Fake Love <div class="subtitle">Fukra Insaan</div>`,
        poster: "img/Posters/fake-love.jpg",
        source: "audio/fake-love.mp3"
    },
    {
        id: 6,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/sajna-aadat.jpg",
        source: "audio/sajna-aadat.mp3"
    },
    {
        id: 7,
        songName: `Faasla <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/faasla.jpg",
        source: "audio/faasla.mp3"
    },
    {
        id: 8,
        songName: `Laree Choote<div class="subtitle">Raico</div>`,
        poster: "img/Posters/laree-choote.jpg",
        source: "audio/laree-choote.mp3"
    },
    {
        id: 9,
        songName: `Pyaar Karte Ho Na <div class="subtitle">Stebin Ben</div>`,
        poster: "img/Posters/pyaar-karte-ho-na.jpg",
        source: "audio/pyaar-karte-ho-na.mp3"
    },
    {
        id: 10,
        songName: `Ek Tarfa<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/ek-tarfa.jpg",
        source: "audio/ek-tarfa.mp3"
    },
    {
        id: 11,
        songName: `Halki Si Barsaat <div class="subtitle">Munawar Faruqui</div>`,
        poster: "img/Posters/halki-si-barsaat.jpg",
        source: "audio/halki-si-barsaat.mp3"
    },
    {
        id: 12,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/zara-zara.jpg",
        source: "audio/zara-zara.mp3"
    },
    {
        id: 13,
        songName: `Mehrama<div class="subtitle">Darshan Ralav</div>`,
        poster: "img/Posters/mehrama.jpg",
        source: "audio/mehrama.mp3"
    },
    {
        id: 14,
        songName: `Chaand Baaliyan<div class="subtitle">Aditya A</div>`,
        poster: "img/Posters/chaand-baaliyan.jpg",
        source: "audio/chaand-baaliyan.mp3"
    },
    {
        id: 15,
        songName: `Sajde Kiye Hain Laakhon<div class="subtitle">K K </div>`,
        poster: "img/Posters/sajde-kiye-hain-laakhon.jpg",
        source: "audio/sajde-kiye-hain-laakhon.mp3"
    },
    {
        id: 16,
        songName: `Dhoondhe Akhiyaan<div class="subtitle">Yasser & Altamash</div>`,
        poster: "img/Posters/dhoonde-akhiyaan.jpg",
        source: "audio/dhoonde-akhiyaan.mp3"
    },
    {
        id: 17,
        songName: `1 Hour Lofi<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit-singh-lofi.jpg",
        source: "audio/1-hour-lofi.mp3"
    },
    {
        id: 18,
        songName: `Log Kehte Hain Pagal<div class="subtitle">Rahul Ja</div>`,
        poster: "img/Posters/log-kahte-hain-paagal.jpg",
        source: "audio/log-kahte-hain-paagal.mp3"
    },
    {
        id: 19,
        songName: `Mujhe Peene Do<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mujhe-pene-dojpg.jpg",
        source: "audio/mujhe-peene-do.mp3"
    },
    {
        id: 20,
        songName: `Tum Mere<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/tum-mere.jpg",
        source: "audio/tum-mere.mp3"
    },
    {
        id: 21,
        songName: `Teri Aankhon Mein <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/teri-aankhon-mein.jpg",
        source: "audio/teri-aankhon-mein.mp3"
    },
    {
        id: 22,
        songName: `Baarish Lete Aana 2.0<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/baarish-lete-aana.jpg",
        source: "audio/baarish-lete-aana.mp3"
    },

    {
        id: 23,
        songName: `Pachataoge <div class="subtitle">Arijit Singh`,
        poster: "img/Posters/pachataoge.jpg",
        source: "audio/pachataoge.mp3"
    },
    {
        id: 24,
        songName: `Do Kinaare<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/do-kinaare.jpg",
        source: "audio/do-kinaare.mp3"
    },
    {
        id: 25,
        songName: `Dil Ko Karar Aaya <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/Posters/dil-ko-karar.jpg",
        source: "audio/dil-ko-karar.mp3"
    },
    {
        id: 26,
        songName: `Maana Ke Hum Yaar Nahin <div class="subtitle">Ayushman Khurana</div>`,
        poster: "img/Posters/maana-ke-ab-yaar-nahin.jpg",
        source: "audio/maana-ke-ab-yaar-nahin.mp3"
    },
    {
        id: 27,
        songName: `GUZAARISH <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/guzaarish.jpg",
        source: "audio/guzaarish.mp3"
    },
    {
        id: 28,
        songName: `Tum Jaisa<div class="subtitle">Jajraj</div>`,
        poster: "img/Posters/tum-jaisa.jpg",
        source: "audio/tum-jaisa.mp3"
    },
    {
        id: 29,
        songName: `Best Night Songs <div class="subtitle"> </div>`,
        poster: "img/Posters/feel-chill.jpg",
        source: "audio/feel-chill.mp3"
    },
    {
        id: 30,
        songName: `Kabhi Jo Badal X<div class="subtitle">Let Me Down Slowly</div>`,
        poster: "img/Posters/let-me-down-slowly.jpg",
        source: "audio/let-me-down-slowly.mp3"
    },
    {
        id: 31,
        songName: `Tera Zikr <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/tera-zikr.jpg",
        source: "audio/tera-zikr.mp3"
    },
    {
        id: 32,
        songName: `Dooniya Choor Doon<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/duniya-chorr-doon.jpg",
        source: "audio/duniya-chorr-doon.mp3"
    },
    {
        id: 33,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/love-me-thoda-aur.jpg",
        source: "audio/love-me-thoda-aur.mp3"
    },
    {
        id: 34,
        songName: `Tera Hoone Laga Hoon<div class="subtitle">Stebin Ben</div>`,
        poster: "img/Posters/tera-hone-laga-hoon.jpg",
        source: "audio/tera-hone-laga-hoon.mp3"
    },
    {
        id: 35,
        songName: `Deewane Hum Nahi Nahi Hote<div class="subtitle">Aditya A</div>`,
        poster: "img/Posters/deewane-hum nahi-hote.jpg",
        source: "audio/deewane-hum nahi-hote.mp3"
    },
    {
        id: 36,
        songName: `Iktara <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/iktara.jpg",
        source: "audio/iktara.mp3"
    },
    {
        id: 37,
        songName: `Is Qadar<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/is-qadar.jpg",
        source: "audio/is-qadar.mp3"
    },
    {
        id: 38,
        songName: `Judaiyaan<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/judaiyaan.jpg",
        source: "audio/judaiyaa.mp3"
    },
    {
        id: 39,
        songName: `Mahiye Jinna Sona<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mahiye-jinna-sona.jpg",
        source: "audio/mahiye-jinna-sona.mp3"
    },
    {
        id: 40,
        songName: `Piya Re<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/piya-re.jpg",
        source: "audio/piya-re.mp3"
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay')
let masterPause = document.getElementById('masterPause')
let wave = document.getElementById('wave')
masterPause.classList.add('hide')
// alert("hello")
// document.getElementById('masterPlay').classList.add('hide')

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add('active1')
        masterPause.classList.remove('hide')
        masterPlay.classList.add('hide')
        masterPause.style.margin = '0px 5px'
        masterPause.addEventListener('click', () => {
            music.pause()
            wave.classList.remove('active1')
            masterPause.classList.add('hide')
            masterPlay.classList.remove('hide')
        })
    }
})


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,.0)'
    })
}



let index = 0;
let postar_master_play = document.getElementById("poster-master-play")
let title = document.getElementById("title")

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        let playListPause = document.getElementsByClassName("playListPause")[index - 1]
        let playListPlay = document.getElementsByClassName("playListPlay")[index - 1]
        // source=songs[index-1].source
        // console.log(source)
        // music.src=`${source}`
        music.src = `${songs[index - 1].source}`
        postar_master_play.src = `${songs[index - 1].poster}`
        music.play()
        wave.classList.add('active1')
        masterPause.classList.remove('hide')
        masterPlay.classList.add('hide')
        playListPause.classList.remove('hide')
        playListPlay.classList.add('hide')
        masterPause.addEventListener('click', () => {
            music.pause()
            wave.classList.remove('active1')
            masterPause.classList.add('hide')
            masterPlay.classList.remove('hide')
            playListPause.classList.add('hide')
            playListPlay.classList.remove('hide')
        })

        if (music.paused || music.currentTime <= 0) {
            music.play()
            wave.classList.add('active1')
            playListPause.classList.remove('hide')
            playListPlay.classList.add('hide')
            masterPause.classList.remove('hide')
            masterPlay.classList.add('hide')
            // masterPause.style.margin = '0px 5px'
            playListPause.addEventListener('click', () => {
                music.pause()
                wave.classList.remove('active1')
                playListPause.classList.add('hide')
                playListPlay.classList.remove('hide')
                masterPause.classList.add('hide')
                masterPlay.classList.remove('hide')
            })
        }


        title.innerHTML = `${songs[index - 1].songName}`
        // let SongTitles = songs.filter((els) => {
        //     return els.id = index
        // })
        // SongTitles.forEach(elss => {
        //     let { songName } = elss;
        //     title.innerHTML = songName
        // })
        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
        // makeAllPlays()
    })
})










// Array.from(document.getElementsByClassName('playListPause')).forEach((e) => {
//     e.addEventListener('click', (el) => {
//         index = el.target.id;
//         let playListPause = document.getElementsByClassName("playListPause")[index - 1]
//         // let playListPlay = document.getElementsByClassName("playListPlay")[index - 1]
//         // source=songs[index-1].source
//         // console.log(source)
//         // music.src=`${source}`
//         music.src = `${songs[index - 1].source}`
//         postar_master_play.src = `${songs[index - 1].poster}`
//         music.play()
//         // wave.classList.add('active1')
//         masterPause.classList.add('hide')
//         masterPlay.classList.remove('hide')
//         playListPause.classList.add('hide')
//         // playListPlay.classList.add('hide')
//         masterPause.addEventListener('click', () => {
//             music.pause()
//             // wave.classList.remove('active1')
//             masterPause.classList.remove('hide')
//             masterPlay.classList.add('hide')
//             playListPause.classList.remove('hide')
//             // playListPlay.classList.remove('hide')
//         })

//         if (music.paused || music.currentTime <= 0) {
//             music.play()
//             wave.classList.add('active1')
//             playListPause.classList.remove('hide')
//             playListPlay.classList.add('hide')
//             masterPause.classList.remove('hide')
//             masterPlay.classList.add('hide')
//             // masterPause.style.margin = '0px 5px'
//             playListPause.addEventListener('click', () => {
//                 music.pause()
//                 wave.classList.remove('active1')
//                 playListPause.classList.add('hide')
//                 // playListPlay.classList.remove('hide')
//                 masterPause.classList.add('hide')
//                 masterPlay.classList.remove('hide')
//             })
//         }


//         title.innerHTML = `${songs[index - 1].songName}`
//         // let SongTitles = songs.filter((els) => {
//         //     return els.id = index
//         // })
//         // SongTitles.forEach(elss => {
//         //     let { songName } = elss;
//         //     title.innerHTML = songName
//         // })
//         makeAllBackground()
//         Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
//         // makeAllPlays()
//     })
// })







let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime
    let music_dur = music.duration
    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    // console.log(min1+':'+sec1)
    currentEnd.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    // console.log(min2+':'+sec2)
    currentStart.innerText = `${min2}:${sec2}`

    let progessBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progessBar
    console.log(seek.value);
})
















// SONG SCROLLBARR
let pop_song_left = document.getElementById('pop-song-left')
let pop_song_right = document.getElementById('pop-song-right')
let pop_song = document.getElementsByClassName('pop-song')[0]

// alert('hello')

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

// ARTISt SCROLLBARR
let pop_art_left = document.getElementById('pop-art-left')
let pop_art_right = document.getElementById('pop-art-right')
let Artist_bx = document.getElementsByClassName('Artist-bx')[0]

pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
})



















// music.play()