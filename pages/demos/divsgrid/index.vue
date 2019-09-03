<template>
  <div class="magazine">
    <div class="item title orange" />
    <div class="item content1 blue" />
    <div class="item content2 blue" />
    <div class="item quote green" />
    <div class="item image red" />
    <div class="item score yellow" />
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.magazine {
    width: 100vw;
    height: 90vh;
    /* outline: 6px solid #121219; */
    display: grid;
    grid-template-rows: 75px 2fr 1fr;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
}

.title {
    grid-row: 1;
    grid-column: 1 / 3;
}
.title {
    grid-row: 1;
    grid-column: 1 / 3;
}
.orange {
    border-color: #f5a432;
    color: #f5a432;
    background-image: linear-gradient(224deg, #f4a433 0%, #754e16 100%);
}
.item {
    border: 10px solid #b0c5ff;
    background-image: linear-gradient(224deg, #b0c5ff 0%, #26145f 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-family: 'Raleway', sans-serif;
    color: #b0c5ff;
}
/* body * {
    box-sizing: border-box;
} */

.content1 {
    grid-row: 2 / 4;
    grid-column: 1 / 2;
}

.content1 {
    grid-row: 2 / 4;
    grid-column: 1 / 2;
}
.content2 {
    grid-row: 3 / 4;
    grid-column: 2 / 4;
}

.blue {
    border-color: #4f86f5;
    color: #4f86f5;
    background-image: linear-gradient(224deg, #4f86f5 0%, #2e4e90 100%);
}
.quote {
    grid-row: 2;
    grid-column: 4;
}
.green {
    border-color: #69b469;
    color: #69b469;
    background-image: linear-gradient(224deg, #69b469 0%, #365b36 100%);
}
.image {
    grid-row: 1 / 3;
    grid-column: 2 / 5;
}
.red {
    border-color: #ec7777;
    color: #ec7777;
    background-image: linear-gradient(224deg, #ec7777 0%, #6b3636 100%);
}
.score {
    grid-row: 3;
}
.yellow {
    border-color: #efdc77;
    color: #efdc77;
    background-image: none;
    background-image: linear-gradient(224deg, #faf7e8 0%, #87730c 100%);
}

.blue {
    border-color: #4f86f5;
    color: #4f86f5;
    background-image: linear-gradient(224deg, #4f86f5 0%, #2e4e90 100%);
}
</style>
