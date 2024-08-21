import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Test from './src/components/view/Test';
// import FlatCards from './src/components/FlatCards';
// import Bottombar from './src/components/view/Bottombar';
import Profile from './src/components/view/Profile';
import CreateOptions from './src/components/view/CreateOptions';

const App = () => {
  const images = [
    'https://s3-alpha-sig.figma.com/img/0f69/17c8/ecad6f01a4335a14c911a8a4b1785317?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KGKsn9szh5BN6QHjqZe87rDS2s92PvC5Hzj7404aI6mYUXCzmbk~y8FnUZUo2bcGYdyP6XFZRiuIRPm~8l5UDWzPh7mvA2hCokZiQlhuzrUXuEJ2uEou0sbJg9McLxy5eR3YoI5RIWKmWfeQVIT7zv-E9CO8sSZ-Uay9A49jd3oo1YKJezivkk3E-GWr7gSZD-TxCVQWE~xYzGDwZ32Is8L58ljVYWMqVi3fHqD4aaYORFl90mNAvoVF9kosOmJsWZbsxzLOxlyKkefapN2LHzJSdE81ibbOMRAw5psZpiI2ex~xPrzxyqU82b~JhgPXUSu0Z6zmpSkyyrA5Z6iSeA__',
    'https://s3-alpha-sig.figma.com/img/44bd/67b5/ffa5e1a59956ed42b54cfaf357c99479?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MpCuT5PbL~dEbpy2GezZDjjWwmRpsxVZAqfgYnD9cyHD2LQgjJLXIyYdOyzpvVHJkFerfSavv7IDrxR8gBIcKqfy587BRZA48WLn6SAGJ7HpNEfWlqwVo0g~~9pa-QEp6Qf~Wi5yccMbWonbIgI10Ec60YMdHuvWKWB6L0t~Acoxq0U1Xa0EyscnA2H1nWi3Bxnk6JA-I1ZUKOgj9ksTwm440kBTV6RLcEU61GUW2UGxKPOviwz4bVw2ffB0H3tmLZRN0Dv~UyApP1nV7q1Kyf~Jx1N~Bb8DboQ7FlL3kuWJizvcBT5refnYLb0EhDKkXC~~rLFus1VP5drdQ9ETvg__',
    'https://s3-alpha-sig.figma.com/img/699c/f586/4a2e29182956bd30bc97aa8a638bbae9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIPCPQ1tzDMZ52QUjXWO7t9k~6OlEXv7bMZgt7bY0Dk2oWx9hNGdXyueu5yHXy4Wq78GwdKVUOFb6C-rFJAhI2OTtIAUe-sYAOI3y4GlkrnU2daW2M39WtaeAxLVOeuK0UOPDrG3aLYlZJIVDmYdnA-w8Y5~yVN~4y-wupyUnRxdDpxpK1oWNlLOpffdPauZS2ggA7Ty2I8-Om8m0RKqsf0cKlJd6tvlrKvfVR3jnuYctIbaewGgr~LyXeRp2TNx6NLIyyDEPEW8xGx3hZDZ5PBzKe9C68QO6aC-2JWrj0aFXt~LPIu2kNGt1D~ofMtXC3l0CrngZ3pTSs8CasyZGw__',
    'https://s3-alpha-sig.figma.com/img/0f69/17c8/ecad6f01a4335a14c911a8a4b1785317?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KGKsn9szh5BN6QHjqZe87rDS2s92PvC5Hzj7404aI6mYUXCzmbk~y8FnUZUo2bcGYdyP6XFZRiuIRPm~8l5UDWzPh7mvA2hCokZiQlhuzrUXuEJ2uEou0sbJg9McLxy5eR3YoI5RIWKmWfeQVIT7zv-E9CO8sSZ-Uay9A49jd3oo1YKJezivkk3E-GWr7gSZD-TxCVQWE~xYzGDwZ32Is8L58ljVYWMqVi3fHqD4aaYORFl90mNAvoVF9kosOmJsWZbsxzLOxlyKkefapN2LHzJSdE81ibbOMRAw5psZpiI2ex~xPrzxyqU82b~JhgPXUSu0Z6zmpSkyyrA5Z6iSeA__',
    'https://s3-alpha-sig.figma.com/img/44bd/67b5/ffa5e1a59956ed42b54cfaf357c99479?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MpCuT5PbL~dEbpy2GezZDjjWwmRpsxVZAqfgYnD9cyHD2LQgjJLXIyYdOyzpvVHJkFerfSavv7IDrxR8gBIcKqfy587BRZA48WLn6SAGJ7HpNEfWlqwVo0g~~9pa-QEp6Qf~Wi5yccMbWonbIgI10Ec60YMdHuvWKWB6L0t~Acoxq0U1Xa0EyscnA2H1nWi3Bxnk6JA-I1ZUKOgj9ksTwm440kBTV6RLcEU61GUW2UGxKPOviwz4bVw2ffB0H3tmLZRN0Dv~UyApP1nV7q1Kyf~Jx1N~Bb8DboQ7FlL3kuWJizvcBT5refnYLb0EhDKkXC~~rLFus1VP5drdQ9ETvg__',
    'https://s3-alpha-sig.figma.com/img/699c/f586/4a2e29182956bd30bc97aa8a638bbae9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIPCPQ1tzDMZ52QUjXWO7t9k~6OlEXv7bMZgt7bY0Dk2oWx9hNGdXyueu5yHXy4Wq78GwdKVUOFb6C-rFJAhI2OTtIAUe-sYAOI3y4GlkrnU2daW2M39WtaeAxLVOeuK0UOPDrG3aLYlZJIVDmYdnA-w8Y5~yVN~4y-wupyUnRxdDpxpK1oWNlLOpffdPauZS2ggA7Ty2I8-Om8m0RKqsf0cKlJd6tvlrKvfVR3jnuYctIbaewGgr~LyXeRp2TNx6NLIyyDEPEW8xGx3hZDZ5PBzKe9C68QO6aC-2JWrj0aFXt~LPIu2kNGt1D~ofMtXC3l0CrngZ3pTSs8CasyZGw__',

    // Add more image URLs
  ];

  return (
    <SafeAreaView>
      {/* <FlatCards imagesSrc={images} /> */}
      {/* <Bottombar /> */}
      {/* <Text>Hello from Phone</Text> */}
      <View>
        {/* <Profile /> */}
        {/* <CreateOptions /> */}
        <Test />
      </View>
    </SafeAreaView>
  );
};

export default App;
