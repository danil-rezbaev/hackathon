import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

export type UploadImageProps = {
  fileList: UploadFile[],
  fileListHandler: (arg: any) => void
}

const UploadImage: React.FC<UploadImageProps> = (props) => {
  const {
    fileList = [],
    fileListHandler
  } = props

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </div>
  );

  return (
    <Upload
      // customRequest={uploadPicture}
      // onPreview={handlePreview}
      onChange={fileListHandler}
      listType="picture-card"
      maxCount={10}
      multiple={true}
      fileList={fileList}
      beforeUpload={(file: any) => {
        fileListHandler([...fileList, file]);
        return false;
      }}
      onRemove={(file: any) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        fileListHandler(newFileList);
      }}
    >
      {fileList.length >= 8 ? null : uploadButton}
    </Upload>
  );
};

export default UploadImage;
