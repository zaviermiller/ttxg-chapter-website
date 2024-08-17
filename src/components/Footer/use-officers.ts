import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';
import { ExecMember } from '../../constants';

export default function useOfficers() {
  const data = useStaticQuery(graphql`
    query OfficersQuery {
      allContentfulOfficer {
        nodes {
          title
          name
        }
      }
    }
  `);

  const officers: ExecMember[] = useMemo(() => {
    return data.allContentfulOfficer.nodes.map(
      (officer: { name: string; title: string }) => ({
        position: officer.title,
        name: officer.name,
      })
    );
  }, [data]);

  return officers;
}
