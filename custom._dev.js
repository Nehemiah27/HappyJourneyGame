$(document).ready(function () {
  var firstSet = {
    London: 56236,
    Paris: 5851,
    Hong_Kong: 222,
    Cape_Town: 897494,
    Sao_Paulo: 35744,
    Toronto: 9985,
    San_Francisco: 12843,
  };

  var secondSet = {
    Russia: 12550134,
  };

  var valuation = 86;
  var valuation1 = 100;
  $(".globe-scan-overview").click(function () {
    page1();
  });
  $(".optionsArea").click(function () {
    page2();
  });
  $(".search-icon").click(function () {
    $(".globe-scan-search").val() == "" ? $(".globe-scan-search").focus() : "";
    $(".globe-scan-search").click();
  });
  $(".globe-scan-search").click(function () {
    $(".options-menu").addClass("menu-shower");
    var options = $(".options-menu a");
    for (let index = 0; index < options.length; index++) {
      options[index].style.display = "";
    }
  });
  $(".globe-scan-search").on("focusout", function () {
    $(".options-menu").removeClass("menu-shower");
    $(".error").removeClass("showError");
    $(".globe-scan-search").val("");
  });
  $(".globe-scan-search").on("input", function (e) {
    var keyWord = e.target.value;
    var filter = keyWord.toUpperCase();
    var options = $(".options-menu a");
    var availableOptions = options.length;
    var hiddenOptions = 0;
    for (let i = 0; i < options.length; i++) {
      var txtValue = options[i].textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
        hiddenOptions++;
      }
      if (filter == "") {
        options[i].style.display = "";
      }
    }
    if (hiddenOptions == availableOptions) {
      $(".error").addClass("showError");
    } else {
      $(".error").removeClass("showError");
    }
  });

  // donutChart();
  // eMailChart("email-container");
  // eMailChart("email-container-second-page");
  // eMailChart("email-container-second-page-second");
  // lengthChart();
  function donutChart() {
    Highcharts.setOptions({
      colors: ["#19A6DF", "#273992", "#939598"],
    });
    Highcharts.chart("container", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      legend: {
        enabled: true,
        align: "right",
        verticalAlign: "top",
        layout: "vertical",
        x: 0,
        y: 80,
        itemMarginBottom: 20,
      },
      tooltip: {
        pointFormat: "<b>{series.name}: </b>{point.y}%",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            inside: true,
            formatter: function () {
              return this.y + "%";
            },
          },
          showInLegend: true,
        },
      },
      xAxis: {
        type: "category",
        lineWidth: 0,
        tickWidth: 0,
      },
      yAxis: {
        title: {
          text: "",
        },
      },
      series: [
        {
          name: "",
          colorByPoint: true,
          startAngle: 245,
          innerSize: "45%",
          dataLabels: {
            color: "#f8f8f8",
            distance: -16,
            formatter: function () {
              if (this.percentage != 0)
                return Math.round(this.percentage) + "%";
            },
          },
          data: [
            {
              name: "Invitation",
              y: 29,
            },
            {
              name: "Client",
              y: 53,
            },
            {
              name: "Open link",
              y: 18,
            },
          ],
        },
      ],
    });
  }
  function eMailChart(id) {
    Highcharts.chart(id, {
      chart: {
        type: "column",
      },
      credits: false,
      tooltip: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ["0", "1", "2", "3", "4"],
        labels: {
          style: {
            color: "#414141",
          },
        },
        title: {
          useHTML: true,
          text: "Number of Emails",
          style: {
            color: "#2e2e2e",
          },
        },
        crosshair: false,
      },
      yAxis: {
        title: {
          useHTML: true,
          text: "Completes",
          style: {
            color: "#2e2e2e",
          },
        },
        labels: {
          style: {
            color: "#414141",
          },
        },
        gridLineColor: "#b5b5b5",
        max: 150,
        tickInterval: 30,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "",
          data: [94, 42, 45, 10, 35],
          color: "#273992",
          dataLabels: {
            enabled: true,
            rotation: 0,
            color: "#19A6DF",
            y: 0, // 10 pixels down from the top
            style: {
              fontSize: "14px",
              fontFamily: "Open Sans, sans-serif",
              textShadow: false,
              textOutline: false,
              fontWeight: "800",
            },
          },
        },
      ],
    });
  }
  function lengthChart() {
    var myE = $(".length-chart").width();
    var newBee = 0;
    myE <= 700 ? (newBee = 2) : (newBee = 5);
    lengthCharts();
    function lengthCharts() {
      Highcharts.chart("length-container", {
        chart: {
          type: "column",
        },
        credits: false,
        tooltip: {
          enabled: true,
          shared: false,
          useHTML: true,
          split: false,
          style: {
            color: "#FFFFFF",
          },
          formatter: function () {
            return [
              '<div style="text-align:center;"><b><a>' +
                this.key +
                "</a></b></div>",
            ].concat(
              this.y >= 0
                ? '<div style="text-align:center;"><a> <b>' +
                    this.y +
                    " minutes</b></a></div>"
                : ""
            );
          },
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          labels: {
            enabled: false,
          },
          tickLength: 0,
          title: {
            useHTML: true,
            text: "Projects",
            style: {
              color: "#2e2e2e",
            },
          },
          crosshair: false,
        },
        yAxis: {
          title: {
            useHTML: true,
            text: "Duration",
            style: {
              color: "#2e2e2e",
            },
          },
          labels: {
            style: {
              color: "#414141",
            },
          },
          gridLineColor: "#b5b5b5",
          max: 150,
          tickInterval: 30,
        },
        plotOptions: {
          column: {
            pointPadding: "auto",
            borderWidth: 0,
          },
          series: {
            pointWidth: newBee,
          },
        },
        series: [
          {
            name: "",
            data: [
              { name: "project-1", y: 60 },
              { name: "project-2", y: 76 },
              { name: "project-3", y: 84 },
              { name: "project-4", y: 60 },
              { name: "project-5", y: 76 },
              { name: "project-6", y: 52 },
              { name: "project-7", y: 76 },
              { name: "project-8", y: 60 },
              { name: "project-9", y: 105 },
              { name: "project-10", y: 76 },
              { name: "project-11", y: 60 },
              { name: "project-12", y: 52 },
              { name: "project-13", y: 76 },
              { name: "project-14", y: 57 },
              { name: "project-15", y: 76 },
              { name: "project-16", y: 60 },
              { name: "project-17", y: 52 },
              { name: "project-18", y: 76 },
              { name: "project-19", y: 57 },
              { name: "project-20", y: 35 },
              { name: "project-21", y: 52 },
              { name: "project-22", y: 58 },
              { name: "project-23", y: 35 },
              { name: "project-24", y: 105 },
              { name: "project-25", y: 76 },
              { name: "project-26", y: 85 },
              { name: "project-27", y: 60 },
              { name: "project-28", y: 76 },
              { name: "project-29", y: 52 },
              { name: "project-30", y: 105 },
              { name: "project-31", y: 60 },
              { name: "project-32", y: 76 },
              { name: "project-33", y: 57 },
              { name: "project-34", y: 76 },
              { name: "project-35", y: 52 },
              { name: "project-36", y: 76 },
              { name: "project-37", y: 105 },
              { name: "project-38", y: 36 },
              { name: "project-39", y: 76 },
              { name: "project-40", y: 52 },
              { name: "project-41", y: 76 },
              { name: "project-42", y: 60 },
              { name: "project-43", y: 53 },
              { name: "project-44", y: 76 },
              { name: "project-45", y: 61 },
              { name: "project-46", y: 52 },
              { name: "project-47", y: 36 },
              { name: "project-48", y: 84 },
              { name: "project-49", y: 60 },
              { name: "project-50", y: 35 },
              { name: "project-51", y: 18 },
              { name: "project-52", y: 76 },
              { name: "project-53", y: 36 },
              { name: "project-54", y: 59 },
              { name: "project-55", y: 52 },
              { name: "project-56", y: 58 },
              { name: "project-57", y: 75 },
              { name: "project-58", y: 35 },
              { name: "project-59", y: 61 },
              { name: "project-60", y: 84 },
              { name: "project-61", y: 75 },
              { name: "project-62", y: 59 },
              { name: "project-63", y: 52 },
              { name: "project-64", y: 52 },
              { name: "project-65", y: 75 },
              { name: "project-66", y: 58 },
              { name: "project-67", y: 36 },
              { name: "project-68", y: 60 },
              { name: "project-69", y: 52 },
              { name: "project-70", y: 76 },
              { name: "project-71", y: 53 },
              { name: "project-72", y: 36 },
              { name: "project-73", y: 60 },
              { name: "project-74", y: 53 },
              { name: "project-75", y: 75 },
              { name: "project-76", y: 58 },
              { name: "project-77", y: 76 },
              { name: "project-78", y: 60 },
              { name: "project-79", y: 53 },
              { name: "project-80", y: 60 },
              { name: "project-81", y: 53 },
              { name: "project-82", y: 75 },
              { name: "project-83", y: 105 },
              { name: "project-84", y: 76 },
              { name: "project-85", y: 60 },
              { name: "project-86", y: 52 },
              { name: "project-87", y: 75 },
              { name: "project-88", y: 52 },
              { name: "project-89", y: 60 },
              { name: "project-90", y: 85 },
              { name: "project-91", y: 76 },
              { name: "project-92", y: 52 },
              { name: "project-93", y: 105 },
              { name: "project-94", y: 76 },
              { name: "project-95", y: 53 },
              { name: "project-96", y: 104 },
              { name: "project-97", y: 26 },
              { name: "project-98", y: 15 },
              { name: "project-99", y: 52 },
              { name: "project-100", y: 21 },
              { name: "project-101", y: 35 },
              { name: "project-102", y: 20 },
            ],
            color: "#273992",
            states: {
              hover: {
                color: "#19A6DF",
              },
            },
          },
        ],
      });
    }
  }
  worldMap = $(".description");
  $(".ag-canvas path").on("mousemove", function (e) {
    worldMap.css({
      left: e.pageX,
      top: e.pageY - 50,
    });
  });
  var firstSetArray = Object.keys(firstSet);
  for (let index = 0; index < firstSetArray.length; index++) {
    $(`#${firstSetArray[index]}`).css({ fill: "#19a6df" });
    $(`#${firstSetArray[index]}`).hover(
      function () {
        $(this).css({ fill: "#045b7e" });
        $(this).attr("class", "enabled heyo");
        worldMap.addClass("active");
        worldMap.html(
          `${$(this).attr("id")}<br>${
            firstSet[$(this).attr("id")]
              .toLocaleString("en-IN", {
                maximumFractionDigits: 0,
                style: "currency",
                currency: "INR",
              })
              .split("₹")[1]
          }`
        );
      },
      function () {
        $(this).css({ fill: "#19a6df" });
        worldMap.removeClass("active");
      }
    );
  }
  function page1() {
    $(
      ".location-heading, .location-gender-stake-container, .end-presentation, .emails-2, .emails-3"
    ).addClass("reporter");
  }
  function page2() {
    $(
      ".location-heading, .location-gender-stake-container, .end-presentation, .emails-2, .emails-3"
    ).removeClass("reporter");
    $(".emails, .length").addClass("reporter");
  }

  var counter = setInterval(function () {
    var getElement = $("#confirmit_agg_table_1").html();
    var getElement1 = $("#confirmit_agg_table").html();
    var getElement2 = $("#confirmit_agg_table_3").html();
    if (
      getElement != undefined &&
      getElement1 != undefined &&
      getElement2 != undefined
    ) {
      console.log("Now ready");
      clearInterval(counter);
      $(".value").text(
        $("#confirmit_agg_table_1 .t1_dc_total.TableTotalDataCell").text()
      );
      $(".project-total")
        .children(".number-show")
        .text($("#confirmit_agg_table .t0_dc.TableDataCell").text());
      valuation = $("#confirmit_agg_table_3 .t3_dc.TableDataCell")
        .text()
        .split("%")[0];
      function valueLoader() {
        $(".response-rate-slider").slider({
          min: 0,
          max: 100,
          value: valuation,
          slide: function (event, ui) {
            $(".response-rate-slider").css({
              background: `linear-gradient(to right, #273992 ${ui.value}%, #ffffff 0%, #ffffff 100%)`,
            });
            $(".response-value").text(`${ui.value}%`);
          },
        });
        $(".completion-rate-slider").slider({
          min: 0,
          max: 100,
          value: valuation1,
          slide: function (event, ui) {
            $(".completion-rate-slider").css({
              background: `linear-gradient(to right, #273992 ${ui.value}%, #ffffff 0%, #ffffff 100%)`,
            });
            $(".completion-response-value").text(`${ui.value}%`);
          },
        });
        $(".response-rate-slider").css({
          background: `linear-gradient(to right, #273992 ${valuation}%, #ffffff 0%, #ffffff 100%)`,
        });
        $(".response-value").text(`${valuation}%`);
        $(".completion-rate-slider").css({
          background: `linear-gradient(to right, #273992 ${valuation1}%, #ffffff 0%, #ffffff 100%)`,
        });
        $(".completion-response-value").text(`${valuation1}%`);
        if (Number($(".response-rate-slider").slider("value")) <= 4) {
          $(".response-rate-slider .ui-slider-handle").addClass(
            "slider-remover"
          );
        } else {
          $(".response-rate-slider .ui-slider-handle").removeClass(
            "slider-remover"
          );
        }
        if (Number($(".completion-rate-slider").slider("value")) <= 4) {
          $(".completion-rate-slider .ui-slider-handle").addClass(
            "slider-remover"
          );
        } else {
          $(".completion-rate-slider .ui-slider-handle").removeClass(
            "slider-remover"
          );
        }
      }
      valueLoader();
    } else {
      console.log("Wating");
    }
  }, 100);
});
