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

  function showText(element) {
    $(".hide").hide();
    $(element).fadeIn(250);
  }

  function hideText() {
    $(".hide").hide();
  }

  function toggleText(marker, textClass) {
    if (markerStates[marker]) {
      hideText();
      markerStates[marker] = false;
    } else {
      showText(textClass);
      markerStates[marker] = true;
    }
  }

  $(".marker-cdmx")
    .click(function () {
      toggleText("cdmx", ".cdmx-text");
    })
    .hover(
      function () {
        showText(".cdmx-text");
      },
      function () {
        if (!markerStates.cdmx) {
          hideText();
        }
      }
    );

  $(".marker-guadalajara")
    .click(function () {
      toggleText("guadalajara", ".guadalajara-text");
    })
    .hover(
      function () {
        showText(".guadalajara-text");
      },
      function () {
        if (!markerStates.guadalajara) {
          hideText();
        }
      }
    );

  $(".marker-monterrey")
    .click(function () {
      toggleText("monterrey", ".monterrey-text");
    })
    .hover(
      function () {
        showText(".monterrey-text");
      },
      function () {
        if (!markerStates.monterrey) {
          hideText();
        }
      }
    );

  $(".marker-puebla")
    .click(function () {
      toggleText("puebla", ".puebla-text");
    })
    .hover(
      function () {
        showText(".puebla-text");
      },
      function () {
        if (!markerStates.puebla) {
          hideText();
        }
      }
    );

  $(".marker-cancun")
    .click(function () {
      toggleText("cancun", ".cancun-text");
    })
    .hover(
      function () {
        showText(".cancun-text");
      },
      function () {
        if (!markerStates.cancun) {
          hideText();
        }
      }
    );

  $(".marker-villahermosa")
    .click(function () {
      toggleText("villahermosa", ".villahermosa-text");
    })
    .hover(
      function () {
        showText(".villahermosa-text");
      },
      function () {
        if (!markerStates.villahermosa) {
          hideText();
        }
      }
    );

  $(".marker-queretaro")
    .click(function () {
      toggleText("queretaro", ".queretaro-text");
    })
    .hover(
      function () {
        showText(".queretaro-text");
      },
      function () {
        if (!markerStates.queretaro) {
          hideText();
        }
      }
    );

  $(".marker-veracruz")
    .click(function () {
      toggleText("veracruz", ".veracruz-text");
    })
    .hover(
      function () {
        showText(".veracruz-text");
      },
      function () {
        if (!markerStates.veracruz) {
          hideText();
        }
      }
    );
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