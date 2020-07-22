// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let removeIt = document.getElementById('removeIt');

removeIt.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: "let wr=document.querySelector('.wrapper-3AzfF');wr.parentNode.removeChild(wr);let body=document.getElementsByTagName('body')[0];body.style.overflow=\"scroll\";let ol=document.querySelector('.overlay-34_Kj');ol.parentNode.removeChild(ol);"});
  });
};
