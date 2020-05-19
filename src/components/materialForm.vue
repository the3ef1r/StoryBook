<template>
    <div class="container">
      <form action="">
        <div class="form-row">
          <input v-model="message" placeholder="отредактируй меня">
          <p>Введённое сообщение: {{ message }}</p>
        </div>
        <br>
        <div class="form-row">
          <input type="checkbox" id="jack" value="Джек" v-model="checkedNames">
          <label for="jack">Джек</label>
          <input type="checkbox" id="john" value="Джон" v-model="checkedNames">
          <label for="john">Джон</label>
          <input type="checkbox" id="mike" value="Майк" v-model="checkedNames">
          <label for="mike">Майк</label>
          <br>
          <span>Отмеченные имена: {{ checkedNames }}</span>
        </div>
        <br>
        <div class="form-row">
          <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Выбрано: {{ selected }}</span>
        </div>
        <div class="form-row"></div>
        <div class="form-row"></div>
        <div class="form-row"></div>
      </form>
    </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      checkedNames: [],
      message: null,
      selected: 'А',
      options: [
        { text: 'Один', value: 'А' },
        { text: 'Два', value: 'Б' },
        { text: 'Три', value: 'В' }
      ]
    }
  }
};
</script>
<style lang="scss">
</style>