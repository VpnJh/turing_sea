import React, { useState, useCallback } from "react";
import AppPopup from "@/components/appPopup/appPopup.jsx";

const LoginPage = () => {
  const [showPopup, setShowPup] = useState(false);
  const onPopupChange = useCallback(
    ({ show }) => {
      if (show !== showPopup) {
        setShowPup(show);
      }
    },
    [showPopup]
  );
  return (
    <div>
      <button onClick={() => setShowPup(prev => !prev)}>点击触发弹窗</button>
      <AppPopup show={showPopup} onChange={onPopupChange} type={"bottom"}>
        <div className={"bg-[#000]"}>
          <span className="text-[#fff]">nihao</span>
        </div>
      </AppPopup>
    </div>
  );
};
export default LoginPage;
