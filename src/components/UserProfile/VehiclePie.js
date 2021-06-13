import React from "react";
import { useTheme } from "@material-ui/core/styles";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function useOptions(theme) {
  return {
    chart: {
      height:"250px",
      type: "pie",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      max: 1000,
      min: -1000,
    },
    title: null,
    series: [
      {
        data: [
          {
            name: "Fund Raised",
            color: 'green',
            y: 61.41,
            sliced: true,
            selected: true,
          },
          {
            name: "Remaining",
            color: theme.palette.secondary.main,
            y: 29.59,
          },
        ],
      },
    ],
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
  };
}

export default function VehiclePie() {
  const theme = useTheme();
  const options = useOptions(theme);

  return (
    <>
  <h5>Child Labour Eradication</h5>
  <HighchartsReact highcharts={Highcharts} options={options} />
  </>
  );
}
