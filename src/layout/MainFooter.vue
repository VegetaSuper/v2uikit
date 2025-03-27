<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="/">
              About Us
            </a>
          </li>
          <li>
            <a href="/">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Designed by
        <a href="/" target="_blank" rel="noopener"
          >Invision</a
        >. Coded by
        <a href="/" target="_blank" rel="noopener"
          >BinarCode</a
        >
        and
        <a href="/" target="_blank" rel="noopener"
          >Creative Tim</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
