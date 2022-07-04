<template>
  <div class="w-full">
    <banner-home />
    <div class="bg-grey-6">
      <div
        class="flex flex-wrap w-full h-full pt-5 pb-20 mx-auto sm:w-4/5 lg:w-3/5 gap-y-1 lg:pt-10 text-grey-2"
      >
        <div
          v-for="item in list"
          :key="item"
          class="relative z-10 min-w-xs"
          :class="customClass(item.type)"
        >
          <img :src="item.image" :alt="item.headline" class="object-cover w-full h-full" />
          <a
            class="absolute bottom-0 flex w-full p-5 text-white bg-black-50"
            target="_blank"
            :href="item.link"
          >{{ item.headline }}</a>
        </div>
      </div>
    </div>
    <div class="flex w-4/5 gap-4 py-10 mx-auto bg-white lg:w-3/5">
      <template v-for="item in list" class="w-1/3">
        <div v-if="item.showMore" :key="item">
          <img :src="item.image" :alt="item.headline" class="object-cover w-full" />
          <div class="py-5 mt-2 text-grey-2">
            <a
              class="w-full text-2xl font-medium text-black"
              target="_blank"
              :href="item.link"
            >{{ item.headline }}</a>
            <p class>{{ item.content }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="bg-grey-6">
      <div class="w-4/5 pt-5 mx-auto lg:w-3/5 lg:pt-10">
        <div class="flex items-center">
          <div class="w-full h-0.5 bg-grey-7"></div>
          <p class="text-2xl text-center min-w-md">FEATURED CONTESTS</p>
          <div class="w-full h-0.5 bg-grey-7"></div>
        </div>
        <div class="flex h-full pt-10 pb-20 overflow-x-scroll gap-x-2 text-grey-2">
          <div v-for="item in list" :key="item" class="min-w-md">
            <img :src="item.image" :alt="item.headline" class="w-full" />
            <div class="p-3 text-xl text-black uppercase">
              <a target="_blank" :href="item.link">{{ item.title }}</a>
            </div>
          </div>
        </div>
      </div>
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
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216239/image/10232443-833x474_qmvqty.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/",
          content:
            "Check out the contest photos from the 2022 NPC Worldwide Korea Regional Qualifier! Click here to see the...",
          showMore: true
        },
        {
          type: "medium",
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JFM09838-833x474_xatbct.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JMP_8575-833x474_vppkyv.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/",
          content:
            "Check out the contest photos from the 2022 NPC Worldwide Korea Regional Qualifier! Click here to see the...",
          showMore: true
        },
        {
          type: "small",
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JFM09838-833x474_xatbct.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216247/image/JMP_8635-833x474_uttjtx.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/"
        },
        {
          type: "small",
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216239/image/10232444-833x474_dphtbq.jpg",
          link:
            "https://npcnewsonline.com/around-the-npc-2022-npc-maryland-states-east-coast-classic-check-in-photos/778147/",
          content:
            "Check out the contest photos from the 2022 NPC Worldwide Korea Regional Qualifier! Click here to see the...",
          showMore: true
        }
      ],
      listContent: [
        {
          type: "big",
          title: "NPC Worldwide Monsterzym Pro Qualifier",
          headline:
            "Around the NPC-2022 NPC Maryland States/East Coast Classic Check-In Photos",
          image:
            "https://res.cloudinary.com/dhnpysdvn/image/upload/v1656216239/image/10232443-833x474_qmvqty.jpg",
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

