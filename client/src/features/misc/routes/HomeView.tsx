import { useEffect, useState } from "react"
import { CompanyDataType, CompanyListingCard } from "../components"


export function HomeView() {
  const [companyListData, setCompanyListData] = useState<CompanyDataType[] | null>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  useEffect(() => {
    setCompanyListData([
      {
        company_name: 'Innovatech Solutions',
        industry: 'Information Technology',
        city: 'San Francisco, CA',
        visa_route: 'H-1B Specialty Occupations',
        website_url: 'https://innovatechsolutions.tech',
        linkedin_url: 'https://www.linkedin.com/company/innovatechsolutions'
      },
      {
        company_name: 'EcoSave',
        industry: 'Environmental Services',
        city: 'Austin, TX',
        visa_route: 'J-1 Exchange Visitor',
        website_url: 'https://ecosave.org',
        linkedin_url: 'https://www.linkedin.com/company/ecosave'
      },
      {
        company_name: 'FinTech Global',
        industry: 'Financial Services',
        city: 'New York, NY',
        visa_route: 'O-1 Individuals with Extraordinary Ability or Achievement',
        website_url: 'https://fintechglobal.finance',
        linkedin_url: 'https://www.linkedin.com/company/fintechglobal'
      },
      {
        company_name: 'BioHeal',
        industry: 'Biotechnology',
        city: 'Cambridge, MA',
        visa_route: 'TN NAFTA Professionals',
        website_url: 'https://bioheal.com',
        linkedin_url: 'https://www.linkedin.com/company/bioheal'
      },
      {
        company_name: 'AeroDynamics',
        industry: 'Aerospace',
        city: 'Seattle, WA',
        visa_route: 'L-1 Intra-company Transferees',
        website_url: 'https://aerodynamics.aero',
        linkedin_url: 'https://www.linkedin.com/company/aerodynamics'
      },
      {
        company_name: 'Innovatech Solutions',
        industry: 'Information Technology',
        city: 'San Francisco, CA',
        visa_route: 'H-1B Specialty Occupations',
        website_url: 'https://innovatechsolutions.tech',
        linkedin_url: 'https://www.linkedin.com/company/innovatechsolutions'
      },
      {
        company_name: 'EcoSave',
        industry: 'Environmental Services',
        city: 'Austin, TX',
        visa_route: 'J-1 Exchange Visitor',
        website_url: 'https://ecosave.org',
        linkedin_url: 'https://www.linkedin.com/company/ecosave'
      },
      {
        company_name: 'FinTech Global',
        industry: 'Financial Services',
        city: 'New York, NY',
        visa_route: 'O-1 Individuals with Extraordinary Ability or Achievement',
        website_url: 'https://fintechglobal.finance',
        linkedin_url: 'https://www.linkedin.com/company/fintechglobal'
      },
      {
        company_name: 'BioHeal',
        industry: 'Biotechnology',
        city: 'Cambridge, MA',
        visa_route: 'TN NAFTA Professionals',
        website_url: 'https://bioheal.com',
        linkedin_url: 'https://www.linkedin.com/company/bioheal'
      },
      {
        company_name: 'AeroDynamics',
        industry: 'Aerospace',
        city: 'Seattle, WA',
        visa_route: 'L-1 Intra-company Transferees',
        website_url: 'https://aerodynamics.aero',
        linkedin_url: 'https://www.linkedin.com/company/aerodynamics'
      },
      {
        company_name: 'Innovatech Solutions',
        industry: 'Information Technology',
        city: 'San Francisco, CA',
        visa_route: 'H-1B Specialty Occupations',
        website_url: 'https://innovatechsolutions.tech',
        linkedin_url: 'https://www.linkedin.com/company/innovatechsolutions'
      },
      {
        company_name: 'EcoSave',
        industry: 'Environmental Services',
        city: 'Austin, TX',
        visa_route: 'J-1 Exchange Visitor',
        website_url: 'https://ecosave.org',
        linkedin_url: 'https://www.linkedin.com/company/ecosave'
      },
      {
        company_name: 'FinTech Global',
        industry: 'Financial Services',
        city: 'New York, NY',
        visa_route: 'O-1 Individuals with Extraordinary Ability or Achievement',
        website_url: 'https://fintechglobal.finance',
        linkedin_url: 'https://www.linkedin.com/company/fintechglobal'
      },
      {
        company_name: 'BioHeal',
        industry: 'Biotechnology',
        city: 'Cambridge, MA',
        visa_route: 'TN NAFTA Professionals',
        website_url: 'https://bioheal.com',
        linkedin_url: 'https://www.linkedin.com/company/bioheal'
      },
      {
        company_name: 'AeroDynamics',
        industry: 'Aerospace',
        city: 'Seattle, WA',
        visa_route: 'L-1 Intra-company Transferees',
        website_url: 'https://aerodynamics.aero',
        linkedin_url: 'https://www.linkedin.com/company/aerodynamics'
      }
    ]);
  }, [])

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index)
  };

  
  return (
    <div className="">
      <div>
        <div className="flex flex-col gap-y-[1px]">
          {companyListData?.map((field, idx) => {
          return (
            <CompanyListingCard companyData={field} key={idx} handleCardClick={() => handleCardClick(idx)} active={activeCardIndex === idx}/>
          )
        })}
        </div>
      </div>
    </div>
  )
}

