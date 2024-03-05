const { find_eps, find_eps_normal } = require("./cd_eps");

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
const time_sec_from_jd2000 = -682470763.0000188;
console.log(find_eps_normal(time_sec_from_jd2000));
console.log(find_eps(time_sec_from_jd2000));

test_performance(find_eps);
test_performance(find_eps_normal);
