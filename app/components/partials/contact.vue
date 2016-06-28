<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;
  $darkGrey: #3d3d3d;
  $lightGrey: #787878;

  @mixin gradient {
    background: -webkit-linear-gradient(50deg,#0f1b2a, #1a2940);
    background: linear-gradient(50deg,#0f1b2a, #1a2940);
  }

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  @mixin headlineView {
    font-family: 'Catamaran', sans-serif;
    font-size: 40px;
    font-weight: 100;
    color: $primary;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .Contact {
    position: relative;
  }

  .contact-title {
    margin-top: 0;
    margin-bottom: 70px;

    h2 {
      padding-top: 100px;
      text-align: center;
      @include headlineView;
    }

    h3 {
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      color: $lightGrey;
      margin-top: 0;
      @include fontView;
    }
  }

.input-container {
    & input {
      width: 100%;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 2px solid $primary;
      background: none;

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder, -moz-input-placeholder {
      font-size: 16px;
      color: $darkGrey;
      @include fontView;
    }

    &:required {
      font-size: 16px;
      color: $primary;
      padding-left: 0;
      @include fontView;
    }
  }
}

.send-button-container {
  text-align: center;
}
.message {
  margin-top: 50px;
}

  .send-button {
    padding: 10px 90px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    border-radius: 10cm;
    color: #fff;
    margin-top: 50px;
    background-color: $primary;
    @include fontView;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  .mail {
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    color: $primary;
    margin-top: 90px;
    @include fontView;

    &:hover {
      color: $primary;
      text-decoration: none;
    }
  }

  .social {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 0;
    list-style: none;

    & li {
      display: inline-block;
      padding-left: 40px;
      margin-top: 10px;

      &:first-child {
        padding-left: 0;
      }

      & a {
        color: $darkGrey;
      }
    }
  }

</style>

<template>
  <div class="Contact">
    <div class="container">
      <div class="row">
      <div class="contact-title">
        <h2>Contact Me</h2>
        <h3>llentesque sit amet ex vel ante fringilla fringilla. Praesent non tristique dolor.</h3>
      </div>
    </div>
    <div class="form">
      <div class="row">
        <div class="input-container col-md-4">
          <input class="input" type="text" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'" required>
        </div>
        <div class="input-container col-md-4">
          <input class="input col-md-4" type="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" required>
        </div>
        <div class="input-container col-md-4">
          <input class="input col-md-4" type="tel" placeholder="Phone No." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone No'" required>
        </div>
        <div class="input-container message col-md-12">
          <input class="message col-md-12" type="message" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone No'" required>
        </div>
      </div>
    </div>
      <div class="row send-button-container">
        <a class="send-button" href="#">SEND</a>
      </div>
      <div class="row">
        <a class="mail col-md-12" href="mailto:stoian.adrian91@gmail.com?subject=Work%20Opportunity">stoian.adrian91@gmail.com</a>
      </div>
      <div class="row">
        <ul class="social">
          <li class="dribbble">
            <a href="#">Dr</a>
          </li>
          <li class="behance">
            <a href="#">Be</a>
          </li>
          <li class="linkedin">
            <a href="#">Ln</a>
          </li>
        </ul>
      </div>
  </div>
</div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
