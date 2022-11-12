import {
  preprocess_and_compile,
  preprocess,
  ast,
  converted_ast,
} from "ironcc-wasm";
import "./compileForm.css";
import React from "react";
import { useState } from "react";
import StateButtons from "./stateButtons";
import type { ConversionState } from "./stateButtons";

const CompileForm = () => {
  const [src, setSrc] = useState<string | null>(null);
  const [conversionKind, setConversionKind] =
    useState<ConversionState>("Compile");
  const [asm, setAsm] = useState<string>("asm");
  const asm_splited = asm
    .replaceAll(" ", "\u00A0")
    .split("\n")
    .map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      );
    });

  const conversionFunc = getConversionFunction(conversionKind);

  return (
    <>
      <StateButtons
        states={["preprocess", "AST", "convertedAST", "Compile"]}
        onClick={setConversionKind}
      />
      <div className="compile-form">
        <div className="compile-input-form">
          <button
            onClick={() => {
              src && setAsm(conversionFunc(src));
            }}
          >
            {conversionKind}
          </button>
          <textarea
            className="c-input"
            onChange={(e) => setSrc(e.target.value)}
          ></textarea>
        </div>
        <div className="compile-output">{asm_splited}</div>
      </div>
    </>
  );
};

const getConversionFunction = (kind: ConversionState) => {
  switch (kind) {
    case "preprocess":
      return preprocess;
    case "AST":
      return ast;
    case "convertedAST":
      return converted_ast;
    case "Compile":
      return preprocess_and_compile;
    default:
      return preprocess_and_compile;
  }
};

export default CompileForm;
