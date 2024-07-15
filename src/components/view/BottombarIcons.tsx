import {TouchableOpacity} from 'react-native';
import React from 'react';
import Home from '../../icons/Home.svg';
import Flash from '../../icons/Flash.svg';
import Create from '../../icons/Create.svg';
import Clips from '../../icons/Clips.svg';
import Profile from '../../icons/Profile.svg';
import Button from './Button';
import BottombarIconsText from './BottombarIconsText';
// import {homeHandleClick} from './logic/Logic';

interface BottombarIconsTypes {
  random: () => void;
  homeHandleClick: (view: string) => void;
}

const BottombarIcons = ({random, homeHandleClick}: BottombarIconsTypes) => {
  // const homeClick = (view: string) => {
  //   console.log('homeHandleClick');
  //   return <Link to={/view}></Link>
  // };

  return (
    <>
      <TouchableOpacity
        onPress={() => homeHandleClick('Home')}
        /*   onPress={() => homeClick('Home')} */
      >
        <BottombarIconsText
          image={<Home width={16} height={16} />}
          text={'Home'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => homeHandleClick('Flash')}
        /*onPress={random}*/
      >
        <BottombarIconsText
          image={<Flash width={15.47} height={17.64} />}
          text={'Flash'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => homeHandleClick('Create')}>
        <BottombarIconsText
          image={<Create width={16} height={16} />}
          text="Create"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => homeHandleClick('Clips')}>
        <BottombarIconsText
          image={<Clips width={17.2} height={18.2} />}
          text={'Clips'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => homeHandleClick('profile')}>
        <BottombarIconsText
          image={<Profile width={24} height={24} />}
          text={'profile'}
        />
      </TouchableOpacity>

      {/* <Button handlePress={homeHandleClick} /> */}
    </>
  );
};

export default BottombarIcons;
