import React from "react";
import photo from "../../../assets/images/my-photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Aleks Demianov</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer</p>
              <Typewriter
                  options={{
                    strings: ['A Web Developer', 'A Frontend Developer', 'A Web Designer'],
                    autoStart: true,
                    loop: true,
                  }}
              />
            </S.MainTitle>
          </div>

          <S.PhotoWrapper>
            <Tilt
                className="parallax-effect-img"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}
            >
              <S.Photo src={photo} alt="" />
            </Tilt>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};


