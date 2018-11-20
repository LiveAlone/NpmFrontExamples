<template>
  <div class="msg"> 
      {{ msg }} 
      <button @click="sendData">Send Data to Parent Content</button>
  </div>
</template>

<script>

// import Request from '@/http_request.js';
import Axios from 'axios';

export default {
  data(){
    return {
      msg: 'template again'
    }
  },
  methods:{
      sendData: function(){
          Axios.get('http://localhost:8080/teacher', {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // options = {url: 'http://localhost:8080/'}
        // Axios(options).then(resp => console.log(resp)).catch(error=>console.log(error));
        //   Request.get('\\')
      }
  }
}
</script>

<style>
</style>