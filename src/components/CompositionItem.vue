<template>
    <div
    class="border border-gray-200 p-3 mb-4 rounded">
        <div v-show="!showForm">
        <h4 class="inline-block text-2xl w-4/5 font-bold truncated">
           {{ song.modified_name }} </h4>
        <button @click="deleteSong"
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
            <i class="fa fa-times"></i>
        </button>
        <button
        @click.prevent="showForm = !showForm"
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
            <i class="fa fa-pencil-alt"></i>
        </button>
        </div>
        <div v-show="showForm">
          <div
            class="text-white text-center font-bold p-5 mb-4 rounded"
            v-if="edit_show_alert"
            :class="edit_alert_variant">
            {{ edit_alert_msg }}
          </div>
        <vee-form @submit="submitEdit"
        :validation-schema="schema"
        :initial-values="song">
            <div class="mb-3">
            <label class="inline-block mb-2"> New Song Title </label>
            <vee-field type="text" name="modified_name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Song Title"
                @input="updateUnsavedFlag(true)" />
                <error-message class="text-red-600" name="modified_name" />
            </div>
            <div class="mb-3">
            <label class="inline-block mb-2">Genre</label>
            <vee-field type="text" name="genre"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Genre"
                @input="updateUnsavedFlag(true)"/>
                <error-message class="text-red-600" name="genre" />
            </div>
            <button type="submit"
            :disabled="edit_in_submission"
            class="py-1.5 px-3 mr-2 rounded text-white"
            :class="toggleSubmitButton">
            Submit
            </button>
            <button type="button"
            :disabled="edit_in_submission"
            class="py-1.5 px-3 rounded text-white bg-gray-600"
            @click.prevent="showForm = false">
            Go Back
            </button>
        </vee-form>
        </div>
    </div>
</template>

<script>
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '@/includes/firebase';

export default {
  data() {
    return {
      showForm: false,
      edit_in_submission: false,
      edit_show_alert: false,
      edit_alert_variant: 'bg-blue-500',
      edit_alert_msg: 'Please wait! We are saving your changes',
      schema: {
        modified_name: 'required|max:70',
        genre: 'max:30|alpha_spaces',
      },

    };
  },
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateSong: {
      type: Function,
      required: true,
    },
    removeSong: {
      type: Function,
      required: true,
    },
    updateUnsavedFlag: {
      type: Function,
    },
  },
  methods: {
    async submitEdit(values) {
      this.edit_in_submission = true;
      this.edit_show_alert = true;
      this.edit_alert_variant = 'bg-blue-500';
      this.edit_alert_msg = 'Please wait! We are saving your changes';
      console.log(values);

      try {
        const songRef = doc(db, 'songs', this.song.docID);
        await updateDoc(songRef, values);
      } catch (error) {
        this.edit_in_submission = false;
        this.edit_alert_variant = 'bg-red-500';
        this.edit_alert_msg = 'Something went wrong! Try again later';
        console.log(error);
        return;
      }
      this.updateSong(this.index, values);
      this.updateUnsavedFlag(false);

      this.edit_in_submission = false;
      this.edit_alert_variant = 'bg-green-500';
      this.edit_alert_msg = 'Succes! Song has been updated';
    },
    async deleteSong() {
      const songDoc = doc(db, 'songs', this.song.docID);
      const songRef = ref(storage, `songs/${this.song.original_name}`);
      try {
        await deleteDoc(songDoc);
        await deleteObject(songRef);
      } catch (error) {
        this.removeSong(this.index);
        console.log(error);
        return;
      }
      this.removeSong(this.index);
    },
  },
  computed: {
    toggleSubmitButton() {
      if (this.edit_in_submission) {
        return 'bg-green-700';
      }
      return 'hover:bg-green-600 bg-green-700';
    },
  },
};
</script>
