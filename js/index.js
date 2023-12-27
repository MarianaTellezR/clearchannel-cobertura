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
