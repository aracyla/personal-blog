<template>
    <div class="pages">
        <TheNavbar />
        <main class="pages__content">
            <NuxtPage />
        </main>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/modules/vars.scss";
.pages {
    margin: 0;
    padding: 0;
    min-height: calc(100vh - 60px);
    width: 100%;
    position: relative;
    background-color: vars.$app-bg;

    &__content {
        background-color: vars.$text-bg-color;
        min-height: calc(100vh - 60px);
        max-width: vars.$max-content-width;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        position: relative;
        padding-top: 50px;
    }
}
</style>
