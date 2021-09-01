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
    <q-separator
      size="10px"
      color="grey-2" 
      class="divider"
    />
    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://s.gravatar.com/avatar/a3020caca3fca25b245e374a01505dc4?s=80">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Tyson Romero</strong>
            <span class="text-grey-7">@tyson__romero</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
            interested. 
            
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
              are also reproduced in their exact original form, accompanied by English versions from 
              the 1914 translation by H. Rackham. 
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
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
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet-content
  white-space: pre-wrap
</style>
