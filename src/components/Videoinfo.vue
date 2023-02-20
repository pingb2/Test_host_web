<template>

    <div class="container">
        <div class="row">
            <video-background class="section-video-intro"
                :src="require('@/assets/video/TestVideo.mp4')"
                poster="https://relink.granbluefantasy.jp/assets/image/common/common/artwork/artwork_1.jpg?20211210151418"
                :sources="[
                    { src: require('@/assets/video/TestVideo.mp4'), res: 991, autoplay: true },
                    { src: require('@/assets/video/TestVideo.mp4'), res: 575, autoplay: true, poster: 'https://relink.granbluefantasy.jp/assets/image/common/common/artwork/artwork_1.jpg?20211210151418' }
                ]" style="max-height: 650px;" overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)">
                <div class="d-flex justify-content-center text-center align-items-end h-100 px-2">
                    <div class="text-white d-md-none mb-2 " style="font-weight: 600;">
                        <a href="#">
                            <button class="btn btn-primary button-link mt-4 mb-3">
                                Get Started
                            </button>
                        </a>
                    </div>
                    <div class="text-white d-none d-md-block mb-5 " style="font-weight: 600;">
                        <a href="#">
                            <button class="btn btn-primary button-link mt-4 mb-3">
                                Get Started
                            </button>
                        </a>
                    </div>
                </div>
            </video-background>
        </div>
    </div>
</template>
<style>
@import '../assets/css/section-video.css';
</style>
<script>
import VideoBackground from 'vue-responsive-video-background-player'
export default {
    name: 'VideoInfo',
    components: {
        VideoBackground
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->