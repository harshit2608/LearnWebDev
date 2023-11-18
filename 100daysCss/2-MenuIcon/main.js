const menuIcon = document.querySelector(".menu-icon");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
let isOpen = false;

const openMenu = () => {
    lineOne.classList.add("line-one-open");
    lineTwo.classList.add("line-two-open");
    lineThree.classList.add("line-three-open");
    lineOne.classList.remove("line-one-close");
    lineTwo.classList.remove("line-two-close");
    lineThree.classList.remove("line-three-close");
    isOpen = true;
};
const closeMenu = () => {
    lineOne.classList.remove("line-one-open");
    lineTwo.classList.remove("line-two-open");
    lineThree.classList.remove("line-three-open");
    lineOne.classList.add("line-one-close");
    lineTwo.classList.add("line-two-close");
    lineThree.classList.add("line-three-close");
    isOpen = false;
};

menuIcon.addEventListener("click", () => {
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});
