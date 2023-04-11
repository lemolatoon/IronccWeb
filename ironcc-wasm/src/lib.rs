extern crate ironcc;
use std::panic;
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
    let result = panic::catch_unwind(|| {
        crate::ironcc::preprocess_and_compile(input).map_or_else(|e| format!("{:?}", e), |s| s)
    });
    alert(&format!("{:?}", result));
    result.unwrap_or_else(|_| String::from("Rust compiler panic!"))
}

#[wasm_bindgen]
pub fn preprocess(input: String) -> String {
    let result = panic::catch_unwind(|| {
        crate::ironcc::preprocessed_source(input).map_or_else(|e| format!("{:?}", e), |s| s)
    });
    alert(&format!("{:?}", result));
    result.unwrap_or_else(|_| String::from("Rust compiler panic!"))
}

#[wasm_bindgen]
pub fn ast(input: String) -> String {
    let result = panic::catch_unwind(|| {
        crate::ironcc::parsed_ast(input)
            .map_or_else(|e| format!("{:?}", e), |s| format!("{:#?}", s))
    });
    alert(&format!("{:?}", result));
    result.unwrap_or_else(|_| String::from("Rust compiler panic!"))
}

#[wasm_bindgen]
pub fn converted_ast(input: String) -> String {
    let result = panic::catch_unwind(|| {
        crate::ironcc::converted_ast(input)
            .map_or_else(|e| format!("{:?}", e), |s| format!("{:#?}", s))
    });
    alert(&format!("{:?}", result));
    result.unwrap_or_else(|_| String::from("Rust compiler panic!"))
}
