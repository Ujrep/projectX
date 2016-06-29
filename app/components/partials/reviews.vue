<style lang="scss">

  $primary: #38b48d;
  $slides: 3;

  @mixin gradient {
    background: -webkit-linear-gradient(50deg,#0f1b2a, #1a2940);
    background: linear-gradient(50deg,#0f1b2a, #1a2940);
  }

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .Reviews {
    position: relative;
    width: 100%;
    height: 100%;
    @include gradient;
  }

  .slider {
    margin-top: 100px;
    list-style: none;
    width: calc(100% * #{$slides});
    transition: all .5s ease-in;

    .avatar {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 auto;
    }
  }

  .feed {
    display: inline-block;
    width: calc(100% / #{$slides});
    & h5 {
      padding: 0 100px;
      font-size: 20px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      margin-top: 40px;
      @include fontView;
    }

    .loadingArea {
      position: relative;
      display: block;
      width: 150px;
      height: 1px;
      margin: 0 auto;
      margin-top: 26px;

      .loadingBar {
        transition: all 1s linear;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: $primary;
      }
    }

    & h6 {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      color: #fff;
      margin: 26px 0 0;
      @include fontView;
    }

    & p {
      font-weight: 700;
      font-size: 14px;
      color: $primary;
      text-align: center;
      margin-top: 0;
      padding-bottom: 90px;
      @include fontView;
    }
  }

  .slider-holder {
    overflow: hidden;
  }

  .arrow-left {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: $primary;
    z-index: 2;
    cursor: pointer;
  }

  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    width: 50px;
    height: 50px;
    background-color: $primary;
    z-index: 2;
    cursor: pointer;
  }

</style>

<template>
  <div class="Reviews">
    <div class="container-fluid">
      <div class="arrow-right" @click="goRight()"></div>
      <div class="arrow-left" @click="goLeft()"></div>
    </div>
    <div class="container">
      <div class="slider-holder">
        <ul class="slider" id="slider">
          <li class="feed" v-for="review in reviews">
            <div class="avatar"></div>
            <h5>{{ review.description }}
            </h5>
            <div class="loadingArea">
              <span class="loadingBar"></span>
            </div>
            <h6>{{ review.author }}</h6>
            <p>{{ review.company }}</p>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
    data() {
      return {
        reviews: [
          {
            avatar: '',
            description: 'Working with Adrian Stoian during the development of Sportonomy was a blessing. ' +
                         'His passion to his craft was only surpassed by the quality of his work. ' +
                         'We appreciated so much his creativity and inventiveness that allowed Sportonomy to ' +
                         'truly come to life.  He went out of his way to make sure our needs were met and ' +
                         'that is something we at Sportonomy truly value. ' +
                         'We look forward to our next opportunity to work with Adrian.',
            author: 'Josh Racette',
            company: 'Sportonomy'
          },
          {
            avatar: '',
            description: 'Working with Adrian Stoian during the development of Sportonomy was a blessing. ',
            author: 'John Branch',
            company: 'Childhood memories'
          },
          {
            avatar: '',
            description: 'Working with Adrian Stoian during the development of Sportonomy was a blessing. ',
            author: 'John Snow',
            company: 'Winter Corporation'
          }
        ],
        selected: 0,
        loadingTime: '',
        secondsToLoad: 5000,
      };
    },

    methods: {
      goRight() {
        if (this.selected + 1 > this.reviews.length - 1) {
          this.selected = 0;
        } else {
          this.selected++;
        }

        document.getElementById('slider').style.marginLeft = -100 * this.selected + '%';
        this.loadBar()
      },

      goLeft() {
        if (this.selected - 1 < 0) {
          this.selected = this.reviews.length - 1;
        } else {
          this.selected--;
        }

        document.getElementById('slider').style.marginLeft = -100 * this.selected + '%';
        this.loadBar()
      },
      loadBar() {
        clearTimeout(this.loadingTime);
        let allSeconds = 0;
        let bar = document.getElementsByClassName('loadingBar')[this.selected];
        bar.style.width = 0;
        this.loadingTime = setInterval(() => {
            allSeconds += 1000;

            if (allSeconds / this.secondsToLoad > 1) {
              bar.style.width = 0;
              clearTimeout(this.loadingTime);
              this.goRight();
            } else {
              bar.style.width = (allSeconds / this.secondsToLoad) * 100 + '%';
            }
        }, 1000);
      }
    },
    ready() {
      this.loadBar();
    }
  };
</script>
