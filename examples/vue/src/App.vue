<script setup lang="ts"></script>

<template>
	<div class="demo">
		<Tag variant="primary">Hello tag</Tag>
		<Tag variant="secondary">Hello tag</Tag>
		<Tag variant="outline">Hello tag</Tag>
		<Tag variant="ghost">Hello tag</Tag>
		<Tag variant="danger">Hello tag</Tag>
		<Tag isActive>Hello tag</Tag>
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
