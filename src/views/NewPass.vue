<template>
    <div class="row">
      <Navbar />
      <NewPass />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import NewPass from '@/components/Resetpass/Newpassword.vue'

export default {
  name: 'HomeView',
  metaInfo: {
      title: 'VCast Index'
    },
  components: {
    Navbar,
    NewPass
  }
}
</script>
