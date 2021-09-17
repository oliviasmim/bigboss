import { PageContainer, ContainerImg, TitleHeader, ImageMobile, ImageDesktop } from "./styles"
import DashboardImage from "../../../assets/dashboard.png"
import DashboardImageMobile from "../../../assets/dashboardphone.png"
const Dashboard = () => {
    return (
        <PageContainer>
            <TitleHeader>
                <h3>Dashboard intuitivo</h3>
                <p>Tenha uma visão geral do seu negócio, tudo de modo prático e fácil, em uma única página. Experimente! </p>
            </TitleHeader>
            <ContainerImg>
                <ImageMobile src={DashboardImageMobile}/>
                <ImageDesktop src={DashboardImage}/>
            </ContainerImg>
        </PageContainer>
    )
}

export default Dashboard;