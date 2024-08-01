<template>
  <div class="filter-sort">
    <div class="select-wrapper">
      <select v-model="activeCategory">
        <option value="all">All categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="select-wrapper">
      <select v-model="activeSort">
        <option value="default">Default sorting</option>
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
      </select>
    </div>

    <button @click="resetFilters">Reset Filter</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FilterSort',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const store = useStore();

    const activeCategory = computed({
      get: () => store.state.activeCategory,
      set: (value) => store.commit('setActiveCategory', value)
    });

    const activeSort = computed({
      get: () => store.state.activeSort,
      set: (value) => store.commit('setActiveSort', value)
    });

    function applyFilterSort() {
      emit('filterSort', { category: activeCategory.value, sort: activeSort.value });
    }

    function resetFilters() {
      store.commit('setActiveCategory', 'all');
      store.commit('setActiveSort', 'default');
      applyFilterSort();
    }

    return {
      activeCategory,
      activeSort,
      resetFilters
    };
  }
};
</script>

<style scoped>
.filter-sort {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  font-size: 1rem;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  position: absolute;
  pointer-events: none;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #141313;
  border-radius: 10px;
  padding: 10px 30px 10px 10px;
  font-size: 1rem;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #02273d;
}

button {
  background-color: #02283f;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0a6aa9;
}

@media (max-width: 768px) {
  .filter-sort {
    flex-direction: column;
    align-items: center;
  }

  .select-wrapper, button {
    width: 100%;
  }
}
</style>
