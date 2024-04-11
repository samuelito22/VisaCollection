import { BASE_URL } from "@/config"
import { ApiResponse, CompanyDataType, PaginationInfo } from "@/types"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type getCompaniesProps = {
    page: number,
    limit: number,
    q?: string,
    l?: string
}

export const getCompanies = async (page: number, limit: number, q?: string, l?: string): Promise<ApiResponse<{companies:CompanyDataType[]} & PaginationInfo>> => {
    if (!BASE_URL) throw new Error("Base URL is missing, hence API request was a failure.");
    
    const response = await axios.get(`${BASE_URL}/api/v1/companies`, { 
        params: { page, limit, q, l } 
    });

    return response.data
};

export const useGetCompanies = ({page, limit, q, l}: getCompaniesProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<CompanyDataType[]>([]);
    const [totalPages, setTotalPages] = useState<null | number>(null)
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setData([])
            try {
                const result = await getCompanies(page, limit, q, l);
                if (result.status === 'success') {
                    setData(result.data.companies);
                    setTotalPages(result.data.totalPages)
                    setError(null)
                } else {
                    throw Error(result.message)
                }
            } catch (err) {
                console.error(err);
                if (err instanceof Error) setError(err.message);                
            } finally {
                setIsLoading(false);
            }
        };

        if(router.isReady) fetchData();
        
    }, [page, router.isReady]);

    return { isLoading, data, error, totalPages };
};