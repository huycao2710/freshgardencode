import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from "../SignUpPage/Banner/Banner1.jpg";
import img2 from "../SignUpPage/Banner/Banner2.jpg";
import img3 from "../SignUpPage/Banner/Banner3.jpg";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";
import { AccountCircle, LocationCity, Lock, PermIdentity, Phone, Place } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import ReCAPTCHA from 'react-google-recaptcha';
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserAllService from '../../services/UserAllService';
import * as message from '../../components/global/MessageComponent/Message';

const SignUpPage = () => {
  const slides = [img1, img2, img3];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const mutation = useMutationHooks(
    data => UserAllService.registerUser(data)
  );

  const { data, isPending, isError, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success('Tạo tài khoản thành công.');
      navigateSignIn();
    } else if (isError) {
      message.error('Đã xảy ra lỗi, vui lòng thử lại.');
    }
  }, [isError, isSuccess]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      alert('Email không hợp lệ!');
      return;
    }
    if (recaptchaValue) {
      mutation.mutate({ email, password, fullName, phone, address, city });
    } else {
      alert('Vui lòng xác nhận Captcha!');
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const onChangeFullName = (value) => {
    setFullName(value);
  };

  const onChangePhone = (value) => {
    setPhone(value);
  };

  const onChangeAddress = (value) => {
    setAddress(value);
  };

  const onChangeCity = (value) => {
    setCity(value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const navigateSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="relative">
          <div className="max-w">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 bg-gray-200 text-black">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Đăng ký</h2>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, width: '100%' }}>
            <PermIdentity sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Họ tên" variant="standard" placeholder="Nguyễn Văn A" type="text" onChange={e => onChangeFullName(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, width: '100%' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Email" variant="standard" placeholder="abc@gmail.com" type="email" onChange={e => onChangeEmail(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 4, width: '100%' }}>
            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Mật khẩu" variant="standard" type='password' onChange={e => onChangePassword(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, width: '100%' }}>
            <Phone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Số điện thoại" variant="standard" placeholder="+(84)862969049" type="number" onChange={e => onChangePhone(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, width: '100%' }}>
            <Place sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Địa chỉ" variant="standard" placeholder="Giải Phóng, Thanh Xuân" type="text" onChange={e => onChangeAddress(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, width: '100%' }}>
            <LocationCity sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Thành phố" variant="standard" placeholder="Hà Nội" type="text" onChange={e => onChangeCity(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <ReCAPTCHA
              sitekey="6LfGtewpAAAAABgM1A7E41JllsnYza_1dExCPagI"
              onChange={handleRecaptchaChange}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#B9D431',
                '&:hover': {
                  bgcolor: '#A4BE28'
                }
              }}
              onClick={handleRegister}
            >
              Đăng ký tài khoản mới
            </Button>
          </Box>
          <div className="text-center">
            <p className="text-sm">
              Bạn đã có sẵn tài khoản?{" "}
              <Link
                to="/sign-in"
                className="font-medium text-logo-green hover:text-lime-500"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
