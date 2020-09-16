<template>
  <div class="serverstatus">
    <p> Server Status : {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>  
<script>
export default {
    name: 'ServerStatus',
    data:function() {
        return {
            status : 'Critical'
        }
    },
    methods:{
        changeStatus() {
            this.status = 'Normal'
        }
    }
}

</script> 
