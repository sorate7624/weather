import styled from "styled-components";

type HeightProps = {
  height: string,
}

type DisplayProps = {
  display: string,
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: #75B4E3;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Container = styled.div<HeightProps>`
  position: relative;
  width: 400px;
  height: ${(props)=> props.height || "105px"};
  padding: 28px 32px;
  overflow: hidden;
  border-radius: 18px;
  font-family: 'Roboto', sans-serif;
  transition: 0.6s ease-out;
  background: #75B4E3;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    max-width: calc(100% - 80px);
    max-height: 450px;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    position: absolute;
    color: #fff;
    font-size: 28px;
  }
`;

export const SearchInput = styled.input`
  color: #fff;
  width: calc(100% - 80px);
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 32px;
  background-color: #75B4E3;
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }

  &::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: #75B4E3;
  border-radius: 50%;
  font-size: 22px;
  transition: 0.4s ease;
  background: #fff;

  &:hover {
    background: #dff6ff;
  }

  & svg {
    position: relative;
    color: #75B4E3;
  }
`;

export const NotFound = styled.div<DisplayProps>`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  display: ${(props)=> props.display || "none"};

  & img {
    width: 70%;
  }

  & p {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    margin-top: 50px;
    @media screen and (max-width: 500px) {
      margin-top: 10px;
    }
  }
`;

export const WeatherBox = styled.div<DisplayProps>`
  text-align: center;
  display: ${(props)=> props.display || "block"};

  & img {
    width: 60%;
    margin-top: 30px;
  }
`;

export const WeatherBoxTemperature = styled.p`
  position: relative;
  color: #fff;
  font-size: 4rem;
  font-weight: 800;
  margin-top: 10px;
  margin-left: -16px;

  & span {
    position: absolute;
    margin-left: 4px;
    font-size: 1.5rem;
  }
`;

export const WeatherBoxDescription = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const WeatherDetails = styled.div<DisplayProps>`
  width: 100%;
  display: ${(props)=> props.display || "flex"};
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const WeatherDetailsHumidity = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100px;
  padding-left: 20px;
  justify-content: flex-start;

  & svg {
    color: #fff;
    font-size: 26px;
    margin-right: 20px;
  }

  & span {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
  }

  & p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const WeatherDetailsWind = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100px;
  padding-right: 20px;
  justify-content: flex-end;

  & svg {
    color: #fff;
    font-size: 26px;
    margin-right: 20px;
  }

  & span {
    color: #fff;
    font-size: 22px;
    font-weight: 500;
  }

  & p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;
