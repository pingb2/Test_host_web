<template>
    <div class="container" id="Community">
        <div class="row section-community">
            <div class="col-12 my-auto">
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-6 mx-auto h-100 mt-5 mb-5  content-community">
                        <div class="d-flex justify-content-center text-center h-100 align-items-center mx-auto">
                            <img class="img-fluid my-auto" :src="require('@/assets/img/final_.png')" />
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-6 ms-auto my-auto h-100 me-auto content-community">
                        <div class="h-100 align-items-center our-community">
                            <div class="text-center">
                                <h1 class="detail-community">
                                    <b>OurCommunity</b>
                                </h1>
                                <p class="detail-community text-center mb-5">
                                    Join the <b>Botnoi Vcast</b> community and stay
                                    connected with the latest updates!
                                </p>
                                <div class="contact-community mb-5 mx-auto">
                                    <ul class="list-group list-group-horizontal mt-3">
                                        <li class="list-group-item icon-community-twitter">
                                            <a href="https://twitter.com/BotnoiVcast">
                                                <i class="fab fa-twitter icon-brands"></i>
                                            </a>
                                        </li>
                                        <li class="list-group-item detail-community-twitter">
                                            <a href="https://twitter.com/BotnoiVcast">
                                                @BotnoiVcast on Twitter
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal mt-3">
                                        <li class="list-group-item icon-community-discord">
                                            <a href="https://discord.gg/YevYD6yPTP">
                                                <i class="fab fa-discord icon-brands"></i>
                                            </a>
                                        </li>
                                        <li class="list-group-item detail-community-discord">
                                            <a href="https://discord.gg/YevYD6yPTP">
                                                Join our Discord!
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="list-group list-group-horizontal mt-3">
                                        <li class="list-group-item icon-community-facebook">
                                            <a href="https://www.facebook.com/profile.php?id=100087939526480">
                                                <i class="fab fa-facebook-f icon-brands"></i>
                                            </a>
                                        </li>
                                        <li class="list-group-item detail-community-facebook">
                                            <a href="https://www.facebook.com/profile.php?id=100087939526480">
                                                BotnoiVcast on Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '../assets/css/community.css';
</style>
<script>
export default {
    name: 'OurCommunity',
}
</script>