const { DEGREE_RATIO, SEC_IN_1_DAY, JD2000 } = require("cd_consts");

// used in find_eps formula
// https://radixpro.com/a4a-start/factor-t-and-delta-t/
// https://radixpro.com/a4a-start/obliquity/

// according to tests using de440s.bsp
//max_eps = 0.4094332034810189
//min_eps = 0.40875190046933224

function factor_t(sec_from_jd2000) {
  const jdn = JD2000 + sec_from_jd2000 / SEC_IN_1_DAY;
  return (jdn - JD2000) / 36525;
}

function find_eps_normal(sec_from_jd2000) {
  const t = factor_t(sec_from_jd2000);
  const asec =
    ((((-0.0000000434 * t - 0.000000576) * t + 0.0020034) * t - 0.0001831) * t -
      46.836769) *
      t +
    84381.406;
  return asec / 3600.0 / DEGREE_RATIO;
}
//version without dependencies
//we need 7 numbers after the decimal point
function find_epsV2(sec_from_jd2000) {
  const t = sec_from_jd2000 / 3155760000;

  let eps =
    (((((-0.0000000434 * t - 0.000000576) * t + 0.0020034) * t - 0.0001831) *
      t -
      46.836769) *
      t +
      84381.406) *
    0.00000484813681109536;

  if (eps < 0.408) eps = 0.40875190046933224;
  if (eps > 0.41) eps = 0.4094332034810189;

  return eps;
}

//V3
//using tests and average movement speed
function find_eps(sec_from_jd2000) {
  const eps_0_sec = 0.4090926006005825565914;
  const eps_in_1_sec = -0.0000000000000719475504;

  return eps_0_sec + sec_from_jd2000 * eps_in_1_sec;
}

module.exports = {
  find_eps,
  find_epsV2,
};
