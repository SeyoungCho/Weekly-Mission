import ProcessFolderData from "/scripts/ProcessFolderData.js";

const cardContainer = document.querySelector(".card-container");
// 1. data fetch
async function getData() {
  const processorData = await new ProcessFolderData();
  return await processorData.data;
}
// 2. header 내용 넣어주기
async function applyHeaderData() {
  const folderData = await getData();

  const avatarTag = document.querySelector(".avatar-tag");
  const avatar = document.querySelector(".avatar"); //이미지
  const headerTitle = document.querySelector(".header-title");

  console.log(folderData.owner.profileImageSource);

  avatarTag.textContent = folderData.owner.name;
  avatar.setAttribute("src", folderData.owner.profileImageSource);
  headerTitle.textContent = folderData.name;
}
applyHeaderData();

// 3. card 갯수만큼 card 반복 생성
async function createCard() {
  const folderData = await getData();
  for (let i = 0; i < folderData.count; i++) {
    const card = document.createElement("custom-card");
    cardContainer.appendChild(card);
  }
}
createCard();
