import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AppScrollList from "@/components/appScrollList/appScrollList.jsx";
import { divide } from "loadsh/math.js";
const fakeDataUrl =
  "https://randomuser.me/api/?results=2000&inc=name,gender,email,nat,picture&noinfo";
const HomePage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(20);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        console.log("body.results", body.results);
        setData(data.concat(body.results));
      });
  };

  useEffect(() => {
    appendData();
  }, []);
  const loadNextPage = function (value) {
    console.log("loadNextPage", value);
  };
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      {t("hello")}
      <div style={{ flex: "1 1 auto" }} className={"w-full h-full"}>
        <AppScrollList
          loadNextPage={loadNextPage}
          items={data}
          hasNextPage={false}
        >
          {item => {
            console.log("item=>", item);
            return <div>nihao</div>;
          }}
        </AppScrollList>
      </div>
    </div>
  );
};
export default HomePage;
