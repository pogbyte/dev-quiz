<template>
  <section class="login">
    <div class="login__content">
      <div class="login__logo">
        <img src="~/assets/img/logo-astro.png" alt srcset />
      </div>
      <form class="login__form">
        <div class="login__form__group">
          <input
            type="text"
            placeholder=" "
            class="login__form__input"
            id="username"
            v-model="username"
          />
          <label for="username" class="login__form__label">E-mail</label>
        </div>
        <div class="login__form__group">
          <input
            type="password"
            placeholder=" "
            class="login__form__input"
            id="password"
            v-model="password"
          />
          <label for="password" class="login__form__label">Password</label>
          <a class="login__form__sub-label" href="javascript:void(0)">Forgot your password?</a>
        </div>
        <a href="javascript:void(0)" class="login__form__btn" @click="login()">LOGIN</a>
        <div class="login__link login__link--1">
          <a href>Create Your Account</a>
        </div>
        <div class="login__link login__link--smaller login__link--2">
          <a href>or Sign up using</a>
        </div>
        <div class="login__auth-o">
          <div class="login__auth-o__icon">
            <img src="@/assets/img/google-icon.svg" alt srcset />
          </div>
          <div class="login__auth-o__icon">
            <img src="@/assets/img/facebook-icon.svg" alt srcset />
          </div>
          <div class="login__auth-o__icon">
            <img src="@/assets/img/github-icon.svg" alt srcset />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      let pass = new Buffer(this.password).toString("base64");
      const formData = {
        username: this.username,
        password: pass
      };

      this.$axios
        .$post("/auth/login", formData)
        .then(res => {
          this.$store.state.token = res.Authorization
          this.$router.push('/about')
          }
        )
        .catch(error => console.log(error));

    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.login {
  min-height: 100vh;
  background: #22222c url(~assets/img/login-bg-astros.png) no-repeat 0% 100%;
  font-family: "Roboto", sans-serif;
  padding-top: 3rem;
  &__logo {
    width: 38%;
    margin: auto;
    text-align: center;
    img {
      display: inline-block;
    }
  }
  &__form {
    max-width: 40rem;
    padding: 0 3rem 4rem;
    margin: 0 auto;
    &__group {
      margin-bottom: 4rem;
      font-family: "Roboto", sans-serif;
      color: white;
      position: relative;
      padding-top: 1.2rem;
    }
    &__label {
      display: block;
      position: absolute;
      bottom: 1.2rem;
      left: 1.5rem;
      font-size: 1.8rem;
      font-family: inherit;
      color: inherit;
      transition: all 0.4s ease;
    }
    &__sub-label {
      display: block;
      position: absolute;
      right: 0;
      bottom: -3rem;
      font-size: 1.2rem;
      font-family: inherit;
      color: inherit;
      transition: all 0.4s ease;
      &:hover {
        color: #9b77e3;
      }
    }

    &__input {
      color: inherit;
      font-size: 1.6rem;
      display: block;
      width: 100%;
      font-family: inherit;
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 2px solid #3e4149;
      padding: 1rem 1.2rem;

      &::-webkit-input-placeholder {
        font-family: inherit;
        color: inherit;
      }
      &:focus,
      &:not(:placeholder-shown),
      &:-webkit-autofill {
        & ~ label {
          top: 0;
          left: 0;
          font-size: 1.2rem;
        }
      }
    }
    &__btn {
      display: block;
      margin: 0 auto;
      width: 24rem;
      text-align: center;
      padding: 1rem 0;
      background: rgb(129, 78, 236);
      background: linear-gradient(
        45deg,
        rgba(129, 78, 236, 1) 64%,
        rgba(155, 119, 227, 1) 100%
      );
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 19px;
      color: #fff;
      border-radius: 38px;
      margin-top: 7rem;
      position: relative;
      z-index: 5;
      &::before {
        position: absolute;
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        border-radius: 38px;
        background: rgb(129, 78, 236);
        background: linear-gradient(
          45deg,
          rgba(129, 78, 236, 1) 64%,
          rgba(155, 119, 227, 1) 100%
        );
        z-index: -1;
      }

      &:hover {
        background: #fff;
        &::before {
          transform: scale(1.03);
        }
      }
    }
  }

  &__link {
    text-align: center;

    &--1 {
      margin: 2rem 0 0 0;
    }

    &--2 {
      margin: 0.5rem 0 1rem 0;
    }
    a {
      font-family: inherit;
      color: #fff;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 159.19%;
      text-align: center;
      &:hover {
        color: #9b77e3;
      }
    }

    &--smaller {
      a {
        font-size: 12px;
      }
    }
  }

  &__auth-o {
    display: flex;
    justify-content: center;
    &__icon {
      margin: 0 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
