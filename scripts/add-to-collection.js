/**
 * Copyright 2016 Jorge Villalobos
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

"use strict";

const RE_LISTING_PAGE =
  /^\/(?:[a-z]{2}(?:\-[a-z]{2})?\/)?(?:(?:firefox|thunderbird|seamonkey|mobile|android)\/)?addon\/([^\/]+)(?:\/)?$/i;

let AddToCollection = {
  /**
   * Runs the content script on this page.
   */
  run : function() {
    let matchListing =
      document.location.pathname.match(RE_LISTING_PAGE, "ig");

    if (matchListing && (2 <= matchListing.length)) {
      let widgets = document.querySelector(".addon-details .widgets");

      if (null != widgets) {
        widgets.setAttribute("style", "display: block;");
      }
    }
  }
};

AddToCollection.run();
