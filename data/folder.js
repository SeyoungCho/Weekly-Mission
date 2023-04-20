async function getFolderData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
    const result = await response.json();
    console.log(result);
    return result;
  } catch {
    console.log("잘못된 url이거나 json 데이터가 아닙니다.");
    const result = null;
    return result;
  }
}

export default getFolderData;
