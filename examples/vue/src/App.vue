<script setup lang="ts"></script>

<template>
	<div class="demo">
		<Avatar src="https://picsum.photos/200/300" size="xl" online="online" />
	</div>
</template>

<style scoped>
.demo {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
}

.demo > div {
	display: flex;
	gap: 1rem;
}
</style>
