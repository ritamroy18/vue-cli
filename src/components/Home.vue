<template>
  <div class="home">
    <!-- <p> Server Status : {{ status }}</p> -->
    <!-- <hr> -->
    <!-- <button @click="changeStatus">Change Status</button> -->
     <ServerStatus v-for="server in 5" v-bind:key="server"></ServerStatus>
  </div>
</template>   
<script>
// export default {
//     name: 'Home',
//     data:function() {
//         return {
//             status : 'Critical'
//         }
//     },
//     methods:{
//         changeStatus() {
//             this.status = 'Normal'
//         }
//     }
// }

// Component setup locally.Here we setup ServerStatus component locally in home component.

import ServerStatus from "@/components/ServerStatus.vue";

export default {
    components: {
        // 'home-local-setup': 'ServerStatus'
        ServerStatus
    }
}
</script> 
