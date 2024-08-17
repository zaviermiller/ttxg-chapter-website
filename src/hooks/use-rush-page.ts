import { useStaticQuery, graphql } from 'gatsby';

type RushPageData = {
  title: string;
  description: string;
  groupMeLink: string;
  posterImageUrl: string;
  active: boolean;
};

export default function useRushPage(): RushPageData {
  const data = useStaticQuery(graphql`
    query RushPageQuery {
      contentfulRushPage {
        rushTitle
        rushPoster {
          publicUrl
        }
        rushGroupMe
        rushDescription {
          rushDescription
        }
        active
      }
    }
  `);

  return {
    title: data.contentfulRushPage.rushTitle,
    description: data.contentfulRushPage.rushDescription.rushDescription,
    groupMeLink: data.contentfulRushPage.rushGroupMe,
    posterImageUrl: data.contentfulRushPage.rushPoster.publicUrl,
    active: data.contentfulRushPage.active,
  };
}
