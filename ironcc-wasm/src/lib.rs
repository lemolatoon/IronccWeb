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
