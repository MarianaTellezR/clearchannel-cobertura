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
    coahuila: false,
    bajacalifornia: false,
    bajacaliforniasur: false,
    sonora: false,
    chihuahua: false,
    coahuila: false,
    tamaulipas: false,
    sinaloa: false,
    durango: false,
    zacatecas: false,
    sanluispotosi: false,
    nayarit: false,
    aguascalientes: false,
    guanajuato: false,
    hidalgo: false,
    tlaxcala: false,
    mexico: false,
    morelos: false,
    michoacan: false,
    colima: false,
    guerrero: false,
    oaxaca: false,
    chiapas: false,
    campeche: false,
    yucatan: false,
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

  // Invisible states

  $(".marker-coahuila")
    .click(function () {
      toggleText("coahuila");
    })
    .hover(
      function () {
        showText("coahuila");
      },
      function () {
        if (!markerStates.cdmx) {
          hideText("coahuila");
        }
      }
    );

  $(".marker-bajacalifornia")
    .click(function () {
      toggleText("bajacalifornia");
    })
    .hover(
      function () {
        showText("bajacalifornia");
      },
      function () {
        if (!markerStates.bajacalifornia) {
          hideText("bajacalifornia");
        }
      }
    );

  $(".marker-bajacaliforniasur")
    .click(function () {
      toggleText("bajacaliforniasur");
    })
    .hover(
      function () {
        showText("bajacaliforniasur");
      },
      function () {
        if (!markerStates.bajacaliforniasur) {
          hideText("bajacaliforniasur");
        }
      }
    );

  $(".marker-sonora")
    .click(function () {
      toggleText("sonora");
    })
    .hover(
      function () {
        showText("sonora");
      },
      function () {
        if (!markerStates.sonora) {
          hideText("sonora");
        }
      }
    );

  $(".marker-chihuahua")
    .click(function () {
      toggleText("chihuahua");
    })
    .hover(
      function () {
        showText("chihuahua");
      },
      function () {
        if (!markerStates.chihuahua) {
          hideText("chihuahua");
        }
      }
    );

  $(".marker-tamaulipas")
    .click(function () {
      toggleText("tamaulipas");
    })
    .hover(
      function () {
        showText("tamaulipas");
      },
      function () {
        if (!markerStates.tamaulipas) {
          hideText("tamaulipas");
        }
      }
    );

  $(".marker-sinaloa")
    .click(function () {
      toggleText("sinaloa");
    })
    .hover(
      function () {
        showText("sinaloa");
      },
      function () {
        if (!markerStates.sinaloa) {
          hideText("sinaloa");
        }
      }
    );

  $(".marker-sinaloa")
    .click(function () {
      toggleText("sinaloa");
    })
    .hover(
      function () {
        showText("sinaloa");
      },
      function () {
        if (!markerStates.sinaloa) {
          hideText("sinaloa");
        }
      }
    );

  $(".marker-durango")
    .click(function () {
      toggleText("durango");
    })
    .hover(
      function () {
        showText("durango");
      },
      function () {
        if (!markerStates.durango) {
          hideText("durango");
        }
      }
    );

  $(".marker-zacatecas")
    .click(function () {
      toggleText("zacatecas");
    })
    .hover(
      function () {
        showText("zacatecas");
      },
      function () {
        if (!markerStates.zacatecas) {
          hideText("zacatecas");
        }
      }
    );

  $(".marker-sanluispotosi")
    .click(function () {
      toggleText("sanluispotosi");
    })
    .hover(
      function () {
        showText("sanluispotosi");
      },
      function () {
        if (!markerStates.sanluispotosi) {
          hideText("sanluispotosi");
        }
      }
    );

  $(".marker-nayarit")
    .click(function () {
      toggleText("nayarit");
    })
    .hover(
      function () {
        showText("nayarit");
      },
      function () {
        if (!markerStates.nayarit) {
          hideText("nayarit");
        }
      }
    );

  $(".marker-aguascalientes")
    .click(function () {
      toggleText("aguascalientes");
    })
    .hover(
      function () {
        showText("aguascalientes");
      },
      function () {
        if (!markerStates.aguascalientes) {
          hideText("aguascalientes");
        }
      }
    );

  $(".marker-guanajuato")
    .click(function () {
      toggleText("guanajuato");
    })
    .hover(
      function () {
        showText("guanajuato");
      },
      function () {
        if (!markerStates.guanajuato) {
          hideText("guanajuato");
        }
      }
    );

  $(".marker-hidalgo")
    .click(function () {
      toggleText("hidalgo");
    })
    .hover(
      function () {
        showText("hidalgo");
      },
      function () {
        if (!markerStates.hidalgo) {
          hideText("hidalgo");
        }
      }
    );

  $(".marker-tlaxcala")
    .click(function () {
      toggleText("tlaxcala");
    })
    .hover(
      function () {
        showText("tlaxcala");
      },
      function () {
        if (!markerStates.tlaxcala) {
          hideText("tlaxcala");
        }
      }
    );

  $(".marker-mexico")
    .click(function () {
      toggleText("mexico");
    })
    .hover(
      function () {
        showText("mexico");
      },
      function () {
        if (!markerStates.mexico) {
          hideText("mexico");
        }
      }
    );

  $(".marker-morelos")
    .click(function () {
      toggleText("morelos");
    })
    .hover(
      function () {
        showText("morelos");
      },
      function () {
        if (!markerStates.morelos) {
          hideText("morelos");
        }
      }
    );

  $(".marker-michoacan")
    .click(function () {
      toggleText("michoacan");
    })
    .hover(
      function () {
        showText("michoacan");
      },
      function () {
        if (!markerStates.michoacan) {
          hideText("michoacan");
        }
      }
    );

  $(".marker-colima")
    .click(function () {
      toggleText("colima");
    })
    .hover(
      function () {
        showText("colima");
      },
      function () {
        if (!markerStates.colima) {
          hideText("colima");
        }
      }
    );

  $(".marker-guerrero")
    .click(function () {
      toggleText("guerrero");
    })
    .hover(
      function () {
        showText("guerrero");
      },
      function () {
        if (!markerStates.guerrero) {
          hideText("guerrero");
        }
      }
    );

  $(".marker-oaxaca")
    .click(function () {
      toggleText("oaxaca");
    })
    .hover(
      function () {
        showText("oaxaca");
      },
      function () {
        if (!markerStates.oaxaca) {
          hideText("oaxaca");
        }
      }
    );

  $(".marker-chiapas")
    .click(function () {
      toggleText("chiapas");
    })
    .hover(
      function () {
        showText("chiapas");
      },
      function () {
        if (!markerStates.chiapas) {
          hideText("chiapas");
        }
      }
    );

  $(".marker-campeche")
    .click(function () {
      toggleText("campeche");
    })
    .hover(
      function () {
        showText("campeche");
      },
      function () {
        if (!markerStates.campeche) {
          hideText("campeche");
        }
      }
    );

  $(".marker-yucatan")
    .click(function () {
      toggleText("yucatan");
    })
    .hover(
      function () {
        showText("yucatan");
      },
      function () {
        if (!markerStates.yucatan) {
          hideText("yucatan");
        }
      }
    );
});
