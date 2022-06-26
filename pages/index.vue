<template>
  <div class="flex flex-wrap w-4/5 h-full pt-5 mx-auto gap-y-1 lg:pt-10 lg:w-3/5 text-grey-2">
    <div
      v-for="item in list"
      :key="item"
      class="relative z-10 min-w-xs"
      :class="customClass(item.type)"
    >
      <img :src="item.image" :alt="item.title" class="object-cover w-full h-full" />
      <a
        class="absolute bottom-0 flex w-full p-5 text-white bg-black-50"
        target="_blank"
        :href="item.link"
      >{{ item.title }}</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      list: [
        {
          type: "big",
          title:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216239/image/10232443-833x474_qmvqty.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "medium",
          title:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JFM09838-833x474_xatbct.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JMP_8575-833x474_vppkyv.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JFM09838-833x474_xatbct.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JMP_8635-833x474_uttjtx.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216239/image/10232444-833x474_dphtbq.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        }
      ]
    };
  },
  methods: {
    customClass(value: string) {
      return value === "big"
        ? "w-2/3 h-96"
        : value === "medium"
        ? "w-1/3 pl-1 h-96"
        : "w-1/4 h-72 pl-1";
    }
  }
};
</script>

