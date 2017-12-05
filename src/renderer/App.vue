<template>
  <div id="app">
    <router-view></router-view>
    <modals></modals>
  </div>
</template>

<script>
  import Modals from './components/Modals'
  import store from './vuex/store'

  export default {
    components: {
      Modals
    },
    created: function () {
      this.$electron.ipcRenderer.send('musicstalker-app:request:accounts')
      this.$electron.ipcRenderer.on('musicstalker-app:get:accounts', (e, data) => {
        if (data.length > 0) {
          data.forEach((account) => {
            this.$store.dispatch('addAccount', account)
          })
        } else {
          this.$modal.show('authentication-modal')
        }
      })
      this.$electron.ipcRenderer.on('musicstalker-app:authentication:done', (e, account) => {
        this.$store.dispatch('addAccount', account)
        this.$modal.hide('authentication-modal')
      })
      this.$store.dispatch('addProfile', 'test')
    },
    store
  }
</script>

<style>
  /* CSS */
</style>
