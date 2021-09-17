import { PageContainer, Header, CardContainer } from "./styles"
import TeamCard from "../../TeamCard"

const Footer = () => {
    return (
        <PageContainer id="team">
            <Header>
                <h2>Conheça nossa equipe de desenvolvimento</h2>
            </Header>
            <CardContainer>
                <TeamCard 
                        name="Iasmim Oliveira" 
                        ImageSrc="https://ca.slack-edge.com/TQZR39SET-U01PJJPGQ9Y-7407262b3501-192"
                        linkedin="https://www.linkedin.com/in/oliveiasmim/"
                        gitlab="https://gitlab.com/oliviasmim"
                />
                <TeamCard 
                        name="Jonatan Pinheiro" 
                        ImageSrc="https://ca.slack-edge.com/TQZR39SET-U01RWJW4CQJ-67e20736b53e-512"
                        linkedin="https://www.linkedin.com/in/"
                        gitlab="https://gitlab.com/JonatanPSilva"
                />
                <TeamCard 
                        name="André Luiz" 
                        ImageSrc="https://ca.slack-edge.com/TQZR39SET-U01QJF6J3N3-dd526ae8d6bf-512"
                        linkedin="linkedin.com/in/andluizv"
                        gitlab="https://gitlab.com/andluizv"
                />
                <TeamCard 
                        name="João Garbini" 
                        ImageSrc="https://gitlab.com/uploads/-/system/user/avatar/8604037/avatar.png?width=400"
                        linkedin="https://www.linkedin.com/in/"
                        gitlab="https://gitlab.com/joaogarbini"
                />
                <TeamCard 
                        name="Lorena Belo" 
                        ImageSrc="https://ca.slack-edge.com/TQZR39SET-U01P21ASZFB-017a00e076b4-512"
                        linkedin="https://www.linkedin.com/in/lorena-belo-873828a7/"
                        gitlab="https://gitlab.com/lorenabelo"
                />    
            </CardContainer>
            <Header>
                <h5>2021 © BigBoss - bigboss.vercel.app</h5>
                <h5>Inspired layout By Figmaland All Right Reserved </h5>
            </Header>
        </PageContainer>
    )
}

export default Footer;