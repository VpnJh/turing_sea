import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./appPopup.scss"; // Assuming you have a similar SCSS file for styling

const AppPopup = ({
  isAutoWidth = false,
  isAutoHeight = false,
  opacity = false,
  isCoverAll = false,
  isPadding = false,
  bgColor = "rgba(255, 255, 255, 1)",
  maskColor = "rgba(0, 0, 0, 0.1)",
  animation = true,
  type = "center",
  custom = false,
  maskClick = true,
  show = true,
  onChange,
  children
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [ani, setAni] = useState("");

  useEffect(() => {
    if (show) {
      open();
    } else {
      close();
    }
  }, [show]);

  const open = () => {
    onChange({ show: true });
    setShowPopup(true);
    setTimeout(() => {
      setAni(`app-${type}`);
    }, 30);
  };

  const close = type => {
    if (!maskClick && type) return;
    onChange({ show: false });
    setAni("");
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  const clear = e => {
    e.stopPropagation();
  };

  return (
    <>
      {showPopup && (
        <div className="app-popup">
          <div
            className={`app-popup__mask ${ani} ${animation ? "ani" : ""} ${
              !custom ? "app-custom" : ""
            } ${opacity ? "opacity_none" : ""}`}
            style={{ backgroundColor: maskColor }}
            onClick={() => close(true)}
            onTouchMove={e => e.preventDefault()}
          />
          <div
            className={`app-popup__wrapper ${type} ${ani} ${
              animation ? "ani" : ""
            } ${!custom ? "app-custom" : ""}`}
            onClick={() => close(true)}
          >
            <div
              style={{
                backgroundColor: bgColor,
                borderRadius: "20px",
                padding: isPadding ? "30upx" : undefined
              }}
              className={`app-popup__wrapper-box ${
                isPadding ? "padding_zero" : ""
              } ${type === "center" && isCoverAll ? "coverAll" : ""} ${
                isAutoHeight ? "autoheight" : ""
              } ${isAutoWidth ? "autowidth" : ""}`}
              onClick={clear}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

AppPopup.propTypes = {
  isAutoWidth: PropTypes.bool,
  isAutoHeight: PropTypes.bool,
  opacity: PropTypes.bool,
  zIndex: PropTypes.string,
  isCoverAll: PropTypes.bool,
  isPadding: PropTypes.bool,
  bgColor: PropTypes.string,
  maskColor: PropTypes.string,
  animation: PropTypes.bool,
  type: PropTypes.oneOf(["top", "bottom", "center"]),
  custom: PropTypes.bool,
  maskClick: PropTypes.bool,
  show: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default AppPopup;
