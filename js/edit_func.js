// page-setting & page-run
let input_username = document.getElementById("input-username")
let select_minecraftversion = document.getElementById("select-minecraftversion")
let input_dotminecraftpath = document.getElementById("input-dotminecraftpath")
let input_skinpath = document.getElementById("input-skinpath")
let input_java = document.getElementById("input-java")
let input_ram = document.getElementById("input-ram")
function save_config()
{
    let config = {
        "username":input_username.value,
        "minecraftversion":select_minecraftversion.selectedIndex,
        "dotminecraftpath":input_dotminecraftpath.value,
        "skinpath":input_skinpath.value,
        "java":input_java.value,
        "ram":input_ram.value
    }
    window.electronAPI.saveconfig(config)
    window.electronAPI.loaddotminecraft()
}
input_username.addEventListener('change',save_config)
select_minecraftversion.addEventListener('change',save_config)
input_dotminecraftpath.addEventListener('change',save_config)
input_skinpath.addEventListener('change',save_config)
input_java.addEventListener('change',save_config)
input_ram.addEventListener('change',save_config)