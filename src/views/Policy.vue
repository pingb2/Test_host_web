<template>
    <div class="row">
      <Navbar />
      <Policy />
      <Section_Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Policy from '@/components/Policy/Policy.vue'
import Section_Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView', 
  metaInfo: {
      title: 'VCast Index'
    },
  components: {
    Navbar,
    Policy,
    Section_Footer
  }
}
</script>
