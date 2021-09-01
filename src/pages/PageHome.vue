<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          placeholder="What's Happening?"
          bottom-slots
          v-model="newQweetContent"
          maxlength="280"
          counter 
          autogrow
          class="new-qweet"
        >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://s.gravatar.com/avatar/a3020caca3fca25b245e374a01505dc4?s=80">
          </q-avatar>
        </template>

        <template v-slot:after>
         
        </template>
      </q-input>
      </div>
      <div class="col col-shrink">
         <q-btn
            :disable="!newQweetContent"
            unelevated
            rounded
            color="primary"
            label="Qweet" 
            no-caps
            class="q-mb-lg"
          />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      newQweetContent: ''
    }
  }
})
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
</style>
