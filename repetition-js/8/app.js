const play_btn = document.querySelector(`.play`);
const audio_tag = document.createElement(`audio`);
const nextAudio = document.querySelector(`.next`);
const beforeAudio = document.querySelector(`.before`);


const library = [
    {
        name: 'Если ты со мной',
        path: './music/Доминик Джокер - Если Ты Со Мной.mp3',
    },
    {
        name: 'O нем',
        path: './music/Ирина Дубцова - О Нём.mp3',
    },
    {
        name: 'Город Сочи',
        path: './music/Трофим - Город Сочи.mp3',
    },
]

let playSong = false;
let index = 0;

const audioPlay = (audio_tag) => {
    audio_tag.play();
    playSong = true;
}

const audioPause = (audio_tag) => {
    audio_tag.pause();
    playSong = false;
}

play_btn.addEventListener(`click`, () => {
    audio_tag.src = library[index].path;
    if (playSong === false) {
        audioPlay(audio_tag);
    } else audioPause(audio_tag);
});

nextAudio.addEventListener(`click`, () => {
    index += 1
    audio_tag.src = library[index].path;
    audioPlay(audio_tag);
});

beforeAudio.addEventListener(`click`, () => {
    if (index === 0) {
        audio_tag.src = library[index].path
    } else {
        index -= 1
        audio_tag.src = library[0].path
    }
    audioPlay(audio_tag);
});