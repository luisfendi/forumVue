<template>
<div class="wrapper" @click.self="closeModal">
  <div class="modal">
      <h3>Войдите в аккаунт, чтобы оставить комментарий</h3>
      <button @click="closeModal" class="modal-closer">close</button>
      <Link :to="'signin'" :title="'войти'" @click="closeModal"/>
  </div>
</div>
</template>

<script>
export default {
    methods: {
        closeModal(){
            this.$emit('modalClose')
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal{
        border: 2px solid black;
        width: 40%;
        background: white;
    }
}
    
</style>