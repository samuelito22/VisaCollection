import { CompanyDataType } from "@/types"
import clsx from "clsx"
import React from "react"

export type CompanyListingCardProps = {
    companyData: CompanyDataType,
    handleCardClick: () => void,
    active: boolean
}

type SocialMediaButtonProps = {
    type: 'LinkedIn',
    link: string
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({type, link}) => {
    const SocalMediaAsset = type === 'LinkedIn' ? '/assets/linkedin.png' : undefined 

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group/social hover:underline" onClick={(event) => event.stopPropagation()}>
                <div className="flex gap-x-2 items-center">
                    <img src={SocalMediaAsset} width={"15px"} height={"15px"} alt="Linkedin" className="object-contain"/>
                    <span className="font-light text-sm">{type}</span>
                    <img src={"/assets/arrow-right.svg"} width={"8px"} height={"8px"} alt="Linkedin" className="object-contain group-hover/social:animate-bounceRight"/>
                </div>
        </a>
    )
}

export const CompanyListingCard: React.FC<CompanyListingCardProps> = ({companyData, handleCardClick, active}) => {
    const onClick = () => {
        handleCardClick()
        window.open(companyData.website_url, '_blank');
    }

    return (
        <div tabIndex={0} onClick={onClick} className={clsx("group/card border-solid cursor-pointer border max-w-[500px] w-full rounded-md p-4 hover:bg-zinc-50 transition-all duration-75", active ? "border-gray-300" : "border-transparent")}>
            <div>
                <span className="group-hover/card:underline text-black text-lg font-bold decoration-2">{companyData.company_name}</span>
                
                <div className="mt-1 text-sm">
                    <p>{companyData.industry}</p>
                    <p>{companyData.city}</p>
                </div>


                <ul className={clsx("text-sm font-semibold", companyData.visa_route && "mt-4")}>
                    {companyData.visa_route && <li>Visa Sponsorship: <span className="font-normal">{companyData.visa_route}</span></li>}
                </ul>
                {companyData.linkedin_url && companyData.linkedin_url !== "NA" && <div className={clsx("flex flex-wrap gap-2" && 'mt-2')}>
                    <SocialMediaButton type="LinkedIn" link={companyData.linkedin_url}/>
                </div>}
            </div>
        </div>
    )
}