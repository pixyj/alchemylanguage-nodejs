/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  console.log('Hello, world');

  // show hide content from tab click
  $('.ml-item').click(function() {
    $('.1-result').hide();
    $('#div' + jQuery(this).attr('target')).show();
  });
  $('.ml-item').click(function() {
    $(this).addClass('ml-item-active');
    $(this).siblings().removeClass('ml-item-active');
  });
  // view more/top Button
  $('.btn-results').click(function() {
    $('.add-1-result').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).addClass('arrowdown-main').removeClass('arrowup-main');
    } else {
      $(this).addClass('arrowup-main').removeClass('arrowdown-main');
    }
  });
  // reset button code
  $('.reset').click(function() {
    location.reload();
  });
  // view all/top Buttons
  $('.btn-all-results-keywords').click(function() {
    $('.keywords:gt(2)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  $('.btn-all-results-entities').click(function() {
    $('.entities:gt(2)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  $('.btn-all-results-concepts').click(function() {
    $('.concepts:gt(4)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  $('.btn-all-results-targetsentiment').click(function() {
    $('.targetsentiment:gt(7)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  $('.btn-all-results-typedrelations').click(function() {
    $('.typedrelations:gt(1)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  $('.btn-all-results-targetedemotion').click(function() {
    $('.targetedemotion:gt(1)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  // submit button code
  $('#submitbutton').click(function() {
    $('.container').hide();
    $('#div5').show();
    $('#div2,#div3,#div4,#div6,#div7,#div8,#div9,#div10,#div11,#div12,#div13,#div14,#div20').hide();
    $('#t3,#t4,#t5,#t6,#t7,#t8,#t9,#t10,#t11,#t12,#t13,#t14,#t15,#t35').removeClass('int-hide');
    $('.ml-item').removeClass('ml-item-active');
    $('#t1').addClass('ml-item-active');
  });
  $('#submitbutton-tr').click(function() {
    $('.container').hide();
    $('#div5').show();
    $('#t3,#t4,#t5,#t6,#t7,#t8,#t9,#t10,#t11,#t12,#t13,#t14,#t15,#t35').addClass('int-hide');
    $('#div2,#div3,#div4,#div6,#div7,#div8,#div9,#div10,#div11,#div12,#div13,#div14,#div20').hide();
    $('.ml-item').removeClass('ml-item-active');
    $('#t1').addClass('ml-item-active');
  });
  $('#standard').click(function() {
    $('.container').hide();
    $('.base--code').hide();
    $('#t3,#t4,#t5,#t6,#t7,#t8,#t9,#t10,#t11,#t12,#t13,#t14,#t15').removeClass('int-hide');
    $('#div5').show();
    $('.custom-desc').hide();
    $('.standard-desc').show();
    $('#panel1').addClass('active');
    $('#panel2').removeClass('active');
    $('.text-link').addClass('active');
    $('.url-link').removeClass('active');
    $('#submitbutton').show();
    $('#submitbutton-tr').hide();
    $('#div2,#div3,#div4,#div6,#div7,#div8,#div9,#div10,#div11,#div12,#div13,#div14,#div20').hide();
    $('.ml-item').removeClass('ml-item-active');
    $('#t1').addClass('ml-item-active');
    $('.input-panel').show('fast');
    $('.relevance').text('Relevance');
    $('.input--text').empty();
    $('#standard').addClass('selected-input');
    $('#custom').removeClass('selected-input');
    $('.input--text').text(
          "In 2009, Elliot Turner launched AlchemyAPI to process the written word, with all of its quirks and nuances, and got immediate traction. That first month, the company\'s eponymous language-analysis API processed 500,000 transactions. Today it\'s processing three billion transactions a month, or about 1,200 a second. \"That's a growth rate of 6,000 times over three years,\" touts Turner. \"Context is super-important,\" he adds. \"I\'m dying\' is a lot different than \'I'm dying to buy the new iPhone.\'\" \"As we move into new markets, we're going to be making some new hires,\" Turner says. \"We knocked down some walls and added 2,000 square feet to our office.\" \"We\'re providing the ability to translate human language in the form of web pages and documents into actionable data,\" Turner says. Clients include Walmart, PR Newswire and numerous publishers and advertising networks. \"This allows a news organization to detect what a person likes to read about,\" says Turner of publishers and advertisers.");
    $('.input--URL').text('http://confluence-denver.com/innovationnews/alchemyapi_booming.aspx');
  });
  $('#custom').click(function() {
    $('.container').hide();
    $('.base--code').hide();
    $('#submitbutton').hide();
    // $('.url-tab').hide();
    $('#panel1').addClass('active');
    $('#panel2').removeClass('active');
    $('#submitbutton-tr').show();
    $('.relevance').empty();
    $('.custom-desc').show();
    $('.standard-desc').hide();
    $('#div1').siblings().addClass('int-hide');
    $('#t2').siblings().addClass('int-hide');
    $('#t1,#t2').removeClass('int-hide');
    $('#div1,#div2,#div3,#div4,#div6,#div7,#div8,#div9,#div10,#div11,#div12,#div13,#div14,#div20').hide();
    $('.ml-item').removeClass('ml-item-active');
    $('.text-link').addClass('active');
    $('.url-link').removeClass('active');
    $('#t1').addClass('ml-item-active');
    $('.container').hide();
    $('#div5').show();
    $('.input--text').empty();
    $('.input-panel').show('fast');
    $('#standard').removeClass('selected-input');
    $('#custom').addClass('selected-input');
    $('.input--text').text(
          "This on-site investigation focused on the performance of the Certified Advanced 208-Compliant air bag system in a 2005 Ford Escape XLT 4x4 sport utility vehicle. This two-vehicle crash occurred in July 2004 at 1539 hours in the state of Colorado. The crash occurred on a curved portion of a three-lane interstate roadway. The Ford Escape lost control on an interstate highway and struck a concrete barrier on the right side of the roadway. The impact resulted in sufficient longitudinal deceleration of the Escape to command the deployment of the frontal air bag system and actuation of the driver's seat belt pretensioner. The vehicle rotated out from the initial wall impact and was subsequently struck by a 2013 BYD Qin pulling a single trailer. The restrained 48-year-old male driver of the Escape appears to have sustained a minor facial injury. The driver of Qin did not report any injuries.");
    $('.input--URL').text('http://newyork.cbslocal.com/2016/02/06/brooklyn-woman-school-bus');
  });
  // Only show a limited list of results instially
  $(document).ajaxComplete(function() {
    if ($('.keywords').length > 1) {
      $('.keywords:gt(1)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.entities').length > 1) {
      $('.entities:gt(1)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.concepts').length > 4) {
      $('.concepts:gt(4)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.typedrelations').length > 1) {
      $('.typedrelations:gt(1)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.targetedemotion').length > 1) {
      $('.targetedemotion:gt(1)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.targetsentiment').length > 7) {
      $('.targetsentiment:gt(7)').hide();
    }
  });
  // hide show more if total results are less than X
  $(document).ajaxComplete(function() {
    if ($('.concepts').length < 6) {
      $('.btn-all-results-concepts').hide();
    } else {
      $('.btn-all-results-concepts').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.entities').length < 2) {
      $('.btn-all-results-entities').hide();
    } else {
      $('.btn-all-results-entities').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.keywords').length < 2) {
      $('.btn-all-results-keywords').hide();
    } else {
      $('.btn-all-results-keywords').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.typedrelations').length < 2) {
      $('.btn-all-results-typedrelations').hide();
    } else {
      $('.btn-all-results-typedrelations').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.targetedemotion').length < 2) {
      $('.btn-all-results-targetedemotion').hide();
    } else {
      $('.btn-all-results-targetedemotion').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.targetsentiment').length < 9) {
      $('.btn-all-results-targetsentiment').hide();
    } else {
      $('.btn-all-results-targetsentiment').show();
    }
  });
  $(document).ajaxComplete(function() {
    $('.header-relations').each(function() {
      $(this).text($(this).text().substr(0, 100) + '...');
    });
  });
  // relations main headings hide & expand actions
  $(document).ajaxComplete(function() {
    if ($('.element-relations').length > 3) {
      $('.element-relations:gt(3)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.element-relations ').length < 3) {
      $('.btn-all-results-relations').hide();
    } else {
      $('.btn-all-results-relations').show();
    }
  });
  $('.btn-all-results-relations').click(function() {
    $('.element-relations:gt(3)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });
  // hide & expand relations content
  $(document).ajaxComplete(function() {
    $('.header-relations').click(function() {
      $(this).toggleClass('arrowup arrowdown');
      $(this).siblings('.content-relations').toggle();
    });
  });
  // Show first Relations result only
  $(document).ajaxComplete(function() {
    $('.content-relations:first').css('display', 'block');
    $('.header-relations:first').addClass('arrowdown').removeClass('arrowup');
  });
  // JSON buttons
  $('.json-btn').click(function() {
    $('#json' + jQuery(this).attr('target')).toggle();
  });
  // Show error loading and results
  $('.container').hide();
  $('#submitbutton').click(function() {
    $('.loading').show();
    $('.error').empty();
    $('.container').hide();
    $(document).ajaxStart(function() {
      $('.loading').show();
    });
    $(document).ajaxError(function(event, jqxhr, settings, thrownError) {
      $('.error').empty();
      $('.error').show();
      $('.error').text('There has been the following error: ');
      $('.error').append(jqxhr.status).append(' - ');
      $('.error').append(thrownError);
    });
    $(document).ajaxComplete(function() {
      $('.loading').hide();
      $('.container').show();
    });
  });
  // Select model value and display changes
  $('#submitbutton-tr').click(function() {
    $('.loading').show();
    $('.container').hide();
    $(document).ajaxStart(function() {
      $('.loading').show();
    });
    $(document).ajaxError(function(event, jqxhr, settings, thrownError) {
      $('.error').empty();
      $('.error').show();
      $('.error').text('There has been the following error: ');
      $('.error').append(jqxhr.status).append(' - ');
      $('.error').append(thrownError);
    });
    $(document).ajaxComplete(function() {
      $('.loading').hide();
      $('.container').show();
    });
  });
});

/*
Tabbed Panels js
*/
(function() {
  $('.tab-panels--tab').click(function(e) {
    e.preventDefault();
    var self = $(this);
    var inputGroup = self.closest('.tab-panels');
    var idName = null;
    inputGroup.find('.active').removeClass('active');
    self.addClass('active');
    idName = self.attr('href');
    $(idName).addClass('active');
  });
})();
