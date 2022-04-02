import styled from "styled-components";

const MainPageWrapper = styled.div`
  & .infoTitle {
    text-align: center;
    padding-top: 40px;
  }

  & .infoDivs {
    padding-top: 7px;
    padding-bottom: 15px;
    margin-left: 40px;
    width: 550px;
  }

  & .pawImg {
    float: left;
    margin-top: 35px;
    margin-right: 20px;
    height: 130px;
    width: 130px;
  }

  & .houseImg {
    float: left;
    margin-top: 15px;
    margin-right: 20px;
    height: 130px;
    width: 130px;
  }

  & .rainbowImg {
    float: left;
    margin-right: 18px;
    margin-left: -18px;
    height: 200px;
    width: 150px;
  }

  & .grid {
    float: right;
    margin-top: 110px;
    margin-right: 100px;
    text-align: center;
  }

  & .petCat {
    height: 300px;
    width: 250px;
    padding-right: 10px;
    border-radius: 5px;
  }

  & .petDog {
    height: 300px;
    width: 300px;
    padding-left: 10px;
    border-radius: 5px;
  }
`;

export default MainPageWrapper;
