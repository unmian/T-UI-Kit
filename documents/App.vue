<!--
 * @Author: Quarter
 * @Date: 2022-02-01 07:42:23
 * @LastEditTime: 2022-02-15 10:31:41
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/documents/App.vue
-->
<template>
  <div class="t-ui-kit-doc">
    <aside>
      <ul>
        <li v-for="(group, groupIndex) of menus.links" :key="`group-item-${groupIndex}`">
          <div class="group-label">{{ group.groupZhName }}</div>
          <div>
            <ul>
              <li
                v-for="(link, linkIndex) of group.children"
                :key="`link-item-${linkIndex}`"
                class="item-label"
              >
                <a v-if="link.disabled" disabled>{{ link.compClassName }}&nbsp;{{ link.compZhName }}</a>
                <router-link
                  v-else
                  :to="`/${group.groupName}/${link.compName}`"
                >{{ link.compClassName }}&nbsp;{{ link.compZhName }}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </aside>
    <main>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ComponentList from "./assets/menus.json";

export default Vue.extend({
  name: "Application",
  data() {
    return {
      menus: {
        links: ComponentList,
      },
    };
  },
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.t-ui-kit-doc {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;

  aside {
    width: 232px;
    height: 100%;
    padding: 0 12px;
    border-right: 1px solid #ccc;
    overflow: auto;
    box-sizing: border-box;

    ul {
      padding: 0;
      list-style: none;
      margin: 0;
    }

    .group-label {
      width: 100%;
      height: 40px;
      padding: 14px 12px 4px;
      color: rgba($color: #000000, $alpha: 0.4);
      font-size: 12px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-top: 8px;
    }

    .item-label {
      width: 100%;
      margin-top: 4px;

      a {
        width: 100%;
        height: 40px;
        padding: 0 12px;
        color: rgba($color: #000000, $alpha: 0.6);
        font-size: 14px;
        line-height: 40px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        cursor: pointer;
        border-radius: 3px;
        box-sizing: border-box;
        display: block;

        &:not([disabled]):not(.router-link-active):hover {
          color: rgba($color: #000000, $alpha: 0.9);
          background-color: #f3f3f3;
        }

        &.router-link-active {
          color: white;
          cursor: default;
          background-color: #0052d9;
        }

        &[disabled] {
          color: rgba($color: #000000, $alpha: 0.3);
          cursor: not-allowed;
        }
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
    overflow: auto;
    flex: 1;

    .main-content {
      max-width: 1208px;
      padding: 15px 24px;
      box-sizing: border-box;
      margin: 0 auto;
    }
  }
}
</style>