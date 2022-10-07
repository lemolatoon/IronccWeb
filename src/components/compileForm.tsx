import { preprocess_and_compile } from "ironcc-wasm";
import "./compileForm.css"
import React from "react";
import { useState } from "react";

const CompileForm = () => {
    const [src, setSrc] = useState<string | null>(null);
    const [asm, setAsm] = useState<string>("asm");
    const asm_splited = asm.split("\n").map((item, index) => {
        return (
            <React.Fragment key={index}>{item}<br /></React.Fragment>
        );
    });
    return <div className="compile-form">
        <div className="compile-input-form">
            <button onClick={() => { src && setAsm(preprocess_and_compile(src)); }}>Compile!!</button>
            <textarea className="c-input" onChange={(e) => setSrc(e.target.value)}></textarea>
        </div>
        <div className="compile-output">
            {asm_splited}
        </div>

    </div>
}

export default CompileForm;
