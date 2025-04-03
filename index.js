const HOST = "https://www.sspoisk.ru";
const TARGET_ELEMENT_SELECT = '[data-tid="f22e0093"]';
const CLASS_NAME = "link-free-kinoposik";

const getRedirectUrl = () =>
  `${HOST}${window.location.pathname.replace("/posters/", "")}`;

const onClickTarget = () => window.open(getRedirectUrl(), "_blank").focus;

const init = () => {
  const target = document.querySelector(TARGET_ELEMENT_SELECT);

  if (target) {
    target.classList.add(CLASS_NAME);
    target.addEventListener("click", onClickTarget);
  }
};

const isUrlContentPage = (url) => url.includes('/film/') || url.includes('/series/')

init()
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && isUrlContentPage(tab.url)) {
        init();
    }
});
