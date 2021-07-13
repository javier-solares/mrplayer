new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [{
                    name: " In Luv With U",
                    artist: " Finn ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m1.jpg",
                    source: "./mp3/1.mp3",
                    url: "https://www.youtube.com/watch?v=c9Xm-ZEzNIg&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=1",
                    favorited: false
                },
                { /*Maroon 5*/
                    name: "Sunday Morning ",
                    artist: " Maroon 5 ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m2.jpg",
                    source: "./mp3/2.mp3",
                    url: "https://www.youtube.com/watch?v=4fEFuNaF5l4&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=2",
                    favorited: false
                },
                {
                    name: " Maps ",
                    artist: " Maroon 5 ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m3.jpg",
                    source: "./mp3/18.mp3",
                    url: "https://www.youtube.com/watch?v=X2mQk2HSL_4&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=19",
                    favorited: false
                },
                { /*Absofacto*/
                    name: "Dissolve ",
                    artist: " Absofacto ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m4.jpg",
                    source: "./mp3/3.mp3",
                    url: "https://www.youtube.com/watch?v=jYqtYoFnp1w&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=3",
                    favorited: false
                },
                { /*Beach*/
                    name: "Wouldn't It Be Nice ",
                    artist: " Beach Boys ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m5.jpg",
                    source: "./mp3/4.mp3",
                    url: "https://www.youtube.com/watch?v=nZBKFoeDKJo&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=4",
                    favorited: false
                },
                { /**/
                    name: " WITHOUT YOU ",
                    artist: " The Kid LAROI ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m6.jpg",
                    source: "./mp3/5.mp3",
                    url: "https://www.youtube.com/watch?v=nzalnIKug94&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=5",
                    favorited: false
                },
                { /* */
                    name: "DANCING IN MY ROOM  ",
                    artist: " 347aidan ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m7.jpg",
                    source: "./mp3/6.mp3",
                    url: "https://www.youtube.com/watch?v=HG_ZC9N_4NM&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=6",
                    favorited: false
                },
                { /* */
                    name: " the neighbourhood",
                    artist: " sweater weather ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m8.jpg",
                    source: "./mp3/7.mp3",
                    url: "https://www.youtube.com/watch?v=97LUyiK3oOM&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=7",
                    favorited: false
                },
                { /* Maneskin*/
                    name: " Beggin",
                    artist: " Maneskin ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m9.jpg",
                    source: "./mp3/8.mp3",
                    url: "https://www.youtube.com/watch?v=IHQ46ZSxJ9g&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=8",
                    favorited: false
                },
                {
                    name: "I WANNA BE YOUR SLAVE ",
                    artist: " Maneskin ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m42.jpg",
                    source: "./mp3/42.mp3",
                    url: "https://www.youtube.com/watch?v=0T-BCIFeqq8&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=45",
                    favorited: false
                },
                {
                    name: "CORALINE ",
                    artist: " Maneskin ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m43.jpg",
                    source: "./mp3/43.mp3",
                    url: "https://www.youtube.com/watch?v=QTIkudYT3mg&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=46",
                    favorited: false
                },
                {
                    name: "  Qué Más Pues?",
                    artist: "J. Balvin, Maria Becerra  ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m10.jpg",
                    source: "./mp3/9.mp3",
                    url: "https://www.youtube.com/watch?v=_6f9SAcXopI&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=9",
                    favorited: false
                },
                {
                    name: "we fell in love in october ",
                    artist: " girl in red ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m11.jpg",
                    source: "./mp3/10.mp3",
                    url: "https://www.youtube.com/watch?v=-nX60VZ5s5g&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=10",
                    favorited: false
                },
                { /*Bruno*/
                    name: "Talking To The Moon ",
                    artist: "Bruno Mars   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m12.jpg",
                    source: "./mp3/11.mp3",
                    url: "https://www.youtube.com/watch?v=F1Q4_30x9gw&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=11",
                    favorited: false
                },
                {
                    name: " Locked Out Of Heaven",
                    artist: "Bruno Mars ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m41.jpg",
                    source: "./mp3/41.mp3",
                    url: "https://www.youtube.com/watch?v=QelLJTFkQNk&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=44",
                    favorited: false
                },
                {
                    name: " Backyard Boy",
                    artist: " Claire Rosinkranz ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m13.jpg",
                    source: "./mp3/12.mp3",
                    url: "https://www.youtube.com/watch?v=GvZJ-6hdORs&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=13",
                    favorited: false
                },
                {
                    name: " sofia ",
                    artist: " clairo ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m14.jpg",
                    source: "./mp3/13.mp3",
                    url: "https://www.youtube.com/watch?v=Z1TBqW8L4jo&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=14",
                    favorited: false
                }, {
                    name: " ily (i love you baby)",
                    artist: " Surf Mesa ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m15.jpg",
                    source: "./mp3/14.mp3",
                    url: "https://www.youtube.com/watch?v=piOIvNO2M8Q&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=15",
                    favorited: false
                },
                {
                    name: "Snowman  ",
                    artist: "Sia   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m16.jpg",
                    source: "./mp3/15.mp3",
                    url: "https://www.youtube.com/watch?v=en9KJdbrZj0&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=16",
                    favorited: false
                },

                {
                    name: "Instant Crush ",
                    artist: " Daft Punk Ft. Julian Casablancas ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m17.jpg",
                    source: "./mp3/17.mp3",
                    url: "https://www.youtube.com/watch?v=tpFcdoF-iuk&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=18",
                    favorited: false
                },

                {
                    name: "Ocean Eyes ",
                    artist: " Billie Eilish ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m18.jpg",
                    source: "./mp3/19.mp3",
                    url: "https://www.youtube.com/watch?v=yhB1tbpB6Rs&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=20",
                    favorited: false
                },
                {
                    name: "i love you",
                    artist: " Billie Eilish ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m19.jpg",
                    source: "./mp3/20.mp3",
                    url: "https://www.youtube.com/watch?v=yhB1tbpB6Rs&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=20",
                    favorited: false
                },
                {
                    name: "lovely",
                    artist: " Billie Eilish ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m20.jpg",
                    source: "./mp3/21.mp3",
                    url: "https://www.youtube.com/watch?v=sB4iOw62R3I&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=21",
                    favorited: false
                },
                {
                    name: "idontwannabeyouanymore",
                    artist: " Billie Eilish ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m21.jpg",
                    source: "./mp3/22.mp3",
                    url: "https://www.youtube.com/watch?v=9kCUhJ9M97Q&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=23",
                    favorited: false
                },
                {
                    name: " when the party's over",
                    artist: " Billie Eilish ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m22.jpg",
                    source: "./mp3/23.mp3",
                    url: "https://www.youtube.com/watch?v=cb25pW7lHLM&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=25",
                    favorited: false
                },
                {
                    name: " bad guy",
                    artist: " Billie Eilish ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m23.jpg",
                    source: "./mp3/24.mp3",
                    url: "https://www.youtube.com/watch?v=cVUTzTx9sXA&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=26",
                    favorited: false
                },
                {
                    name: "Paris  ",
                    artist: "The Chainsmokers  ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m24.jpg",
                    source: "./mp3/27.mp3",
                    url: "https://www.youtube.com/watch?v=Kcz2BnDpUpA&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=28",
                    favorited: false
                },
                {
                    name: "I'll Wait ",
                    artist: " Kygo, Sasha Sloan  ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m25.jpg",
                    source: "./mp3/25.mp3",
                    url: "https://www.youtube.com/watch?v=kDtWLAPfu5s&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=27",
                    favorited: false
                },
                {
                    name: "Stole The Show  ",
                    artist: " Kygo feat. Parson James",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m26.jpg",
                    source: "./mp3/26.mp3",
                    url: "https://www.youtube.com/watch?v=Vs3LXhqm5h4&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=29",
                    favorited: false
                },
                {
                    name: "Raging  ",
                    artist: " Kygo ft. Kodaline ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m27.jpg",
                    source: "./mp3/28.mp3",
                    url: "https://www.youtube.com/watch?v=ZhzN7-Q00KU&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=30",
                    favorited: false
                },
                {
                    name: "Stargazing  ",
                    artist: "Kygo & Justin Jesso",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m28.jpg",
                    source: "./mp3/29.mp3",
                    url: "https://www.youtube.com/watch?v=Svt8IVmHj7Q&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=31",
                    favorited: false
                },
                {
                    name: "Arcade ",
                    artist: "duncan laurence ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m29.jpg",
                    source: "./mp3/30.mp3",
                    url: "https://www.youtube.com/watch?v=TcSAv2kFNJ0&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=32",
                    favorited: false
                },
                {
                    name: " Set fire to the rain",
                    artist: " Adele",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m30.jpg",
                    source: "./mp3/31.mp3",
                    url: "https://www.youtube.com/watch?v=i-qVse0-j38&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=33",
                    favorited: false
                },
                {
                    name: " Rude ",
                    artist: "MAGIC ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m31.jpg",
                    source: "./mp3/32.mp3",
                    url: "https://www.youtube.com/watch?v=Q4O0tZy4uvc&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=34",
                    favorited: false
                },
                {
                    name: " I Think I'm In Love ",
                    artist: " Kat Dahlia ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m32.jpg",
                    source: "./mp3/33.mp3",
                    url: "https://www.youtube.com/watch?v=vybZfOV5CoU&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=35",
                    favorited: false
                },
                {
                    name: "Dancin ",
                    artist: "Aaron Smith ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m33.jpg",
                    source: "./mp3/34.mp3",
                    url: "https://www.youtube.com/watch?v=WCi2DLYE82A&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=36",
                    favorited: false
                },
                {
                    name: " Buttercup ",
                    artist: " Jack Stauber",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m34.jpg",
                    source: "./mp3/35.mp3",
                    url: "https://www.youtube.com/watch?v=D6FCzlX9bxg&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=37",
                    favorited: false
                },
                {
                    name: " Do I Wanna Know",
                    artist: "Arctic Monkeys  ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m35.jpg",
                    source: "./mp3/16.mp3",
                    url: "https://www.youtube.com/watch?v=bpOSxM0rNPM&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=17",
                    favorited: false
                },
                {
                    name: " arabella ",
                    artist: "arctic monkeys   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m36.jpg",
                    source: "./mp3/36.mp3",
                    url: "https://www.youtube.com/watch?v=sCABvLI6d70&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=38",
                    favorited: false
                },
                {
                    name: "snap out of it ",
                    artist: "arctic monkeys   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m37.jpg",
                    source: "./mp3/37.mp3",
                    url: "https://www.youtube.com/watch?v=qp4YmN-S1jI&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=39",
                    favorited: false
                },
                {
                    name: " no buses",
                    artist: "arctic monkeys   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m38.jpg",
                    source: "./mp3/38.mp3",
                    url: "https://www.youtube.com/watch?v=ebrQ17-zJ1E&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=40",
                    favorited: false
                },
                {
                    name: "mardy bum ",
                    artist: "arctic monkeys   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m39.jpg",
                    source: "./mp3/39.mp3",
                    url: "https://www.youtube.com/watch?v=E0femeBbCOg&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=41",
                    favorited: false
                },
                {
                    name: "  When The Sun Goes Down",
                    artist: "arctic monkeys   ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m40.jpg",
                    source: "./mp3/40.mp3",
                    url: "https://www.youtube.com/watch?v=zbxZlm_wUJw&list=PLtka6t8sFeDfT9MvoI6a0AG8zFHEMZvus&index=42",
                    favorited: false
                },
                {
                    name: " telepatía",
                    artist: "Kali Uchis  ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m44.jpg",
                    source: "./mp3/44.mp3",
                    url: "https://www.youtube.com/watch?v=Dwzk-XZxZ4k",
                    favorited: false
                },
                {
                    name: " Make You Mine",
                    artist: "PUBLIC ",
                    cover: "https://raw.githubusercontent.com/javier-solares/img/master/m45.jpg",
                    source: "./mp3/45.mp3",
                    url: "https://www.youtube.com/watch?v=edlpZR3GALE",
                    favorited: false
                },
                /*
                  
                {
                    name: " ",
                    artist: "  ",
                    cover: "./img/m.jpg",
                    source: "./mp3/.mp3",
                    url: "",
                    favorited: false
                },
                 {
                    name: " ",
                    artist: "  ",
                    cover: "https://raw.githubusercontent.com/javier-solares/pruebaimg/master/m4.jpg",
                    source: "./mp3/.mp3",
                    url: "",
                    favorited: false
                },
                */

            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});