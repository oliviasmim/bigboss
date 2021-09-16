import { PageContainer, ContainerImg, TitleHeader, ImageMobile, ImageDesktop } from "./styles"
import DashboardImage from "../../../assets/filtros.svg"

const Dashboard = () => {
    return (
        <PageContainer>
            <TitleHeader>
                <h3>Filtros que facilitam</h3>
                <p>Aplique filtros e encontre de forma rápida e precisa aquilo que você precisa,tenha em mãos relatórios gerados de forma autormatica</p>
            </TitleHeader>
            <ContainerImg>
                <ImageDesktop src={DashboardImage}/>
            </ContainerImg>
        </PageContainer>
    )
}

export default Dashboard;