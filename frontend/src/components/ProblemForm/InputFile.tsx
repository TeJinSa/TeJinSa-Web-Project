import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { problemAPI } from '../../api/problem';
import { firebaseStorage } from '../../firebase/firebase.config';
import Popper from '../Popper';

const InputFile = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState('');
  const { mutate: problemsMutate } = useMutation(problemAPI.postProblems);
  const [isUploadLoading, setIsUploadLoading] = useState(false);
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isUploadError, setIsUpladError] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const uploadImg = useCallback((file: File) => {
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
          console.log(downloadURL);
        });
      }
    );
  }, []);

  const handleLabelDrop = useCallback(
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

  const handleDragandDrop = useCallback((e: React.DragEvent<HTMLInputElement | HTMLLabelElement>) => {
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
          className="translate-all h-11 scale-95 cursor-pointer rounded-xl border-[1px] p-3 shadow-sm hover:underline"
          htmlFor="screenshot"
          onDragEnter={handleDragandDrop}
          onDragLeave={handleDragandDrop}
          onDragOver={handleDragandDrop}
          onDrop={handleLabelDrop}
        >
          이미지업로드
          {/* TODO : drag-drop 기능 추가 */}
          <input className="hidden" type="file" id="screenshot" name="screenshot" onChange={handleInputFileChange} />
        </label>
      )}
    </div>
  );
};

export default InputFile;
