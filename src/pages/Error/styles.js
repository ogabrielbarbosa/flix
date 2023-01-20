import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerFavorites = styled.div`
    display: flex;
    flex-direction: column;
    background-position: -260px -60px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 1530px;

    @media screen and (max-width: 1155px){
        background-position: -600px -60px;
    }

    @media screen and (max-width: 656px){
        background-position: -808px -60px;
    }

    @media screen and (max-width: 450px){
        background-position: -1124px -60px;
    }
`;

export const SubContainerFavorites = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 10%;
    gap: 20px;
    background-color: #151515;  
    z-index: 1;

    a{
        display: flex;
        background-color: #FF0000;
        border: none;
        width: fit-content;
        padding: 10px 20px;
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
    }
`;

export const SubContainer = styled.div`
    background-image: linear-gradient(to right, rgba(21.5, 21.5, 21.5, 1) calc((50vw - 170px) - 340px), rgba(21.5, 21.5, 21.5, 0.84) 30%, rgba(21.5, 21.5, 21.5, 0.84) 100%);
`;

export const Title = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-size: 260px;

    @media screen and (max-width: 753px){
        font-size: 30vw;
    }
`;

export const SubTitle = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 753px){
        font-size: 5.3vw;
    }
`;

export const ContainerMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap: 20px;
`;

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const SubContainerMovies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export const ButtonDeleted = styled.a`
    display: flex;
    background-color: #FF0000;
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