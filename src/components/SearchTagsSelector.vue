<template>
  <div class="container">
    <b-form-group label-for="tags-component-select" id="tags-component-select-diet">
        <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
        <b-form-tags
            id="tags-component-select"
            v-model="value"
            size="lg"
            class="mb-2"
            add-on-change
            no-outer-focus
        >
            <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                        <b-form-tag
                            @remove="removeTag(tag)"
                            :title="tag"
                            :disabled="disabled"
                            variant="info"
                        >{{ tag }}</b-form-tag>
                    </li>
                </ul>
                <b-form-select
                    v-bind="inputAttrs"
                    v-on="inputHandlers"
                    :disabled="disabled || availableOptions.length === 0"
                    :options="availableOptions"
                >
                    <template #first>
                        <!-- This is required to prevent bugs with Safari -->
                        <option disabled value="">{{title}}</option>
                    </template>
                </b-form-select>
            </template>
        </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    name: "SearchTagsSelector",
    props: {
        title: String,
        options: {
          type: Array,
        }
    },
    data() {
      return {
        value: [],
      }
    },
    computed: {
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
    }
  }
</script>

<style>
.container{
}
</style>
