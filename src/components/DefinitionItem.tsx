

interface Props {
    term: string;
    children: React.ReactNode | React.ReactNode[];
}   

const DefinitionItem = ({ term, children }: Props) => {

  return (
    <div>
        <dt className="text-xl font-bold text-gray-400">
            {term}
        </dt>
        <dd>
            {children}
        </dd>
    </div>
  )
}
export default DefinitionItem;