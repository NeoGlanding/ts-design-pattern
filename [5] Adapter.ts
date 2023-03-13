// The Adapter design pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
// It acts as a bridge between two incompatible interfaces by creating an intermediate adapter object that translates one interface into another,
// allowing them to work together.

interface IElectonicalLegal {
  brand: string;
}

interface IAudioMediaPlayer {
  playMp3: (filename: string) => void;
  playAac: (filename: string) => void;
}

interface IVideoMediaPlayer {
  playMp4: (filename: string) => void;
  playVlc: (filename: string) => void;
}

class VideoMediaPlayer implements IVideoMediaPlayer, IElectonicalLegal {
  constructor(public brand: string) {
    this.brand = brand;
  }

  public playMp4(filename: string) {
    console.log(`Playing ${filename}.mp4 - ${this.brand}`);
  }

  public playVlc(filename: string) {
    console.log(`Playing ${filename}.vlc - ${this.brand}`);
  }
}

class AudioMediaPlayer implements IAudioMediaPlayer, IElectonicalLegal {
  constructor(public brand: string) {
    this.brand = brand;
  }

  public playMp3(filename: string) {
    console.log(`Playing ${filename}.mp3`);
  }

  public playAac(filename: string) {
    console.log(`Playing ${filename}.aac`);
  }
}

class MediaAdapter extends AudioMediaPlayer {
  constructor(public brand: string, public videoPlayer: VideoMediaPlayer) {
    super(brand);
    this.videoPlayer = videoPlayer;
  }

  adapterCheck() {
    console.log("Adapter checking");
  }
}

const panasonicVideoPlayer = new VideoMediaPlayer("Panasonic G388");
const xiaomiVideoPlayer = new VideoMediaPlayer("Xiaomi Redmi 3");

const samsungMediaAdapter = new MediaAdapter(
  "Samsung Adapter 200",
  panasonicVideoPlayer
);

const appleMediaAdapter = new MediaAdapter(
  "Apple Adapter 300",
  xiaomiVideoPlayer
);

samsungMediaAdapter.videoPlayer.playMp4("windah_basudara");
appleMediaAdapter.videoPlayer.playMp4("tara_arts");
