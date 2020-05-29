<template>
    <div>
        app
    </div>
</template>

<script>
export default {
    data() {
        return {
            a = 1,
            c = 1
        }
    },
    methods: {
        getBoolean() {
            return false
        }
    },
    async created() {
        if (a===c) {
            console.log('11111');
            if ( await this.getBoolean()) {
                console.log('222222');
            }
        }
    },
}
</script>

<style></style>
