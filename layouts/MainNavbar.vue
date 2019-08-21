<template>
  <Navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <!-- <template slot-scope="{ toggle, isToggled }"> -->
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Now Ui Kit
      </router-link>
      <!-- <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover>-->
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93" />
          <p>Download</p>
        </a>
      </li>
      <DropDown tag="li" title="Components" icon="now-ui-icons design_app" class="nav-item">
        <NavLink to="/">
          <i class="now-ui-icons business_chart-pie-36" /> All components
        </NavLink>
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67" /> Documentation
        </a>
      </DropDown>
      <DropDown tag="li" title="Examples" icon="now-ui-icons design_image" class="nav-item">
        <NavLink to="/landing">
          <i class="now-ui-icons education_paper" /> Landing
        </NavLink>
        <NavLink to="/login">
          <i class="now-ui-icons users_circle-08" /> Login
        </NavLink>
        <NavLink to="/profile">
          <i class="now-ui-icons users_single-02" /> Profile
        </NavLink>
      </DropDown>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_share-66" />
          <p>Upgrade to PRO</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter" />
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square" />
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram" />
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </Navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components'
// import { Popover } from 'element-ui';
export default {
  name: 'MainNavbar',
  components: {
    DropDown,
    Navbar,
    // NavbarToggleButton,
    NavLink
    // [Popover.name]: Popover
  },
  props: {
    transparent: Boolean,
    colorOnScroll: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped></style>
