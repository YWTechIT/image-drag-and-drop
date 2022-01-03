/* eslint-disable consistent-return */
import { isValidSize, isValidType, MAX_UPLOAD_IMAGES } from "../utils/image";

const isValidation = (fileList) => {
  if (!fileList) return;

  const files = [...fileList];
  const isValidImages = files
    .filter((file) => isValidType(file.type))
    .filter((file) => isValidSize(file.size));

  if (isValidImages.length > MAX_UPLOAD_IMAGES) {
    // eslint-disable-next-line no-alert
    alert(`사진은 최대 ${MAX_UPLOAD_IMAGES}장까지 올릴 수 있습니다.`);
    return;
  }
  return isValidImages;
};

export default isValidation;
