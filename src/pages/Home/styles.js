import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerMovie = styled.div`
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

export const ButtonTralier = styled.a`
    display: flex;
    align-items: center;
    background-color: #000;
    border: none;
    width: fit-content;
    padding: 10px 20px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    border-radius: 5px;
`;

export const ContainerDataTop = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 60%;
    padding: 0 10%;
    z-index: 1;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 1155px){
        width: 80%;
    }
`;

export const TitleMovie = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-size: 40px;
    mix-blend-mode: normal;
    
    @media screen and (max-width: 1155px){
        font-size: 30px;
    }
`;

export const OverviewMovie = styled.span`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    font-size: 20px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 5; 
    -webkit-box-orient: vertical;

    @media screen and (max-width: 1155px){
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
`;

export const SubContainerMovie = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 10%;
    gap: 20px;
    background-color: #151515;  
    z-index: 1;
`;

export const SubContainer = styled.div`
    background-image: linear-gradient(to right, rgba(21.5, 21.5, 21.5, 1) calc((30vw - 170px) - 340px), rgba(21.5, 21.5, 21.5, 0.84) 30%, rgba(21.5, 21.5, 21.5, 0.84) 100%);
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

export const ContainerMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 20px;
`;

export const Movie = styled.div`
    display: flex;
`;

export const Img = styled.img`
    width: 100%;
`;