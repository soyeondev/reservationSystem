class ImageUploader {
    async upload(file){
        const userKey = "userkey";
        const data = new FormData()
        data.append("filebody", file)
        data.append("filename", file.name)
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/file/image/${userKey}`,
            {
              method: "POST",
              body: data,
            }
        );

        const result = await response.json()
        if(result.serviceCode !== "100"){
            throw new Error("Bad response from server");
        }
        return await result;
    }
}
export default ImageUploader;