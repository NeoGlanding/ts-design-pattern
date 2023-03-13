"use strict";
// The Adapter design pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
// It acts as a bridge between two incompatible interfaces by creating an intermediate adapter object that translates one interface into another,
// allowing them to work together.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VideoMediaPlayer = /** @class */ (function () {
    function VideoMediaPlayer(brand) {
        this.brand = brand;
        this.brand = brand;
    }
    VideoMediaPlayer.prototype.playMp4 = function (filename) {
        console.log("Playing ".concat(filename, ".mp4 - ").concat(this.brand));
    };
    VideoMediaPlayer.prototype.playVlc = function (filename) {
        console.log("Playing ".concat(filename, ".vlc - ").concat(this.brand));
    };
    return VideoMediaPlayer;
}());
var AudioMediaPlayer = /** @class */ (function () {
    function AudioMediaPlayer(brand) {
        this.brand = brand;
        this.brand = brand;
    }
    AudioMediaPlayer.prototype.playMp3 = function (filename) {
        console.log("Playing ".concat(filename, ".mp3"));
    };
    AudioMediaPlayer.prototype.playAac = function (filename) {
        console.log("Playing ".concat(filename, ".aac"));
    };
    return AudioMediaPlayer;
}());
var MediaAdapter = /** @class */ (function (_super) {
    __extends(MediaAdapter, _super);
    function MediaAdapter(brand, videoPlayer) {
        var _this = _super.call(this, brand) || this;
        _this.brand = brand;
        _this.videoPlayer = videoPlayer;
        _this.videoPlayer = videoPlayer;
        return _this;
    }
    MediaAdapter.prototype.adapterCheck = function () {
        console.log("Adapter checking");
    };
    return MediaAdapter;
}(AudioMediaPlayer));
var panasonicVideoPlayer = new VideoMediaPlayer("Panasonic G388");
var xiaomiVideoPlayer = new VideoMediaPlayer("Xiaomi Redmi 3");
var samsungMediaAdapter = new MediaAdapter("Samsung Adapter 200", panasonicVideoPlayer);
var appleMediaAdapter = new MediaAdapter("Apple Adapter 300", xiaomiVideoPlayer);
samsungMediaAdapter.videoPlayer.playMp4("windah_basudara");
appleMediaAdapter.videoPlayer.playMp4("tara_arts");
