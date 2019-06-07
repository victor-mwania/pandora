<template>
      <div class="container">
        <div id="title-header">
                  <h1>{{ title }}</h1>
        </div>
        <div class="" id="article-body">
             <article>
               {{ body }}
             </article>
        </div>
    </div>
</template>

<script>
const prodURL = "https://panapi.herokuapp.com/pandora/post/"

export default {
  name: "viewpost",
  data() {
    return {
      id: this.$route.params.id,
      title: null,
      body: null
    };
  },
  mounted() {
    fetch(prodURL + this.id)
      .then(response => response.json())
      .then(result => {
        this.title = result.title;
        this.body = result.body;
      });
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 20px;
  width: 50%;
}

#article-body {
  margin-top: 15px;
}

@media (max-width: 1024px){
  .container{
    width: 80%;
  }
}
</style>
