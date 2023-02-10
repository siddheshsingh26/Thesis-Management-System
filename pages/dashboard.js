// import { data } from "../components/pie";

import dynamic from "next/dynamic";
// import Table from "../components/table";
import homeStyles from "../styles/Home.module.css";
import ProgressBar from "../components/progress-bar";
import LinearWithValueLabel from "../components/linearprogresswithlabel";
import Link from "next/link";
import Todolist from "../components/Todolist";
import AssignList from "../components/AssignList";

const Dashboard = () => {
  return (
    <div className="flex w-[100%] ">
      {/* <Todolist /> */}
      <AssignList />
    </div>
  );
};
export default Dashboard;

//progress self prof
//todo list checklist selfgoals, professor
//flex flex-col space-y-[10%] my-[4%]         flex space-x-[10%]             flex space-x-12
