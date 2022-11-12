extern crate ironcc;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    alert(&format!("{} + {} = {}", a, b, a + b));
    a + b
}

#[wasm_bindgen]
pub fn preprocess_and_compile(input: String) -> String {
    crate::ironcc::preprocess_and_compile(input).map_or_else(|e| format!("{:?}", e), |s| s)
}

#[wasm_bindgen]
pub fn preprocess(input: String) -> String {
    crate::ironcc::preprocessed_source(input).map_or_else(|e| format!("{:?}", e), |s| s)
}

#[wasm_bindgen]
pub fn ast(input: String) -> String {
    crate::ironcc::parsed_ast(input).map_or_else(|e| format!("{:?}", e), |s| format!("{:?}", s))
}

#[wasm_bindgen]
pub fn converted_ast(input: String) -> String {
    crate::ironcc::converted_ast(input).map_or_else(|e| format!("{:?}", e), |s| format!("{:?}", s))
}
