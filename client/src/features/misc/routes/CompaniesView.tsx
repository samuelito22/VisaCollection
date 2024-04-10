import { useEffect, useState } from "react"
import { CompanyListingCard } from "../components"
import { useGetCompanies } from "../api"
import { CompanyDataType } from "@/types"
import clsx from "clsx"
import { Search } from "../components"


export function CompaniesView() {
  const [companyListData, setCompanyListData] = useState<CompanyDataType[]>([])
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [page, setPage] = useState(1)
  const { isLoading, data, error, totalPages } = useGetCompanies({page, limit: 40})

  useEffect(() => {
    setCompanyListData(data)
  }, [data])

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index)
  };

  const handlePageForwardChange = () => {
    setPage(prevState => prevState + 1);
    window.scrollTo(0, 0);
  }

  const handlePageBackwardChange = () => {
    setPage(prevState => prevState - 1);
    window.scrollTo(0, 0);
  }

  

  
  return (
    <>
        <section>
          <div className="py-6 px-3 flex justify-center">
            <Search/>
          </div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]  gap-[1px] px-1 place-items-center">
            {companyListData?.map((field, idx) => {
              return (
                <CompanyListingCard companyData={field} key={idx} handleCardClick={() => handleCardClick(idx)} active={activeCardIndex === idx}/>
              )
            })}
          </div>
          {companyListData.length > 0 && (
              <div className="flex justify-center w-full mt-8">
                <div className="join">
                  <button className={clsx("join-item btn", page === 1 && "btn-disabled")} disabled={page === 1} onClick={handlePageBackwardChange}>«</button>
                  <button className="join-item btn">Page {page}</button>
                  <button className={clsx("join-item btn", page === totalPages && "btn-disabled")} disabled={page === totalPages} onClick={handlePageForwardChange}>»</button>
                </div>
                </div>
          )}
        </section>
        {isLoading && data.length === 0 && <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <span className="loading loading-infinity loading-lg text-black"></span>
          </div>}
            

    </>
  )
}

