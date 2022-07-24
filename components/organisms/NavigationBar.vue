<template>
  <div>
    <menu-mobile :list-nav="listNav" />
    <menu-desktop :list-nav="listNav" />
    <!-- <div class="hidden h-px lg:block bg-amber-250"></div> -->
  </div>
</template>

<script>
import { ROUTE_NAME } from "~/utils/constants";
export default {
  data() {
    return {
      listNav: ROUTE_NAME
    };
  }
};
</script>

<style>
</style>