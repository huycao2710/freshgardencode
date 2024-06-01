import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutationHooks } from '../../../hooks/useMutationHook';
import * as UserAllService from '../../../services/UserAllService';
import * as message from '../../../components/global/MessageComponent/Message';
import { getBase64 } from '../../../util';
import Loading from '../../../components/global/LoadingComponent/LoadingComponent';
import { UploadOutlined } from '@ant-design/icons';
import { Input, Upload, Typography, Divider, Row, Col } from 'antd';
import ButtonComp from '../../../components/global/ButtonComponent/ButtonComp';

const { Title } = Typography;

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [city, setCity] = useState("");

  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    return UserAllService.updateInfoUser(id, rests, access_token);
  });
  const dispatch = useDispatch();
  const { data, isPending, isError, isSuccess } = mutation;

  useEffect(() => {
    setEmail(user?.email || '');
    setFullName(user?.fullName || '');
    setPhone(user?.phone || '');
    setAddress(user?.address || '');
    setCity(user?.city || '');
    setAvatar(user?.avatar || '');
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error();
    }
  }, [isError, isSuccess]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserAllService.getDetailsInfoUser(id, token);
    dispatch(UserAllService.updateInfoUser({ ...res?.data, access_token: token }));
  };

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeName = (e) => setFullName(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangeAddress = (e) => setAddress(e.target.value);
  const onChangeCity = (e) => setCity(e.target.value);

  const onChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      fullName,
      phone,
      address,
      avatar,
      city,
      access_token: user?.access_token,
    });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Thông tin người dùng</Title>
      <Loading isPending={isPending}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label htmlFor="name">Họ tên</label>
              <Input
                style={{ width: "100%" }}
                id="name"
                value={fullName}
                onChange={onChangeName}
              />
            </Col>
            <Col span={12}>
              <ButtonComp
                onClick={handleUpdate}
                size="large"
                styleButton={{
                  width: "100%",
                  borderRadius: "4px",
                  padding: "10px",
                  background: "#1890ff",
                }}
                textbutton={"Cập nhật"}
                styleTextButton={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label htmlFor="email">Email</label>
              <Input
                style={{ width: "100%" }}
                id="email"
                value={email}
                onChange={onChangeEmail}
              />
            </Col>
            <Col span={12}>
              <ButtonComp
                onClick={handleUpdate}
                size="large"
                styleButton={{
                  width: "100%",
                  borderRadius: "4px",
                  padding: "10px",
                  background: "#1890ff",
                }}
                textbutton={"Cập nhật"}
                styleTextButton={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label htmlFor="phone">Phone</label>
              <Input
                style={{ width: "100%" }}
                id="phone"
                value={phone}
                onChange={onChangePhone}
              />
            </Col>
            <Col span={12}>
              <ButtonComp
                onClick={handleUpdate}
                size="large"
                styleButton={{
                  width: "100%",
                  borderRadius: "4px",
                  padding: "10px",
                  background: "#1890ff",
                }}
                textbutton={"Cập nhật"}
                styleTextButton={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label htmlFor="address">Address</label>
              <Input
                style={{ width: "100%" }}
                id="address"
                value={address}
                onChange={onChangeAddress}
              />
            </Col>
            <Col span={12}>
              <ButtonComp
                onClick={handleUpdate}
                size="large"
                styleButton={{
                  width: "100%",
                  borderRadius: "4px",
                  padding: "10px",
                  background: "#1890ff",
                }}
                textbutton={"Cập nhật"}
                styleTextButton={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label htmlFor="city">Thành phố</label>
              <Input
                style={{ width: "100%" }}
                id="city"
                value={city}
                onChange={onChangeCity}
              />
            </Col>
            <Col span={12}>
              <ButtonComp
                onClick={handleUpdate}
                size="large"
                styleButton={{
                  width: "100%",
                  borderRadius: "4px",
                  padding: "10px",
                  background: "#1890ff",
                }}
                textbutton={"Cập nhật"}
                styleTextButton={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <label htmlFor="avatar">Avatar</label>
              <Upload onChange={onChangeAvatar} maxCount={1}>
                <ButtonComp
                  icon={<UploadOutlined />}
                  textbutton={"Select File"}
                  styleButton={{
                    width: "100%",
                    borderRadius: "4px",
                    padding: "10px",
                    background: "#1890ff",
                  }}
                  styleTextButton={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                />
              </Upload>
            </Col>
            <Col span={12}>
              {avatar && (
                <img
                  src={avatar}
                  style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: "50%",
                    objectFit: 'cover',
                  }}
                  alt="avatar"
                />
              )}
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <ButtonComp
                onClick={handleUpdate}
                size="large"
                styleButton={{
                  width: "100%",
                  borderRadius: "4px",
                  padding: "10px",
                  background: "#1890ff",
                }}
                textbutton={"Cập nhật tất cả"}
                styleTextButton={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              />
            </Col>
          </Row>
        </div>
      </Loading>
    </div>
  );
}

export default Profile;
