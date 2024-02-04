// TODO: move to contentful

export interface ExecMember {
  name: string;
  position: "Regent" | "Vice Regent" | "Treasurer" | "Corresponding Secretary"
  email?: string;
}

export const execMembers: ExecMember[] = [
  {
    name: "Ethan Francis",
    position: "Regent"
  },
  {
    name: "Isabella Johnson",
    position: "Vice Regent"
  },
  {
    name: "Sydney Mills",
    position: "Treasurer"
  },
  {
    name: "Drew Friend",
    position: "Corresponding Secretary"
  }
]
