import { IconCertificate, IconFriends, IconHeartHandshake } from "@tabler/icons-react";

interface Pillar {
  title: string;
  icon: (props: { size: number, color: string, stroke: number }) => JSX.Element;
  shortDesc: string;
  id: string;
}

const pillars: Pillar[] = [
  {
    id: "professional",
    title: "Professionalism",
    icon: (props) => <IconCertificate {...props} />,
    shortDesc: "Our members practice professionalism in order to prepare themselves for the future. Brothers participate in mock interviews, resume critiques, organization workshops, and other career development sessions.",
  },
  {
    id: "service",
    title: "Service",
    icon: (props) => <IconHeartHandshake {...props} />,
    shortDesc: "As Tennessee Volunteers, service is very important to Chi Gamma. Brothers complete ten service hours each semester in the Knoxville area, including working at animal shelters and trash clean ups."
  },
  {
    id: "brotherhood",
    title: "Brotherhood",
    icon: (props) => <IconFriends {...props} />,
    shortDesc: "Chi Gamma is a family of students and alumni who continue to grow their friendships every day. Brotherhood events include camping, bowling, tailgating, and much more!"
  },
]

export default pillars;