// función de datawrapper
function switchVis(chartId) {
    document.querySelector('iframe').src = 'https://datawrapper.dwcdn.net/' + chartId;
  }