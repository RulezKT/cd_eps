const { DEGREE_RATIO, SEC_IN_1_DAY, JD2000 } = require("cd_consts");

// used in find_eps formula
// https://radixpro.com/a4a-start/factor-t-and-delta-t/
// https://radixpro.com/a4a-start/obliquity/
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
function find_eps(sec_from_jd2000) {
  const t = sec_from_jd2000 / 3155760000;

  const eps =
    (((((-0.0000000434 * t - 0.000000576) * t + 0.0020034) * t - 0.0001831) *
      t -
      46.836769) *
      t +
      84381.406) *
    0.00000484813681109536;

  return eps;
}

module.exports = {
  find_eps,
  find_eps_normal,
};
