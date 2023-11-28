import {getMeta} from "@/utilities/meta";

export const metadata = getMeta("Не найдено 404", 'Эта страница не существует, перейдите на основную. 404 error')

function Page() {
    return (
        <>
            <h1>404 Error</h1>
        </>
    )
}
export default Page