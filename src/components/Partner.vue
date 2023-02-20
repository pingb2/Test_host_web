<template>
    <div class="container">
        <div class="row section-partner">
            <div class="col-10 col-sm-10 col-md-10 col-lg-8 mx-auto mt-5 text-center" style="background-color: red;">
                <div class="text-title-partner">
                    <b>Vtuber Partner</b>
                </div>
                <div class="mt-3 slot-vtube-partner" style="background-color: #ffffff;">
                    <img class="img-fluid icon-vtube-partner me-2 mt-2" v-for="(image, index) in images"
                        v-bind:src="image" v-bind:key="index" :class="{ active: isActive === index }"
                        v-on:click="showComponent(index)" />
                </div>
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-4 mx-auto mt-5 mb-3" style="background-color: aqua;">
                <FadeComponent v-bind:items="currentindex"></FadeComponent>
            </div>
        </div>
    </div>
</template>
<style>
@import '../assets/css/partner.css';
</style>
<script>
import FadeComponent from './Fade.vue';

export default {
    name: 'PartnerTeam',
    data() {
        return {
            currentComponent: 0,
            isActive: 0
        }
    },
    methods: {
        showComponent(index) {
            this.currentComponent = index;
            this.isActive = index
        },
    },
    computed: {
        currentindex() {
            return this.currentComponent;
        },
        images() {
            return [
                'https://tiermaker.com/images/template_images/2022/830100/---umamusume-game-tier-830100/zzzzz-1667100638102202png.png',
                'https://tiermaker.com/images/template_images/2022/830100/---umamusume-game-tier-830100/105902png.png',
                'https://tiermaker.com/images/template_images/2022/830100/---umamusume-game-tier-830100/zz1659079852101303png.png',
                'https://tiermaker.com/images/template_images/2022/830100/---umamusume-game-tier-830100/104401png.png',
                'https://tiermaker.com/images/chart/chart/---uma-musume-characters-1000102/uma-6png.png',
                'https://tiermaker.com/images/template_images/2022/830100/---umamusume-game-tier-830100/zzzzz-1668851970110001png.png',
                'https://tiermaker.com/images/template_images/2022/830100/---umamusume-game-tier-830100/zzzzz-1661402254109801png.png'
            ]
        }
    },
    components: {
        FadeComponent
    }
}
</script>