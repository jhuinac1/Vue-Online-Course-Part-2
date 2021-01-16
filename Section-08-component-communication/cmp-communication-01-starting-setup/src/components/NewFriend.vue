<template>
    <section>
        <form @submit.prevent="addFriend">
            <div>
            <input placeholder="name" type="text" ref="name"/>
            </div>
            <div>
            <input placeholder="phone number" type="text" ref="phone"/>
            </div>
            <div>
            <input placeholder="email" type="text" ref="email"/>
            </div>
            <input type="submit" value="Add Contact" />
        </form>
    </section>
</template>

<script>
export default {
    emits: ["new-friend-info"],
    methods: {
        addFriend(){
            const newFriend = {
                name: this.$refs.name.value,
                phone: this.$refs.phone.value,
                email: this.$refs.email.value,
                id: new Date().toISOString(),
                isFavorite: false,
            }
            this.$emit("new-friend-info", newFriend);
            console.log(newFriend);
        }
    }
    
}
</script>