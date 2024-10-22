import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    console.log(t("hello"));
  }, []);
  return <div>{t("hello")}</div>;
};
export default HomePage;
