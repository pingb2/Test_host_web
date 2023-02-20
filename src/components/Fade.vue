<template id="fade-component-template">
     <transition name="bounce" mode="out-in">
        <div class="text-center" :key="items">
            <div class="text-title-partner"><b>{{ items_content[items].title }}</b></div>
            <img class="img-partner img-fluid" v-bind:src="items_content[items].image"/>
        </div>
    </transition>
</template>
  
<style>

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@import '@/assets/css/fade.css'
</style>
  
<script>
export default {
    name: 'FadeTransition',
    template: '#fade-component-template',
    props: {
        items: Number
    },
    data() {
        return {
            items_content: [
                { title: 'Tamamo cross', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_102.png' },
                { title: 'Mejiro Dobel', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_86.png' },
                { title: 'Mejiro McQueen', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_89.png' },
                { title: 'Sweep Tosho', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_84.png' },
                { title: 'Kitasan Black', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_69.png' },
                { title: 'Wonder Acute', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_105.png' },
                { title: 'Kopanoricky', image: 'https://img.gamewith.jp/article_tools/uma-musume/gacha/ikusei_main_92.png' }
            ],
        }
    },
}
</script>