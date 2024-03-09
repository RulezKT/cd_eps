let fs = require("fs");

const { find_eps, find_epsV2 } = require("./cd_eps");
const { count } = require("console");

// function tests_eps() {
//   let start_time = -4734072000;
//   let end_time = 4735368000;

//   let min_eps_time = 0;
//   let max_eps_time = 0;

//   let temp_eps;

//   for (let i = start_time; i <= end_time; i++) {
//     const eps = find_eps(i);
//     temp_eps = eps;

//     if (eps == 0.4094332034810189) {
//       max_eps_time = i;
//     }

//     if (eps == 0.40875190046933224) {
//       min_eps_time = i;
//     }

//     if (i === start_time) {
//       continue;
//     }

//     if (eps > temp_eps) {
//       console.log("Error: ", i, eps, temp_eps);
//     }
//   }

//   fs.writeFileSync(
//     "max_eps.txt",
//     `max_eps = ${0.4094332034810189} : time is ${max_eps_time} \nmin_eps = ${0.40875190046933224}  : time is ${min_eps_time}\n`
//   );
// }

function test_performance(func_to_test) {
  // Get current time in milliseconds
  const startTime = new Date().getTime();

  for (let i = 0; i < 1_000_000_000; i++) {
    func_to_test(i);
  }

  // Your function or code block here
  const endTime = new Date().getTime();
  // Calculate execution time in milliseconds
  const executionTime = endTime - startTime;
  console.log("Execution time: " + executionTime + "ms");
}

//0.4091417072884116
//const time_sec_from_jd2000 = -682470763.0000188;
//console.log(find_eps_normal(time_sec_from_jd2000));
//console.log(find_eps(time_sec_from_jd2000));

//test_performance(find_eps);
//test_performance(find_eps_normal);

// let max_eps;
// let min_eps;

// for (let i = -4734072000; i <= 4735368000; i++) {
//   const eps = find_eps(i);
//   if (max_eps === undefined || eps > max_eps) {
//     max_eps = eps;
//   }
//   if (min_eps === undefined || eps < min_eps) {
//     min_eps = eps;
//   }
// }

// fs.writeFileSync(
//   "max_eps.txt",
//   `max_eps = ${max_eps} \nmin_eps = ${min_eps} \n`
// );

// function tests_eps2() {
//   let start_time = -4734072000;
//   let end_time = 4735368000;

//   let eps_difference = 0;
//   let eps_max_difference = NaN;
//   let eps_min_difference = NaN;

//   let count_not_equal = 0;

//   let to_fixed = 22;

//   let temp_eps;

//   for (let i = start_time; i <= end_time; i++) {
//     const eps = find_eps(i);

//     if (i === start_time) {
//       temp_eps = eps;
//       console.log("first iteration");
//       continue;
//     }

//     //0.0000000000000719424520
//     //0.0000000000000719979631
//     //0.0000000000000718869408

//     eps_difference = Math.abs(temp_eps - eps).toFixed(to_fixed);
//     console.log(eps_difference);

//     if (isNaN(eps_max_difference)) {
//       eps_max_difference = eps_difference;
//       eps_min_difference = eps_difference;
//       console.log("isNAN");
//       continue;
//     }

//     if (
//       eps_difference != eps_max_difference &&
//       eps_difference != eps_min_difference
//     ) {
//       count_not_equal++;
//     }

//     if (eps_difference > eps_max_difference) {
//       eps_max_difference = eps_difference;
//     }

//     if (eps_difference < eps_min_difference) {
//       eps_min_difference = eps_difference;
//     }

//     temp_eps = eps;
//   }

//   fs.writeFileSync(
//     `eps_diffs_to_fixed${to_fixed}.txt`,
//     `eps_max_difference = ${eps_max_difference}\neps_min_difference = ${eps_min_difference}\ncount_not_equal =  ${count_not_equal}\n`
//   );
// }
// function tests_eps3() {
//   //9_469_440_000 seconds
//   let start_time = -4734072000;
//   let end_time = 4735368000;

//   let count20 = 0;
//   let count31 = 0;
//   let count08 = 0;

//   let to_fixed = 22;

//   let temp_eps;

//   for (let i = start_time; i <= end_time; i++) {
//     const eps = find_eps(i);

//     if (i === start_time) {
//       temp_eps = eps;
//       console.log("first iteration");
//       continue;
//     }

//     //0.0000000000000719424520
//     //0.0000000000000719979631
//     //0.0000000000000718869408

//     eps_difference = Math.abs(temp_eps - eps).toFixed(to_fixed);

//     if (eps_difference == 0.000000000000071942452) {
//       count20++;
//     }

//     if (eps_difference == 0.0000000000000719979631) {
//       count31++;
//     }

//     if (eps_difference == 0.0000000000000718869408) {
//       count08++;
//     }

//     temp_eps = eps;
//   }

//   fs.writeFileSync(
//     `eps_diffs_to_fixed${to_fixed}.txt`,
//     `0.0000000000000719424520 = ${count20}\n0.0000000000000719979631 = ${count31}\n0.0000000000000718869408 =  ${count08}\n`
//   );
// }

//tests_eps3();

console.log("eps 09.03.2024: ", find_eps(763257663.83).toFixed(22));
console.log("eps 01.01.2000: ", find_eps(64).toFixed(22));
console.log("eps 01.01.2000: ", find_eps(-4734072000).toFixed(22));
console.log("eps 01.01.2000: ", find_eps(4735368000).toFixed(22));
console.log("eps 17.05.1978: ", find_eps(-682470714.4700189).toFixed(22));

console.log("==========================================");

console.log("eps 09.03.2024: ", find_epsV2(763257663.83).toFixed(22));
console.log("eps 01.01.2000: ", find_epsV2(64).toFixed(22));
console.log("eps 01.01.2000: ", find_epsV2(-4734072000).toFixed(22));
console.log("eps 01.01.2000: ", find_epsV2(4735368000).toFixed(22));
console.log("eps 17.05.1978: ", find_epsV2(-682470714.4700189).toFixed(22));

// test_performance(find_eps);
// test_performance(find_epsV2);
