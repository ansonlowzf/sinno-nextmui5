import { Hero, SubNavbar } from "../../components";
import { qsRoutes } from "../../const/nav-links";
import { SectionWrapper } from "../../element";
import { Grid } from "@material-ui/core";
import Image from "next/image";

const ZenstonePage = () => {
  return (
    <>
      <Hero
        imgSrc="/image-zenstone/hero.png"
        imgText="Zenstone Calacatta Black"
        title="Zenstone Malaysia"
        subtitle="Malaysia's Brand OEM China Genuine Quartz Stone"
      />

      <SubNavbar routes={qsRoutes} />

      <SectionWrapper>
        <Grid container justifyContent="center" sx={{ mt: 15 }}>
          <Grid item xs={10} md={2}>
            <Image
              src="/image-zenstone/logo.png"
              alt="zenstone logo"
              layout="responsive"
              width={800}
              height={600}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
};

export default ZenstonePage;
