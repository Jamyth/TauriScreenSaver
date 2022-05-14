#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{Submenu, Menu, MenuItem};

fn main() {
  let menu = Menu::new().add_submenu(Submenu::new("Iamyth Screensaver", Menu::new().add_native_item(MenuItem::Quit)));
  tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler!())
    .menu(menu)
    .plugin(tauri_plugin_nosleep::init())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
