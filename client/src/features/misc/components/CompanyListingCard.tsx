import clsx from "clsx"
import React from "react"

export type CompanyDataType = {
    company_name: string,
    city?: string,
    visa_route?: string,
    company_status?: string,
    industry?: string,
    website_url?: string,
    linkedin_url?: string

}

export type CompanyListingCardProps = {
    companyData: CompanyDataType,
    handleCardClick: () => void,
    active: boolean
}

type SocialMediaButtonProps = {
    type: 'linkedin',
    link: string
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({type, link}) => {
    const SocalMediaAsset = type === 'linkedin' ? '/assets/linkedin.png' : undefined 
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group hover:underline">
                <div className="flex gap-x-2 items-center">
                    <img src={SocalMediaAsset} width={"15px"} height={"15px"} alt="Linkedin" className="object-contain"/>
                    <span className="font-light text-sm">LinkedIn</span>
                    <img src={"/assets/arrow-right.svg"} width={"8px"} height={"8px"} alt="Linkedin" className="object-contain group-hover:animate-bounceRight"/>
                </div>
        </a>
    )
}

export const CompanyListingCard: React.FC<CompanyListingCardProps> = ({companyData, handleCardClick, active}) => {
    return (
        <div tabIndex={0} onClick={handleCardClick} className={clsx("border-solid border max-w-[500px] w-full rounded-md p-4 hover:bg-zinc-100 transition-all duration-75", active ? "border-gray-300" : "border-transparent")}>
            <div>
                <a href={companyData.website_url} target="_blank" rel="noopener noreferrer" className="hover:underline text-black text-xl font-bold decoration-2">{companyData.company_name}</a>
                
                <div className="mt-1 text-sm">
                    <p>{companyData.industry}</p>
                    <p>{companyData.city}</p>
                </div>


                <ul className="text-sm font-semibold mt-4">
                    <li>Visa Sponsorship: <span className="font-normal">{companyData.visa_route}</span></li>
                </ul>
                <div className={clsx("flex flex-wrap gap-2", companyData.linkedin_url && 'mt-2')}>
                    {companyData.linkedin_url && <SocialMediaButton type="linkedin" link={companyData.linkedin_url}/>}
                </div>
            </div>
        </div>
    )
}