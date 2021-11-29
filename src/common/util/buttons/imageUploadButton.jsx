import React from 'react';
import styles from "./buttons.module.css";

const ImageUploadButton = ({  
    imageUploader,
    imgBase64Info,
    text,
    onFileChange,
}) => {
  // 파일첨부 버튼 클릭
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

    // 이미지 첨부 시 file input 변경 감지
    const onChange = (event) => {
        let reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = reader.result;
          try {
            // 이미지 업로드 api
            const uploaded = await imageUploader.upload(event.target.files[0]);
            const fileVO = await uploaded.result.fileVO;
            const path = "C:/" + `${fileVO.pre_path}`;
    
            // 부모 컴포넌트(symptom)로 이미지 정보 전달
            onFileChange({
              name: fileVO.originalName,
              url: { path },
              imgBase64: base64,
              filekey: fileVO.filekey,
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]); // 파일을 읽어 버퍼에 저장
        }
      };

    return (
        <>
        <div>
          <input
            ref={inputRef}
            className={styles.input}
            type="file"
            accpet="image/*"
            name="file"
            onChange={onChange}
          />
          <button className={styles.imgUploadButton} onClick={onButtonClick}>
            {text}
          </button>
        </div>
      </>
    );
}

export default ImageUploadButton;