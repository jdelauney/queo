<script setup lang="ts">
import { ButtonProps } from '@queo/core/src/types/button';
import { computed, useSlots } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
	size: 'sm',
	variant: 'primary',
	loading: false,
	disabled: false,
	loadingPosition: 'right',
});

const slots = useSlots();

const hasOnlyIcon = computed(() => {
	return !slots.default && (!!slots.icon || !!slots.loadingIcon);
});

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void;
}>();

const classes = computed(() => [
	'queo-btn',
	`queo-btn--${props.variant}`,
	`queo-btn--${props.size}`,
	{
		'queo-btn--icon-only': hasOnlyIcon.value,
	},
]);
</script>

<template>
	<button
		:class="classes"
		:aria-disabled="disabled || loading"
		:aria-label="ariaLabel"
		:aria-busy="loading"
		:disabled="disabled || loading"
		@click="emit('click', $event)"
	>
		<!-- Icon-only loading state -->
		<span v-if="loading && hasOnlyIcon" role="status">
			<slot name="loadingIcon"></slot>
		</span>

		<template v-else>
			<!-- Left loading icon -->
			<span v-if="loading && loadingPosition === 'left'" role="status" aria-hidden="true">
				<slot name="loadingIcon" />
			</span>

			<!-- Left icon -->
			<span v-if="!loading && $slots.icon" aria-hidden="true">
				<slot name="icon" />
			</span>

			<!-- Button content -->
			<span v-if="$slots.default" class="queo-btn-content" :class="{ 'sr-only': loading && !$slots.loadingIcon }">
				<slot />
			</span>

			<!-- Right loading icon -->
			<span v-if="loading && loadingPosition === 'right'" role="status" aria-hidden="true">
				<slot name="loadingIcon" />
			</span>

			<!-- Right icon -->
			<span v-if="!loading && $slots.iconRight" aria-hidden="true">
				<slot name="iconRight" />
			</span>
		</template>
	</button>
</template>
