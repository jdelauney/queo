<script setup lang="ts">
import { Loader2, User } from 'lucide-vue-next';
</script>

<template>
	<div class="demo">
		<Button size="sm">Hello world</Button>
		<Button size="md">Hello world</Button>
		<Button size="lg">Hello world</Button>

		<Button variant="primary">Hello world</Button>
		<Button variant="secondary">Hello world</Button>
		<Button variant="outline">Hello world</Button>
		<Button variant="ghost">Hello world</Button>
		<Button variant="danger">Hello world</Button>

		<Button>
			<template #icon>
				<User />
			</template>
			User Settings
		</Button>
		<Button>
			User Settings
			<template #iconRight>
				<User />
			</template>
		</Button>
		<Button>
			<template #icon>
				<User />
			</template>
			User Settings
			<template #iconRight>
				<User />
			</template>
		</Button>
		<Button loading loading-position="left">
			<template #loadingIcon>
				<Loader2 class="animate-spin" />
			</template>
			Loading...
		</Button>
		<Button loading loading-position="right">
			Loading...
			<template #loadingIcon>
				<Loader2 class="animate-spin" />
			</template>
		</Button>
		<Button loading loading-position="center">
			<template #loadingIcon>
				<Loader2 class="animate-spin" />
			</template>
		</Button>
		<Button disabled>Disabled</Button>
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
