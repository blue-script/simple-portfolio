import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="item" data-value="1">1</div>,
  <div className="item" data-value="2">2</div>,
  <div className="item" data-value="3">3</div>,
  <div className="item" data-value="4">4</div>,
  <div className="item" data-value="5">5</div>,
];

export const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
    />
);


// import React from 'react';
// import {FlexWrapper} from "../FlexWrapper";
// import { S } from './Slyder_Styles';
//
// export const Slider: React.FC = () => {
//   return (
//       <S.Slider>
//         <FlexWrapper>
//           <S.Slide>
//             <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
//               et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.Text>
//             <S.Name>@ivan ivanow</S.Name>
//           </S.Slide>
//         </FlexWrapper>
//         <S.Pagination>
//           <span></span>
//           <span className="active"></span>
//           <span></span>
//         </S.Pagination>
//       </S.Slider>
//   );
// };