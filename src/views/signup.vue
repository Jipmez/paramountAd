<template>
  <div class="authentication"  style="overflow-y: auto;
">
    <div class="container">
      <div
        class="col-md-12 content-center"
       
      >
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="company_detail">
              <h4 class="logo">
                <img
                  src="https://www.wrraptheme.com/templates/alpino/horizontal/assets/images/logo.svg"
                  alt=""
                />
                ParamountAd
              </h4>
              <h3>The new <strong>Level</strong> In Advertising</h3>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 offset-lg-1">
            <div class="card-plain">
              <div class="header">
                <h5>Sign Up</h5>
                <span>Register a new membership</span>
                 <p v-if="state.errors.length">
                  
                 <ul style="list-style: none;" class="text-danger">
                    <li v-for="error in state.errors"  :key="error">{{ error }}</li>
                  </ul>
              </p>
              </div>
              <form class="form" @submit.prevent="signup">
                 <div class="input-group" v-if="state.ref">
                 <input  type="text" class="form-control" placeholder="Your refferer" v-model="state.ref"
                    readonly required>
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fa fa-user-circle"></i
                    ></span>
                  </div>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="state.username"
                    placeholder="Enter User Name"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fa fa-user-circle"></i
                    ></span>
                  </div>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="state.email"
                    placeholder="Enter Email"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fa fa-envelope"></i
                    ></span>
                  </div>
                </div>
                <div class="input-group">
                  <div
                    class="btn-group bootstrap-select form-control show-tick"
                  >
                    <select
                      class="form-control show-tick"
                      tabindex="-98"
                      v-model="state.country"
                    >
                      <option value="" disabled selected
                        >--Select your country</option
                      >
                      <option value="United States">United States</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Americann samoa</option>
                      <option>Andorra</option>
                      <option>Angolla</option>
                      <option>Anguilla</option>
                      <option>Antarctica</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Aruba</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaidjan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bermuda</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia-Herzegovina</option>
                      <option>Botswana</option>
                      <option>Bouvet Island</option>
                      <option>Brazil</option>
                      <option>British Indian Ocean Territory</option>
                      <option>Brunei Darussalam</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burundi</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Cape Verde</option>
                      <option>Cayman Islands</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Christmas Island</option>
                      <option>Cocos (Keeling) Islands</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Congo</option>
                      <option>Congo (Democratic Republic)</option>
                      <option>Cook Islands</option>
                      <option>Costa Rica</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Cyprus</option>
                      <option>Czech Republic</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>East Timor</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Ethiopia</option>
                      <option>Falkland Islands</option>
                      <option>Faroe Islands</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>France (European Territory)</option>
                      <option>French Guiana</option>
                      <option>French Southern Territories</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Gibraltar</option>
                      <option>Great Britain</option>
                      <option>Greece</option>
                      <option>Greenland</option>
                      <option>Grenada</option>
                      <option>Guadeloupe</option>
                      <option>Guam</option>
                      <option>Guatemala</option>
                      <option>Guinea</option>
                      <option>Guinea Bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Heard and McDonald Islands</option>
                      <option>Holy See (Vatican City State)</option>
                      <option>Honduras</option>
                      <option>Hong Kong</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Ivory Coast (Cote D`Ivoire)</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Kuwait</option>
                      <option>Kyrgyz Republic (Kyrgyzstan)</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Macau</option>
                      <option>Macedonia</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Martinique</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mayotte</option>
                      <option>Mexico</option>
                      <option>Micronesia</option>
                      <option>Moldavia</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montserrat</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>Netherlands Antilles</option>
                      <option>New Caledonia</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option value="Nigerian">Nigeria</option>
                      <option>Niue</option>
                      <option>Norfolk Island</option>
                      <option>North Korea</option>
                      <option>Northern Mariana Islands</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palau</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Pitcairn Island</option>
                      <option>Poland</option>
                      <option>Polynesia</option>
                      <option>Portugal</option>
                      <option>Puerto Rico</option>
                      <option>Qatar</option>
                      <option>Reunion</option>
                      <option>Romania</option>
                      <option>Russian Federation</option>
                      <option>Rwanda</option>
                      <option>S. Georgia &amp; S. Sandwich Isls.</option>
                      <option>Saint Helena</option>
                      <option>Saint Kitts &amp; Nevis Anguilla</option>
                      <option>Saint Lucia</option>
                      <option>Saint Pierre and Miquelon</option>
                      <option>Saint Vincent &amp; Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>Sao Tome and Principe</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Slovak Republic</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Korea</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Svalbard and Jan Mayen Islands</option>
                      <option>Swaziland</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Togo</option>
                      <option>Tokelau</option>
                      <option>Tonga</option>
                      <option>Trinidad and Tobago</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Turkmenistan</option>
                      <option>Turks and Caicos Islands</option>
                      <option>Tuvalu</option>
                      <option>USA Minor Outlying Islands</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Virgin Islands (British)</option>
                      <option>Virgin Islands (USA)</option>
                      <option>Wallis and Futuna Islands</option>
                      <option>Weather Stations</option>
                      <option>Western Sahara</option>
                      <option>Yemen</option>
                      <option>Yugoslavia</option>
                      <option>Zaire</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>
                  </div>
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fa fa-flag"></i
                    ></span>
                  </div>
                </div>

                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    v-model="state.password"
                    placeholder="Password"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fa fa-lock"></i
                    ></span>
                  </div>
                </div>
                <div class="checkbox">
                  <input id="terms" type="checkbox" />
                  <label for="terms"
                    >I read and Agree to the
                    <a href="javascript:void(0);">Terms of Usage</a></label
                  >
                </div>

                <div class="footer">
                  <button
                    type="submit"
                    class="btn btn-primary btn-round btn-block"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
              <router-link to="/login" class="link">
                You already have a membership?
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/call";
import { reactive } from "vue";
import router from "../router";
import { toast } from "../services/toaster";
import { useRoute } from 'vue-router';
export default {
  name: "signup",

  setup() {
    let route = useRoute();

 
    let state = reactive({
      errors: [],
      username: null,
      email: null,
      country: null,
      ref : null,
      password: null,
    });

     state.ref =  route.query.ref;

     function validEmail(email) {
      /* var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  */
      var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     // return re.test(email);

      if(email.match(re)){
          return true
      }else{
        return false
      }
    }

    function signup() {

    var emailRe = /^.+@.+\..{2,4}$/;

    if (!state.email.match(emailRe)) {
      state.errors.push("Valid email required.");
    }

      let post = {
        email: state.email,
        username : state.username,
        country : state.country,
        ref:   state.ref == null ? "tess" : state.ref,
        password: state.password,
        key : 'reg'
      };

      api.post(post).then((res) => {
          if (res['data']['code'] == '1') {
                toast.notify("success", "account created");
                router.push({ path: "/login" });
              } else {
                toast.notify("error", res['data']['message']);
              }
      });
    }

    return {
      state,
      signup,
       validEmail,
    };
  },
};
</script>
