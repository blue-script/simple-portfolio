import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.png"
import timerImg from "../../../assets/images/proj-2.png"
import { Container } from '../../../components/Container';
import { S } from './Works_Styles';


// const tabsItems = ["All", "landing page", "React", "spa"]

const tabsItems: Array<{ title: string, status: TabsStatusType}> = [
  {
    title: "All",
    status: "all"
  },
  {
    title: "landing page",
    status: "landing"
  },
  {
    title: "React",
    status: "react"
  },
  {
    title: "spa",
    status: "spa"
  }
]

const worksData = [
  {
    src: socialImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
  },
  {
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",

  },

]

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
  let filteredWorks = worksData
 if (currentFilterStatus === "landing") {
      filteredWorks = worksData.filter(work => work.type === "landing")
  }
 if (currentFilterStatus === "react") {
      filteredWorks = worksData.filter(work => work.type === "react")
  }
 if (currentFilterStatus === "spa") {
      filteredWorks = worksData.filter(work => work.type === "spa")
  }

 function changeFilterStatus(value: TabsStatusType) {
   setCurrentFilterStatus(value)
 }

  return (
      <S.Works id={"works"}>
        <Container>
          <SectionTitle>My Works</SectionTitle>
          <TabMenu tabsItems={tabsItems}
                   changeFilterStatus={changeFilterStatus}
                   currentFilterStatus={currentFilterStatus}/>
          <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
            {filteredWorks.map((w, index) => {
              return <Work src={w.src} key={index} title={w.title} text={w.text}/>
            })}
          </FlexWrapper>
        </Container>
      </S.Works>
  );
};
