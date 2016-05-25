/*jshint node:true*/
'use strict';

let testemConfig = {};

if (process.env.CI) {
  testemConfig = {
    framework: 'qunit',
    test_page: 'tests/index.html?hidepassed',
    report_file: `${process.env.CIRCLE_TEST_REPORTS}/ember/report.xml`,
    reporter: 'xunit',
    disable_watching: true,
    xunit_intermediate_output: true,
    launch_in_ci: [
      'Chrome'
    ]
  };
} else {
  testemConfig = {
    framework: 'qunit',
    test_page: 'tests/index.html?hidepassed&coverage',
    disable_watching: true,
    launch_in_ci: [
      'Chrome'
    ],
    launch_in_dev: [
      'Chrome'
    ]
  };
}

module.exports = testemConfig;
