<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

// Access the page's frontmatter data
const { frontmatter } = useData();

// Computed property to safely access the roadmapData
const roadmap = computed(() => frontmatter.value.roadmapData || []);
</script>

<template>
  <div class="roadmap-container">
    <div v-for="phase in roadmap" :key="phase.phase" class="roadmap-phase">
      <h2 :style="{ 'border-left-color': phase.color }">
        {{ phase.phase }}
      </h2>
      <p class="phase-description">{{ phase.description }}</p>

      <div class="phase-items">
        <div v-for="item in phase.items" :key="item.title" class="roadmap-card">
          <div class="card-header">
            <h3>{{ item.title }}</h3>
            <span class="status-tag" :style="{ 'background-color': phase.color }">
              {{ item.status }}
            </span>
          </div>
          <p class="details">{{ item.details }}</p>
          
          <div class="progress-bar-container">
            <div 
              class="progress-bar" 
              :style="{ width: item.percentage + '%', 'background-color': phase.color }"
            ></div>
            <span class="progress-label">{{ item.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for the component */
.roadmap-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.roadmap-phase h2 {
  font-size: 1.8rem;
  padding-left: 20px;
  border-left: 5px solid; /* Uses the color style set in the template */
  margin-top: 30px;
  margin-bottom: 5px;
}
.phase-description {
    margin-left: 25px;
    font-style: italic;
    color: var(--vp-c-text-2);
}
.phase-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
}
.roadmap-card {
  border: 1px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.3s;
}
.roadmap-card:hover {
    border-color: var(--vp-c-brand-1);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.status-tag {
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}
.details {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}
.progress-bar-container {
  height: 8px;
  background-color: var(--vp-c-bg-mute);
  border-radius: 4px;
  margin-top: 15px;
  position: relative;
}
.progress-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s;
}
.progress-label {
    position: absolute;
    right: 5px;
    top: -20px;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--vp-c-text-1);
}
</style>