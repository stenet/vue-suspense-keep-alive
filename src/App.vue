<template>
  <div id="app">
    <nav>
      <router-link to="/">page1</router-link>
      | <router-link to="/page2">page2</router-link> | <router-link to="/page3">page3</router-link> |
      <router-link to="/page4">page4</router-link> | <router-link to="/page5">page5</router-link>
    </nav>
    <main>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <KeepAlive :max="2">
            <Suspense>
              <component :is="Component"></component>
            </Suspense>
          </KeepAlive>
        </template>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import { h, Component, KeepAlive, Suspense } from 'vue'
import { RouterView } from 'vue-router'

const RouterComp = (props, context) => {
  return () =>
    h(
      RouterView,
      {},
      {
        default: (routerProps) => {
          if (!routerProps) return

          return h(
            KeepAlive,
            {
              max: 2,
            },
            {
              default: () => {
                return h(
                  Suspense,
                  {},
                  {
                    default: () => {
                      return h(routerProps.Component, {})
                    },
                  }
                )
              },
            }
          )
        },
      }
    )
}
</script>

<style></style>
