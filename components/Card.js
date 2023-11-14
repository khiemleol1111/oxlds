import Image from "next/image"

function Card({cardIcon="", cardTitle="", cardDescription=""}) {
    return(
        <div className="card border-[1px] border-neutral-800 rounded-lg p-6">
            <div className="flex flex-col gap-6">
                <div className="icon h-[60px] w-[60px] border-[1px] border-neutral-800 rounded-lg flex items-center justify-center">
                    <Image src={cardIcon} width={32} height={32}></Image>
                </div>
                <div className="card-content">
                    <h5 className="text-text1">{cardTitle}</h5>
                    <p className="text-text2">{cardDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Card