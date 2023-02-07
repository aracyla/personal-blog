<template>
    <div class="homepage">
        <h3 class="homepage__title">
            Hello. I am aracy.
        </h3>
        <div class="homepage__text">
            <p>Olá. Me chamo Aracy.</p>
        </div>
        <ClientOnly>
            <div class="homepage__icon">
                <TheIcon 
                    :height="iconHeight"
                    name="boat" />
            </div>
        </ClientOnly>
        <h5 class="homepage__desc">
            {{ $t("homepageDesc") }}
        </h5>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    setup() {
        const iconHeight = computed(() => {
            const iconHeightInPixels = (window.screen.height / 768) * 220;
            return `${iconHeightInPixels}px`;
        })
        return {
            iconHeight,
        };
    }
}
</script>

<style lang="scss" scoped>
@use "~/assets/styles/modules/vars.scss";

.homepage {
    margin: 0;
    min-width: 100%;
    color: vars.$text-color;

    &__title {
        margin: 0;
        font-size: vars.$h3-size;
        font-weight: lighter;
        text-align: center;
    }

    &__icon {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    &__desc {
        font-size: vars.$h5-size;
        font-weight: lighter;
        text-align: center;
    }

    &__text {
        font-size: vars.$text-size;
        font-weight: lighter;
        text-align: center;
    }
}
</style>
