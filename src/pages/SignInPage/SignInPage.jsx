import React, { useEffect, useState } from 'react';
import backgroundImage from './KH3.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as UserAllService from '../../services/UserAllService';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const mutation = useMutationHooks(
    data => UserAllService.loginUser(data)
  )

  const { data, isPending, isError, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess) {
      console.log('Login successful:', data);
      if (location?.state) {
        navigate(location?.state)
        window.location.reload();
      } else {
        navigate('/')
        window.location.reload();
        toast.success('Đăng nhập thành công')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token));
      localStorage.setItem(
        'refresh_token',
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    } else if (isError) {
      console.error('Login failed');
    }
  }, [isError, isSuccess])

  const handleGetDetailsUser = (id, token) => async (dispatch) => {
    try {
      const storage = localStorage.getItem('refresh_token');
      const refreshToken = JSON.parse(storage);
      const res = await UserAllService.getDetailsInfoUser(id, token)
      dispatch(UserAllService.updateInfoUser({ ...res?.data, access_token: token, refreshToken }))
    } catch (error) {
      console.error('Error getting user details:', error);
    }
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaValue) {
      mutation.mutate({
        email,
        password
      })
      console.log('Form submitted with email:', email);
    } else {
      alert('Vui lòng xác nhận Captcha!');
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div style={containerStyle}>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-lg w-full">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900 text-center">Đăng nhập</h3>
              <p className="mb-4 text-red-700 text-center">Nhập email và mật khẩu để đăng nhập</p>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, width: '100%' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField fullWidth label="Email" variant="standard" onChange={onChangeEmail} placeholder="abc@gmail.com" type='email' />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 4, width: '100%' }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField fullWidth label="Mật khẩu" variant="standard" type='password' onChange={onChangePassword} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <ReCAPTCHA
                  sitekey="6Lc5r_ApAAAAAFkH71LiveGqFIPc98eLm_8rY6Oe"
                  //6LfGtewpAAAAABgM1A7E41JllsnYza_1dExCPagI key local
                  //6Lc5r_ApAAAAAFkH71LiveGqFIPc98eLm_8rY6Oe
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
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </Button>
              </Box>
              <p className="text-sm text-grey-900 text-center">Bạn chưa có tài khoản? <Link to="/sign-up" className="font-bold text-grey-700 hover:text-[#B9D431]">Tạo tài khoản mới</Link></p>
            </div>
            <div className="text-center mt-5">
              <Link to="/" className="text-lg font-semibold text-slate-500 hover:text-[#B9D431]">
                Fresh Garden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
