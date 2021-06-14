<template>
  <div>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-3">
          <div class="mm">
            <div>
              <i class="fa fa-question-circle"></i>
              <h6>Portfolio Balance</h6>
              <div></div>
              <span>$178.59</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mm">
            <div>
              <i class="fa fa-question-circle"></i>
              <h6>Credit Line</h6>
              <span class="tc-indigo-500">$89.77</span>
              <div></div>
              <h6>Available Credit</h6>
              <span class="tc-blue-500">$89.77</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mm">
            <div>
              <i class="fa fa-question-circle"></i>
              <h6>Interest Earned</h6>
              <div></div>
              <span class="tc-mint-500">$2.93</span
              ><a href="/interest-earned"
                >See Interest Details <i class="fa fa-long-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mm">
            <div>
              <i class="progress"
                ><svg width="62" height="62">
                  <circle
                    fill="transparent"
                    stroke="#F2F2F6"
                    stroke-width="3"
                    r="28"
                    cx="31"
                    cy="31"
                  ></circle>
                  <circle
                    fill="transparent"
                    stroke-width="3"
                    r="28"
                    cx="31"
                    cy="31"
                    class="ring base"
                    stroke-dasharray="175.92918860102841 175.92918860102841"
                    stroke-dashoffset="175.92918860102841"
                  ></circle></svg
                ><img
                  alt=""
                  width="56"
                  src="https://platform.nexo.io/assets/icons/ll-base.png"
                  style="top: 3px; left: 3px;"
              /></i>
              <h6>Loyalty Level</h6>
              <div></div>
              <span>Base</span
              ><a href="/profile/loyalty-levels"
                >Upgrade to Silver Level <i class="fa fa-long-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="action" style="margin-top: 20px;">
        <div class="row">
          <div class="col-md-4">
            <div class="act">
              <a class="ActionButton" href="/borrow"
                ><i class="fas fa-university"></i><strong>Borrow</strong
                ><span>Cash or Stablecoins</span></a
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="act">
              <a class="ActionButton" href="/repayment"
                ><i class="fas fa-undo"></i><strong>Repay</strong
                ><span>with Crypto, Cash or Stablecoins</span></a
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="act">
              <a class="ActionButton" href="/repayment"
                ><i class="fas fa-undo"></i><strong>Withdraw</strong
                ><span>with Crypto, Cash or Stablecoins</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "assets",
};
</script>

<style lang="scss" scoped>
.mm > * {
  background: #ffffff;
  padding: 1.71429rem;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 11.42857rem;
  transition: all 0.25s, transform 0.2s;
  border-radius: 0.28571rem;
  box-shadow: 0 2px 3px 0 rgba(24, 28, 32, 0.1);
  -webkit-animation: show-from-bottom 0.3s ease-out;
  animation: show-from-bottom 0.3s ease-out;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  i {
    color: #83888c;
    right: 1.71429rem;
    font-size: 1.15rem;
    position: absolute;
    .progress {
      width: 4.42857rem;
      height: 4.42857rem;
    }
  }

  div {
    flex: 1;
  }
  span {
    font-size: 1.1rem;
    line-height: 1.2;
    font-weight: 500;
  }

  a {
    min-height: 3rem;
    font-size: 1rem;
    line-height: 1.35;
    font-weight: 500;
    color: #83888c;
    background: #f6f8fb;
    margin: 1.14286rem -1.71429rem -1.71429rem;
    padding: 0.85714rem 1.71429rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom-left-radius: 0.28571rem;
    border-bottom-right-radius: 0.28571rem;

    .fa-long-arrow-right {
      margin-left: 0.57143rem;
      transform: translateY(1px);
      transition: all 0.2s, transform 0.4s;
    }
  }
}

.tc-indigo-500,
.tc-indigo-500 {
  color: #1e4dd8;
}

.tc-blue-500,
.tc-blue-500 {
  color: #3a8ef6;
}

.tc-mint-500,
body .tc-mint-500 {
  color: #00a76a;
}
.ActionButton {
  flex: 1;
  display: grid;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  grid-template-columns: 3.57143rem 1fr;
  cursor: pointer;
  padding: 0.78571rem 1.42857rem;
  grid-column-gap: 1.07143rem;
  box-sizing: border-box;
  border-radius: 0.28571rem;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  color: #4a5056;
  min-width: 0;
  i {
    grid-row: 1/3;
    grid-column: 1;
    text-align: center;
    font-size: 2.2rem;
    color: #1e4dd8;
  }
  strong {
    grid-row: 1;
    grid-column: 2;
    color: #252a2f;
    font-size: 1.14286rem;
    line-height: 1.35;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: color 0.2s;
  }
  span {
    grid-row: 2;
    grid-column: 2;
    font-size: 1rem;
    line-height: 1.35;
    font-weight: 400;
    color: #252a2f;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.act {
  background: #fff;
}
</style>
