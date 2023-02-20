<template>
  <div class="resetpassword">
    <div class="row">
      <Navbar />
      <Resetpass />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Resetpass from '@/components/Resetpass/Resetpassword.vue'

export default {
  name: 'ResetView',
  metaInfo: {
      title: 'VCast Reset'
    },
  components: {
    Navbar,
    Resetpass
  }
}
</script>
