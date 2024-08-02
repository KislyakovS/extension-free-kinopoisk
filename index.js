const HOST = "https://www.sspoisk.ru";
const TARGET_ELEMENT_SELECT = '[data-tid="f22e0093"]';
const CLASS_NAME = "link-free-kinoposik";

const getRedirectUrl = () => `${HOST}${window.location.pathname}`;

const onClickTarget = () => window.open(getRedirectUrl(), "_blank").focus;

const init = () => {
  const target = document.querySelector(TARGET_ELEMENT_SELECT);
  target.classList.add(CLASS_NAME);

  target?.addEventListener("click", onClickTarget);
};

init();
navigation.addEventListener("navigate", init);
