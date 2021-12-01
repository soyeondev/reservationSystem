import React from 'react';
/**
 * custom component
 */
import Question from './components/question';
import { useState } from 'react';

const question = "관련된 사진을 첨부해 주세요 \n(최대 10개, 개당 100MB)";
const Symptom = ({props, FileInput, GetDepartmentData}) => {
  // 초기값
  const [imgs, setImages] = useState([
    {
      id: Date.now(),
      fileName: "default",
      fileURL: emptyImg,
    },
  ]);
  const [symptom, setSymptom] = useState();

  // imgInfos에 들어갈 업로드된 파일 정보
  const [imgInfo, setImgInfo] = useState({
    id: Date.now(),
    fileName: "",
    fileURL: "",
    base64: "",
  });
  // 파일 첨부 버튼 클릭
  const onFileChange = (file) => {
    setImgInfo({
      id: Date.now(), // uuid
      fileName: file.name,
      fileURL: file.url,
      base64: file.imgBase64,
      filekey: file.filekey,
    });

    setImageInfos([...imgInfos, imgInfo]); // 현재 이미지 이미지 배열에 추가
    // setFiles([...files, file.filekey]);
  };

    return (
        <>
            <h1>Symptom</h1>
            <Question question={question}/>
            <FileInput text="파일첨부" onFileChange={onFileChange} />
            <div className={styles.img__area}>
                {Object.keys(imgs).map((key) => (
                    <Picture key={key} imgInfos={imgs[key]} />
                ))}
            </div>
            <GetDepartmentData 
                text="다음 단계"
                href="/department"
                type="symptom"
                reservationValue={symptom}
            />
        </>
    );
}

export default Symptom;