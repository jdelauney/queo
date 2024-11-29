<script setup lang="ts">
import { TagProps } from '@queo/core/src/types/tag';
import { computed } from 'vue';
const props = withDefaults(defineProps<TagProps>(), {
	size: 'sm',
	isActive: false,
});

const classes = computed(() => [
	'queo-tag',
	`queo-tag--${props.size}`,
	props.variant ? `queo-tag--${props.variant}` : '',
	{ 'queo-tag--active': props.isActive },
]);
</script>

<template>
	<span role="option" :aria-label="ariaLabel" :class="classes">
		<slot />
	</span>
</template>
