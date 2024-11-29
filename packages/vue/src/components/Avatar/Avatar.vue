<script setup lang="ts">
import { AvatarProps } from '@queo/core/src/types/avatar';
import { computed, ref } from 'vue';
const props = withDefaults(defineProps<AvatarProps>(), {
	alt: '',
	size: 'md',
	variant: 'circle',
});

const hasError = ref(false);

const classes = computed(() => ['queo-avatar', `queo-avatar--${props.size}`, `queo-avatar--${props.variant}`]);
</script>

<template>
	<div :class="classes">
		<img v-if="src && !hasError" :src="src" :alt="alt" class="queo-avatar__image" @error="hasError = true" />
		<span v-else class="queo-avatar__fallback">
			{{ fallback || alt?.charAt(0).toUpperCase() }}
		</span>
		<span v-if="status" :class="['queo-avatar__status', `queo-avatar__status--${status}`]" />
	</div>
</template>
