<script setup>
import {ref} from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseFileInput from "@/components/base/BaseFileInput.vue";

const musicFile = ref(null);
const coverFile = ref(null);
const title = ref("");
const author = ref("");
const musicLink = ref("");


function upload() {
  console.log("Upload works! " + coverFile)
}
</script>

<template>
<!--  <h4 class="px-2 color-E0 mt-1">Форма загрузки трека</h4>-->
  <form class="d-flex col-12 gap-2">
    <div class="w-50 my-2 p-2 bg-1E rounded shadow">
      <label for="formFile" class="upload-label color-E0">Выберите файл с устройства</label>
      <div class="align-items-md-center mt-2">
        <BaseFileInput
            id="musicFile"
            accept="audio/*"
            v-model="musicFile"
        />
      </div>
    </div>
 
    <div class="w-50 my-2 p-2 bg-1E ms-auto rounded shadow">
      <label for="formFile" class="upload-label color-E0">Или укажите ссылку на трек</label>
      <div class="align-items-md-center mt-2">
        <BaseInput
            id="musicLink"
            type="text"
            v-model="musicLink"
        />
      </div>
    </div>
  </form>

  <form class="d-flex" @submit.prevent="upload">
    <div class="w-100 mb-2 p-2 bg-1E rounded shadow">
      <h6 class="color-E0">(Опционально) заполните данные о загружаемом треке</h6>
      <div class=" mt-2 d-flex flex-column gap-3">

        <div class="d-flex gap-2">
          <div class="w-50">
            <BaseInput
                id="title"
                label="Название"
                type="text"
                v-model="title"
            />
          </div>
          <div class="w-50">
            <BaseInput
                id="author"
                label="Автор"
                type="text"
                v-model="author"
            />
          </div>
        </div>

        <BaseFileInput
            id="cover"
            accept="image/*"
            label="Обложка"
            v-model="coverFile"
        />

        <div>
          <BaseButton
              text="Отправить"
              type="submit"
          />
        </div>

      </div>
    </div>
  </form>
</template>

<style scoped>
.upload-label {
  color: #FF4081;
}
</style>