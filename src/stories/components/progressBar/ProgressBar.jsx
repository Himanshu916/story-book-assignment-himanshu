import React from "react";
import { Check } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import "./progressBar.css";

const variations = {
  horizontal: {
    container: "step-container-row",
    wrapper: "step-wrapper-column",
    border: "border-horizontal",
    labelAlign: "label-align-row",
  },
  vertical: {
    container: "step-container-column",
    wrapper: "step-wrapper-row",
    border: "border-vertical",
    labelAlign: "label-align-vertical",
  },
};

export const ProgressBar = ({
  children,
  variation = "horizontal",
  backgroundColor = "blue",
  label,
  outline,
  tick,
  description,
  size,
}) => {
  return (
    <div className={`${variations[variation].container}`}>
      {children.map((item, index) => (
        <div className={`${variations[variation].labelAlign}`}>
          <div className={`${variations[variation].wrapper}`}>
            <span
              style={
                outline
                  ? {
                      border: `1px solid ${backgroundColor}`,
                      color: `${backgroundColor}`,
                    }
                  : { backgroundColor: backgroundColor }
              }
              className="step-circle"
            >
              {tick ? (
                <Check
                  style={{
                    position: "relative",
                    top: "1px",
                    left: "-1px",
                    padding: " 0px 2px",
                  }}
                  size={16}
                />
              ) : (
                item
              )}{" "}
              {index === children.length - 1 ? null : (
                <span
                  style={{ backgroundColor: backgroundColor }}
                  className={`${variations[variation].border}`}
                ></span>
              )}{" "}
            </span>{" "}
          </div>
          <div className="description">
            <span style={{ color: backgroundColor }} className="step-text">
              {label}
            </span>
            {variation === "vertical" && <p>{description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

ProgressBar.prototypes = {
  label: PropTypes.string,
  backgrounndColor: PropTypes.string,
  variation: PropTypes.oneOf(["horizontal", "vertical"]),
  outline: PropTypes.bool,
};
