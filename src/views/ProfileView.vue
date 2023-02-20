<template>
    <div class="row">
      <Navbar />
      <Profile />
      <Section_Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Profile from '@/components/Profile/Profile.vue'
import Section_Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  metaInfo: {
      title: 'VCast Index'
    },
  components: {
    Navbar,
    Profile,
    Section_Footer
  }
}
</script>
