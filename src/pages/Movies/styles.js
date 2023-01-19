import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageBackground = styled.img`
    position: absolute;
    width: 100%;
`;

export const SubContainerMovie = styled.div`
    display: flex;
    padding: 50px 10%;
    gap: 20px;
    flex-direction: row;

    @media screen and (max-width: 930px){  
        align-items: center;
        flex-direction: column;
    }
`;

export const ButtonTralier = styled.a`
    display: flex;
    align-items: center;
    border: none;
    width: fit-content;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    border-radius: 5px;
`;

export const ButtonSave = styled.a`
    display: flex;
    background-color: #000;
    border: none;
    width: fit-content;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    border-radius: 100px;

    &:hover{
        cursor: pointer;
    }
`;

export const SubContainer = styled.div`
    background-image: linear-gradient(to right, rgba(21.5, 21.5, 21.5, 1) calc((50vw - 170px) - 340px), rgba(21.5, 21.5, 21.5, 0.84) 30%, rgba(21.5, 21.5, 21.5, 0.84) 100%);
`;

export const ContainerMovie = styled.div`
    display: flex;
    flex-direction: column;
    background-position: left calc((50vw - 170px) - 340px) top;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Title = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-size: 40px;

    @media screen and (max-width: 753px){
        font-size: 5.3vw;
    }
`;

export const SubTitle = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    font-size: 20px;

    @media screen and (max-width: 753px){
        font-size: 5.3vw;
    }
`;

export const Img = styled.img`
    width: 370px;
`;

export const SubContainerDatas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const CollumDatas = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowDatas = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 1226px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const SubText = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 300;
    color: #fff;
    font-size: 15px;
`;

export const Tagline = styled.span`
    font-family: Poppins, sans-serif;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
`;