<template>
  <span class="navbar-text">
    <button class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>
    <div v-else>
      <div class="row">
        <div class="col-6" style="width: auto;">
          <div class="dropdown my-2">
            <div type="button" class="border-0 selectable no-select" data-bs-toggle="dropdown" aria-expanded="false">
              <div v-if="account.picture || user.picture">
                <img :src="account.picture || user.picture" alt="account photo" height="200" class="rounded"
                  style="border-radius: 50% !important;" />
              </div>
            </div>
            <div class="dropdown-menu dropdown-menu-sm-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
              <div class="list-group">
                <router-link :to="{ name: 'Account' }">
                  <div class="list-group-item dropdown-item list-group-item-action">
                    Manage Account
                  </div>
                </router-link>
                <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
                  <i class="mdi mdi-logout"></i>
                  logout
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 fs-1 ms-5">
          <div class="row">
            <div class="col-6">
              {{ account.name }}
            </div>
            <div class="col-6">
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
