import { Pagination } from "@mui/material";

type CustomPaginationProps = {
    totalPages: number,
    page: number,
    handleChange: (_event: React.ChangeEvent<unknown>, value: number) => (void)
}

export default function CustomPagination({ totalPages, page, handleChange }: CustomPaginationProps) {
    return (
        <Pagination count={totalPages} page={page} onChange={handleChange} size="large" sx={{
            '& .MuiPaginationItem-root': {
                color: '#E9EEF5',
            },
            '& .MuiPaginationItem-previousNext': {
                color: '#00B4D8',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: '#00B4D8',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: '#00B4D8',
                },
            },
        }} />
    )
}