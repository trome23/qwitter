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
         @click = "addNewQweet"
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
    <q-list separator>
      <q-item
        v-for='qweet in qweets'
        :key="qweet.date"
        class="q-py-md"
      >
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
            {{qweet.content}}
          </q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="far fa-comment" 
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-retweet" 
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="far fa-heart" 
                />
                <q-btn
                  @click="deleteQweet(qweet)"
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-trash" 
                />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{ qweet.date }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      newQweetContent: '',
      qweets: [
        {
          content: 'Be your own hero, no matter how many oreos you partake, dawg.',
          date: 1630525696716
        },
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          date: 1630525789241
        },
      ]
    }
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now()
      }
      this.qweets.unshift(newQweet)
    },
    deleteQweet(qweet) {
      let dateToDelete = qweet.date
      let index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      this.qweets.splice(index, 1)
    }
    
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
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
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
