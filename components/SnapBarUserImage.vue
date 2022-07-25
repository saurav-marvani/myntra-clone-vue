<template>
    <div>
        <img :src='imgUrl' class='w-auto h-auto' />
    </div>
</template>

<script setup>
import { ref } from 'vue'
const imgUrl = ref(props.imgUrl)

// Define Props
const props = defineProps({
    imgUrl: String
})

</script>
