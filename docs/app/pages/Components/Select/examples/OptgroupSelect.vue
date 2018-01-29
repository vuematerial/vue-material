<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label for="food">Food</label>
        <md-select v-model="food1" name="food" id="food">
          <md-optgroup label="Baked Goods">
            <md-option value="apple-pie">Apple Pie</md-option>
            <md-option value="chocolate-cake">Chocolate Cake</md-option>
          </md-optgroup>

          <md-optgroup label="Fruits">
            <md-option value="apples">Apples</md-option>
            <md-option value="bananas">Bananas</md-option>
            <md-option value="oranges">Oranges</md-option>
            <md-option value="peaches">Peaches</md-option>
          </md-optgroup>

          <md-optgroup label="Vegetables">
            <md-option value="broccoli">Broccoli</md-option>
            <md-option value="carrots">Carrots</md-option>
            <md-option value="cucumbers">Cucumbers</md-option>
          </md-optgroup>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item">
      <md-field>
        <label for="food">Food</label>
        <md-select v-model="food2" name="food" id="food" md-dense>
          <md-optgroup label="Baked Goods">
            <md-option value="apple-pie">Apple Pie</md-option>
            <md-option value="chocolate-cake">Chocolate Cake</md-option>
          </md-optgroup>

          <md-optgroup label="Fruits">
            <md-option value="apples">Apples</md-option>
            <md-option value="bananas">Bananas</md-option>
            <md-option value="oranges">Oranges</md-option>
            <md-option value="peaches">Peaches</md-option>
          </md-optgroup>

          <md-optgroup label="Vegetables">
            <md-option value="broccoli">Broccoli</md-option>
            <md-option value="carrots">Carrots</md-option>
            <md-option value="cucumbers">Cucumbers</md-option>
          </md-optgroup>
        </md-select>
      </md-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OptgroupSelect',
    data: () => ({
      food1: null,
      food2: 'carrots'
    })
  }
</script>
