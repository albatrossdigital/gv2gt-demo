var site_Root = "https://neighborhoodofgood.statefarm.com/", site_Staging = "https://neighborhoodofgood-staging.statefarm.com/", site_Dev = "https://neighborhoodofgood.tcdev1.statefarm.com/", userDetails = !1, and = "&", question = "?", space = "%20", hash = "%23", plus = "+", buttonClass = $(".nogBtn"), navbar = $(".navbar"), userPageTitle, environments = {
  dev: {
    site: "https://neighborhoodofgood.tcdev1.statefarm.com/",
    json: "https://neighborhoodofgood.tcdev1.statefarm.com/",
    ac1: "https://ac1.tcdev1.st8fm.com/",
    ac2: "https://ac2.tcdev1.st8fm.com/"
  },
  staging: {
    site: "https://neighborhoodofgood-staging.statefarm.com/",
    json: "https://neighborhoodofgood-staging.statefarm.com/",
    ac1: "https://ac1-staging.st8fm.com/",
    ac2: "https://ac2-staging.st8fm.com/"
  },
  simprod: {
    site: "https://neighborhoodofgood.tcisp.statefarm.com/",
    json: "https://neighborhoodofgood.tcisp.statefarm.com/",
    ac1: "https://ac1.tcisp.st8fm.com/",
    ac2: "https://ac2.tcisp.st8fm.com/"
  },
  prod: {
    site: "https://neighborhoodofgood.statefarm.com/",
    json: "https://neighborhoodofgood.statefarm.com/",
    ac1: "https://ac1.st8fm.com/",
    ac2: "https://ac2.st8fm.com/"
  }
}, currEnvironment = {
  site: "",
  json: "",
  ac1: "",
  ac2: ""
}, formElements = {
  hero: {
    tagID: "nog-hero-search-tag",
    zipID: "nog-hero-search-zipcode"
  },
  modal: {
    tagID: "nog-modal-search-tag",
    zipID: "nog-modal-search-zipcode"
  },
  aux: {
    tagID: "nog-aux-search-tag",
    zipID: "nog-aux-search-zipcode"
  }
}, feedback = {
  errMessage: "",
  isGood: !1
}, cares = ["I care about ...", "Adult Education", "Animals", "Arts &amp; Culture", "Children &amp; Youth Education", "Civic &amp; Community", "Disaster &amp; Emergency Services", "Environment", "Faith-Based Service", "Family Services", "Habitat for Humanity", "Health &amp; Wellness", "Hunger &amp; Homelessness", "Immigrant &amp; Refugee Services", "International Service", "Internships &amp; Employment", "Justice &amp; Legal Services", "Red Cross", "Schools", "Senior Services", "Sports &amp; Recreation", "Technology", "United Way", "Veterans &amp; Military Families", "Other"], homeblocks = ["block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9", "block10", "block11"], home = {
  block1: {
    title: "Usher Gives Back",
    teaser: "Watch Usher go back to Chattanooga to thank his community and support local art and music programs.",
    body: "Usher knows firsthand the role music and arts education can play in a young child\u2019s life. He brings focus to this cause and inspires a movement.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "mhpp6upgSTw",
      hovertext: "",
      image: "../images/home-block-01.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "UsherGivesBack",
        facebook: "UsherGivesBack"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block2: {
    title: "Katherine Starts a Movement",
    teaser: "See how this 7-year-old helps make the world a better place for her birthday.",
    body: "Katherine\u2019s mom simply shared her daughter\u2019s birthday wish and made a big impact at the local animal shelter in Evansville, Indiana.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "RDK-5cnCOV4",
      hovertext: "Click to view more",
      image: "../images/home-block-02.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "LittleGirlBigImpact",
        facebook: "LittleGirlBigImpact"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block3: {
    title: "Felipe Lopez Assists Kids in NYC",
    teaser: "Watch former NBA player Felipe Lopez go back to the Bronx to give kids a better way to live.",
    body: "Basketball offers a way out of trouble. Felipe Lopez also uses it to help kids in the South Bronx create habits and confidence that lead to a more positive life.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "VyeWnhaiWWo",
      hovertext: "Click to view more",
      image: "../images/home-block-03.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "FelipeLopezAssist",
        facebook: "FelipeLopezAssist"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block4: {
    title: "Creating a Legacy of Safety",
    teaser: "There\u2019s a lesson in tragedy. This family is using it to improve car safety and keep kids alive.",
    body: "Tristen White was hit and killed by a speeding motorist while running with his high school wrestling team. <a href=\"http://st8.fm/treynor\" target=\"_blank\">It\u2019s a tragedy his family is working hard to prevent anyone else from experiencing</a> with the help of the State Farm Neighborhood Assist\xAE Program.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "5gPOQke9CrI",
      hovertext: "",
      image: "../images/home-block-04.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "",
        facebook: ""
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block5: {
    title: "Speaking Out and Saving Lives",
    teaser: "After losing his daughter in a tragic car accident, Officer Cleveland is speaking out to save lives.",
    body: "Officer John Cleveland and his family are saving lives \u2013 one speaking event at a time. He\u2019s turned the tragedy of losing his daughter Olivia into a hopeful mission to promote driver safety. The Cleveland family is openly sharing their pain to prevent others from experiencing the same loss.",
    link: "https://newsroom.statefarm.com/things-are-looking-up",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "TEup6ZKkcDk",
      hovertext: "Click to view more",
      image: "../images/home-block-05.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "",
        facebook: ""
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block6: {
    title: "Chris Paul &amp; DJ Khaled honor volunteers",
    teaser: "See NBA star Chris Paul &amp; DJ Khaled celebrate the commitment of volunteers.",
    body: "After NBA All-Star Saturday Night, Chris Paul and DJ Khaled were joined by John Batiste &amp; others to lead a celebration for the people who selflessly give back to help the city of New Orleans.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "MLUny8mouwY",
      hovertext: "Click to view more",
      image: "../images/home-block-06.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "CP3andDJKhaled",
        facebook: "CP3andDJKhaled"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block7: {
    title: "Charlie Puth Stomps Out Bullying",
    teaser: "Seeing the world through a musical lens helps Charlie express life\u2019s ups and downs",
    body: "After being bullied in high school because he was different, <a href=\"http://neighborhoodsessions.statefarm.com/artist-stories/charlie-puth/index.html\" target=\"_blank\">Charlie Puth has taken his musical gift to inspire the world</a>. He\u2019s also partnered with Stomp Out Bullying to change the culture and help put an end to bullying.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "M-JLnGuFHLc",
      hovertext: "Click to view more",
      image: "../images/home-block-07.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "CharliePuth",
        facebook: "CharliePuth"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block8: {
    title: "Feeding the Children",
    teaser: "Volunteers in three separate cities came together to make thousands of meals for kids in need.",
    body: "Atlanta, Dallas, and Phoenix each hosted volunteer events to help feed at-risk children in their cities. Hundreds of volunteers came together and made thousands of meals \u2013 proving it really does takes a village to raise a child.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "GocURItTxD0",
      hovertext: "Click to view more",
      image: "../images/home-block-08.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "HereToHelp",
        facebook: "HereToHelp"
      },
      message: {
        twitter: "It really takes a village to raise a child.  This story proves it. https://www.neighborhoodofgood.com",
        facebook: "Feeding the Children \u2013 State Farm\xAE \u2013 This Neighborhood of Good story highlights the strength of communities coming together to help feed disadvantaged children in their cities."
      }
    }
  },
  block9: {
    title: "Money Talks",
    teaser: "Poverty is a cycle; watch how Sabrina Lamb is on a mission to break it.",
    body: "Sabrina Lamb gives kids and communities a different view of <a href=\"https://newsroom.statefarm.com//newsroom.statefarm.com/breaking-the-cycle-of-poverty#BAREFjJ5UsOLOO0d.99\" target=\"_blank\">life and money</a>. She spreads hope that the cycle of poverty can break through financial responsibility and giving back.",
    link: "https://newsroom.statefarm.com/breaking-the-cycle-of-poverty/#2yWLFLwGzcEwE4k2.97",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "3MeVgk2D-FI",
      hovertext: "Click to view more",
      image: "../images/home-block-09.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "MoneyTalks",
        facebook: "MoneyTalks"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block10: {
    title: "Andrew McMahon Shares a Gift",
    teaser: "Learn how McMahon\u2019s budding music career took a back seat when he was diagnosed with leukemia.",
    body: "Andrew McMahon is a leukemia survivor and founder of the Dear Jack Foundation, which advocates for and supports initiatives that benefit young adults diagnosed with cancer.",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !1,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "rQAwnXqAzKE",
      hovertext: "Click to view more",
      image: "../images/home-block-10.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "DearJackFoundation",
        facebook: "DearJackFoundation"
      },
      message: {
        twitter: "There is good in the world. This story proves it. https://www.neighborhoodofgood.com",
        facebook: "This Neighborhood of Good story shows that good things happen when we help each other out."
      }
    }
  },
  block11: {
    title: "Transforming Lives",
    teaser: "Georgia State University and State Farm give students a chance to thrive.",
    body: "A college degree in the Atlanta region can increase earnings potential 27% for an associate\u2019s degree and 108% for a bachelor\u2019s degree, according to the Brookings Metropolitan Policy Program. That\u2019s why <a href=\"https://newsroom.statefarm.com/state-farm-gsu-launch-education-assist/#TmUTl3s7HB938OBQ.97\" target=\"_blank\">Georgia State University and State Farm are partnering</a> together in an innovative public-private partnership helping students succeed.  Through a newly launched program, students at the Decatur campus of Perimeter College receive expanded advising, scholarships, emergency grants, and mentoring which remove obstacles and create pathways to a more productive future.",
    link: "https://newsroom.statefarm.com/state-farm-gsu-launch-education-assist/#TmUTl3s7HB938OBQ.97",
    target: "_blank",
    toggle: "modal",
    modal: "#imageModal",
    video: {
      autoplay: !0,
      controls: !1,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "https://newsroom.statefarm.com/state-farm-gsu-launch-education-assist/#TmUTl3s7HB938OBQ.97",
      hovertext: "Click to view more",
      image: "../images/ea1.jpg",
      transcript: ""
    },
    images: [{
      id: "i1",
      link: "javascript:void(0)",
      location: "../images/ea1.jpg",
      alt: "Georgia State University &ndash; Decatur",
      caption: "<strong>Georgia State University &ndash; Decatur</strong><br/>The partnership between State Farm and Georgia State relies on analytics to help identify and remove obstacles that prevent college students from graduating. The Georgia State LIFT (Learning, Income, and Family Transformation) program offers students support as they work towards achieving their goals.",
      onclick: "CS.Modals.processImageClick('block11', 'i1')",
      hovertext: "Georgia State University - Decatur",
      cls: ""
    }, {
      id: "i2",
      link: "javascript:void(0)",
      location: "../images/ea2.jpg",
      alt: "Olivia Dorsey, Major: Social Work, State Farm Scholar 2017",
      caption: "<strong>Olivia Dorsey, Major: Social Work, State Farm Scholar 2017</strong><br/>Olivia\u2019s career goal is to become a school counselor and support students. This scholarship, along with the mentoring she receives, gives her the opportunity to gain experience in her field, while also working with youth. She plans to transfer to Georgia State to further her education.",
      onclick: "CS.Modals.processImageClick('block11', 'i2')",
      hovertext: "Olivia Dorsey, Major: Social Work, State Farm Scholar 2017",
      cls: ""
    }, {
      id: "i3",
      link: "javascript:void(0)",
      location: "../images/ea4.jpg",
      alt: "Alex Myers II, Majors: Managerial Science and Finance, State Farm Scholar 2017",
      caption: "<strong>Alex Myers II, Majors: Managerial Science and Finance, State Farm Scholar 2017</strong><br/>Alex devotes a lot of time to his family and community in an attempt to create better opportunities for his son. This scholarship allows him to lighten his work schedule so he has more time with the ones he loves. He plans to pursue a master\u2019s degree in Managerial Finance.",
      onclick: "CS.Modals.processImageClick('block11', 'i3')",
      hovertext: "Alex Myers II, Majors: Managerial Science and Finance, State Farm Scholar 2017",
      cls: ""
    }, {
      id: "i4",
      link: "javascript:void(0)",
      location: "../images/ea3.jpg",
      alt: "Alexandria Borsdorf, Major: History, Minor: German, State Farm Scholar 2017",
      caption: "<strong>Alexandria Borsdorf, Major: History, Minor: German, State Farm Scholar 2017</strong><br/>Alexandria understands that no one can make it through life on their own. This scholarship, coupled with the mentoring she receives, helps remove the financial stress of college as well as the burden of managing her education. She plans to transfer to a four-year college to further her studies.",
      onclick: "CS.Modals.processImageClick('block11', 'i4')",
      hovertext: "Alexandria Borsdorf, Major: History, Minor: German, State Farm Scholar 2017",
      cls: ""
    }],
    social: {
      hashtags: {
        twitter: "",
        facebook: ""
      },
      message: {
        twitter: "Helping others does create a better future. These Education Assist stories are proof.",
        facebook: "Helping others does create a better future. These Education Assist stories are proof."
      }
    }
  }
}, hero = {
  homepage: {
    title: "Following",
    teaser: "No Teaser",
    body: "<p>Let's turn caring into doing. Search below to find volunteer opportunities in your community.</p><div class=\"nog-music-container\"><p>Download Joy Williams' cover of \"<em>Don\u2019t Let Me Down</em>\" on these music services. A portion of proceeds will go to charity.</p><div class=\"nog-music-link-container\"><a href=\"https://itun.es/us/Kbsnib\">iTunes and Apple Music</a>&nbsp;|&nbsp;<a href=\"https://open.spotify.com/album/1mwgnCkCGVwPbp6CpFAqIp\">Spotify</a>&nbsp;|&nbsp;<a href=\"https://shz.am/t342995165\">Shazam</a></div></div>",
    link: "#",
    target: "_blank",
    toggle: "modal",
    modal: "#projectModal",
    video: {
      autoplay: !0,
      controls: !0,
      showinfo: !1,
      related: !1,
      annotations: !1,
      modestbranding: !0,
      captions: !0,
      src: "VuyhmA5YAu8",
      hovertext: "",
      image: "../images/why-video-bg.jpg",
      transcript: ""
    },
    social: {
      hashtags: {
        twitter: "TheFollowing",
        facebook: "TheFollowing"
      },
      message: {
        twitter: "Check this out",
        facebook: "Check this out"
      }
    }
  }
}, CS = {
  initialize: function() {
    "use strict";
    CS.Custom.initialize(),
      CS.Forms.initialize(),
      CS.Modals.initialize(),
      CS.Videos.initialize(),
      CS.Navigation.initialize(),
      CS.HomePage.initialize(),
      CS.UserPage.initialize(),
      CS.Social.initialize(),
      CS.VisitorInfo.initialize()
  }
};
CS.Custom = {
  initialize: function() {
    "use strict";
    CS.Custom.setSiteEnvironment()
  },
  regExPattMatch: function(o, t) {
    "use strict";
    return !!o.match(t)
  },
  regExIsValidUSZip: function(o) {
    "use strict";
    return /^\d{5}(-\d{4})?$/.test(o)
  },
  regExCharTest: function(o, t) {
    "use strict";
    return !t.test(o)
  },
  getAppLocationString: function() {
    "use strict";
    var o = window.location.href
      , t = CS.Custom.splitValue(o, "#/");
    return t[1]
  },
  splitValue: function(o, t) {
    "use strict";
    return void 0 === o ? null : o.split(t)
  },
  getAttributeValue: function(o, t) {
    "use strict";
    return $(o).attr(t)
  },
  whatIsFileExt: function(o) {
    "use strict";
    var t = o.split(".").pop();
    return -1 !== t.indexOf("?") && (t = t.split("?")[0]),
      t
  },
  checkIfFileExists: function(o) {
    "use strict";
    $.ajax({
      url: o,
      type: "HEAD",
      error: function() {
        return !1
      },
      success: function() {
        return !0
      }
    })
  },
  minHeightCheck: function() {
    "use strict";
    var o = CS.VisitorInfo.getViewportHeight();
    return $(".nog-min-height-check").css("min-height", o - 760)
  },
  appRouteCheck: function() {
    "use strict";
    document.addEventListener("routeChange", function(o) {
      setTimeout(CS.UserPage.setHeroText(o.detail.name), 200)
    })
  },
  addModalOpen: function() {
    "use strict";
    var o = $("body")
      , t = "modal-open";
    document.addEventListener("routeChange", function(s) {
      "project-detail" === s.detail.name || "project-engage" === s.detail.name ? o.addClass(t) : o.removeClass(t)
    })
  },
  getParameterByName: function(o, t) {
    "use strict";
    var s, r, l;
    return t || (t = window.location.href),
      s = o.replace(/[\[\]]/g, "\\$&"),
      r = new RegExp("[?&]" + s + "(=([^&#]*)|&|#|$)"),
      l = r.exec(t),
      l ? l[2] ? decodeURIComponent(l[2].replace(/\+/g, " ")) : "" : null
  },
  cheatCode: function() {
    "use strict";
    function o() {
      var c = s.cloneNode()
        , g = 16 * Math.random() + 12;
      t.appendChild(c),
        c.style.left = Math.random() * screen.width + "px",
        c.style.transition = "transform " + g + "s linear",
        setTimeout(function() {
          c.style.transform = "translateY(" + screen.height + "px) rotate3d(" + Math.random() + "," + Math.random() + "," + Math.random() + ",2000deg)"
        }, 200),
        setTimeout(function() {
          t.removeChild(c)
        }, 1e3 * g),
        l = setTimeout(o, 140 * Math.random() + 60)
    }
    var s, r, l, t = document.getElementsByTagName("body")[0], d = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], h = 0;
    document.onkeydown = function(c) {
      d[h++] == c.keyCode ? 10 == h && (console.log("KONAMI!!!"),
        l ? (clearTimeout(l),
          l = !1,
          r.pause()) : (s = document.createElement("img"),
          s.src = "http://www.bankofcanada.ca/wp-content/uploads/2017/02/c150-small-note-front.png",
          s.className = "falling",
          o(),
          r = new Audio("http://www.bankofcanada.ca/wp-content/uploads/2017/02/national-anthem.mp3"),
          r.volume = 0.3,
          r.loop = !0,
          r.play()),
        document.onkeypress = null,
        h = 0) : h = 0
    }
  },
  addAnimationToElement: function(o, t, s, r) {
    "use strict";
    var h, l = r.toLowerCase(), d = CS.Custom.checkForClass(o, "animated");
    return h = "element" === l ? $(o) : "class" === l ? $("." + o) : $("#" + o),
    !1 === d && h.addClass("animated"),
      void (h.hasClass(t) ? (h.removeClass(t),
        window.setTimeout(function() {
          h.addClass(t)
        }, s)) : h.addClass(t))
  },
  checkForClass: function(o, t) {
    "use strict";
    var s = $("#" + o)
      , r = !1;
    return s.hasClass(t) && (r = !0),
      r
  },
  setSiteEnvironment: function() {
    "use strict";
    var o = window.location.href;
    window.currEnvironment = 0 <= o.indexOf("intranet-d") || 0 <= o.indexOf("intranet-dev") || 0 <= o.indexOf("intranet_dev") || 0 <= o.indexOf("tcdev1") || 0 <= o.indexOf("tcdev2") || 0 <= o.indexOf("tcidv") || 0 <= o.indexOf("cswebdev") ? {
      site: environments.dev.site,
      json: environments.dev.json,
      ac1: environments.dev.ac1,
      ac2: environments.dev.ac2
    } : 0 <= o.indexOf("-staging") ? {
      site: environments.staging.site,
      json: environments.staging.json,
      ac1: environments.staging.ac1,
      ac2: environments.staging.ac2
    } : 0 <= o.indexOf("tcisp") ? {
      site: environments.simprod.site,
      json: environments.simprod.json,
      ac1: environments.simprod.ac1,
      ac2: environments.simprod.ac2
    } : {
      site: environments.prod.site,
      json: environments.prod.json,
      ac1: environments.prod.ac1,
      ac2: environments.prod.ac2
    }
  }
},
  CS.Forms = {
    initialize: function() {
      "use strict";
      CS.Forms.populateCares("#nog-hero-search-tag"),
        CS.Forms.populateCares("#nog-modal-search-tag"),
        CS.Forms.populateCares("#nog-aux-search-tag"),
        CS.Forms.clearZipOnClick()
    },
    getLabel: function(o, t) {
      "use strict";
      var s = document.getElementsByTagName("LABEL"), r = "", l;
      for (l = 0; l < s.length; l++)
        s[l].htmlFor === o && (r = s[l].innerHTML,
          l = s.length + 99);
      return "" === r ? t : r
    },
    trimLRB: function(o, t) {
      "use strict";
      var s;
      if ("L" === t.toUpperCase() || "LEFT" === t.toUpperCase() || "B" === t.toUpperCase() || "BOTH" === t.toUpperCase())
        for (s = !1; 0 < o.length && !1 == s; )
          " " === o.substring(0, 1) || "\n" === o.substring(0, 1) || "\r" === o.substring(0, 1) || "\t" === o.substring(0, 1) ? o = o.substring(1, o.length) : s = !0;
      if ("R" === t.toUpperCase() || "RIGHT" === t.toUpperCase() || "B" === t.toUpperCase() || "BOTH" === t.toUpperCase())
        for (s = !1; 0 < o.length && !1 == s; )
          " " === o.substring(o.length - 1, o.length) || "\n" === o.substring(o.length - 1, o.length) || "\r" === o.substring(o.length - 1, o.length) || "\t" === o.substring(o.length - 1, o.length) ? o = o.substring(0, o.length - 1) : s = !0;
      return o
    },
    vReqSel: function(o, t) {
      "use strict";
      var s = CS.Forms.getLabel(o, null) || o
        , r = document.getElementById(o);
      return CS.Forms.emptyFeedback(),
        r ? r.options[r.selectedIndex].value === t ? (feedback.errMessage = s + " is a required field. Please make a selection.",
          feedback.isGood = !1) : (feedback.errMessage = "",
          feedback.isGood = !0) : (feedback.errMessage = "Object Not Found - Object with ID '" + o + "' Not Found in function 'vReqSelect()'",
          feedback.isGood = !1),
        feedback.isGood
    },
    vPatternMatch: function(o, t, s, r) {
      "use strict";
      var l = CS.Forms.getLabel(o, null) || o
        , d = document.getElementById(o);
      return CS.Forms.emptyFeedback(),
        d ? (d.value = CS.Forms.trimLRB(d.value, "Both"),
          "" === d.value ? !0 === t && (feedback.errMessage = l + " is a required field.",
            feedback.isGood = !1) : (feedback.isGood = CS.Custom.regExPattMatch(d.value, s),
          !1 === feedback.isGood && ("" === r ? feedback.errMessage = l + " is not properly formatted." : feedback.errMessage = l + " is not properly formatted.  " + r))) : (feedback.errMessage = "Object Not Found - Object with ID '" + o + "' Not Found in function 'vPatternMatch()'",
          feedback.isGood = !1),
        feedback.isGood
    },
    submitWidget: function(o, t) {
      "use strict";
      var s = "index.html?#/list";
      o && t && (s = s + "?zipcode=" + encodeURIComponent(o) + "&tag=" + encodeURIComponent(t),
        window.location = s)
    },
    submitOnEnterKey: function() {
      "use strict";
      $(".nog-zipcode-field").on("keyup", function(o) {
        13 === o.keyCode && CS.Forms.ifValidSubmit(this)
      })
    },
    clearZipOnClick: function() {
      "use strict";
      $(".nog-zipcode-field").click(function() {
        return this.value = ""
      })
    },
    ifValidSubmit: function(o) {
      "use strict";
      var t = $(o).parent().parent().attr("ID"), s = "unexpected form ID", r, l = !1, d = !1, h, c = "";
      "nog-hero-search" === t ? (s = "hero",
        h = formElements.hero.tagID,
        c = formElements.hero.zipID) : "nog-modal-search" === t ? (s = "modal",
        h = formElements.modal.tagID,
        c = formElements.modal.zipID) : "nog-aux-search" === t ? (s = "modal",
        h = formElements.aux.tagID,
        c = formElements.aux.zipID) : l = !1;
      r = CS.Forms.vReqSel(h, "X"),
      r || (d = !0,
        CS.Custom.addAnimationToElement(h, "jello", 100, "id")),
        r = CS.Forms.vPatternMatch(c, !0, /^\d{5}(-\d{4})?$/, "Allowed formats: 5 digit zip code (12345) or zip + 4 (98765-4321)"),
      r || (d = !0,
        CS.Custom.addAnimationToElement(c, "jello", 100, "id")),
      !1 == d && CS.Forms.submitWidget($("#" + c).val(), $("#" + h).val())
    },
    emptyFeedback: function() {
      "use strict";
      return feedback.errMessage = "",
        void (feedback.isGood = !1)
    },
    populateCares: function(o) {
      "use strict";
      var r = $(o);
      $(cares).each(function(l, d) {
        r.append("<option>" + d + "</option>")
      }),
        $(o + " option:first").attr("selected", "selected").val("X")
    },
    setFieldsFromURL: function() {
      "use strict";
      var o = CS.Custom.getParameterByName("zipcode")
        , t = CS.Custom.getParameterByName("tag")
        , s = $("#nog-hero-search-zipcode")
        , r = $("#nog-hero-search-tag");
      return o && s.attr("placeholder", "").val(o),
      t && r.val(t),
        !0
    }
  },
  CS.Modals = {
    initialize: function() {
      "use strict"
    },
    buildProjectModal: function(o, t) {
      "use strict";
      var b, v, s = t || "homeblock", r = "#projectModal", l = $(r + " .nog-modal-title"), d = $(r + " .nog-modal-details"), h = $(r + " .nog-modal-social-twitter-link"), c = $(r + " .nog-modal-social-facebook-link"), g = $(r + " .nog-youtube-player"), m = $(r + " .nog-play-image"), p = $(r + " #nog-modal-video-container"), u = $(r + " .nog-modal-left-column"), f = $(window).width();
      return "homeblock" === s ? v = home[o] : "heroVideo" === s && (v = hero[o]),
        l.html(v.title),
        d.html(v.body),
        h.attr("onclick", "CS.Social.shareThisStory('" + o + "','twitter',\"video\"); return false"),
        c.attr("onclick", "CS.Social.shareThisStory('" + o + "','facebook',\"video\"); return false"),
        g.css("background-image", "url(" + v.video.image + ")"),
        b = CS.Videos.buildJSONYoutubeLink(v),
        m.show(),
        $(g).one("click", function() {
          g.css("background-image", "none"),
            m.hide(),
            g.append(CS.Videos.buildYoutubePlayer(b)),
            $(this).css("cursor", "default"),
          768 <= f && u.addClass("nog-add-youtube-padding")
        }),
        $(r).modal("show")
    },
    closeProjectModal: function() {
      "use strict";
      var o = "#projectModal"
        , t = $(o + " .nog-modal-title")
        , s = $(o + " .nog-modal-details")
        , r = $(o + " .nog-modal-social-twitter-link")
        , l = $(o + " .nog-modal-social-facebook-link")
        , d = $(o + " .nog-youtube-player")
        , h = $(o + " .nog-play-image")
        , c = $(o + " #nog-modal-video-container")
        , g = $(o + " #nog-modal-video")
        , m = $(o + " .nog-modal-left-column")
        , p = $(window).width();
      if (t.empty(),
          s.empty(),
          r.attr("onclick", "null"),
          l.attr("onclick", "null"),
          $(d).off("click"),
          c.remove(),
        768 !== p)
        return 768 <= p ? void m.removeClass("nog-add-youtube-padding") : void 0
    },
    buildImageModal: function(o, t) {
      "use strict";
      var f, b, s = t || "homeblock", r = "#imageModal", l = $(r + " .nog-modal-title"), d = $(r + " .nog-modal-details"), h = $(r + " .nog-modal-image-caption"), c = $(r + " .nog-modal-social-twitter-link"), g = $(r + " .nog-modal-social-facebook-link"), m = $(r + " .nog-modal-thumbnails-container"), p = $(r + " .nog-main-image-container"), u = $(window).width();
      return "homeblock" === s ? f = home[o] : "heroVideo" === s && (f = hero[o]),
        b = f.images,
        $(b).each(function(v, w) {
          0 === v && (p.append(CS.Modals.buildImageModalMainImage(w)),
            h.html(w.caption)),
            m.append(CS.Modals.buildImageModalThumbs(w))
        }),
        l.html(f.title),
        d.html(f.body),
        c.attr("onclick", "CS.Social.shareThisStory('" + o + "','twitter',\"image\"); return false"),
        g.attr("onclick", "CS.Social.shareThisStory('" + o + "','facebook',\"image\"); return false"),
        $(r).modal("show")
    },
    closeImageModal: function() {
      "use strict";
      var o = "#imageModal"
        , t = $(o + " .nog-modal-title")
        , s = $(o + " .nog-modal-details")
        , r = $(o + " .nog-modal-image-caption")
        , l = $(o + " .nog-modal-thumbnails-container");
      return t.empty(),
        s.empty(),
        r.empty(),
        void l.empty()
    },
    buildImageModalThumbs: function(o) {
      "use strict";
      return "<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 nog-thumbnail\"><div class=\"nog-thumbnail-image " + o.cls + "\" title=\"" + o.hovertext + "\"><a href=\"" + o.link + "\" class=\"nog-thumbnail-link\" onclick=\"" + o.onclick + "\"><img class=\"img-responsive\" alt=\"" + o.alt + "\" id=\"nog-image-" + o.id + "\" src=" + o.location + " \" /></a></div></div>"
    },
    buildImageModalMainImage: function(o) {
      "use strict";
      return CS.Custom.addAnimationToElement("nog-modal-image-caption", "slideInRight", 200, "class"),
        CS.Custom.addAnimationToElement("nog-main-image", "slideInLeft", 200, "id"),
        void window.setTimeout(function() {
          $("#imageModal .nog-modal-image-caption").html(o.caption),
            $("#imageModal #nog-main-image").attr({
              src: o.location,
              alt: o.alt,
              title: o.hovertext
            })
        }, 200)
    },
    processImageClick: function(o, t) {
      "use strict";
      var s = home[o]
        , r = $(s.images)
        , l = $.grep(r, function(d) {
        return d.id === t
      });
      return CS.Modals.buildImageModalMainImage(l[0])
    },
    setNavOnModal: function(o) {
      "use strict";
      return $(o).on("show.bs.modal", CS.Navigation.attachNav()),
        void $(o).on("hide.bs.modal", CS.Navigation.detachNav())
    }
  },
  CS.Contact = {
    initialize: function() {
      "use strict"
    },
    parseUserDetails: function() {
      "use strict";
      var o = "";
      return $.each(window.userDetails, function() {
        $.each(this, function(t, s) {
          o += t + ": " + s + " ~~~ "
        })
      }),
        o
    },
    clearAllFields: function() {
      "use strict";
      $("#nog-contact-firstName").val(""),
        $("#nog-contact-lastName").val(""),
        $("#nog-contact-emailAddress").val(""),
        $("#nog-contact-message").val("")
    },
    hideAllErrors: function() {
      "use strict";
      $(".nog-contact-error").each(function(o, t) {
        $(t).addClass("hide")
      })
    },
    disableButton: function() {
      "use strict";
      return $("#nog-contact-button").prop("disabled", !0)
    },
    enableButton: function() {
      "use strict";
      return $("#nog-contact-button").prop("disabled", !1)
    },
    setValidMessage: function(o) {
      "use strict";
      var t = $(o).attr("name");
      return $(o).next(" .nog-contact-error ").text("Please enter a valid " + t + ".").removeClass("hide")
    },
    hideValidMessage: function(o) {
      "use strict";
      return $(o).next(" .nog-contact-error ").addClass("hide")
    },
    validateEmail: function(o) {
      "use strict";
      var t = o
        , s = t.indexOf("@")
        , r = t.lastIndexOf(".");
      if (1 > s || r < s + 2 || r + 2 >= t.length)
        return !1
    },
    validateForm: function() {
      "use strict";
      var o = $("#nog-contact-firstName")
        , t = $("#nog-contact-lastName")
        , s = $("#nog-contact-emailAddress")
        , r = $("#nog-contact-message");
      return 1 > o.val().length ? (CS.Contact.setValidMessage(o),
        !1) : (CS.Contact.hideValidMessage(o),
      1 > t.val().length) ? (CS.Contact.setValidMessage(t),
        !1) : (CS.Contact.hideValidMessage(t),
      !1 === CS.Contact.validateEmail(s.val())) ? (CS.Contact.setValidMessage(s),
        !1) : (CS.Contact.hideValidMessage(s),
      3 > r.val().length) ? (CS.Contact.setValidMessage(r),
        !1) : (CS.Contact.hideValidMessage(r),
        $("#nog-contact-sending").removeClass("hide"),
        CS.Contact.disableButton(),
        !0)
    }
  },
  CS.Videos = {
    initialize: function() {
      "use strict"
    },
    buildYoutubePlayer: function(o) {
      "use strict";
      return "<div class=\"embed-responsive embed-responsive-16by9\" id=\"nog-modal-video-container\"><iframe  allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\" id=\"nog-modal-video\" class=\"embed-responsive-item\" src=\"" + o + "\"></iframe></div>"
    },
    buildVideoYoutubeLink: function(o) {
      "use strict";
      var t, r = $(o).attr("data-youtube"), l = "autoplay=" + $(o).attr("data-autoplay"), d = $("#videoModal iframe");
      return t = "https://www.youtube.com/embed/" + r + question + l,
        d.attr("src", t)
    },
    buildJSONYoutubeLink: function(o) {
      "use strict";
      var t, r = o.video.autoplay, l = o.video.controls, d = o.video.showinfo, h = o.video.related, c = o.video.annotations, g = o.video.captions, m = o.video.src;
      return r = !1 === r ? "autoplay=0" : "autoplay=1",
        l = !1 === l ? "controls=0" : "controls=1",
        d = !1 === d ? "showinfo=0" : "showinfo=1",
        h = !1 === h ? "rel=0" : "rel=1",
        c = !1 === c ? "iv_load_policy=3" : "iv_load_policy=1",
        g = !1 === g ? "cc_load_policy=0" : "cc_load_policy=1",
        t = "https://www.youtube.com/embed/" + m + question + r + and + l + and + d + and + h + and + c + and + g,
        t
    },
    buildShortYoutubeLink: function(o) {
      "use strict";
      return "https://youtu.be/" + o.video.src
    },
    handleVideoLoad: function() {
      "use strict";
      var o = userDetails["Touch Enabled"]
        , t = userDetails["Mobile Device"]
        , s = userDetails["Initial Viewport Size (w,h)"]
        , r = s[0];
      return 500 >= r && !0 === o && !0 === t ? $("#nog-hero-video").remove() : CS.Videos.insertVideo(),
        !0
    },
    insertVideo: function() {
      "use strict";
      return "<video autoplay playsinline loop id=\"nog-hero-video\"><source src=\"data/videos/nog-short.mp4\" type=\"video/mp4\" /><source src=\"data/videos/nog-short.ogg\" type=\"video/ogg\" /><source src=\"data/videos/nog-short.webm\" type=\"video/webm\" /> Oops! It looks like your browser does not support the HTML 5 video tag. Please choose a modern browser and return to the site.</video>"
    }
  },
  CS.Navigation = {
    initialize: function() {
      "use strict";
      CS.Navigation.menuHoverChange()
    },
    watchforBrowserWidthChange: function() {
      "use strict";
      var o = $(window).width()
        , t = $("body");
      return 768 >= o && t.addClass("nog-fixed-nav-page"),
        void $(window).on("resize", function() {
          $(this).width() !== o && (o = $(this).width(),
            768 >= o ? (CS.Navigation.attachNav(),
              t.addClass("nog-fixed-nav-page")) : 769 <= o && (CS.Navigation.detachNav(),
              t.removeClass("nog-fixed-nav-page")))
        })
    },
    menuHoverChange: function() {
      "use strict";
      var o = ".icon-bar"
        , t = "nog-hamburger-hover";
      $(".navbar-toggle").hover(function() {
        $(this).find(o).toggleClass(t)
      }, function() {
        $(this).find(o).toggleClass(t)
      })
    },
    setNavDepth: function() {
      "use strict";
      var o = $(window).height()
        , t = $(window).width()
        , s = navbar.height();
      return (navbar.data("offsetTop", o - s),
      768 >= t) ? CS.Navigation.attachNav() : 769 <= t ? CS.Navigation.detachNav() : void 0
    },
    attachNav: function() {
      "use strict";
      return navbar.hasClass("navbar-fixed-top") ? void 0 : navbar.addClass("navbar-fixed-top")
    },
    detachNav: function() {
      "use strict";
      return navbar.hasClass("navbar-fixed-top") ? navbar.removeClass("navbar-fixed-top") : void 0
    },
    open: function() {
      "use strict";
      var o = $(".nog-overlay")
        , t = $("body")
        , s = document.getElementById("nog-hero-video")
        , r = $(".nog-large-link");
      TweenLite.to(o, 0.6, {
        css: {
          autoAlpha: 1,
          zIndex: "10000"
        },
        onComplete: function() {
          t.addClass("modal-open"),
          s && s.pause()
        }
      })
    },
    close: function() {
      "use strict";
      var o = $(".nog-overlay")
        , t = $("body")
        , s = document.getElementById("nog-hero-video");
      TweenLite.to(o, 0.6, {
        css: {
          autoAlpha: 0,
          zIndex: "-10000"
        },
        onComplete: function() {
          t.removeClass("modal-open"),
          s && s.play()
        }
      })
    }
  },
  CS.HomePage = {
    initialize: function() {
      "use strict"
    },
    buildBlocks: function() {
      "use strict";
      var o, t, s, r, l, d;
      $(homeblocks).each(function(h, c) {
        o = $("#" + c),
          t = home[c],
          s = $(o).find(".nog-block-title"),
          r = $(o).find(".nog-block-subtitle"),
          l = $(o).find("a"),
          d = CS.HomePage.getModal(t.modal),
          o.css("background-image", "url(" + t.video.image + ")"),
          s.html(t.title),
          r.html(t.teaser),
          l.attr({
            role: "button",
            "class": "nog-block-cover-link",
            href: t.link,
            target: t.target,
            onclick: "CS.Modals." + d + "(\"" + c + "\",\"homeblock\");return false;"
          })
      })
    },
    getModal: function(o) {
      "use strict";
      var t;
      return "#imageModal" === o ? t = "buildImageModal" : "#projectModal" == o && (t = "buildProjectModal"),
        t
    }
  },
  CS.UserPage = {
    initialize: function() {
      "use strict"
    },
    checkUserLogin: function() {
      "use strict";
      var o = window.localStorage.getItem("apiInfo"), t;
      try {
        t = JSON.parse(o)
      } catch (s) {
        return window.alert(s),
          !1
      }
      return t && t.access_token && 0 < t.expires_in
    },
    setHeroText: function(o) {
      "use strict";
      var t = $(".nog-hero-title")
        , s = $(".nog-hero-subtitle")
        , r = $(".nog-hero");
      switch (!0) {
        case "login" === o:
          $("body").scrollTop(0),
            t.html("Login"),
            s.html(""),
            CS.Custom.minHeightCheck();
          break;
        case "register" === o:
          $("body").scrollTop(0),
            t.html("Sign Up"),
            s.html("If you already have an account, please <a href=\"/user/index.shtml#/login\" class=\"nog-hero-link\">login</a>."),
            CS.Custom.minHeightCheck();
          break;
        case "reset-password" === o:
          $("body").scrollTop(0),
            t.html("Reset Password"),
            s.html(""),
            CS.Custom.minHeightCheck();
          break;
        case "dashboard" === o:
          $("body").scrollTop(0),
            t.html("My Projects"),
            s.html(""),
            r.css("background-image", "../images/projects-hero.jpg"),
            CS.Custom.minHeightCheck();
      }
    }
  },
  CS.Social = {
    initialize: function() {
      "use strict"
    },
    getShareIntent: function(o) {
      "use strict";
      return "facebook" === o ? "https://www.facebook.com/share.php?u=" : "twitter" === o && "https://twitter.com/share"
    },
    splitHashTagsToArray: function(o) {
      "use strict";
      var t = [];
      return o && (o = o.replace(/[\u0023\s]/g, "").split(","),
        $(o).each(function() {
          t.push("%23" + this)
        })),
        t
    },
    shareThisSite: function(o) {
      "use strict";
      var h, c, g, t = CS.Social.getShareIntent(o.toLowerCase()), r = site_Root, d = CS.Social.splitHashTagsToArray("HereToHelp");
      return "twitter" === o.toLowerCase() ? (h = "../images/social-share-image.jpeg",
        c = "If you want to make a difference in your community, you\u2019ve got to join the Neighborhood of Good.",
        g = encodeURI(t + question + "text=" + c) + space + d.join(" ") + and + "url=" + r) : "facebook" === o.toLowerCase() ? (h = "../images/social-image400x400.jpg",
        c = "The Neighborhood of Good helps you find and volunteer for causes that matter to you. It\u2019s a great step towards making a huge difference, right at home. Check it out.",
        g = encodeURI(t + r + and + "title=" + "State Farm's Neighborhood of Good" + and + "picture=" + h + and + "description=" + c) + space + d.join(" ")) : console.error("An error as occured"),
        void (g ? window.open(g, "popUpWindow", "height=600,width=800,resizable=no,scrollbars=no,menubar=no") : window.alert("OH NO!!  Something's not right in our Neighborhood.  Please try again another time."))
    },
    shareThisStory: function(o, t, s) {
      "use strict";
      var m, p, r = home[o], l = CS.Social.getShareIntent(t), d = CS.Social.splitHashTagsToArray(r.social.hashtags[t]), h = r.social.message[t];
      return m = "image" === (s || "video").toLowerCase() ? r.link : CS.Videos.buildShortYoutubeLink(r),
        "twitter" === t.toLowerCase() ? p = encodeURI(l + question + "text=" + h) + space + d.join(" ") + and + "url=" + m : "facebook" === t.toLowerCase() && (p = encodeURI(l + m + and + "caption=" + "Neighborhood Of Good&trade;" + and + "description=" + h) + space + d.join(space)),
        void (p ? window.open(p, "popUpWindow", "height=600,width=800,resizable=no,scrollbars=no,menubar=no") : window.alert("OH NO!!  Something's not right in our Neighborhood.  Please try again another time."))
    }
  },
  CS.VisitorInfo = {
    initialize: function() {
      "use strict";
      CS.VisitorInfo.details()
    },
    details: function() {
      "use strict";
      var o, d, t = window.navigator, s = t.userAgent.toLowerCase(), r = CS.VisitorInfo.isMobileDevice(), l = "NA", h = r && null !== t.userAgent.match(/(Android)/i), c = r && null !== t.userAgent.match(/(iPad)|(iPhone)|(iPod)/i), g = -1 !== t.platform.toUpperCase().indexOf("MAC"), m = 1, p = CS.VisitorInfo.getPixelRatioInt(), u = CS.VisitorInfo.getViewportSize(), f = CS.VisitorInfo.hasTouch(), b = CS.VisitorInfo.hasPopState(), v = CS.VisitorInfo.hasAddEventListener();
      return m = !0 != g,
        -1 === s.indexOf("msie") ? -1 === s.indexOf("firefox") ? -1 === s.indexOf("opera") ? -1 === s.indexOf("chrome") ? -1 === s.indexOf("crios") ? -1 !== s.indexOf("safari") && (d = "Safari",
          l = parseInt(s.match(/version\/(\d+)/i).splice(1, 1)[0])) : d = "Chrome" : d = "Chrome" : d = "Opera" : d = "Firefox" : (d = "IE",
          l = parseInt(s.split("msie")[1])),
        o = [{
          Mac: g
        }, {
          PC: m
        }, {
          Browser: d
        }, {
          "Browser Version": l
        }, {
          Android: h
        }, {
          iOS: c
        }, {
          "Pixel Ratio": p
        }, {
          "Initial Viewport Size (w,h)": u
        }, {
          "Mobile Device": r
        }, {
          "Touch Enabled": f
        }, {
          "Popstate Capable": b
        }, {
          "addEventListener Capable": v
        }],
        userDetails = o,
        o
    },
    getDocumentHeight: function() {
      "use strict";
      return document.body.scrollHeight
    },
    getViewportHeight: function() {
      "use strict";
      return window.innerHeight
    },
    getViewportWidth: function() {
      "use strict";
      return window.innerWidth
    },
    hasAddEventListener: function() {
      "use strict";
      return !document.addEventListener
    },
    isMobileDevice: function() {
      "use strict";
      return null !== navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(BlackBerry)|(IEMobile)|(Opera\sMini)|(webOS)/i)
    },
    getPixelRatio: function() {
      "use strict";
      return window.devicePixelRatio ? window.devicePixelRatio : 1
    },
    getPixelRatioInt: function() {
      "use strict";
      return Math.ceil(CS.VisitorInfo.getPixelRatio())
    },
    getViewportSize: function() {
      "use strict";
      return [CS.VisitorInfo.getViewportWidth(), CS.VisitorInfo.getViewportHeight()]
    },
    hasPopState: function() {
      "use strict";
      return window.hasOwnProperty("onpopstate")
    },
    hasTouch: function() {
      "use strict";
      return window.hasOwnProperty("ontouchstart")
    },
    getUserDetails: function() {
      "use strict";
      return CS.VisitorInfo.details(),
        userDetails
    }
  },
  $(document).ready(function() {
    "use strict";
    CS.initialize()
  });
