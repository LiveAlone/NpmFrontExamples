<template>
  <div class="msg"> {{ msg }} </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'template again'
    }
  }
}
</script>

<style>
  .msg{
    color: grey;
  }
</style>
