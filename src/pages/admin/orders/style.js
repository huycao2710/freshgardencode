import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    background-color: #4B494E;
    border-radius: 6px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); 
    margin-bottom: 20px;
    color: #B9D431;
    transition: box-shadow 0.3s ease; 
    &:hover {
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5); 
    }
    cursor: pointer;
`;

export const WrapperUploadFile = styled(Upload)`
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    & .ant-upload-list-item-container {
        display: none;
    }
`
export const WrapperProduct = styled.div`
  font-weight: bold;
  display:flex;
  align-items:flex-start;
  margin-top: 10px;
`

export const WrapperNameProduct = styled.div`
  display:flex;
  align-items: flex-start;
  width: 670px;
`

export const WrapperItem = styled.div`
  width: 200px;
  font-weight: bold;
  &:first-child {
    color: red
  }
`