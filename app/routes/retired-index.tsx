import { data } from "react-router";

import RetiredPage from "../components/RetiredPage";
import { retirementHeaders } from "../retirement";

export function loader() {
  return data(null, {
    status: 410,
    statusText: "Gone",
    headers: retirementHeaders,
  });
}

export default function RetiredIndex() {
  return <RetiredPage />;
}
