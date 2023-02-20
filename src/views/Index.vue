<template>
  <div class="row">
    <Navbar/>
    <Section_Video />
    <Section_Features />
    <Section_Community />
    <Section_Package />
    <Section_Partner2 />
    <Section_Partner />
    <Section_Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Section_Video from '@/components/Videoinfo.vue'
import Section_Features from '@/components/Features.vue'
import Section_Package from '@/components/Pakage.vue'
import Section_Community from '@/components/Community.vue'
import Section_Partner2 from '@/components/Partner_2.vue'
import Section_Partner from '@/components/Partner.vue'
import Section_Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  metaInfo: {
    title: 'VCast Index'
  },
  components: {
    Navbar,
    Section_Video,
    Section_Features,
    Section_Community,
    Section_Package,
    Section_Partner,
    Section_Partner2,
    Section_Footer
  },
  
}
</script>
