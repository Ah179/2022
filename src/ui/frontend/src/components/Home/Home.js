import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import "./Home.css";
import ProjectOne from "./components/Widgets/ProjectOne";
import ProjectThree from "./components/Widgets/ProjectThree";
import ProjectFour from "./components/Widgets/ProjectFour";
import ProjectTwo from "./components/Widgets/ProjectTwo";
import Navbar from "./components/Navbar/Navbar";

const initialPositions = [
  {
    col: 1,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 3,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 3,
    colSpan: 1,
    rowSpan: 1,
  },
];

const getPositions = initialPositions => {
  // Try to get positions from local storage
  // If we have none in the storage then default to initial positions
  return (
    JSON.parse(localStorage.getItem("dashboard-positions")) || initialPositions
  );
};

function Home() {
  const [positions, setPositions] = useState(getPositions(initialPositions));

  const widgets = [
    {
      header: "Project Three",
      body: <ProjectThree />,
    },
    {
      header: "Project One",
      body: <ProjectOne />,
    },
    {
      header: "Project Two",
      body: <ProjectTwo />,
    },
    {
      header: "Project Four",
      body: <ProjectFour />,
    },
  ];

  const handleReposition = e => {
    setPositions(e.value);
    localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Project Dashboard</h1>
      <TileLayout
        className="tileLayout"
        columns={4}
        rowHeight={255}
        positions={positions}
        gap={{ rows: 10, columns: 10 }}
        items={widgets}
        onReposition={handleReposition}
      />
    </div>
  );
}

export default Home;