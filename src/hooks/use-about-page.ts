import { useStaticQuery, graphql } from 'gatsby';

export type PillarData = {
  name: string;
  cardDescription: string;
  section1Desc: string;
  section1ImageUrl: string;
  section2Desc: string;
  section2ImageUrl: string;
  section3Desc: string;
  section3ImageUrl: string;
};

type AboutPageData = {
  aboutChiGammaDesc: string;
  aboutChiGammaImageUrl: string;
  aboutThetaTauDesc: string;
  aboutThetaTauImageUrl: string;
  pdSection: PillarData;
  serviceSection: PillarData;
  brotherhoodSection: PillarData;
};

export default function useRushPage(): AboutPageData {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      contentfulAboutPage {
        aboutChiGamma {
          aboutChiGamma
        }
        aboutChiGammaImage {
          url
        }
        aboutThetaTau {
          aboutThetaTau
        }
        aboutThetaTauImage {
          url
        }
        pdSection {
          pillarName
          cardDescription
          sectionDescription1 {
            sectionDescription1
          }
          sectionImage1 {
            url
          }
          sectionDescription2 {
            sectionDescription2
          }
          sectionImage2 {
            url
          }
          sectionDescription3 {
            sectionDescription3
          }
          sectionImage3 {
            url
          }
        }
        serviceSection {
          pillarName
          cardDescription
          sectionDescription1 {
            sectionDescription1
          }
          sectionImage1 {
            url
          }
          sectionDescription2 {
            sectionDescription2
          }
          sectionImage2 {
            url
          }
          sectionDescription3 {
            sectionDescription3
          }
          sectionImage3 {
            url
          }
        }
        brotherhoodSection {
          pillarName
          cardDescription
          sectionDescription1 {
            sectionDescription1
          }
          sectionImage1 {
            url
          }
          sectionDescription2 {
            sectionDescription2
          }
          sectionImage2 {
            url
          }
          sectionDescription3 {
            sectionDescription3
          }
          sectionImage3 {
            url
          }
        }
      }
    }
  `);

  return {
    aboutChiGammaDesc: data.contentfulAboutPage.aboutChiGamma.aboutChiGamma,
    aboutChiGammaImageUrl: data.contentfulAboutPage.aboutChiGammaImage.url,
    aboutThetaTauDesc: data.contentfulAboutPage.aboutThetaTau.aboutThetaTau,
    aboutThetaTauImageUrl: data.contentfulAboutPage.aboutThetaTauImage.url,
    pdSection: {
      name: data.contentfulAboutPage.pdSection.pillarName,
      cardDescription: data.contentfulAboutPage.pdSection.cardDescription,
      section1Desc:
        data.contentfulAboutPage.pdSection.sectionDescription1
          .sectionDescription1,
      section1ImageUrl: data.contentfulAboutPage.pdSection.sectionImage1.url,
      section2Desc:
        data.contentfulAboutPage.pdSection.sectionDescription2
          .sectionDescription2,
      section2ImageUrl: data.contentfulAboutPage.pdSection.sectionImage2.url,
      section3Desc:
        data.contentfulAboutPage.pdSection.sectionDescription3
          .sectionDescription3,
      section3ImageUrl: data.contentfulAboutPage.pdSection.sectionImage3.url,
    },
    serviceSection: {
      name: data.contentfulAboutPage.serviceSection.pillarName,
      cardDescription: data.contentfulAboutPage.serviceSection.cardDescription,
      section1Desc:
        data.contentfulAboutPage.serviceSection.sectionDescription1
          .sectionDescription1,
      section1ImageUrl:
        data.contentfulAboutPage.serviceSection.sectionImage1.url,
      section2Desc:
        data.contentfulAboutPage.serviceSection.sectionDescription2
          .sectionDescription2,
      section2ImageUrl:
        data.contentfulAboutPage.serviceSection.sectionImage2.url,
      section3Desc:
        data.contentfulAboutPage.serviceSection.sectionDescription3
          .sectionDescription3,
      section3ImageUrl:
        data.contentfulAboutPage.serviceSection.sectionImage3.url,
    },
    brotherhoodSection: {
      name: data.contentfulAboutPage.brotherhoodSection.pillarName,
      cardDescription:
        data.contentfulAboutPage.brotherhoodSection.cardDescription,
      section1Desc:
        data.contentfulAboutPage.brotherhoodSection.sectionDescription1
          .sectionDescription1,
      section1ImageUrl:
        data.contentfulAboutPage.brotherhoodSection.sectionImage1.url,
      section2Desc:
        data.contentfulAboutPage.brotherhoodSection.sectionDescription2
          .sectionDescription2,
      section2ImageUrl:
        data.contentfulAboutPage.brotherhoodSection.sectionImage2.url,
      section3Desc:
        data.contentfulAboutPage.brotherhoodSection.sectionDescription3
          .sectionDescription3,
      section3ImageUrl:
        data.contentfulAboutPage.brotherhoodSection.sectionImage3.url,
    },
  };
}
