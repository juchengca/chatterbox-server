// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
var API_KEY = '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';


// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// Put your campus prefix here
window.CAMPUS = 'FILL_ME_IN';

