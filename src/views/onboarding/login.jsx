import React from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import AuthModule from '../../modules/Auth.module';
import * as actions from '../../actions';
import dominLogo from '../../assets/image/domin-logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(actions.allowUserLogin());
    navigate('/');
  };

  const redirectPath = location.state?.path || '/';

  if (AuthModule.isUserAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center pt-15">
          <img src={dominLogo} alt="DOMIN-LOGO" className="h-20" />
        </div>
        <div className="pt-4">
          <h1 className="text-center font-bold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            DOMIN
          </h1>
          <div className="pt-2">
            <h4 className="text-center text-[#6b6b6b] sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              ASCEND
            </h4>
          </div>
        </div>
        <div className="pt-[100px]">
          <h6 className="text-center sm:text-sm md:text-base xl:text-xl">
            Connect to all your Domin products
          </h6>
          <div className="pt-2">
            <p className="text-center text-[#6b6b6b] sm:text-sm md:text-xl">
              configure and access data from your
            </p>
            <p className="text-center text-[#6b6b6b] sm:text-sm md:text-xl">
              devices remotely, in a secure manner
            </p>
          </div>
        </div>
        <div className="pt-[100px] flex flex-col ">
          <div className="bg-[#20677c] h-12 justify-center items-center flex mb-4 rounded-md">
            <p className="text-center text-white">Get Started</p>
          </div>
          <div
            className="bg-[#6b6b6b] h-12 justify-center items-center flex rounded-md hover:bg-[#ea6686]"
            onClick={handleLogin}>
            <p className="text-center text-white">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
