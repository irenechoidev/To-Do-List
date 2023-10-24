import { API_ENDPOINT } from "../constants"

const defaultFileName = "TO-BE-REPLACED";

// response type from fetch can be made into blob/file-like object (unlike axios)
export const getFileFromUrl = async (url) => {
    const response = await fetch(`${API_ENDPOINT}/${url}`);
    const data = await response.blob();
    
    return new File([data], defaultFileName, {
        type: data.type
    });
}