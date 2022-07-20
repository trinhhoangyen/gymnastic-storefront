<template>
  <div>
    <div class="flex-col hidden p-2 mt-4 leading-10 lg:flex">
      <div class="font-bold uppercase">Thể loại</div>
      <nuxt-link
        to="/"
        :class="[
          'text-base font-semibold',
          'active' === '' ? 'w-4/5  bg-gray-500 border-l-4 border-l-yellow-500' : ''
        ]"
      >Tất cả</nuxt-link>
      <nuxt-link
        v-for="(cate, index) in categories"
        :key="index"
        to="/"
        :class="[
          'text-base font-semibold',
          1 === cate.id ? 'w-4/5  bg-gray-500 border-l-4 border-l-yellow-500' : ''
        ]"
      >{{ cate.name }}</nuxt-link>
    </div>
    <div class="w-full lg:hidden">
      <v-select v-model="value" :items="items" multiple>
        <template v-slot:selection="{ item, index }">
          <span v-if="index === 0">{{ item }}</span>
          <span
            v-if="index === 1"
            class="ml-1 text-sm text-grey-2 text-caption"
          >(+{{ value.length - 1 }} others)</span>
        </template>
      </v-select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
    value: ["foo", "bar", "fizz"]
  })
};
</script>