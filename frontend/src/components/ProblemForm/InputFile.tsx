import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useCallback, useState } from 'react';
import { firebaseStorage } from '../../firebase/firebase.config';
import Popper from '../Popper';

const InputFile = ({ updateImg }: { updateImg: (url: string) => void }) => {
  const [imgUrl, setImgUrl] = useState('');
  const [isUploadLoading, setIsUploadLoading] = useState(false);
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isUploadError, setIsUpladError] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const uploadImg = useCallback(
    (file: File) => {
      const storageRef = ref(firebaseStorage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          /* TODO : snapshot 활용하기 */
          setIsUploadLoading(true);
          setIsInitial(false);
        },
        (error) => {
          alert(error);
          setIsUpladError(true);
          setIsUploadLoading(false);
        },
        () => {
          setIsUploadLoading(false);
          setIsUploadSuccess(true);
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL);
            updateImg(downloadURL);
            console.log(downloadURL);
          });
        }
      );
    },
    [updateImg]
  );

  const handleImgDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const img = e.dataTransfer.files[0];
      uploadImg(img);
    },
    [uploadImg]
  );

  const handleInputFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files) {
        const img = e.currentTarget.files[0];
        uploadImg(img);
      }
    },
    [uploadImg]
  );

  const protectBrowserDefaultFeature = useCallback((e: React.DragEvent<HTMLInputElement | HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div className="">
      {isUploadSuccess && (
        <Popper trigger={<span>미리보기</span>} content={<img className="w-fit" src={imgUrl} alt="미리보기" />} />
      )}
      {isUploadLoading && <div>로딩중</div>}
      {isUploadError && <div>error</div>}
      {isInitial && (
        <label
          className="translate-all h-11 scale-95 cursor-pointer p-3 hover:underline"
          htmlFor="screenshot"
          onDragEnter={protectBrowserDefaultFeature}
          onDragLeave={protectBrowserDefaultFeature}
          onDragOver={protectBrowserDefaultFeature}
          onDrop={handleImgDrop}
        >
          이미지업로드 (이미지를 옮겨올 수 있습니다.)
          {/* TODO : clipBoard copy and paste 기능 추가 */}
          <input className="hidden" type="file" id="screenshot" name="screenshot" onChange={handleInputFileChange} />
        </label>
      )}
    </div>
  );
};

export default InputFile;
