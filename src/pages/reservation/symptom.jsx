import React,{ useState } from 'react';
/**
 * custom component
 */
import Question from './components/question';
import Header from '../../components/header/header';

const content = "아래 내용을 적어주세요\n";
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
            <Header title="증상입력"/>
            <Question question={question}/>
            <Warn content={content} />
            <FileInput text="파일첨부" onFileChange={onFileChange} />
            <div className={styles.img__area}>
                {imgInfo.length > 0 ? 
                // 첨부된 파일이 있는 경우
                <>
                    {Object.keys(imgInfos).map((key) => (
                        <Picture
                          key={key}
                          imgInfos={imgInfos[key]}
                          getImgInfos={getImgInfos}
                        />
                      ))}
                </>
                : 
                // 첨부된 파일이 없는 경우
                <>
                    {Object.keys(imgs).map((key) => (
                        <Picture key={key} imgInfos={imgs[key]} />
                    ))}
                </>
                }
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