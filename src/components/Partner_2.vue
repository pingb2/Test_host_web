<template>
    <div class="container">
        <div class="row section-partner2">
            <div class="col-9 col-md-9 col-lg-10 mx-auto text-center">
                <div class="partner_title mt-5 mb-4">
                    <b>
                        Partner
                    </b>
                </div>
                <vueper-slides class="no-shadow mt-auto mb-4" :visible-slides="3" :slide-ratio="3 / 10" :dragging-distance="70">
                    <vueper-slide v-for="(slide, i) in slider.data" :key="i" :image="slide.image" />
                </vueper-slides>
            </div>
        </div>
    </div>
</template>
<style>
@import '../assets/css/partner_2.css';
</style>
<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    data() {
        return {
            slider: {
                data: [
                    { image: 'https://farm4.staticflickr.com/3364/3409068082_bbecd0b7cc_o.jpg' },
                    { image: 'https://combo.staticflickr.com/ap/build/images/sohp/2019-top-25/Ramon_Covelo_Sakrisoy%20Dreams.jpg' },
                    { image: 'https://combo.staticflickr.com/ap/build/images/sohp/2019-top-25/Alex_Noriega_Pure_Magic.jpg' },
                    { image: 'https://gbf.wiki/images/thumb/3/30/Npc_zoom_3040427000_01.png/480px-Npc_zoom_3040427000_01.png' },
                    { image: 'https://gbf.wiki/images/thumb/e/e6/Npc_zoom_3040405000_01.png/480px-Npc_zoom_3040405000_01.png' }
                ]
            }
        }
    },
    components: { VueperSlides, VueperSlide },
};
</script>