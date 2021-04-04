<template>
  <div>
    <h1>This is an Axios Demo page</h1>
    <div>{{ value }}</div>
  </div>
</template>

<script>

export default {
  name: 'AxiosDemo',
  props: {
    msg: String
  },
  data() {
      return {
          value: 'test'
      }
  },
  created() {
      debugger
      this.getData()
  },
  methods: {
      getData() {
          debugger
        this.$service.get('/getUser')
            .then(function (response) {
                debugger
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>