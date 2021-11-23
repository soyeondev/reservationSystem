/**
 *  yyyy-MM-dd 포맷으로 반환
 */
export const getFormatDate = (date) => {
  var year = date.getFullYear(); //yyyy
  var month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : "0" + month; //month 두자리로 저장
  var day = date.getDate(); //d
  day = day >= 10 ? day : "0" + day; //day 두자리로 저장
  return year + "-" + month + "-" + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
};

/**
 *  전화 및 휴대전화 번호 하이픈 추가
 */
export const phoneRe = (value) => {
  if (value != null) {
    return value.replace(
      /(^02.{0}|^01.{1}|^0[1-9]{2}|0303|0505)([0-9]+)([0-9]{4})/,
      "$1-$2-$3"
    );
  }
  return "";
};

/**
 *  만 나이 계산
 */
export const getAge = (value) => {
  if (value !== null && value !== undefined) {
    const year = value.substring(0, 4);
    const month = value.substring(5, 7);
    const day = value.substring(8, 10);

    const today = new Date(); // 현재날짜
    const birthDate = new Date(year, month, day); // 환자 생년월일

    return today.getFullYear() - birthDate.getFullYear() + 1;
  }

  return "";
};
