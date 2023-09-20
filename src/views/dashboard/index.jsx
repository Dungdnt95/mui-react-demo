import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { Data } from "../../data/mockChartData";
import PieChart from "../../components/PieChart";
import { getDataExecl } from "../../api/getDataChartApi.js";

Chart.register(CategoryScale);

const Dashboard = () => {
  useEffect(() => {
    getDataExecl().then((data) => {
      console.log(data);
    });
  }, []);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#f3ba2f",
          "#2a71d0",
          "#66CC00",
          "#9019AE",
        ],
      },
    ],
  });

  return (
    <div className="dashboard">
      <PieChart chartData={chartData} />
    </div>
  );
};

export default Dashboard;
