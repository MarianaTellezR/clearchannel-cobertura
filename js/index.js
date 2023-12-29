$(document).ready(function () {
  $(".hide").hide();

  // Keep track of the visibility state for each marker
  var markerStates = {
    cdmx: false,
    guadalajara: false,
    monterrey: false,
    puebla: false,
    cancun: false,
    villahermosa: false,
    queretaro: false,
    veracruz: false,
  };

  function showText(marker) {
    $("#" + marker + "-rect").fadeIn(250);
    $("#" + marker + "-text").fadeIn(250);
  }

  function hideText(marker) {
    $("#" + marker + "-rect").hide();
    $("#" + marker + "-text").hide();
  }

  function toggleText(marker) {
    if (markerStates[marker]) {
      hideText(marker);
      markerStates[marker] = false;
    } else {
      showText(marker);
      markerStates[marker] = true;
    }
  }

  // Event handlers for each marker
  $(".marker-cdmx")
    .click(function () {
      toggleText("cdmx");
    })
    .hover(
      function () {
        showText("cdmx");
      },
      function () {
        if (!markerStates.cdmx) {
          hideText("cdmx");
        }
      }
    );

  $(".marker-guadalajara")
    .click(function () {
      toggleText("guadalajara");
    })
    .hover(
      function () {
        showText("guadalajara");
      },
      function () {
        if (!markerStates.guadalajara) {
          hideText("guadalajara");
        }
      }
    );

  $(".marker-monterrey")
    .click(function () {
      toggleText("monterrey");
    })
    .hover(
      function () {
        showText("monterrey");
      },
      function () {
        if (!markerStates.monterrey) {
          hideText("monterrey");
        }
      }
    );

  $(".marker-puebla")
    .click(function () {
      toggleText("puebla");
    })
    .hover(
      function () {
        showText("puebla");
      },
      function () {
        if (!markerStates.puebla) {
          hideText("puebla");
        }
      }
    );

  $(".marker-cancun")
    .click(function () {
      toggleText("cancun");
    })
    .hover(
      function () {
        showText("cancun");
      },
      function () {
        if (!markerStates.cancun) {
          hideText("cancun");
        }
      }
    );

  $(".marker-villahermosa")
    .click(function () {
      toggleText("villahermosa");
    })
    .hover(
      function () {
        showText("villahermosa");
      },
      function () {
        if (!markerStates.villahermosa) {
          hideText("villahermosa");
        }
      }
    );

  $(".marker-queretaro")
    .click(function () {
      toggleText("queretaro");
    })
    .hover(
      function () {
        showText("queretaro");
      },
      function () {
        if (!markerStates.queretaro) {
          hideText("queretaro");
        }
      }
    );

  $(".marker-veracruz")
    .click(function () {
      toggleText("veracruz");
    })
    .hover(
      function () {
        showText("veracruz");
      },
      function () {
        if (!markerStates.veracruz) {
          hideText("veracruz");
        }
      }
    );

  // Add more event handlers for other markers if needed...
});

/*
$(document).ready(function () {
  $(".hide").hide();

  function showText(element) {
    $(".hide").hide();
    $(element).fadeIn(250);
  }

  function hideText() {
    $(".hide").hide();
  }

  $(".marker-cdmx")
    .click(function () {
      showText(".cdmx-text");
    })
    .hover(
      function () {
        showText(".cdmx-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-guadalajara")
    .click(function () {
      showText(".guadalajara-text");
    })
    .hover(
      function () {
        showText(".guadalajara-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-monterrey")
    .click(function () {
      showText(".monterrey-text");
    })
    .hover(
      function () {
        showText(".monterrey-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-puebla")
    .click(function () {
      showText(".puebla-text");
    })
    .hover(
      function () {
        showText(".puebla-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-cancun")
    .click(function () {
      showText(".cancun-text");
    })
    .hover(
      function () {
        showText(".cancun-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-villahermosa")
    .click(function () {
      showText(".villahermosa-text");
    })
    .hover(
      function () {
        showText(".villahermosa-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-queretaro")
    .click(function () {
      showText(".queretaro-text");
    })
    .hover(
      function () {
        showText(".queretaro-text");
      },
      function () {
        hideText();
      }
    );

  $(".marker-veracruz")
    .click(function () {
      showText(".veracruz-text");
    })
    .hover(
      function () {
        showText(".veracruz-text");
      },
      function () {
        hideText();
      }
    );
});

*/
