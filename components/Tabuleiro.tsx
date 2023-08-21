import Linha from "./Linha";

export default function Tabuleiro(props: any) {
    return (
        <div >
            <Linha  />
            <Linha preta />
            <Linha  />
            <Linha preta />
            <Linha  />
            <Linha preta />
            <Linha  />
            <Linha preta />
        </div>
    )
}