const dropdownBtn = document.querySelector(".dropdown__btn");
const dropdownMenu = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__list-item");
const dropdownInput = document.querySelector<HTMLInputElement>(".dropdown__input");

export function dropDownMenu() {
    toggleDropdown();
    choseItem();
    clickOutsideMenu()
}

function toggleDropdown() {
    if(!dropdownBtn || !dropdownMenu) return;

    dropdownBtn.addEventListener("click", ()=>{
        dropdownBtn.classList.toggle("dropdown__btn_active");
        dropdownMenu.classList.toggle("dropdown__list_active");
    });
}

function choseItem() {
    if (!dropdownBtn || !dropdownMenu || !dropdownItem || !dropdownInput) return;

    dropdownItem.forEach(item => {
        item.addEventListener("click", ()=>{
            const itemContent = item.textContent;

            dropdownBtn.innerHTML = `
            ${itemContent}
            <span>
              <svg>
                <use href="#arr-drop-down"></use>
              </svg>
            </span>
            `;

            dropdownInput.value = itemContent;

            dropdownBtn.classList.remove("dropdown__btn_active");
            dropdownMenu.classList.remove("dropdown__list_active");

            addValToLink();
        })
    })
}

function addValToLink() {
    if(!dropdownInput) return;

    const value = dropdownInput.value.trim();
    if (!value) return;

    const url = new URL(window.location.href);

    url.searchParams.set("lang", value);

    window.history.replaceState({}, "", url.toString());
}

function clickOutsideMenu() {
    if(!dropdownBtn || !dropdownMenu) return;

    document.addEventListener("click", (e) => {
        if (
            dropdownBtn.contains(e.target as Node) ||
            dropdownMenu.contains(e.target as Node)
        ) {
            return;
        }

        dropdownBtn.classList.remove("dropdown__btn_active");
        dropdownMenu.classList.remove("dropdown__list_active");
    })
}