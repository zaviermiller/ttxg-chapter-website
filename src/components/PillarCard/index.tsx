import config from "../../../tailwind.config";
import Button from "../Button";

interface PillarCardProps {
  title: string;
  icon: (props: { size: number, color: string, stroke: number }) => JSX.Element;
  description: string;
  onClick?: () => void;
}

export default function PillarCard(props: PillarCardProps) {
  return (<div className="w-full rounded-xl p-6 border flex flex-grow flex-col">
    {props.icon({ size: 55, color: config.theme.extend.colors["dark-red"], stroke: 1.5 })}
    <h4 className="text-2xl font-bold mt-6 mb-2">{props.title}</h4>

    <div className="flex flex-col flex-grow justify-between">
      <p className="text-gray-800 text-lg">{props.description}</p>
      <div className="flex flex-row mt-8 ">
        <Button variant="outlined" color="dark-red" textColor="dark-red" onClick={props.onClick}>
          Learn more
        </Button>
      </div>
    </div>
  </div>)
}