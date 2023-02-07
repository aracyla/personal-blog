<template>
    <component 
        :is="name" 
        :style="{
            height: height,
        }" />
</template>

<script>
import BoatIcon from "~/assets/icons/boat.svg";
import GithubIcon from "~/assets/icons/github.svg";
import MailIcon from "~/assets/icons/mail.svg";

const ICONS = {
    "boat": BoatIcon,
    "github": GithubIcon,
    "mail": MailIcon,
};

export default {
    props: {
        name: {
            type: String,
            required: true,
            validator(value) {
                return Object.keys(ICONS).includes(value);
            },
        },
        height: {
            type: String,
            default: '30px',
        },
    },
    components: {
        ...ICONS,
    },
};
</script>
