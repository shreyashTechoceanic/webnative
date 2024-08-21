import {View, ViewStyle} from 'react-native';
import React from 'react';

// interface IconTypes {
//   source: any;
//   height: number | null;
//   width: number;
// }

// const Icon = ({source, height, width}: IconTypes) => {
//   return (
//     <View>
//       <Image
//         source={source}
//         height={height === null ? 20 : height}
//         width={width}
//       />
//     </View>
//   );
// };

interface IconTypes {
  image: React.ReactNode;
  viewStyle?: ViewStyle;
}

const Icon = ({image, viewStyle}: IconTypes) => {
  return <View style={viewStyle}>{image}</View>;
};

export default Icon;
