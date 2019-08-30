<template>
  <div class="container-fluid footer">
    <footer>
      <span>{{ copyright }}</span> ~
      <span>
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" class="fa" />
        {{ email }}
      </span> ~
      <span>
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'phone' }" class="fa" />
        {{ phone }}
      </span> ~
      <span>{{ poweredBy }}</span> ~
      <span> <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="fa" />
        <!-- <a href="#pablo" class="btn btn-primary btn-round">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="fa primary" />
        </a> -->
      </span> ~
      <span><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
        <!-- <a href="#pablo" class="btn btn-primary btn-round">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" class="fa primary" />
        </a> -->
      </span>
      <!-- <div class="row">
        <div class="col">
          <a href="#pablo" class="btn btn-primary btn-round">
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'facebook' }"
              class="fa-4x primary"
            />
          </a>
        </div>
        <div class="col">
          <a href="#pablo" class="btn btn-primary btn-round">
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'linkedin' }"
              class="fa-4x primary"
            />
          </a>
        </div>
      </div> -->
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright: '© 2019 Copyright The Odd Wave',
      email: 'info@theoddwave.co.nz',
      phone: '+642108823769',
      poweredBy: 'powered by modern web technologies'
    }
  }
}
</script>
<style scoped>
</style>
