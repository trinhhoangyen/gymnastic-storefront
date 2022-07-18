<template>
  <v-hover>
    <template v-slot:default="{ hover }">
    <v-parallax height="780" width="1000"
      src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/70123525_111769543534797_6887230425664585728_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oSH3oWECmV4AX93l9VC&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8ZXvRLJe7fARc13mwn9deFrpM48MFhWmSFgLqSIFU-CQ&oe=62FAFEFF">
      <v-fade-transition>

      <v-overlay v-if="hover" absolute color="#1a1a1a">
        <a href="/about" class="text-4xl bold"><b>VỀ CHÚNG TÔI</b></a>
      </v-overlay>
    </v-fade-transition>
    </v-parallax>
    
    </template>
  </v-hover>
</template>

<script>
export default {
 
};
</script>