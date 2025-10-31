<template>
  <v-footer
    app
    height="80"
    color="#1565C0" 
    class="d-flex align-center justify-space-between"
  >
    <div class="d-flex align-center">
      <a
        v-for="item in items"
        :key="item.title"
        class="d-inline-block mx-2 social-link"
        :href="item.href"
        rel="noopener noreferrer"
        target="_blank"
        :title="item.title"
      >
        <v-icon
          :icon="item.icon"
          size="24"
          color="white" 
        />
      </a>
    </div>

    <div
      class="text-caption text-white" 
      style="margin-right: 16px;"
    >
      &copy; 2024 Colegio Río Azul
      <span class="d-none d-sm-inline-block"> | Todos los derechos reservados.</span>
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'WhatsApp',
      icon: 'mdi-whatsapp', 
      href: 'https://wa.me/XXXXXXXXXX', 
    },
    {
      title: 'Facebook',
      icon: 'mdi-facebook', 
      href: 'https://facebook.com/colegiorioazul', 
    },
    {
      title: 'Instagram',
      icon: 'mdi-instagram', 
      href: 'https://instagram.com/colegiorioazul', 
    },
    {
      title: 'X (Twitter)',
      icon: 'mdi-twitter',
      href: 'https://twitter.com/colegiorioazul',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    transition: .2s ease-in-out

    &:hover
      opacity: 0.8
</style>